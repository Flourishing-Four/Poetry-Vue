<template>
  <div class="login">
    <el-dialog title="登 录" :visible.sync="show" center>
      <el-dialog  class="repeatCss" title="注 册" :visible.sync="innerVisible" center append-to-body>
        <el-form class="login-container" label-position="left" label-width="0px">
          <el-form-item>
            <el-input type="text" v-model="registerForm.username" auto-complete="off" placeholder="用户名"/>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="密码"/>
          </el-form-item>
        </el-form>
          <el-button style="float: left; padding: 4px 10px" type="text" @click="innerVisible = false">返回登录</el-button>
        <span slot="footer" class="dialog-footer">
          <el-button style="width: 100%;" type="primary" @click="register">注 册</el-button>
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
import { mapMutations } from 'vuex'
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
      registerForm: {
        username: '',
        password: ''
      },
      responseResult: [],
      userToken: ''
    }
  },
  methods: {
    showDialog () {
      this.show = true
    },
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        this.$message.error('用户名或密码不能为空')
      } else {
        this.$axios
          .post('http://localhost:8443/api/login', {
            username: this.loginForm.username,
            password: this.loginForm.password,
            rememberMe: true
          },
          {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:8080',
              'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
              'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
              'X-Powered-By': ' 3.2.1',
              'Content-Type': 'application/json;charset=utf-8'
            }
          })
          .then(response => {
            console.log(response)
            if (response.status === 200) {
              _this.userToken = response.headers.authorization
              // _this.userToken = 'Bearer' + response.headers.authorization
              console.log(_this.userToken)
              // 将用户token保存到vuex中
              _this.changeLogin({ Authorization: _this.userToken, Username: _this.loginForm.username })
              // this.$router.push('/index')
              // alert('登录成功')
              this.show = false
              this.$emit('charge', this.show, this.loginForm.username)
              this.$message('恭喜你，登录成功！')
            }
          })
          .catch(error => {
            this.$message.error('用户名或密码错误，请重新输入')
            console.log(error)
          })
      }
    },
    register () {
      if (this.registerForm.username === '' || this.registerForm.password === '') {
        this.$message.error('用户名或密码不能为空')
      } else {
        this.$axios
          .post('/register', {
            username: this.registerForm.username,
            password: this.registerForm.password
          })
          .then(response => {
            console.log(response)
            this.$message('恭喜你，注册成功！')
          })
          .catch(error => {
            this.$message.error('您注册的用户名已被使用')
            console.log(error)
          })
        this.loginForm.username = this.registerForm.username
        this.loginForm.password = this.registerForm.password
        setTimeout(() => { this.innerVisible = false }, 3000)
      }
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
