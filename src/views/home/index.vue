<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-05-10 17:23:35
 * @LastEditors: codercao
 * @LastEditTime: 2021-05-12 09:40:21
-->
<template>
  <div class="home-warpper">
    <Header></Header>
    <div class="content-warpper">
      <TemplateList @creatProject="creatProject"></TemplateList>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'

import Header from '@/pages/home/components/header.vue'
import TemplateList from '@/pages/home/components/templateList.vue'
export default {
  components: {
    Header,
    TemplateList,
  },
  setup() {
    const router = useRouter()
    const creatProject = (data) => {
      router.push({
        path: '/dashboard',
        query:{
          
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.home-warpper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #171b22;
}
</style>
