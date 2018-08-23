<template>
	<div class="navbar">
		<ul>
			<li @click="fullBox">
				<icon 
					:type="'quanping'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
			<li>
				<icon 
					:type="'yuyanqiehuan'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
			<li>
				<icon 
					:type="'ziyuan'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
			<li>
				<icon 
					:type="'zuojiantou1'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'topnav',
  methods:{
  	fullBox(){
  		console.log("点击")
  		if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) { 
                if (document.documentElement.requestFullScreen) {
                  document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                  document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                  document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
                }
            }
  	}
  }
}
</script>

<style lang="scss">
	.navbar{
		top: -80px;
		width: 250px;
		height: 50px;
	    margin-bottom: 0;
	    background: rgba(216, 191, 216, 0.2);
	    border-radius: 0;
	    border: none;
	    z-index: 999999;
	    padding-left: 50px;
	    margin-left: -200px;
	    transition: margin-left 0.9s;
	    ul{
	    	width: 100%;
	    	height: 100%;
	    	li{
	    		float: left;
	    		width:50px;
	    		height: 100%;
	    		display: flex;
	    		justify-content: center;
	    		align-items: center;
	    		padding: 5px;
	    		&:focus{
	    			background:#3498da;
	    		}
	    		&:hover{
	    			background:#3498da;
	    		}
	    	}
	    }
	    &:hover{
	    	margin-left:0px;
	    }
	}
</style>