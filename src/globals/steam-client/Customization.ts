export interface Customization {
    /**
     * Generates thumbnails for local startup movies.
     * @param mode Steam passes 2 when refreshing startup movies.
     */
    GenerateLocalStartupMoviesThumbnails(mode: number): Promise<number>;

    GetDownloadedStartupMovies(category: "startupmovies" | string): Promise<StartupMovie[]>;

    GetLocalStartupMovies(): Promise<StartupMovie[]>;
}

export interface StartupMovie {
    strMovieURL: string;
}
