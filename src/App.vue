<template>
  <div id="app">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal"  @select="handleSelect">
      <router-link to="/index"><i class="logo"><span></span></i></router-link>
      <el-menu-item index="/classic">典</el-menu-item>
      <el-menu-item index="/info">闻</el-menu-item>
      <el-menu-item index="/fun">趣</el-menu-item>
      <el-menu-item index="/savor">品</el-menu-item>
      <el-menu-item index="/activity">竞</el-menu-item>
      <el-button type="text" @click="gologin" class="el-icon-s-custom"> 登录</el-button>
    </el-menu>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
import AppIndex from '@/components/home/AppIndex'
import Login from './components/Login'
import Classic from './components/classic/classic'
import Info from './components/info/info'
import Fun from './components/fun/fun'
import Savor from './components/savor/savor'
import Activity from './components/activity/activity'
export default {
  components: {
    AppIndex,
    Login,
    Classic,
    Info,
    Fun,
    Savor,
    Activity
  },
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({path: key})
    },
    gologin () {
      this.$router.push({path: '/login'})
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
}
.logo {
  width: 30px;
  height: 30px;
  margin: 10px 0;
  float: left;
  display: block;
  background-image: url("./assets/logo.png");
  background-size:  30px;
  background-repeat: no-repeat;
  span {
    position: relative;
    left: 30px;
  }
}
a,
.router-link-active
a:focus {
  text-decoration: none;
  outline: none;

}
.el-menu {
  text-align: center;
  padding: 0 80px;
}
.el-menu-item {
  padding: 0 30px;
  margin: 0 50px!important;
}
</style>
