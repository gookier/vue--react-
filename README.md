# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

###思考：
1：双向绑定思维需要变更，在vue中，我们习惯将表单作为一个子组件，然后通过子组件$emit方法来触发父组件的状态更新.

2：按钮点击事件的绑定，采用onClick方式，同时注意{}的使用

3：class组件和function组件的差别，使用了class组件，时时刻刻都得注意this的指向问题，使用function组件，没有state状态管理，需要引入useState。

4：父子组件调用，注意版本，一开始使用refs，后面推荐useRef，再到后来使用forwardRef，跟着提示一步步深入。

5：生命周期：useEffect真是个好东西，//return参数为组件将死。

6：设置代理的使用，vue中在vue.config中配置，而且代理地址可以设置为/. react不可以
vue   :proxyTable: {
        '/': {
        target: 'http://192.168.2.6:8088', 
        changeOrigin: true,  // 设置这个参数可以避免跨域
        pathRewrite: {
          "/": ""
        }

react   app.use(createProxyMiddleware('/LC', {
        target : 'http://192.168.2.222:5000',
        changeOrigin : true,
        pathRewrite : {
            '^/LC' : '/'
        },
    }));

