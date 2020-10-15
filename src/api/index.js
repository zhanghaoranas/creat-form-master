import {fetchGet, fetchPost} from '../utils/fetch';

const getComponentsTypeApi = (params, config) => fetchGet('/getCategoryTemp', params, config); // 获取模板信息
const uploadPatrolImage = (params, config) => fetchPost('/uploadPatrolImage', params, config); // 上传图片
const uploadPatrolVideo = (params, config) => fetchPost('/uploadPatrolVideo', params, config); // 上传视频
const addPatrolRecord = (params, config) => fetchPost('/addPatrolRecord', params, config); // 上传表单
const getPatrolRecord = (params, config) => fetchPost('/getPatrolRecord', params, config); // 预览

export {getComponentsTypeApi, uploadPatrolImage, uploadPatrolVideo, addPatrolRecord, getPatrolRecord};
