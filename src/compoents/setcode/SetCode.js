import React,{ useState,useImperativeHandle,useRef } from 'react';
import { Input,message } from 'antd';
import {InfoCircleOutlined } from '@ant-design/icons';
import { setCode09 } from '../../request/api/mate'
const SetCode  = (props,ref) => {
	const [trace_code,traceCodeChange] = useState(null)
	const setcode = useRef()
	const handeChange =(e) =>{
		traceCodeChange(e.target.value)
	}

	const saveSetCode = () =>{
		setCode09({code_09:trace_code}).then(res =>{
			if (res.result) {
				message.success('设置09码成功')
			} else {
				message.error(res.msg)
			}
		})
		
	}
	const clearSetCode = () =>{
		traceCodeChange('')
	}
	useImperativeHandle(ref, () => ({saveSetCode,clearSetCode}))
		return(
			<div ref={setcode}>
				<table className="codetable">
				<tbody>
				<tr>
				<td className="tdname">Trace Code:</td>
				<td className="tdcontent">
					<Input allowClear onChange={handeChange} defaultValue="" value={trace_code}/>
				</td>
				</tr>
				<tr>
				<td></td>
				<td>
				<p className="code_tips_p">
					<InfoCircleOutlined className="blue_info" />
					<span>确定将重置已设置的09码,请慎用!</span>
				</p>
				</td>
				</tr>
				</tbody>
				</table>
			</div>
		)
}
export default  SetCode