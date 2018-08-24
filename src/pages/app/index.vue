<template>
	<div class="app-page">
		<particles />
		<indexbg />
		<div class="container-fluid">
			<div class="row text-container ">
				<div class= "tm-content col-md-6 col-sm-8 col-xs-12 ml-auto section">
					<div class="content-box">
						<header class="mb-5"><h1>GitDataV</h1></header>
						<P class="mb-5">一个用Vue构建的Github"可视化大数据平台"。通过它，您可以更加直观看到您在Github里的一些数据情况</P>
			            <div class="subscribe-form">
			       	    	<div class="row form-section">
								<div class="col-sm-8 col-xs-10">
				                      <input type="text" 
				                      	class="form-control"
				                      	 v-model="username" 
				                      	 @focus="onfocus"
				                      	 placeholder="输入您的github账号，然后点击生成..."/>
				                      <div class="help-box">
										 <strong v-if="namelg">请输入您的账号，再点生成!</strong>
										 <strong v-if="nousename">账号：<a>{{errname}}</a>Not Found!</strong>
										 <p v-else>
										 	点击「生成」按钮将视为您同意<button @click="showpm">GitDataV服务条款</button>
										 </p>
									 </div>
					  			</div>
								<div class="col-sm-4 col-xs-5">
									<button  class="tm-btn-subscribe" @click="generate(username)">生成</button>
								</div>
							</div>
			            </div>
					</div>
				</div>
			</div>	
			<pmodal :isShow="isShow" @sayhidden="sayhidden" v-if="isShow"/>
           <foot />
		</div>
	</div>	
</template>

<script>
import pmodal from './pmodal'
export default {
 components:{
		pmodal
	},
  data(){
    return {
      list:{
      },
      username:'',
      errname:'',
      isShow:false,
      inputval:false,
      nousename:false,
      namelg:false,
      checked:false
    }
  },
  created(){
  },
  methods:{
    checkebox(){
    	 this.checked = !this.checked
    },
    generate(username){
    	let name = this.username
    	let self = this
    	if(name.length <= 0){
    		this.namelg = true
    		return
    	}else{
	        this.$axios.get('/api/users/'+ name).then((response)=>{
          	    let res = JSON.parse(JSON.stringify(response))
          	    if(res.status === 200){
          	     	this.$router.push({ 
          	     		name: 'data',
          	     		params: { user: name }
          	     	})
			      }   
			      return
		    	}).catch(err => {
		    		this.nousename = true
          	     	this.errname = name
				  console.log(err.message);
				})
            }
    	
    },
    onfocus(){
    	this.namelg = false
    	this.nousename = false
    },
    showpm(){
    	this.isShow = true
    },
    sayhidden(sayhidden){
    	this.isShow = sayhidden
    }
  }
}
</script>

<style lang="scss">
 @import './index'
</style>