import React, { useEffect} from 'react';
import { Menu } from 'antd';
import {  Link } from "react-router-dom";
const  Head = () => {
	 //生命周期// 相当于 componentDidMount 和 componentDidUpdate:
	 useEffect(function() {

    });
	const activeKey = () =>{
		const pathName = window.location.pathname
		if(pathName ==='/shelf'){
			return '2'
		} else {
			return '1'
		}
	}
	return(
		<div className="header_div">
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={activeKey} style={{fontSize:'16px'}}>
			<Menu.Item key="1"><Link to="/">控制页面</Link></Menu.Item>
			<Menu.Item key="2"><Link to="/shelf">物料上架</Link></Menu.Item>
			</Menu>				
		</div>
	)

}
export default Head