<template>
  <el-dialog title="上传我的作品" :visible.sync="show" class="upload">
    <el-form :model="form" label-position="right" :rules="rules" ref="form">
      <el-form-item label="上传配图" :label-width="formLabelWidth">
          <el-upload v-model="form.pic"
            class="avatar-uploader"
            action= "https:/localhost:8443/api/article/save"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      </el-form-item>
      <el-form-item label="诗词题目" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" placeholder="请输入您创作的诗词作品的题目"></el-input>
      </el-form-item>
      <el-form-item label="诗词内容" :label-width="formLabelWidth">
        <el-input v-model="form.content" type="textarea" :autosize="{minRows: 2, maxRows: 10}" placeholder="请输入您创作的诗词作品的内容"></el-input>
      </el-form-item>
      <el-form-item label="创作理念" :label-width="formLabelWidth">
        <el-input v-model="form.desc" type="textarea" :autosize="{minRows: 2, maxRows: 10}" placeholder="您对您创作的诗词作品想说点什么呢？"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('form')">重 置</el-button>
        <el-button type="primary" @click="submitForm('form')">上 传</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      imageUrl: '',
      show: false,
      form: {
        pic: '',
        name: '',
        content: '',
        desc: ''
      },
      rules: {
        name: [
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '诗词作品内容不能为空', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '说说您的创作理念吧！', trigger: 'blur' }
        ]
      },
      formLabelWidth: '100px'
    }
  },
  methods: {
    showDialog () {
      this.show = true
      this.changePwd = false
    },
    submitForm (formName) {
      this.show = false
      console.log(formName)
      this.$refs[formName].validate((valid) => { //  && this.form.name && this.form.content && this.form.desc
        if (valid) {
          /* let headers = {headers: { 'contentType': 'multipart/form-data'}}
          let data = {
            title: this.form.name,
            content: this.form.content,
            idea: this.form.desc,
            // file: this.form.pic,
            contentType: false
            // token: localStorage.getItem('Authorization')
          } */
          /* this.axios.interceptors.request.use(
            headers => {
              if (localStorage.getItem('Authorization')) {
                headers.contentType = 'multipart/form-data'
              }
              return headers
            },
            error => {
              return Promise.reject(error)
            }) */
          this.$axios
            .post('article/save', {
              title: this.form.name,
              content: this.form.content,
              idea: this.form.desc
            },
            {
              headers: {'Content-Type': 'multipart/form-data'}
            })
            .then(response => {
              console.log(response)
              if (response.status === 200) {
                this.$message('您的作品已成功上传！')
              }
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          this.$message.error('上传失败，请检查您的填写内容')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss">
.upload {
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
