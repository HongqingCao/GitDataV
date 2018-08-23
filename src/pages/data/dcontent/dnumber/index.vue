<template>
	<div class="number-box"  :style="{ 'height': dheight + 'px' }">
		<div class="icon-box">
			<icon :type="icon" :color="color"></icon>
		</div>
		<div class="number-box">
			<div class="title">{{title}}</div>
			<div class="number" :style="styles">{{dnumber}}</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'dnumber',
  props: {
    size: [Number, String],
    title: String,
    color: String,
    dnumber:Number,
    icon: String,
    dheight: Number
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