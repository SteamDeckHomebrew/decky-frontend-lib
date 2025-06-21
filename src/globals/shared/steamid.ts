import type { ESteamRealm } from './enums';

export enum EAccountType {
  Invalid,
  Individual,
  Multiseat,
  GameServer,
  AnonGameServer,
  Pending,
  ContentServer,
  Clan,
  Chat,
  ConsoleUser,
  AnonUser,
  Max,
}

export interface CSteamID {
  m_ulSteamID: {
    high: number;
    low: number;
    unsigned: boolean;
  };

  BIsClanAccount(): boolean;
  BIsIndividualAccount(): boolean;
  BIsValid(): boolean;

  /**
   * @returns SteamID 64
   */
  ConvertTo64BitString(): string;

  GetAccountID(): number;
  GetAccountType(): EAccountType;
  GetInstance(): number;
  GetUniverse(): ESteamRealm;

  /**
   * @returns SteamID 3
   */
  Render(): string;

  SetAccountID(value: number): void;
  SetAccountType(value: number): void;
  SetFromComponents(accountId: number, instance: number, accountType: EAccountType, universe: ESteamRealm): void;
  SetInstance(value: number): void;
  SetUniverse(value: ESteamRealm): void;
}
