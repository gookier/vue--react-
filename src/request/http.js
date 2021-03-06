import axios from 'axios'; // 引入axios
// import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到

import { message } from 'antd';
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/LC';
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = '/';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '/';
}

// 请求超时时间
axios.defaults.timeout = 120000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  config => {

    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const user_name = sessionStorage.getItem('user_name') 
    // const user_group_power = sessionStorage.getItem('user_group_power') 
    return config;
  },
  error => {
    return Promise.error(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {

      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        // case 401:
        //   router.replace({
        //     path: deviceModel() == 'isPc' ? '/login' : '/pdalogin',
        //     query: {
        //       redirect: router.currentRoute.fullPath
        //     }
        //   });
        //   break;
          // 404请求不存在
        case 504:
            message.error('Gateway Timeout！');
          break;
          // 其他错误，直接抛出错误提示
        default:
            message.error('error.response.data');
      }
      return Promise.reject(error.response);
    }
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error.data)
      })
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * QS.stringify(params)序列化参数
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err)
      })
  });
}
