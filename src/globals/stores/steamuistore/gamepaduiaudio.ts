import type { CFocusNavigationContext } from '../../managers';
import type { ESteamUISound, EUIMode, SubscribableValue, Unsubscribable } from '../../shared';
import type { FocusChangeEvent } from '../../steam-client/system/UI';

/**
 * Steam UI sound file names relative to `https://steamloopback.host/sounds`.
 *
 * Generated with:
 * ```js
 * fs.readdirSync(`${os.homedir()}/.steam/steamui/sounds`).map((e) => `'${e}'`).join('|');
 * ```
 */
type NavAudioFile_t =
  | 'bumper_end.wav'
  | 'camera1.wav'
  | 'confirmation_negative.wav'
  | 'confirmation_positive.wav'
  | 'deck_ui_achievement_toast.wav'
  | 'deck_ui_bumper_end_02.wav'
  | 'deck_ui_default_activation.wav'
  | 'deck_ui_hide_modal.wav'
  | 'deck_ui_into_game_detail.wav'
  | 'deck_ui_launch_game.wav'
  | 'deck_ui_message_toast.wav'
  | 'deck_ui_misc_01.wav'
  | 'deck_ui_misc_08.wav'
  | 'deck_ui_misc_10.wav'
  | 'deck_ui_navigation.wav'
  | 'deck_ui_out_of_game_detail.wav'
  | 'deck_ui_show_modal.wav'
  | 'deck_ui_side_menu_fly_in.wav'
  | 'deck_ui_side_menu_fly_out.wav'
  | 'deck_ui_slider_down.wav'
  | 'deck_ui_slider_up.wav'
  | 'deck_ui_switch_toggle_off.wav'
  | 'deck_ui_switch_toggle_on.wav'
  | 'deck_ui_tab_transition_01.wav'
  | 'deck_ui_tile_scroll.wav'
  | 'deck_ui_toast.wav'
  | 'deck_ui_typing.wav'
  | 'deck_ui_volume.wav'
  | 'desktop_toast_default.wav'
  | 'desktop_toast_short.wav'
  | 'pop_sound.wav'
  | 'recording_highlight.wav'
  | 'recording_start.wav'
  | 'recording_stop.wav'
  | 'steam_at_mention.m4a'
  | 'steam_chatroom_notification.m4a'
  | 'timer_expired_alarm.wav'
  | 'ui_steam_message_old_smooth.m4a'
  | 'ui_steam_smoother_friend_join.m4a'
  | 'ui_steam_smoother_friend_online.m4a';

declare class CGamepadUIAudioPlaybackManager {
  m_Cancelled: boolean;
  m_Manager: any;
  m_RepeatCount: number;
  m_Source: BaseAudioContext | undefined;
  m_TimesPlayed: number;
  m_URL: string;
  m_cbPlaybackFinished: (() => void) | null;

  NotifyPlaybackFinished(): void;
  OnFailure(): void;
  OnPlaybackEnded(): void;

  /**
   * Registers a function to be executed when the audio file finishes playback.
   *
   * @param callback The function to be executed on finish.
   */
  RegisterOnPlaybackFinished(callback: () => void): void;

  /**
   * Stops the audio file playback.
   */
  StopPlayback(): void;

  get url(): string;
}

export declare class CGamepadUIAudioStore {
  m_AudioPlaybackManager: CGamepadUIAudioPlaybackManager;
  m_bCanPlaySound: boolean;
  m_currentlyFocusedAppid: SubscribableValue<number>;
  m_fnGetUIMode: () => EUIMode;
  /** {@link setTimeout} handle */
  m_pendingSoundHandle: number | null;
  m_pendingSoundType: ESteamUISound;

  OnFocusChangeEvent(ev: FocusChangeEvent): void;

  OnGamepadFocusChanged(e: number, t: any, r: any | undefined): void;

  OnUnhandledButtonDownEvent(ev: GamepadEvent): void;

  /**
   * Like {@link PlayNavSound}, but using a URL path instead.
   *
   * @param url The URL path to play.
   */
  PlayAudioURL(sound: `/sounds/${NavAudioFile_t}`): CGamepadUIAudioPlaybackManager;

  /**
   * Plays a Steam UI sound.
   *
   * @param type The sound to play.
   */
  PlayNavSound(type: ESteamUISound): void;

  PlayNavSoundInternal(type: ESteamUISound): void;

  RegisterFocusNavContext(context: CFocusNavigationContext): Unsubscribable;

  get AudioPlaybackManager(): CGamepadUIAudioPlaybackManager;
}
