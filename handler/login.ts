import { ScanStatus } from "wechaty";
import { ContactSelfInterface } from "wechaty/impls";
import qrTerm from 'qrcode-terminal';

export function OnScan(qrcode: string, status: ScanStatus) {
    console.log(`Scan QR Code to login: ${status}\n${qrcode}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`)
    qrTerm.generate(qrcode, { small: true });
}

export function OnLogin(user: ContactSelfInterface) {
    console.log(`User ${user} logged in`)
}
