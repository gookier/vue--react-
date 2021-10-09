import React from 'react'
import { Row, Col } from 'antd';
//code信息组件
import CodeInfo from '../codeinfo/CodeInfo.js'
//绑定料架组件
import BindShelf from '../bindshelf/bindshelf.js'
class Control extends  React.Component {
	render(){
		return(
			<div className="site-layout-content">
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col span={16}>
						<CodeInfo/>
					</Col>
					<Col span={8}>
						<BindShelf />
					</Col>
				</Row>
			</div>
		)
	}
}
export default Control