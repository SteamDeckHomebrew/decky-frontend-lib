export interface GameNotes {
    DeleteImage(param0: any): any;

    DeleteNotes: any;
    /*
        FilenameForNotes(e) {
        return "appid" in e ? `notes_${Number(e.appid)}` : `notes_shortcut_${h(e.shortcut)}`
    }
    DirectoryForNoteImages(e) {
        return "appid" in e ? `notes_${Number(e.appid)}_images/` : `notes_shortcut_${h(e.shortcut)}_images/`
    }
     */
    // {"result":1,"notes":"<escaped json>"}
    // <escaped json> example: {"notes":[{"id":"lmuudzqn","appid":1716740,"ordinal":0,"time_created":1695401684,"time_modified":1695403395,"title":"Old Earth Cuisine 1:","content":"[h1]Old Earth Cuisine 1:[/h1][list][*][p]Red Meat[/p][/*][/list][h1]Beverage Development 2:[/h1][list][*][p]Tranquilitea Sunray[/p][/*][/list][p][/p]"}]}
    GetNotes(filenameForNotes: string, directoryForNoteImages: string): Promise<any>;

    GetNotesMetadata: any;
    GetNumNotes: any;
    GetQuota: any;

    IterateNotes(appId: number, length: number): any; // Results array of {"result":1,"filename":"","filesize":0,"timestamp":0}
    ResolveSyncConflicts: any;

    SaveNotes(filenameForNotes: string, param1: string): Promise<any>; // param1 - notes like escaped json in GetNotes
    SyncToClient(): Promise<any>;

    SyncToServer(): Promise<any>;

    UploadImage: any;
}