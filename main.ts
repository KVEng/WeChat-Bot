import { WechatyBuilder } from 'wechaty'
import { OnReceiveMsg } from './handler/messageHandler'
import { OnLogin, OnScan } from './handler/login'

const wechaty = WechatyBuilder.build()
wechaty
    .on('scan', (qrcode, status) => OnScan(qrcode, status))
    .on('login', user => OnLogin(user))
    .on('message', message => OnReceiveMsg(message))
    .on('error', error => console.error(error))
wechaty.start()