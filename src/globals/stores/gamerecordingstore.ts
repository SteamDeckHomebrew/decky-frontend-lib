import type { CSteamID } from '../shared';
import type { CScheduledFunc } from '../shared/interfaces';
import type { EResult } from '../steam-client/shared';

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
  m_clipID: any;
  m_fnTimelineURLBuilder(...args: any[]);
  m_gameID: string;
  m_mapRunningTimelines: Map<string, RunningTimeline_t>;
  m_mapTimelineData: Map<string, TimelineData_t>;
  m_rgListeners: any[];
  m_rgTimelineMetadata: any[];
  m_schUpdateRunning: CScheduledFunc;
  m_ulFirstTimelineOffsetMS: number;

  AddEventListener(e);
  AddEventToTimeline(e, t, r, n, i, a, s, o);
  AddRunningTimeline(e, t, r);
  AddRunningTimelineEntry(e);
  AddUserMarker(e, t, r, n);
  AdvanceEntriesIndex(e);
  AdvanceGameModeIndex(e);
  AdvanceIterator(e, t);
  BInitialized();
  BIsTimelineRunning(e);
  BRecordingHasZeroOffset(e);
  ClampGlobalRangeToTimeline(e, t, r);
  ConvertGlobaOffsetToRecordingAndRelativeOffset(e);
  ConvertRecordingOffsetToGlobalOffset(e, t, r);
  ConvertRecordingTimeMStoPreTrimTimeMS(e, t);
  CreateGlobalRangeForTimeline(e, t, r, n);
  CreateTimelineIterator(e, t);
  FindRangeEventsAtGlobalMS(e);
  FindRecordingAndOffsetForEntry(e): Promise<any>;
  FindTimelineAtOffset(e, t);
  FireEvent(e, ...t);
  GenerateClipNameFromTimeline(e, t, r, n): Promise<any>;
  GenerateNamePartsFromTimeline(e, t, r, n): Promise<any>;
  GetClipID();
  GetClosestNextEntryInGlobalTimeline(e);
  GetClosestNextEntryInTimeline(e, t);
  GetClosestNextRecordingInGlobalTimeline(e);
  GetClosestPreviousEntryInGlobalTimeline(e);
  GetClosestPreviousEntryInTimeline(e, t);
  GetClosestPreviousRecordingInGlobalTimeline(e);
  GetEndOfRecordingsMS();
  GetFirstRecording();
  GetFirstRecordingOfLastTimelineSession();
  GetGameID();
  GetGlobalOffsetDataForTimeline(e, t);
  GetGlobalTimelineEndMS();
  GetIteratorGameMode(e);
  GetIteratorTimelineState(e);
  GetNextRecording(e);
  GetRunningTimelineDurationMS(e);
  GetRunningTimelineForRecording(e, t);
  GetStateDescriptionAtGlobalMS(e);
  GetTimelineData(e);
  GetTimelineDataOrStartLoad(e);
  GetTimelineDateMS(e, t);
  GetTimelineMetadata(e);
  GetTimelineMetadataIndex(e);
  GetTimelineOffsetFromGlobal(e, t);
  GetTimelineStartBeforeGlobalZeroMS(e);
  GetTimelines();
  GetTotalRecordingDuration();
  HasIteratorReachedEnd(e);
  InsertEntryIntoTimelineSorted(e, t);
  IsActiveRecording(e);
  IsActiveTimeline(e);
  LoadTimelineData(e): Promise<any>;
  LoadTimelinesForBackgroundVideo(e): Promise<any>;
  LoadTimelinesForClip(e): Promise<any>;
  LoadTimelinesForSharedClip(e);
  LoadTimelinesForTestClip(e, t, r, n);
  LoadTimelinesForTestGame(e, t);
  MakeRelativeToTimelineEndIfActive(e, t);
  ProcessTimelineEntries(e);
  RecordingSessionChanged(e);
  RemoveTimelineEvent(e, t);
  RemoveUserMarker(e, t);
  RunningTimelineStopped(e, t);
  SetPreloadedTimelines(e, t, r, n, i);
  SetTimelineData(e, t);
  TimelineDeleted(e);
  UpdateTimelineMetadata(e);
  UpdateUserMarker(e, t, r);
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
  m_fnGetAchievementInfo: (e: any, t: any) => any;
  m_mapActiveTimelines: Map<string, CActiveTimeline>;
  m_mapManualRecordingCallbacks: Map<string, any>;
  m_mapSharedClipLoaders: Map<string, TimelineLoader>;
  m_mapTimelineLoaders: Map<string, CTimelineLoader>;
  m_recordingState: { m_gameID: string } | null;
  m_rgAppsWithTimelines: AppWithTimeline_t[];
  m_strLastClipID: string | undefined;
  m_transport: {
    MakeReady(...args: any[]);
    SendMsg(e, t, r);
    SendNotification(e, t);
  };

  BEnoughDiskSpace(): boolean;
  BLoadingAppsWithBackgroundVideo(): boolean;
  BLoadingClips(): boolean;
  CheckEnoughDiskSpace(): Promise<void>;
  CreateUserTimelineMarkers(game_id: string, clip_id: string, entry: CTimelineEntry): any;
  DeleteClip(clip_id: string): Promise<EResult>;
  ExportClip(clip_id: string, export_mp4_path: string, settings: any, use_unique_filename: any): any;
  GetAchievementInfo(e: any, t: any): any;
  GetAppsWithBackgroundVideo(): AppWithTimeline_t[];

  /**
   * @returns the available disk space in bytes.
   */
  GetAvailableDiskSpace(): Promise<number>;
  GetBestClipTitle(clip: ClipSummary_t): string;
  GetClipExportProgress(clipID: string): ClipExportProgress_t;
  GetClipIDs(gameid: string): string[];
  GetClipSummaries(clipIDs: string[]): ClipSummary_t[];
  GetClipSummariesForGame(gameid: string): ClipSummary_t[] | null;
  GetClipSummary(clipID: string): ClipSummary_t;
  GetCurrentExportingClip(): string | null;
  GetLastClip(): ClipSummary_t | undefined;
  GetRecordingHighlights(e, t): Promise<any>;
  GetRecordingState(): this['m_recordingState'];
  GetTimelineLoaderForClip(clip_id: string): CTimelineLoader;
  GetTimelineLoaderForGame(gameid: string): CTimelineLoader;
  GetTimelineLoaderForSharedClip;
  GetTotalDiskSpaceUsage(path: string, t: boolean): Promise<number>;
  InternalAddClipSummary(clip: ClipSummary_t): void;
  LazyLoadClips(): Promise<void>;
  LoadAppsWithBackgroundVideo(): Promise<any>;
  LoadThumbnails(
    recording_id: string,
    clip_id: string,
    timeline_id: string,
    start_offset_us: any[],
    major_axis: any,
    time_precision: boolean,
  ): any;
  // TODO: unused ?
  ManuallyDeleteRecordingForApps(e: any): any;
  RegisterManualRecordingCallback;
  ReloadAppsWithBackgroundVideoIfNecessary(e);
  RemoveUserTimelineMarkers;
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
  StartRecording(gameid: string): any;
  StopRecording(gameid: string): any;
  SwitchRecordedGame(gameid: string): any;
  TakeScreenshot(
    game_id: string,
    timeline_id: string,
    timeline_offset_ms: string,
  ): Promise<{ handle?: number; result: EResult }>;
  UpdateClipExportPath(clip_id: string, path: string): void;
  UpdateUserTimelineMarkers(game_id: string, clip_id: string, entry: CTimelineEntry): Promise<EResult>;
  UploadClip(
    clip_id: string,
    title: string,
    desc: string,
    /** @todo enum? */
    visibility: number,
  ): Promise<{ eResult: EResult; strURL: string }>;
}
