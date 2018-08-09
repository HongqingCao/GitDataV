//新增加图书
//1.获取豆瓣信息
//2入库
const https = require('https')
const {mysql} = require('../qcloud')
module.exports = async (ctx)=>{
	 const {isbn,openid} = ctx.request.body
	if(isbn && openid){
		const findRes = await mysql('books').select().where('isbn',isbn)
	    if(findRes.length){
	      ctx.state = {
	        code:-1,
	        data:{
	          msg:'图书已存在'
	        }
	      }
	      return 
	    }
			
		let url=' https://api.douban.com/v2/book/isbn/'+isbn
		const bookinfo = await getJSON(url)
		const rate = bookinfo.rating.average
		const { title, image, alt, publisher, summary ,price} = bookinfo
		const tags = bookinfo.tags.map(v=>{
	      return `${v.title} ${v.count}`
	    }).join(',')
	    const author = bookinfo.author.join(',')
        try{
	      await mysql('books').insert({
	        isbn,openid,rate,title, image, alt, publisher, summary ,price,tags,author
	      })
	      ctx.state.data = {
	        title,
	        msg:'success'
	      }
	    }catch(e){
	      ctx.state = {
	        code:-1,
	        data:{
	          msg:'新增失败:'+e.sqlMessage
	        }
	      }
	    }
	}
}
function getJSON(url){
	return new Promise((reslove,reject)=>{
		https.get(url,res=>{
			let urlData = ''
			res.on('data',data=>{
				urlData +=data
			})
			res.on('end',data=>{
				const bookinfo = JSON.parse(urlData)
				if(bookinfo.title){
					reslove(bookinfo)
				}
				reject(bookinfo)
			})
		})
	})
}
