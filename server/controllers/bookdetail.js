
const {mysql} = require('../qcloud')

module.exports = async (ctx)=>{
  const {id} = ctx.request.query
  
	const detail = await mysql('books')
	                    .select('books.*', 'cSessionInfo.user_info')
	                    .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
	                    .where('id', id)
	                    .first()
	
	const info = JSON.parse(detail.user_info)
	ctx.state.data = Object.assign({}, detail, {
	    tags: detail.tags.split(','),
	    summary: detail.summary.split('\n'),
	    user_info: {
	        name: info.nickName,
	        image: info.avatarUrl
	    }
	}) 

  await mysql('books')
          .where('id',id)
          .increment('count',1)
}