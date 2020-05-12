<template>
  <el-dialog title="查看我的作品" :visible.sync="show" class="view">
    <el-form :model="form" label-position="right" ref="form">
      <!-- <el-form-item label="作品配图" :label-width="formLabelWidth">
          <div>11</div>
      </el-form-item> -->
      <el-form-item label="诗词题目" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="诗词内容" :label-width="formLabelWidth">
        <el-card v-model="form.content" type="textarea" :autosize="{minRows: 2, maxRows: 10}"></el-card>
      </el-form-item>
      <el-form-item label="创作理念" :label-width="formLabelWidth">
        <el-card v-model="form.desc" type="textarea" :autosize="{minRows: 2, maxRows: 10}"></el-card>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="alterWorks">修 改</el-button>
        <el-button type="primary" @click="deleteWorks">删 除</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      form: {
        name: '',
        content: '',
        desc: ''
      },
      formLabelWidth: '100px'
    }
  },
  methods: {
    showDialog () {
      this.show = true
      this.changePwd = false
    },
    alterWorks () {
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        this.$axios
          .get('api/article/update', {
            params: {
              title: this.form.name,
              content: this.form.content,
              idea: this.form.desc,
              token: localStorage.getItem('Authorization')
            }
          })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        console.log('用户wei登录')
        this.$message.error('请登录后再进行操作')
      }
    },
    deleteWorks () {
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        this.$axios
          .get('article/update', {
            params: {
              title: this.form.name,
              token: localStorage.getItem('Authorization')
            }
          })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        console.log('用户wei登录')
        this.$message.error('请登录后再进行操作')
      }
    }
  }
}
</script>

<style lang="scss">
.viewworks{
    height: 100px;
    width: 100px;
    background-color: cornflowerblue;
}
</style>
