/*
* @Introduce:          自定义一个读取文件的工具箱
* @Author:             HongqingCao
* @Date:               2018-06-25 17:37:22
* @Last Modified by:   HongqingCao
* @Last Modified time: 2018-06-27 12:29:31
*/

//引入文件系统模块
//import Fs from 'fs';
//引入path模块
//import path from  'path';
const fs = require('fs');
const path = require('path');//引入path模块
 console.log(fs.readFile)
module.exports = {
    //读取json文件
getJsonFile:function (filePath) {
    //读取指定json文件
    var paths = path.resolve(__dirname,filePath);
    var jsons = fs.readFileSync(paths, 'utf-8');
    //解析并返回
        return JSON.parse(jsons);
    }
};
