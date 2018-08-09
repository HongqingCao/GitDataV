<template>
  <div>
  	<TopSwiper :tops='tops'></TopSwiper>
    <Card :key='book.id' v-for='book in books' :book='book'></Card>
    <p class='text-footer' v-if='!more'>
                没有更多数据
    </p>
  </div>
</template>
<script>
import qcloud from 'wafer2-client-sdk'
import {get, showSuccess} from '@/utils/index'
import TopSwiper from '@/components/TopSwiper'
import Card from '@/components/Card'
export default {
	  components:{
	  	Card,
	  	TopSwiper
	  },
		data(){
			return {
				books:[],
				page:0,
				more:true,
				  tops:[]
			}
		},
		 methods:{
		 	  async getList(init){
		 	  	if(init){
		 	  		this.page = 0
		 	  		this.more = true
		 	  	}
		 	  	wx.showNavigationBarLoading() //微信自带下拉框
		 	  	const booklist = await get('/weapp/booklist',{page:this.page})  	
		 	  	if(booklist.list.length<5 && this.page>0){
			        this.more = false
			      }
		 	  	if(init){
				        this.books = booklist.list
				        wx.stopPullDownRefresh()
				      }else{
				        // 下拉刷新，不能直接覆盖books 而是累加
				        this.books = this.books.concat(booklist.list)
				    }
		 	  	 wx.hideNavigationBarLoading()
		 	  },
		 	  async getTop(){
		      const tops = await get('/weapp/top')
		      this.tops = tops.list
		    }
      },
	  onPullDownRefresh(){
	    this.getList(true)
	    this.getTop()
	  },
    onReachBottom(){
      if(!this.more){
      // 没有更多了
      return false
    }
    this.page = this.page+1
    console.log("1")
    this.getList()
    },
  mounted(){
			this.getList(true)
			this.getTop()
		}
 }

</script>
<style>


</style>
