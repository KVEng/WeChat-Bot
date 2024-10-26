import fs from 'fs'

export var Config = {} as ConfigInterface

export function loadConfig(path: string = "", refreshCfg: boolean = true) : ConfigInterface {
    // read file
    const fileContent = fs.readFileSync(path, 'utf-8')
    const jo = JSON.parse(fileContent)
    if (refreshCfg) Config = jo
    return jo
}

export function saveConfig(path: string = "", cfg: ConfigInterface = Config) {
    fs.writeFileSync(path, JSON.stringify(cfg, null, 4))
}

export interface ConfigInterface {
    admins?: string[]
    rooms?: string[]
}