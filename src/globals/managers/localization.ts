import type { ESteamRealm } from '../shared/enums';
import type { CCallbackList } from '../shared/interfaces';

export interface LocalizationManager {
  m_cbkTokensChanged: CCallbackList;
  m_mapFallbackTokens: Map<string, string>;
  m_mapTokens: Map<string, string>;
  m_rgLocalesToUse: string[];

  /**
   * Adds `dict` to {@link m_mapTokens}
   * and adds `fallback` to {@link m_mapFallbackTokens}.
   */
  AddTokens(dict: any, fallback?: any): void;

  /**
   * @returns `true` if the string looks like a token (starts with a "#"),
   * `false` otherwise.
   */
  BLooksLikeToken(value: string): boolean;

  GetELanguageFallbackOrder(realm?: ESteamRealm): any[]; // ELanguage
  GetPreferredLocales(): string[];
  GetTokensChangedCallbackList(): CCallbackList;

  /**
   * Localizes a token.
   *
   * @returns a localized string.
   */
  LocalizeString(token: string, failSilently?: boolean): string;

  /**
   * Like {@link LocalizeString}, but falls back to the given string
   * if not found.
   *
   * @returns a localized or the given string.
   */
  LocalizeIfToken(token: string, failSilently?: boolean): string;

  /**
   * Like {@link LocalizeString}, but uses fallback tokens instead.
   *
   * @returns a localized string.
   */
  LocalizeStringFromFallback(token: string): string;

  /**
   * Sets {@link m_rgLocalesToUse}.
   */
  SetPreferredLocales(locales: string[]): void;
}
