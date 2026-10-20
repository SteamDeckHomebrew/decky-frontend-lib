import type { ESteamRealm } from '../shared/enums';
import type { CCallbackList } from '../shared/interfaces';
import type { ELanguage } from '../steam-client/Settings';

export interface CLocalizationManager {
  m_cbkTokensChanged: CCallbackList;
  m_mapFallbackTokens: Map<string, string>;
  m_mapTokens: Map<string, string>;
  m_rgLocalesToUse: string[];

  /**
   * Adds the provided list of tokens to the token map.
   */
  AddTokens(dict: Record<string, string>, fallback?: Record<string, string>): void;

  /**
   * @returns `true` if the string looks like a token (starts with a "#").
   */
  BLooksLikeToken(value: string): boolean;

  GetELanguageFallbackOrder(realm?: ESteamRealm): ELanguage[];

  /**
   * @returns user's preferred locales.
   */
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
   * Sets user's preferred locales.
   */
  SetPreferredLocales(locales: string[]): void;
}
