export * from './patcher';
export * from './react';

export function joinClassNames(...classes: string[]): string {
  return classes.join(' ');
}

export function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function waitForPredicate(retries: number, delay: number, predicate: () => (boolean | Promise<boolean>)): Promise<boolean> {
  const waitImpl = async (): Promise<boolean> => {
    try {
      let tries = retries + 1;
      while (tries-- !== 0) {
        if (await predicate()) {
          return true;
        }

        if (tries > 0) {
          await sleep(delay);
        }
      }
    } catch (error) {
      console.error(error);
    }

    return false;
  };

  return await waitImpl();
}

/**
 * Finds the SP window, since it is a render target as of 10-19-2022's beta
 */
export function findSP(): Window {
  // old (SP as host)
  if (document.title == 'SP') return window;
  // new (SP as popup)
  return FocusNavController.m_ActiveContext.m_rgGamepadNavigationTrees.find((x: any) => x.m_ID == 'root_1_').Root
    .Element.ownerDocument.defaultView;
}
