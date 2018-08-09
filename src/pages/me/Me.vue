<template>
  <div class="container">
  	<button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="doLogin">获取用户信息</button>
  	<div>
	  		<div class="userinfo" @click='login'>
		      <img :src="userinfo.avatarUrl" alt="">
		      <p>{{userinfo.nickName}}</p>
	      </div>
	      <YearProgress></YearProgress>
	      <button v-if='userinfo.openId' @click='scanBook' class='btn'>添加图书</button>
  	</div>

  </div>
</template>
<script>
import qcloud from 'wafer2-client-sdk'
import YearProgress from '@/components/YearProgress'
import DiaLog from '@/components/Dialog'
import {showSuccess, post,showModal} from '@/utils/index'
import config from '@/config'
export default {
  components: {
    YearProgress,
    DiaLog
  },
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录'
      }
    }
  },
  methods: {
		  doLogin: function () {
		    const session = qcloud.Session.get()
		
		    if (session) {
		        // 第二次登录
		        // 或者本地已经有登录态
		        // 可使用本函数更新登录态
		        qcloud.loginWithCode({
		            success: res => {
		                this.setData({ userInfo: res, logged: true })
		                util.showSuccess('登录成功')
		            },
		            fail: err => {
		                console.error(err)
		                util.showModel('登录错误', err.message)
		            }
		        })
		    } else {
		        // 首次登录
		        qcloud.login({
		            success: res => {
		                this.setData({ userInfo: res, logged: true })
		                util.showSuccess('登录成功')
		            },
		            fail: err => {
		                console.error(err)
		                util.showModel('登录错误', err.message)
		            }
		        })
		    }
		},
   async addBook(isbn){
   	console.log(isbn)
    	const res = await post('/weapp/addbook',{
    		isbn,openid:this.userinfo.openId
    	})
    	 showModal('添加成功',`${res.title}添加成功`)
    },
    scanBook () {
      wx.scanCode({
        success: (res) => {
          if(res.result){
            this.addBook(res.result)
          }
        }
      })
    },
    login () {
      let user = wx.getStorageSync('userinfo')
      const self = this
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl)
			 	qcloud.login({
				    success: function (userInfo) {
				        console.log('登录成功', userInfo)
				        showSuccess('登录成功')
				        wx.setStorageSync('userinfo',userInfo)
				        self.userinfo = userInfo
				    },
				    fail: function (err) {
				        console.log('登录失败', err);
				    }
				})
      }
    },
//  login () {
//    let user = wx.getStorageSync('userinfo')
//    const self = this
//    if (!user) {
//      qcloud.setLoginUrl(config.loginUrl)
//      qcloud.login({
//        success: function (userinfo) {
//          qcloud.request({
//            url: config.userUrl,
//            login: true,
//            success (userRes) {
//              showSuccess('登录成功')
//              wx.setStorageSync('userinfo', userRes.data.data)
//              self.userinfo = userRes.data.data
//            },
//					    fail: function (err) {
//					        console.log('登录失败', err);
//					    }
//          })
//        }
//
//      })
//    }
//  }
  },
  onShow () {
  	
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>

<style lang='scss'>
.container{
  padding:0 30rpx;

}  
.userinfo{
  margin-top:100rpx;
  text-align:center;
  img{
    width: 150rpx;
    height:150rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
}


</style>
