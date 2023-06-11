
//统一api管理
import instance from "./axios";
// data json

const frontendMenuDelId=(params)=>{
    return instance.request({
        url:'/api/menu/delete',
        method:'get',
        params
    })
}

const getFrontendMenusByColums=(params)=>{
    return instance.request({
        url:'/api/menu/colums',
        method:'get',
        params
    })
}
const getFrontendMenuByUserId=(params)=>{
    return instance.request({
        url:'/api/menu/getFrontendMenuByUserId',
        method:'get',
        params
    })
}
const getMenusByPid=(params)=>{
    return instance.request({
        url:'/api/menu/getMenusByPid',
        method:'get',
        params
    })
}
const frontendMenuAdd=(data)=>{
    return instance.request({
        url:'/api/menu/add',
        method:'post',
        data
    })
}
const frontendMenuEdit=(data)=>{
    return instance.request({
        url:'/api/menu/edit',
        method:'post',
        data
    })
}
const getAll=(params)=>{
    return instance.request({
        url:'/api/menu/all',
        method:'get',
        params
    })
}

import axios from 'axios'


// 创建自定义的 Axios 实例
const api = axios.create({
  baseURL: 'http://api.jqrjq.cn', // 设置基础URL
  withCredentials: true, // 允许携带跨域请求的凭证
})

// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些处理
    return config
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)
export {
    frontendMenuAdd,
    frontendMenuDelId,
    getFrontendMenusByColums,
    getFrontendMenuByUserId,
    getMenusByPid,
    getAll,
    frontendMenuEdit, 
} 
// 添加响应拦截器
api.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理
    return response
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error)
  }
)
export default api

