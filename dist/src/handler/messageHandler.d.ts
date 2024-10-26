import 'wechaty';
import type { Room } from 'wechaty';
import type { MessageInterface } from 'wechaty/impls';
export declare function OnReceiveMsg(msg: MessageInterface): Promise<void>;
export declare function OnRecieveRoomMsg(msg: MessageInterface, room: Room): Promise<void>;
export declare function OnAdminMsg(msg: MessageInterface, room: Room): Promise<void>;
//# sourceMappingURL=messageHandler.d.ts.map