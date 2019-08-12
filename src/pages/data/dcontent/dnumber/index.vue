<template>
	<div class="number-box"  :style="{ 'height': dheight + 'px' }">
		<div class="icon-box">
			<icon :type="icon" :color="color"></icon>
		</div>
		<div class="number-box">
			<div class="title">{{title}}</div>
			<div class="number" :style="styles">{{amount}}</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'dnumber',
  props: {
    size: [Number, String],
    time: {
      type: Number,
      default:2
    },
    title: String,
    color: String,
    dnumber:{
      type: Number,
      default:0
    },
    icon: String,
    dheight: Number
  },
  data () {
     return {
      amount: 0
    }
  },
  watch: {
    dnumber(val){
      if(val > 0){
        this.numFun(0,val)
      }
    }
   },
  methods: {
    numFun(startNum,maxNum) {
      var that = this
      let numText = startNum;
      let golb; // 为了清除requestAnimationFrame
      function numSlideFun(){ // 数字动画
          //numText+=1; // 速度的计算可以为小数 。数字越大，滚动越快
          if(maxNum<100){
            numText+=1;
          }else{
            numText+= 5;
          }
          if(numText >= maxNum){
              numText = maxNum;
              cancelAnimationFrame(golb);
          }else {
              golb = requestAnimationFrame(numSlideFun);
          }
        that.amount=numText
        // console.log(numText)
      }
       numSlideFun(); // 调用数字动画
    }
   },
  computed: {
    styles() {
      const style = {}

      if (this.color) {
        style.color = this.color
      }
      if (this.size) {
        style.fontSize = this.size
      }

      return style
    }
  }
}
</script>

<style lang="scss">
	.number-box{
		width: 100%;
		height: 100%;
		display: flex;
		.icon-box{
			width: 40%;
			height: 100%;
			float: left;
			display: flex;
		    justify-content:center;
		    align-items:Center;
		    i{
		    	font-size: 5rem;
		    	display: block;
		    }
		}
		.number-box{
			width: 60%;
			float: left;
			display: block;
			.title{
				width: 100%;
			
				font-size: 1.4rem;
				color: #fff;
				padding-top: 10px;
				line-height: 3rem;
			}
			.number{
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
                white-space: normal;
                font-weight: bold;
                font-size: 4.4rem;
			}
		}
	}
</style>