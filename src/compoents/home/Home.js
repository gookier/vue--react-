import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';

// import './../App.css';
import { Layout,Row, Col } from 'antd';
//头部组件
import Head from '../head/Head.js';

import Control from '../pages/Control.js';

import Shelf from '../pages/Shelf.js';

const {  Content, Footer } = Layout;

class  Home extends React.Component {
	render(){
		return(
			<div className="home">
				<Layout className="layout">
					<Head/>
					 <Content style={{ padding: '0 50px' }}>
						
							<Routes>
								<Route path="/" element={<Control />} />
								
							</Routes>
							<Routes>
								<Route path="/shelf" element={<Shelf />} />
							</Routes>
							
						 
					 </Content>
		
				    <Footer style={{ textAlign: 'center' }}>Swissmic ©2021 Created by kerry</Footer>
				 </Layout>
			</div>
		)
	}
}
export default Home