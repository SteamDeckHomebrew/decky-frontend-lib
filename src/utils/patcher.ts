// TODO: implement storing patches as an option so we can offer unpatchAll selectively
// Return this in a replacePatch to call the original method (can still modify args).
export let callOriginal = Symbol('DECKY_CALL_ORIGINAL');

export interface PatchOptions {
  singleShot?: boolean;
}

type GenericPatchHandler = (args: any[], ret?: any) => any;

export interface Patch {
  original: Function;
  property: string;
  object: any;
  patchedFunction: any;
  hasUnpatched: boolean;
  handler: GenericPatchHandler;

  unpatch: () => void;
}

// let patches = new Set<Patch>();

export function beforePatch(
  object: any,
  property: string,
  handler: (args: any[]) => any,
  options: PatchOptions = {},
): Patch {
  const orig = object[property];
  object[property] = function (...args: any[]) {
    handler.call(this, args);
    const ret = patch.original.call(this, ...args);
    if (options.singleShot) {
      patch.unpatch();
    }
    return ret;
  };
  const patch = processPatch(object, property, handler, object[property], orig);
  return patch;
}

export function afterPatch(
  object: any,
  property: string,
  handler: (args: any[], ret: any) => any,
  options: PatchOptions = {},
): Patch {
  const orig = object[property];
  object[property] = function (...args: any[]) {
    let ret = patch.original.call(this, ...args);
    ret = handler.call(this, args, ret);
    if (options.singleShot) {
      patch.unpatch();
    }
    return ret;
  };
  const patch = processPatch(object, property, handler, object[property], orig);
  return patch;
}

export function replacePatch(
  object: any,
  property: string,
  handler: (args: any[]) => any,
  options: PatchOptions = {},
): Patch {
  const orig = object[property];
  object[property] = function (...args: any[]) {
    const ret = handler.call(this, args);
    if (ret == callOriginal) return patch.original.call(this, ...args);
    if (options.singleShot) {
      patch.unpatch();
    }
    return ret;
  };
  const patch = processPatch(object, property, handler, object[property], orig);
  return patch;
}

function processPatch(
  object: any,
  property: any,
  handler: GenericPatchHandler,
  patchedFunction: any,
  original: any,
): Patch {
  // Assign all props of original function to new one
  Object.assign(object[property], original);
  // Allow toString webpack filters to continue to work
  object[property].toString = () => original.toString();

  // HACK: for compatibility, remove when all plugins are using new patcher
  Object.defineProperty(object[property], '__deckyOrig', {
    get: () => patch.original,
    set: (val: any) => (patch.original = val),
  });

  // Build a Patch object of this patch
  const patch: Patch = {
    object,
    property,
    handler,
    patchedFunction,
    original,
    hasUnpatched: false,
    unpatch: () => unpatch(patch),
  };

  object[property].__deckyPatch = patch;

  return patch;
}

function unpatch(patch: Patch): void {
  const { object, property, handler, patchedFunction, original } = patch;
  if (patch.hasUnpatched) throw new Error('Function is already unpatched.');
  let realProp = property;
  let realObject = object;
  console.debug('[Patcher] unpatching', {
    realObject,
    realProp,
    object,
    property,
    handler,
    patchedFunction,
    original,
    isEqual: realObject[realProp] === patchedFunction,
  });

  // If another patch has been applied to this function after this one, move down until we find the correct patch
  while (realObject[realProp] && realObject[realProp] !== patchedFunction) {
    realObject = realObject[realProp].__deckyPatch;
    realProp = 'original';
    console.debug('[Patcher] moved to next', {
      realObject,
      realProp,
      object,
      property,
      handler,
      patchedFunction,
      original,
      isEqual: realObject[realProp] === patchedFunction,
    });
  }

  realObject[realProp] = realObject[realProp].__deckyPatch.original;

  patch.hasUnpatched = true;
  console.debug('[Patcher] unpatched', {
    realObject,
    realProp,
    object,
    property,
    handler,
    patchedFunction,
    original,
    isEqual: realObject[realProp] === patchedFunction,
  });
}
