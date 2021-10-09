import React, { useState, useRef,forwardRef,useEffect} from 'react';
import { Card, Button,  Modal, message } from 'antd';
import { manualTakePhoto } from '../../request/api/control'
//09码设置组件
import SetCode from '../setcode/SetCode.js'
const Child = forwardRef(SetCode)
const  CodeInfo =() => {
	const [materialInfo,setMaterialInfo] = useState(null)
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => {
		setIsModalVisible(true);
	  };
	  const setcode = useRef(null)
	  const handleOk = () => {
		  setcode.current.saveSetCode()
		setIsModalVisible(false);
	  };
	
	  const handleCancel = () => {
		setcode.current.clearSetCode()
		setIsModalVisible(false);
	  };
	  const listenCtrl = (e) =>{
		// 兼容FF和IE和Opera    
		var theEvent = e || window.event;    
		var ctrlkey = theEvent.ctrlKey || theEvent.metaKey 
		if (ctrlkey) {
		  setTimeout(()=>{
			manualTakePhoto({}).then(res =>{
			  if (res.result) {
				setMaterialInfo(res.data)
			  } else {
				message.error(res.msg)
			  }
			})
		  },1500)
		  
		}
	  };

	    //生命周期// 相当于 componentDidMount 和 componentDidUpdate:
		//销毁前
		useEffect(() => {
			window.addEventListener("keydown",listenCtrl);
			return () =>{//return参数为组件将死
				window.removeEventListener('keydown',listenCtrl)
			}
		})
		


		return(
			<div>
			  <Card title="条码信息" className="control_item_wrap" extra={<Button type="primary" size="small" onClick={showModal}>设置09码</Button>}>
				<table className="codetable">
				<tbody>
				<tr>
					<td className="tdname">Trace Code:</td>
					<td className="tdcontent">{materialInfo?.code_09}</td>
					<td className="tdname">物料条码:</td>
					<td className="tdcontent">{materialInfo?.label_code}</td>					
				</tr>
				<tr>
					<td className="tdname">物料PN:</td>
					<td className="tdcontent">{materialInfo?.part_num}</td>	
					<td className="tdname">PPID:</td>
					<td className="tdcontent">{materialInfo?.save_id}</td>
										
				</tr>
				<tr>
					<td className="tdname">Lot Code:</td>
					<td className="tdcontent">{materialInfo?.lot_code}</td>
					<td className="tdname">供应商:</td>
					<td className="tdcontent">{materialInfo?.supplier_id}</td>	
																
				</tr>
				<tr>
					<td className="tdname">数量:</td>
					<td className="tdcontent">{materialInfo?.quantity}</td>
					<td className="tdname">Date Code:</td>
					<td className="tdcontent">{materialInfo?.mfg_date_week}</td>
						
				</tr>
				<tr>
					<td className="tdname">生产日期:</td>
					<td className="tdcontent">{materialInfo?.mfg_date}</td>	
					<td className="tdname">超期时间:</td>
					<td className="tdcontent">{materialInfo?.exp_date}</td>				
				</tr>
				</tbody>
				  
				</table>
				<Modal title="设置09码" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
					<Child ref ={setcode} />
      			</Modal>
			  </Card>			
			</div>
		)

}
export default CodeInfo