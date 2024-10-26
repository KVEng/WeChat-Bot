import 'wechaty'
import { Wechaty, log } from 'wechaty';
import { MessageInterface } from 'wechaty/impls';

function isOldAge(msg: MessageInterface) {
    return msg.age() > 3 * 60
}


export function OnReceiveMsg(msg: MessageInterface) {
    if (isOldAge(msg)) { // ignore aged message
        log.info(
            "Bot", 'on(message) skip age("%d") > 3 * 60 seconds: "%s"',
            msg.age(), msg
        );
        return;
    }

    const room = msg.room()
    // Not room message
    if (!room) return;
    // Not mention me
    if (!msg.mentionSelf()) return;

    room.say('say sth')
    console.log(`Message: ${msg}`)
}