/**   
 * api接口统一管理,每个模块对应相应的api接口
 */
 import { post } from '../http';//引入httpjs中的post方法

 // 系统控制
 export const SysCommand = p => post('control/SysCommand', p);

// 设置09码
export const setCode09 = p => post('mate/SetCode09', p);

// 物料信息
export const MaterialInfo = p => post('control/MaterialInfo', p);

// 系统状态
export const sysState = p => post('sysState', p);

// 照相
export const manualTakePhoto = p => post('camera/manualTakePhoto', p);

//绑定料架
export const bindShelf = p =>post('rfid/bindShelf',p);

//解绑料架
export const unBindShelf =p =>post('rfid/unBindShelf',p);

//下一个物料
export const operateNextMaterial = p =>post('camera/operateNextMaterial')

 const control = {
    SysCommand: '/sysCommand',
    SysState: '/sysState',
    SysIpAddr:'/sysIpAddr',
    MaterialInfo: '/camera/readResult',
    BindShelf: '/rfid/bindShelf',
    UnBindShelf: '/rfid/unBindShelf',
    GetBindShelf: '/rfid/getBindShelf',
    ManualTakePhoto: '/camera/manualTakePhoto',
    OperateNextMaterial:'/camera/operateNextMaterial',
    VoiceSwitch: '/voiceSwitch',
    SetCode09: '/mate/setCode09',
  };