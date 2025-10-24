import type { CSteamID } from '../shared';
import type { CBaseProtoBufMsg, CScheduledFunc } from '../shared/interfaces';
import type { EUCMFilePrivacyState } from '../steam-client/Screenshots';
import type { EExportCodec } from '../steam-client/Settings';
import type { EResult } from '../steam-client/shared';

interface CGameRecording_ExportClip_Settings {
  bitrate_kbps?: number;
  width?: number;
  height?: number;
  frames_per_second?: number;
  codec?: EExportCodec;
}

interface CGameRecordingTimelineEvent {
  game_id: string;
  rt_created: number;
  possible_clip: number;
  timeline_id: string;
  entry_id: string;
  timeline_offset_ms: string;
  duration_ms: string;
  marker_icon: string;
  marker_title: string;
  user_marker: boolean;
}

export interface PlaybackDefinition_t {
  m_nDurationMS: number;
  m_nOffsetMS: number;
  m_nTimelineStartMS: number;
  m_strEntryID: string;
  m_strRecordingID: string;
  m_strTimelineID: string;
}

interface RunningTimeline_t {
  m_globalStartMS: number;
  m_metadata: {
    date_recorded: number;
    duration_ms: string;
    game_id: string;
    recordings: any[];
    timeline_id: string;
  };
  m_nPerfCounterOffsetMS: number;
  m_perfCounterStart: number;
  m_runningRecording: any;
}

interface TimelineData_t {
  m_rgEntries: any[];
  m_rgGameModeChanges: any[];
  m_rgPhases: any[];
  m_rgStateDescriptions: any[];
  m_strState: string;
}

interface TimelineLoader {
  m_bInitialized: boolean;
  m_clipID: string;
  m_fnTimelineURLBuilder: (e: string) => string;
  m_gameID: string;
  m_mapRunningTimelines: Map<string, RunningTimeline_t>;
  m_mapTimelineData: Map<string, TimelineData_t>;
  m_rgListeners: any[];
  m_rgTimelineMetadata: any[];
  m_schUpdateRunning: CScheduledFunc;
  m_ulFirstTimelineOffsetMS: number;

  AddEventListener(e: any): any;
  AddEventToTimeline(e: any, t: any, r: any, n: any, i: any, a: any, s: any, o: any): any;
  AddRunningTimeline(e: any, t: any, r: any): any;
  AddRunningTimelineEntry(e: any): any;
  AddUserMarker(e: any, t: any, r: any, n: any): any;
  AdvanceEntriesIndex(e: any): any;
  AdvanceGameModeIndex(e: any): any;
  AdvanceIterator(e: any, t: any): any;
  BInitialized(): any;
  BIsTimelineRunning(e: any): any;
  BRecordingHasZeroOffset(e: any): any;
  ClampGlobalRangeToTimeline(e: any, t: any, r: any): any;
  ConvertGlobaOffsetToRecordingAndRelativeOffset(e: any): any;
  ConvertRecordingOffsetToGlobalOffset(e: any, t: any, r: any): any;
  ConvertRecordingTimeMStoPreTrimTimeMS(e: any, t: any): any;
  CreateGlobalRangeForTimeline(e: any, t: any, r: any, n: any): any;
  CreateTimelineIterator(e: any, t: any): any;
  FindRangeEventsAtGlobalMS(e: any): any;
  FindRecordingAndOffsetForEntry(e: any): Promise<any>;
  FindTimelineAtOffset(e: any, t: any): any;
  FireEvent(e: any, ...t: any): any;
  GenerateClipNameFromTimeline(e: any, t: any, r: any, n: any): Promise<any>;
  GenerateNamePartsFromTimeline(e: any, t: any, r: any, n: any): Promise<any>;
  GetClipID(): any;
  GetClosestNextEntryInGlobalTimeline(e: any): any;
  GetClosestNextEntryInTimeline(e: any, t: any): any;
  GetClosestNextRecordingInGlobalTimeline(e: any): any;
  GetClosestPreviousEntryInGlobalTimeline(e: any): any;
  GetClosestPreviousEntryInTimeline(e: any, t: any): any;
  GetClosestPreviousRecordingInGlobalTimeline(e: any): any;
  GetEndOfRecordingsMS(): any;
  GetFirstRecording(): any;
  GetFirstRecordingOfLastTimelineSession(): any;
  GetGameID(): any;
  GetGlobalOffsetDataForTimeline(e: any, t: any): any;
  GetGlobalTimelineEndMS(): any;
  GetIteratorGameMode(e: any): any;
  GetIteratorTimelineState(e: any): any;
  GetNextRecording(e: any): any;
  GetRunningTimelineDurationMS(e: any): any;
  GetRunningTimelineForRecording(e: any, t: any): any;
  GetStateDescriptionAtGlobalMS(e: any): any;
  GetTimelineData(e: any): any;
  GetTimelineDataOrStartLoad(e: any): any;
  GetTimelineDateMS(e: any, t: any): any;
  GetTimelineMetadata(e: any): any;
  GetTimelineMetadataIndex(e: any): any;
  GetTimelineOffsetFromGlobal(e: any, t: any): any;
  GetTimelineStartBeforeGlobalZeroMS(e: any): any;
  GetTimelines(): any;
  GetTotalRecordingDuration(): any;
  HasIteratorReachedEnd(e: any): any;
  InsertEntryIntoTimelineSorted(e: any, t: any): any;
  IsActiveRecording(e: any): any;
  IsActiveTimeline(e: any): any;
  LoadTimelineData(e: any): Promise<any>;
  LoadTimelinesForBackgroundVideo(e: any): Promise<any>;
  LoadTimelinesForClip(e: any): Promise<any>;
  LoadTimelinesForSharedClip(e: any): any;
  LoadTimelinesForTestClip(e: any, t: any, r: any, n: any): any;
  LoadTimelinesForTestGame(e: any, t: any): any;
  MakeRelativeToTimelineEndIfActive(e: any, t: any): any;
  ProcessTimelineEntries(e: any): any;
  RecordingSessionChanged(e: any): any;
  RemoveTimelineEvent(e: any, t: any): any;
  RemoveUserMarker(e: any, t: any): any;
  RunningTimelineStopped(e: any, t: any): any;
  SetPreloadedTimelines(e: any, t: any, r: any, n: any, i: any): any;
  SetTimelineData(e: any, t: any): any;
  TimelineDeleted(e: any): any;
  UpdateTimelineMetadata(e: any): any;
  UpdateUserMarker(e: any, t: any, r: any): any;
}

interface CActiveTimeline {
  loader: TimelineLoader;
  release(): void;
}

declare class CTimelineEntry {}

declare class CTimelineLoader {
  loader: TimelineLoader;
  nRefCount: number;
}

export interface ClipSummary_t {
  clip_id: string;
  date_clipped: number;
  date_recorded: number;
  duration_ms: string;
  file_size: string;
  game_id: string;
  start_timeline_id: string;
  start_offset_ms: string;
  temporary: boolean;
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_width: number;
}

interface ClipExportProgress_t {
  exportPath: string;
  /** 0 - 1 in percentage */
  progress: number;
  resultStatus: EResult;
}

/**
 * @see CGameRecording_GetAppsWithBackgroundVideo_Response
 */
interface AppWithTimeline_t {
  file_size: string;
  game_id: string;
  is_active: boolean;
  most_recent_start_time: number;
  recording_type: number;
  timeline_duration_seconds: number;
  video_duration_seconds: number;
}

export declare class CGameRecordingStore {
  m_bClipLoadingTriggered: boolean;
  m_bEnoughDiskSpace: boolean;
  m_bLoadingAppsWithBackgroundVideo: boolean;
  m_bLoadingClips: boolean;
  m_clipExportProgress: Map<string, ClipExportProgress_t>;
  m_clips: Map<string, ClipSummary_t>;
  m_clipsGroupByGame: Map<string, ClipSummary_t[]>;
  m_currentlyExportingClip: string | undefined;
  m_fnGetAchievementInfo: (
    appid: number,
    id: string,
  ) => {
    description: string;
    iconURL: string;
    name: string;
  };
  m_mapActiveTimelines: Map<string, CActiveTimeline>;
  m_mapManualRecordingCallbacks: Map<string, any>;
  m_mapSharedClipLoaders: Map<string, TimelineLoader>;
  m_mapTimelineLoaders: Map<string, CTimelineLoader>;
  m_recordingState: { m_gameID: string } | null;
  m_rgAppsWithTimelines: AppWithTimeline_t[];
  m_strLastClipID: string | undefined;
  m_transport: any;

  /**
   * @returns `true` if not enough space on disk for clips.
   */
  BEnoughDiskSpace(): boolean;

  BLoadingAppsWithBackgroundVideo(): boolean;

  /**
   * @returns `true` if clips are loading.
   */
  BLoadingClips(): boolean;

  /**
   * Forces a check for disk space.
   */
  CheckEnoughDiskSpace(): Promise<void>;

  CreateUserTimelineMarkers(
    game_id: string,
    clip_id: string,
    entry: CTimelineEntry,
  ): Promise<{ eResult: EResult; entry_id: string }>;

  /**
   * Deletes a local clip.
   */
  DeleteClip(clip_id: string): Promise<EResult>;

  ExportClip(
    clip_id: string,
    export_mp4_path: string,
    settings: CGameRecording_ExportClip_Settings,
    use_unique_filename: boolean,
  ): Promise<EResult>;

  /**
   * @param appid App ID of the game to get info for.
   * @param id Example: `"TF_BURN_PLAYERSINMINIMUMTIME"` for Team Fortress 2.
   */
  GetAchievementInfo(
    appid: number,
    id: string,
  ): {
    description: string;
    iconURL: string;
    name: string;
  };

  GetAppsWithBackgroundVideo(): AppWithTimeline_t[];

  /**
   * @returns the available disk space in bytes.
   */
  GetAvailableDiskSpace(): Promise<number>;

  /**
   * @returns the clip's title or the localized recorded date.
   */
  GetBestClipTitle(clip_id: string): string;

  /**
   * @returns the clip's export progress or `undefined` if not exporting(-ed).
   */
  GetClipExportProgress(clipID: string): ClipExportProgress_t | undefined;

  /**
   * @returns all clip IDs for a specified game.
   */
  GetClipIDs(gameid: string): string[];

  /**
   * @returns clips for the valid clip IDs.
   */
  GetClipSummaries(clipIDs: string[]): ClipSummary_t[];

  /**
   * @returns all clips for a provided game or `null` if none.
   */
  GetClipSummariesForGame(gameid: string): ClipSummary_t[] | null;

  /**
   * @returns a clip from a provided clip ID.
   */
  GetClipSummary(clipID: string): ClipSummary_t;

  /**
   * @returns the current exporting clip's ID or `null` if not exporting.
   */
  GetCurrentExportingClip(): string | null;

  /**
   * @returns the last clip.
   */
  GetLastClip(): ClipSummary_t | undefined;

  GetRecordingHighlights(gameid: string, createdAfter?: number): Promise<CGameRecordingTimelineEvent[]>;
  GetRecordingState(): this['m_recordingState'];
  GetTimelineLoaderForClip(clip_id: string): CTimelineLoader;
  GetTimelineLoaderForGame(gameid: string): CTimelineLoader;
  GetTimelineLoaderForSharedClip(clip: ClipSummary_t): CTimelineLoader;
  GetTotalDiskSpaceUsage(path: string, t: boolean): Promise<number>;
  InternalAddClipSummary(clip: ClipSummary_t): void;
  LazyLoadClips(): Promise<void>;
  LoadAppsWithBackgroundVideo(): Promise<void>;
  LoadThumbnails(
    recording_id: string,
    clip_id: string,
    timeline_id: string,
    start_offset_us: number[],
    major_axis: number,
    time_precision: boolean,
  ): any;
  // TODO: unused ?
  ManuallyDeleteRecordingForApps(game_ids: string[]): any;
  RegisterManualRecordingCallback(e: string, t: any): () => void;
  ReloadAppsWithBackgroundVideoIfNecessary(e: any): void;
  ReportClipRange(steamid: CSteamID, rangeMethod: any, seconds: any, startRange: any, endRange: any): any;
  ReportClipShare(steamid: CSteamID, shareMethod: any, seconds: any, bytes: number, result: EResult): any;
  SaveClip(
    game_id: string,
    src_clip_id: string,
    name: string,
    start: { timeline_id: string; offset_ms: string },
    end: { timeline_id: string; offset_ms: string },
    temporary: boolean,
    force_thumbnail: boolean,
  ): Promise<{ clipSummary?: ClipSummary_t; result: EResult }>;
  StartRecording(gameid: string): Promise<CBaseProtoBufMsg>;
  StopRecording(gameid: string): Promise<void>;
  SwitchRecordedGame(gameid: string): Promise<CBaseProtoBufMsg>;
  TakeScreenshot(
    game_id: string,
    timeline_id: string,
    timeline_offset_ms: string,
  ): Promise<{ handle?: number; result: EResult }>;
  UpdateClipExportPath(clip_id: string, path: string): void;
  UpdateUserTimelineMarkers(game_id: string, clip_id: string, entry: CTimelineEntry): Promise<EResult>;

  /**
   * Uploads a clip to the Steam community.
   */
  UploadClip(
    clip_id: string,
    title?: string,
    desc?: string,
    visibility?: EUCMFilePrivacyState,
  ): Promise<{ eResult: EResult; strURL: string | undefined }>;
}
