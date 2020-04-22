<template>
  <el-dialog title="编辑我的资料" :visible.sync="show" class="edit">
    <el-form :model="form" label-position="right" :rules="rules" ref="form">
      <el-form-item label="上传头像" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      </el-form-item>
      <el-form-item label="修改昵称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" placeholder="请输入新的昵称"></el-input>
      </el-form-item>
      <el-form-item label="修改密码" :label-width="formLabelWidth" >
        <el-input v-model="form.oldPass" autocomplete="off" placeholder="请输入原密码" show-password @focus="changePwd = true"></el-input>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" v-show="changePwd" prop="pass" >
        <el-input v-model="form.pass" autocomplete="off" placeholder="请输入新密码" show-password type="password"></el-input>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" v-show="changePwd" prop="checkPass">
        <el-input v-model="form.checkPass" autocomplete="off" placeholder="请再次输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="诗词个签" :label-width="formLabelWidth">
        <el-input v-model="form.desc" :autosize="{minRows: 2, maxRows: 3}" maxlength="30" show-word-limit placeholder="请输入您最喜欢的一句诗词"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('form')">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      imageUrl: '',
      show: false,
      form: {
        name: '',
        oldPass: '',
        pass: '',
        checkPass: '',
        desc: ''
      },
      rules: {
        name: [
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        pass: [
          { min: 6, message: '至少需要6位密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      changePwd: false,
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.show = false
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
.edit {
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
