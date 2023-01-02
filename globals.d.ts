declare global {
    interface Window {
        SP_REACT: typeof React;
        LocalizationManager: {
            m_mapTokens: Map<string, string>;
            m_mapFallbackTokens: Map<string, string>;
            m_rgLocalesToUse: string[];
        };
    }
}