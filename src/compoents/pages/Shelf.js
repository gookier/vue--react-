import React from 'react'
import { Tabs } from 'antd';

//组件引入
import TakeIn from '../takein/takein';
const { TabPane } = Tabs;

class Shelf extends  React.Component {
	render(){
		return(
			<div className="site-layout-content white_bg">
				<Tabs defaultActiveKey="1" size="large">
				    <TabPane tab="上架" key="1">
				      <TakeIn takeModel={1}></TakeIn>
				    </TabPane>
				    <TabPane tab="注册上架" key="2">
						<TakeIn takeModel={2}></TakeIn>
				    </TabPane>
				</Tabs>
			</div>
		)
	}
}
export default Shelf