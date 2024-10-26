import 'wechaty'
import { Room } from 'wechaty';
import { MessageInterface } from 'wechaty/impls';
import { Config, saveConfig } from '../store/config';

function isOldAge(msg: MessageInterface) {
    return msg.age() > 1 * 60 // over 1 min
}

export async function OnReceiveMsg(msg: MessageInterface) {
    if (isOldAge(msg)) { // ignore aged message
        return;
    }

    if (!msg.mentionSelf()) return;

    const room = msg.room()
    if (room) { await OnRecieveRoomMsg(msg, room); return; }
}

export async function OnRecieveRoomMsg(msg: MessageInterface, room: Room) {
    const fromId = msg.from()?.id
    if (!fromId) return;
    if (Config.admins?.includes(fromId)) {
        await OnAdminMsg(msg, room)
        return;
    }

}

export async function OnAdminMsg(msg: MessageInterface, room: Room) {
    const roomId = room.id
    const txt = await msg.mentionText()
    if (!txt) return;
    // if (txt.includes('/register')) {
    //     const mentionList = msg.mentionList()
    //     if (mentionList.length < 1) return;
    //     const mentionId = mentionList[0].id
    //     if (!mentionId) return;
    //     if (Config.admins?.includes(mentionId)) return;
    //     Config.admins?.push(mentionId)
    // }
    if (txt.includes('/register')) {
        Config.rooms = Config.rooms || []
        if (!roomId) return;
        if (Config.rooms.includes(roomId)) {
            msg.say('Room already registered')
            return;
        }
        Config.rooms.push(roomId)
        saveConfig('./config.json', Config)
        msg.say('Room Registration ok')
    }

    if (txt.includes('/info')) {
        const info = `Room Info: ${await room.topic()}(${roomId})`
        msg.say(info)
    }
}