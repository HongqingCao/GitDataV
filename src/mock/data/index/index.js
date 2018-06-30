
const util = require('../util');//自定义工具模块
var data = util.getJsonFile('./index/index.json');
//export default  data
 module.exports = function(data){
 	return data
 }
