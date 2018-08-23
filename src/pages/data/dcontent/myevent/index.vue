<template>
	<div class="myevent-box">
		<table  class="table">
            <thead>
                <tr>
                    <th  class="col-md-2">操作时间</th>
                    <th  class="col-md-2">类型</th>
                    <th class="col-md-4">操作的仓库</th>
                    <th class="col-md-4">备注</th>  
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in getData" v-if="index<3">
                    <td class="col-md-2">
                    	{{item.created_at.substring(0,10)}}
                    </td>
                    <td class="col-md-2">{{item.type}}</td>
                    <td class="col-md-4">{{item.repo.name}}</td>
                    <td class="col-md-4">{{item.payload.commits}}</td>
                </tr>
            </tbody>
        </table>
	</div>
</template>

<script>
export default {
   props: {
    data:Array
  },
  data(){
  	return{
  		getData:{}
  	}
  },
  watch:{
  	 data(data){
  	 	if(data){
  	 		 this.getData = data
  	 	}
  	 }
  }
}
</script>

<style lang="scss">
	.myevent-box{
		width: 100%;
		height: 100%;
		padding: 15px;
		overflow: hidden;
		margin-top: -10px;
		.table{
			table-layout:fixed;
			tr{
				border: none;
				th{
					font-size: 1.5rem;
					text-align: center;
					background: #053A98;
					color: #FFFDEF;
					border: 1px solid#0086B3;
				}
				td {
					font-size: 1.4rem;
					text-align: center;
					border: 1px solid#0086B3;
					color: #19d4ae;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				&:nth-child(odd){
						td{
							color: #5ab1ef;
						}
					}
			}
		}
	}
	
	
</style>