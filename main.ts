import { WechatyBuilder } from 'wechaty'
import { OnReceiveMsg } from './src/handler/messageHandler.js'
import { OnLogin, OnScan } from './src/handler/login.js'
import { loadConfig } from "./src/store/config.js";

loadConfig()

const wechaty = WechatyBuilder.build()
wechaty
    .on('scan', (qrcode, status) => OnScan(qrcode, status))
    .on('login', user => OnLogin(user))
    .on('message', async message => await OnReceiveMsg(message))
    .on('error', error => console.error(error))
wechaty.start()