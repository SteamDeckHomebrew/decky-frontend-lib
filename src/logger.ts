const bgStyle1 = 'background: #16a085; color: black;';

export const log = (name: string, ...args: any[]) => {
  console.log(
    `%c @decky/ui %c ${name} %c`,
    bgStyle1,
    'background: #1abc9c; color: black;',
    'background: transparent;',
    ...args,
  );
};

export const group = (name: string, ...args: any[]) => {
  console.group(
    `%c @decky/ui %c ${name} %c`,
    bgStyle1,
    'background: #1abc9c; color: black;',
    'background: transparent;',
    ...args,
  );
};

export const groupEnd = (name: string, ...args: any[]) => {
  console.groupEnd();
  if (args?.length > 0)
    console.log(
      `^ %c @decky/ui %c ${name} %c`,
      bgStyle1,
      'background: #1abc9c; color: black;',
      'background: transparent;',
      ...args,
    );
};

export const debug = (name: string, ...args: any[]) => {
  console.debug(`%c @decky/ui %c ${name} %c`, bgStyle1, 'background: #1abc9c; color: black;', 'color: blue;', ...args);
};

export const warn = (name: string, ...args: any[]) => {
  console.warn(`%c @decky/ui %c ${name} %c`, bgStyle1, 'background: #ffbb00; color: black;', 'color: blue;', ...args);
};

export const error = (name: string, ...args: any[]) => {
  console.error(`%c @decky/ui %c ${name} %c`, bgStyle1, 'background: #FF0000;', 'background: transparent;', ...args);
};

class Logger {
  constructor(private name: string) {
    this.name = name;
  }

  log(...args: any[]) {
    log(this.name, ...args);
  }

  debug(...args: any[]) {
    debug(this.name, ...args);
  }

  warn(...args: any[]) {
    warn(this.name, ...args);
  }

  error(...args: any[]) {
    error(this.name, ...args);
  }

  group(...args: any[]) {
    group(this.name, ...args);
  }

  groupEnd(...args: any[]) {
    groupEnd(this.name, ...args);
  }
}

export default Logger;
