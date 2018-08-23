<template>
	<div class="nodata">
		<icon :type="'socialgithuboutline'" :size="'2rem'" :color="'#888'"></icon>您没有{{nodata}}数据
	</div>
</template>

<script>
export default {
  name: 'nodata',
    props: {
    nodata:String
  },
}
</script>

<style lang="scss">
	.nodata{
		  position: absolute;
		  left: 0;
		  right: 0;
		  top: 0;
		  bottom: 0;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  font-size: 1.8rem;
		   color: #888;
	}
</style>