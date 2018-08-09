<template>
	<div class="dialog-container">
	    <div class="dialog-mask"></div>
	    <div class="dialog-info">
	        <div class="dialog-title">{{ title }}</div>
	        <div class="dialog-content">{{ content }}</div>
	        <div class="dialog-footer">
	          <button class="dialog-btn" open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="doLogin">{{ confirmText }}</button>
	        </div>
	    </div>
   </div>
</template>

<script>
export default {
	props: {
	    title: {
	      type: String,
	      default: '标题'
	    },
	    content :{
	      type : String ,
	      default : '弹窗内容'
	    },
	    confirmText :{
	      type : String ,
	      default : '确定'
	    }
	},
	data(){
		return{
			isShow:false
		}
	},
	 methods: {
	 	  doLogin: function () {
		    const session = qcloud.Session.get()
		    console.log(session)
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
		    console.log("2"+session)
		}
	 },
	onShow () {
  
    }
}

</script>

<style>
.dialog-mask{
  position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
}
.dialog-info{
    position: fixed;
    z-index: 5000;
    width: 80%;
    max-width: 600rpx;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
}
.dialog-title{
    font-size: 36rpx;
    padding: 30rpx 30rpx 10rpx;
}
.dialog-content{
    padding: 10rpx 30rpx 20rpx;
    min-height: 80rpx;
    font-size: 32rpx;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #999999;
}
.dialog-footer{
    display: flex;
    align-items: center;
    position: relative;
    line-height: 90rpx;
    font-size: 34rpx;
}
.dialog-btn{
    display: block;
    -webkit-flex: 1;
    flex: 1;
    position: relative;
    color: #3CC51F;
}
</style>