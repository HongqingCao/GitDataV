const Mock = require('mockjs');//mockjs 导入依赖模块
//import indexdataApi from './data/index'
const indexdataApi = require('./index');//mockjs 导入依赖模块
Mock.mock(/\/indexdata\/data/,'get',indexdataApi.data)
 module.exports = {
 	Mock
 }