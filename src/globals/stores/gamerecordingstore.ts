import type { CSteamID } from '../shared';
import type { CScheduledFunc } from '../shared/interfaces';
import type { EResult } from '../steam-client/shared';

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

interface CActiveTimeline {
  loader: {
    m_bInitialized: boolean;
    m_clipID: any;
    m_fnTimelineURLBuilder(...args: any[]);
    m_gameID: string;
    m_mapRunningTimelines: Map<string, RunningTimeline_t>;
    m_mapTimelineData: Map<string, TimelineData_t>;
    m_rgListeners: any[];
    m_rgTimelineMetadata: {
      undefined;
    }[];
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
    LoadTimelinesForClip(e): Promise<any>;
    LoadTimelinesForGame(e): Promise<any>;
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
  };

  release();
}

declare class CTimelineLoader {
  loader: {
    m_bInitialized: boolean;
    m_clipID: any;
    m_fnTimelineURLBuilder(...args: any[]);
    m_gameID: string;
    m_mapRunningTimelines: Map<string, RunningTimeline_t>;
    m_mapTimelineData: Map<string, TimelineData_t>;
    m_rgListeners: any[];
    m_rgTimelineMetadata: {
      undefined;
    }[];
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
    LoadTimelinesForClip(e): Promise<any>;
    LoadTimelinesForGame(e): Promise<any>;
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
  };

  nRefCount: number;
}

export declare class CGameRecordingStore {
  m_bClipLoadingTriggered: boolean;
  m_bEnoughDiskSpace: boolean;
  m_bLoadingAppsWithTimelines: boolean;
  m_bLoadingClips: boolean;
  m_clipExportProgress: Map<any, any>;
  m_clips: Map<any, any>;
  m_clipsGroupByGame: Map<any, any>;
  m_currentlyExportingClip: any;
  m_fnGetAchievementInfo(...args: any[]);
  m_mapActiveTimelines: Map<string, CActiveTimeline>;
  m_mapClipLoaders: Map<any, any>;
  m_mapManualRecordingCallbacks: Map<any, any>;
  m_mapSharedClipLoaders: Map<any, any>;
  m_mapTimelineLoaders: Map<string, CTimelineLoader>;
  m_recordingState: any;
  m_rgAppsWithTimelines: {
    file_size: string;
    game_id: string;
    is_active: boolean;
    most_recent_start_time: number;
    recording_type: number;
    timeline_duration_seconds: number;
    video_duration_seconds: number;
  }[];
  m_strLastClipID: any;
  m_transport: {
    MakeReady(...args: any[]);
    SendMsg(e, t, r);
    SendNotification(e, t);
  };

  BEnoughDiskSpace(): boolean;
  BLoadingClips(): boolean;
  CheckEnoughDiskSpace(): Promise<void>;
  GetAppsWithTimelines();
  GetAppsWithTimelinesWithVideo();

  /**
   * @returns the available disk space in bytes.
   */
  GetAvailableDiskSpace(): Promise<number>;
  GetBestClipTitle(e);
  GetClipExportProgress(e);
  GetClipIDs(e);
  GetClipSummaries(e);
  GetClipSummariesForGame(e);
  GetClipSummary(e);
  GetCurrentExportingClip();
  GetLastClip();
  GetRecordingState();
  GetTotalDiskSpaceUsage(path: string, t: boolean): Promise<number>;
  Init(e, t): Promise<any>;
  InternalAddClipSummary(e);
  LazyLoadClips(): Promise<any>;
  LoadAppsWithTimelines(): Promise<any>;
  ManuallyDeleteRecordingForApps(e);
  ReloadAppsWithTimelinesIfNeeded(e);
  ReportClipRange(steamid: CSteamID, rangeMethod: any, seconds: any, startRange: any, endRange: any): any;
  ReportClipShare(steamid: CSteamID, shareMethod: any, seconds: any, bytes: number, result: EResult): any;
}
