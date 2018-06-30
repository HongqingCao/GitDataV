var Mock = require('mockjs')
//import Mock from 'mockjs'
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    "error":0,
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'componentName': "@ctitle(2,10)",
        'new|1-2': 2
    }]
})

module.exports = {
 	data 
 }
