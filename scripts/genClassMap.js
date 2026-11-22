import { readdir, writeFile } from 'fs/promises';

import oldClasses from './data/oldClasses.json' with { type: 'json' };
import hardcoded from './data/hardcoded.json' with { type: 'json' };

const data = (
  await import(`./data/mappings/${process.argv[2]}.json`, {
    with: { type: 'json' },
  })
).default;

const { map, multi } = data;

let classes = {};
let classesStub = {};

let skip = ['appDetailsHeaderClasses', 'gamepadUIClasses', 'gamepadTabbedPageClasses', 'gamepadContextMenuClasses'];

for (let classModName in oldClasses) {
  if (skip.includes(classModName)) continue;
  const classMod = oldClasses[classModName];
  classes[classModName] = {};
  classesStub[classModName] = {};
  for (let className in classMod) {
    const oldClass = classMod[className];
    let newClass = hardcoded[classModName]?.[className] || map[oldClass];
    if (!newClass && multi[oldClass]) {
      newClass = multi[oldClass].join(" ");
    }
    if (newClass) {
      console.log(`${className} -> ${newClass}`);
      classes[classModName][className] = newClass;
      classesStub[classModName][className] = '';
    } else {
      console.log(`${className}: not found`);
    }
  }
}

const classString = JSON.stringify(classes, null, 2);
await writeFile(`./data/generated/${process.argv[2]}.json`, classString);

const dir = await readdir('./data/generated');
const versions = dir
  .filter((f) => f != 'index.ts')
  .map((f) => parseInt(f.replace('json', '')))
  .sort((a, b) => a - b); // ascending

console.log('Supported:', versions);

let allMappings = {};
for (let version of versions) {
  const dta = (await import(`./data/generated/${process.argv[2]}.json`, {
    with: { type: 'json' },
  })).default;
  allMappings[version] = dta;
}

let importerStr = `// GENERATED FILE DO NOT EDIT
declare global {
  interface Window {
    CLSTAMP: string;
  }
}
`;

for (let classModName in classesStub) {
  importerStr += `export let ${classModName} = ${JSON.stringify(classesStub[classModName], null, 2)};\n\n`;
}

importerStr += `
const mappings = ${JSON.stringify(allMappings, null, 2)};
const ver = parseInt(window.CLSTAMP);
// @ts-expect-error
const targetVer = Object.keys(mappings).map(k => parseInt(k)).findLast(v => v <= ver);
// @ts-expect-error
const data = mappings[targetVer.toString()];
`;

for (let classModName in classesStub) {
  importerStr += `${classModName} = data["${classModName}"];\n`;
}

await writeFile(`../src/utils/classData/index.ts`, importerStr);
