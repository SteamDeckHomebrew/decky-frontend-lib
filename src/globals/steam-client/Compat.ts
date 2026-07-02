/**
 * Compatibility helpers exposed by Steam's shared JS context.
 */
export interface Compat {
    /**
     * Checks whether boot protection is enabled for a compatibility target.
     *
     * Steam currently validates two arguments for this method, but steamui does
     * not reference their concrete shapes.
     */
    CheckBootProtectionEnabled(target: unknown, options: unknown): Promise<boolean>;
}
