<template>
  <div  class="collect">
      <el-card shadow="hover" v-for="(item, index) in content" :key="index">{{item.lable}}</el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: [
        {lable: '收藏一'},
        {lable: '收藏二'},
        {lable: '收藏三'}
      ]
    }
  }
}
</script>

<style lang="scss">
.collect {
    padding: 40px;
    .el-card{
        margin: 30px;// 这里上下、左右的间距都会塌陷
        padding: 30px;
    }
    .el-card:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-card:nth-child(2n+1) {
        background-color: #d3dce6;
    }
}
</style>
