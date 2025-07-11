import type { SpewType_t } from '../steam-client/Console';
import type { Unregisterable } from '../steam-client/shared';

export interface ConsoleSpewInfo {
  text: string;
  type: SpewType_t;
}

export interface ConsoleSpew {
  /**
   * Zero-indexed line number.
   */
  line: number;

  /**
   * Spew info.
   */
  spew: ConsoleSpewInfo[];

  /**
   * Time at which this got spewed out.
   */
  time: Date;
}

export interface ConsoleStore {
  m_listenHandle: Unregisterable;
  m_rgCommandHistory: string[];
  m_rgConsoleSpew: ConsoleSpew[];

  /**
   * Adds text to the console.
   *
   * @param text Text to add. Must include `\n` at the end for a newline if `type` isn't "input".
   * @param type Text type. Responsible for colors.
   */
  AddSpewLine(text: string, type?: SpewType_t): void;

  /**
   * Resets the console history.
   */
  Reset(): void;

  /**
   * Starts listening for console output.
   */
  StartListening(): void;

  /**
   * Stops listening for console output.
   */
  StopListening(): void;
}
