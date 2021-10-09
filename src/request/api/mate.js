/**   
 * api接口统一管理,每个模块对应相应的api接口
 */
 import { post } from '../http';//引入httpjs中的post方法

 // 上料
 export  const mateIn = p => post('mate/mateIn', p);

 //获取最近上料物料信息
 export  const lastInputMate = p => post('mate/lastInputMate', p);

 //设置09码
 export  const setCode09 = p => post('mate/setCode09', p);


