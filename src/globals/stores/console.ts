import type { Unregisterable } from '../shared/interfaces';

export type ConsoleSpewType = 'error' | 'info' | 'input';

export interface ConsoleSpewInfo {
  text: string;
  type: string;
}

export interface ConsoleSpew {
  /**
   * Zero-indexed line number.
   */
  line: number;

  spew: ConsoleSpewInfo[];
  time: Date;
}

export interface ConsoleStore {
  m_listenHandle: Unregisterable;
  m_rgCommandHistory: string[];
  m_rgConsoleSpew: ConsoleSpew[];

  /**
   * Add text to the console.
   *
   * @param text Text. Must include `\n` at the end for a newline.
   * @param type Text type.
   */
  AddSpewLine(text: string, type: ConsoleSpewType): void;

  Init(): void;
  Reset(): void;
  StartListening(): void;
  StopListening(): void;
}
