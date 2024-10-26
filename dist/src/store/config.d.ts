export declare var Config: ConfigInterface;
export declare function loadConfig(path?: string, refreshCfg?: boolean): ConfigInterface;
export declare function saveConfig(path?: string, cfg?: ConfigInterface): void;
export interface ConfigInterface {
    admins?: string[];
    rooms?: string[];
}
//# sourceMappingURL=config.d.ts.map