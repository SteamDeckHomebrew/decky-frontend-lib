export interface Stats {
    /**
     * Records an activation event for a Steam UI section.
     *
     * Known sections include `AppDetailsReviewSection`, `LibraryReviewSpotlight`,
     * `Showcases`, and `CloudStorage.Download`.
     */
    RecordActivationEvent(section: string, eventName: string): void;

    /**
     * Records that Steam UI displayed a measurable item.
     */
    RecordDisplayEvent(inGamepadUI: boolean, section: string, value: string): void;
}
