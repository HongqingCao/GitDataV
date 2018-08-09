<template>
  <div class='rate'>
    <span>☆☆☆☆☆</span>
    <div class="hollow" :style='style'>
      ★★★★★
    </div>
  </div>
</template>
<script>
// vue-tiny-rate
export default {
  props:{
    value:{type:[Number,String],default:'0'}
  },
  computed:{
  	//添加行内样式，动态计算宽度
    style(){
      return `width:${this.value/2}em`
    }
  }
}
</script>
<style lang='scss'>
.rate{
  position: relative;
  display: inline-block;
  .hollow{
    position: absolute;
    display: inline-block;
    top:0;
    left:0;
    width:0;
    overflow:hidden;
  }
}
</style>

