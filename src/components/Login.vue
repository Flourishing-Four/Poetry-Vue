<template>
  <div class="login">
    <el-dialog title="登 录" :visible.sync="show" center>
      <el-dialog  class="repeatCss" title="注 册" :visible.sync="innerVisible" center append-to-body>
        <el-form class="login-container" label-position="left" label-width="0px">
          <el-form-item>
            <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="用户名"/>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"/>
          </el-form-item>
        </el-form>
          <el-button style="float: left; padding: 4px 10px" type="text" @click="innerVisible = false">返回登录</el-button>
        <span slot="footer" class="dialog-footer">
          <el-button style="width: 100%;" type="primary" @click="login">注 册</el-button>
        </span>
      </el-dialog>
      <el-form class="login-container" label-position="left" label-width="0px">
        <el-form-item>
          <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="用户名"/>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"/>
        </el-form-item>
      </el-form>
        <el-button style="float: left; padding: 4px 10px" type="text" @click="innerVisible = true">还没有账号？点击注册</el-button>
      <span slot="footer" class="dialog-footer">
        <el-button style="width: 100%;" type="primary" @click="login">登 录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      show: false,
      innerVisible: false,
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    showDialog () {
      this.show = true
    },
    login () {
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(response => {
          console.log(response)
          if (response.data.code === 200) {
            this.$router.replace({path: '/index'})
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
.login {
  .el-dialog {
    width: 40%;
    padding: 10px 40px;
    border-radius: 15px;
    border: 1px solid #68AAAD;
    box-shadow: 0 0 25px #494949;
    .el-dialog__title {
      font-size: 28px;
      color: rgb(94, 147, 150);
    }
  }
}
.repeatCss {
  .el-dialog {
    width: 40%;
    padding: 10px 40px;
    border-radius: 15px;
    border: 1px solid #68AAAD;
    box-shadow: 0 0 25px #494949;
    .el-dialog__title {
      font-size: 28px;
      color: rgb(94, 147, 150);
    }
  }
}
</style>
