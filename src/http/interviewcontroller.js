import instance from "./axios";

const add=(data)=>{
    return instance.request({
        url:'/api/interview/add',
        method:'post',
        data,
    })
}
const all=(data)=>{
    return instance.request({
        url:'/api/interview/all',
        method:'get',
        data,
    })
}
const getInterviewByColums=(data)=>{
    return instance.request({
        url:'/api/interview/colums',
        method:'get',
        data,
    })
}
const sdelete=(data)=>{
    return instance.request({
        url:'/api/interview/delete',
        method:'get',
        data,
    })
}
const edit=(data)=>{
    return instance.request({
        url:'/api/interview/edit',
        method:'post',
        data,
    })
}
const getInterviewByUserld=(data)=>{
    return instance.request({
        url:'/api/interview/getInterviewByUserId',
        method:'get',
        data,
    })
}
const getInterviewWithTypeByPage=(data)=>{
    return instance.request({
        url:'/api/interview/getInterviewWithTypeByPage',
        method:'post',
        data,
    })
}
const getInterviewWithTypeByPagea=(data)=>{
    return instance.request({
        url:'/api/interview/getInterviewWithTypeByPageAndUser',
        method:'post',
        data,
    })
}
const getInterviewWithTypeName=(data)=>{
    return instance.request({
        url:'/api/interview/getInterviewWithTypeNameVOById',
        method:'get',
        data,
    })
}
const getInterviewsPageByUserld=(data)=>{
    return instance.request({
        url:'/api/interview/getInterviewsPageByUserId',
        method:'post',
        data,
    })
}
const one=(data)=>{
    return instance.request({
        url:'/api/interview/one',
        method:'get',
        data,
    })
}
export {
    add,
    all,
    getInterviewByColums,
    sdelete,
    edit,
    getInterviewByUserld,
    getInterviewWithTypeByPage,
    getInterviewWithTypeByPagea,
    getInterviewWithTypeName,
    getInterviewsPageByUserld,
    one
}