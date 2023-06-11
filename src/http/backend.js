import instance from "./axios";
const blackendAll=()=>{
    //返回Promise对象
    return instance.request({
        url:'api/backendApi/all', //url=baseUrl+url,
        method:'get',
        headers:{}
    })
}

const blackendOne=(params)=>{
    return instance.request({
        url:'api/backendApi/one',
        method:'get',
        params
    })
}
//1
const blackendEdit=(data)=>{
    return instance.request({
        url:'api/backendApi/edit',
        method:'post',
        data
    })
}
const blackendDel=(params)=>{
    return instance.request({
        url:'api/backendApi/delete',
        params
    })
}
const blackendAdd=(data)=>{
    return instance.request({
      url:'api/backendApi/add',
      method :'post',
      data
  })
  }
  const blackendPage=(params)=>{
    return instance.request({
        url:'api/backendApi/page',
        params
    })
} 


export {
    //2
    blackendAll,
    blackendOne,
    blackendDel,
    blackendAdd,
    blackendEdit,
    blackendPage
}