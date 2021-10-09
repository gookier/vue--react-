import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//头部组件
import Head from './compoents/head/Head.js';
import Control from './compoents/pages/Control.js'
import Shelf from './compoents/pages/Shelf.js'
const {  Content, Footer } = Layout;
function App() {
	return (
		<Router>
			<div className="home">
				<Layout className="layout">
					<Head/>
					 <Content style={{ padding: '0 50px' }}>
							
							<Routes>
								<Route path="/" element={<Control />} />
								<Route path="/shelf" element={<Shelf />} />
							</Routes>
										 
					 </Content>				
					<Footer style={{ textAlign: 'center' }}>Swissmic ©2021 Created by kerry</Footer>
				 </Layout>
			</div>
		</Router>
	);
}

export default App;
