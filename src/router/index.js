// //引入react
// import React from 'react'

// //引入组件页面
// import Control from '../compoents/pages/Control.js'
// import Home from '../compoents/home/Home.js'

// //引入模块
// import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// function router () {
// 	return (
// 	<Router>
// 		// <Router path="/control" compoents={Control} />
// 		<Route path="/home" render = { () =>(
// 			<Home>
// 				<Route path="/home/control" component={Control} />
// 			</Home>
// 		)} />
// 		<Route path="/" render={
// 		  ()=> (
// 		  <Redirect to="/home/control" />)}>
// 		</Route>
// 	</Router>
// 	)
// }

// // export default router