<template>
  <div id="app">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal"  @select="handleSelect">
      <router-link to="/index"><i class="logo"><span></span></i></router-link>
      <el-menu-item index="/classic">典</el-menu-item>
      <el-menu-item index="/info">闻</el-menu-item>
      <el-menu-item index="/fun">趣</el-menu-item>
      <el-menu-item index="/savor">品</el-menu-item>
      <el-menu-item index="/activity">竞</el-menu-item>
      <el-input v-model="search" class="search" placeholder="请输入" size="mini" @keyup.enter.native="goSearch">
        <el-button type="text" slot="append" @click="goSearch" icon="el-icon-search" size="mini"></el-button>
      </el-input>
      <el-button class="login" type="text" v-show="!isLogin" @click="goLogin" icon="el-icon-s-custom"> 登 录</el-button>
      <el-popover class="login" v-show="isLogin" placement="bottom" trigger="hover" visible-arrow>
        <el-button @click="goUser" type="text" style="display: block; margin-left: 10px;">个人中心</el-button>
        <el-button @click="logout" type="text" style="display: block">退出登录</el-button>
        <el-button slot="reference" @click="goUser" icon="el-icon-s-custom" type="text" style="margin-top: 14px;">{{username}}</el-button>
      </el-popover>
    </el-menu>
    <login ref="login" @charge="charge"></login>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
import Login from './components/Login'
import Userbox from './components/user/userBox'
import eventBus from './components/eventBus.js'// vue的空白实例（兄弟间的桥梁）
export default {
  components: {
    Login,
    Userbox
  },
  data () {
    return {
      search: null,
      isLogin: false,
      username: ''
    }
  },
  created () {
    if (localStorage.getItem('Username') && !this.isLogin) {
      this.username = localStorage.getItem('Username')
      this.isLogin = !this.isLogin
      console.log(localStorage.getItem('Username') + !this.isLogin)
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({path: key})
    },
    goLogin () {
      // this.$router.replace({path: '/login'})
      this.$refs.login.showDialog()
    },
    goUser () {
      this.$router.push({path: '/user', query: {user: this.username}})
    },
    logout () {
      localStorage.removeItem('Authorization')
      this.$router.push('/index')
      this.isLogin = false
      this.$message('退出成功')
    },
    goSearch () {
      if (this.search !== null) {
        this.$router.push({
          path: '/search',
          query: { search: this.search }
        })
        eventBus.$emit('add', this.search)
        // console.log(this.$refs.child)
        // this.$refs.child.parentChild('keyyima')
      }
    },
    charge (msg, username) {
      console.log(msg)
      console.log(username)
      this.username = username
      if (!msg && localStorage.getItem('Authorization')) {
        // console.log(localStorage.getItem('Authorization'))
        this.isLogin = true
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  margin: 0 auto;
  color: #2c3e50;
  background-image: url('./components/img/bkgd.png');
  background-size: 100%;
  background-attachment: fixed;
  // filter: blur(3px);
  /* background-image: url("./assets/background.png");
  background-repeat: repeat; */
  //padding-bottom: 50px;
}
.el-menu,
.el-menu::before{
  background-image: url('./components/img/menuImg.png');
}
.logo {
  width: 30px;
  height: 30px;
  margin: 14px 16px 16px 16px;
  padding-right: 20px;
  float: left;
  display: block;
  background-image: url("./assets/logo.png");
  background-size:  30px;
  background-repeat: no-repeat;
}
a,
.router-link-active
a:focus {
  text-decoration: none;
  outline: none;

}
.el-menu {
  text-align: center;
  margin: 0 auto;
  padding: 0 80px;
  padding-top: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  .el-menu-item {
    font-family: 'STLITI';
    padding: 0 20px;
    margin: 0 30px!important;
    font-size: 34px;
  }
  .search {
    width: 200px;
    margin: 10px;
  }
  .login {
    // float: right;
    margin-left: 60px;
    margin-top: 16px;
    margin-right: 120px;
  }
}
.el-popover {
  min-width: 80px;
  padding-left: 10px;
}

</style>
