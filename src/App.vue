<template>
  <div id="app">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal"  @select="handleSelect">
      <router-link to="/index"><i class="logo"><span></span></i></router-link>
      <el-menu-item index="/classic">典</el-menu-item>
      <el-menu-item index="/info">闻</el-menu-item>
      <el-menu-item index="/fun">趣</el-menu-item>
      <el-menu-item index="/savor">品</el-menu-item>
      <el-menu-item index="/activity">竞</el-menu-item>
      <el-input v-model="search" class="search" placeholder="请输入" size="mini">
        <el-button type="text" slot="append" @click="goSearch" icon="el-icon-search" size="mini"></el-button>
      </el-input>
      <el-button class="login" type="text" @click="goLogin" icon="el-icon-s-custom"> 登录</el-button>
    </el-menu>
    <div class="zhezhao" id="zhezhao"></div>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({path: key})
    },
    goLogin () {
      this.$router.push({path: '/login'})
    },
    goSearch () {
      if (this.search !== null) {
        this.$router.push({
          path: '/search',
          query: { search: this.search }
        })
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
  background-image: url("./assets/background.png");
  background-repeat: repeat;
  padding-bottom: 50px;
}
.zhezhao {
  width:100%;
  height:100%;
  background-color:#000;
  filter:alpha(opacity=50);
  -moz-opacity:0.5;
  opacity:0.5;
  position:absolute;
  left:0px;
  top:0px;
  display:none;
  z-index:1000;
}
.logo {
  width: 30px;
  height: 30px;
  margin: 16px;
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
  margin: 0 auto;
  padding: 0 120px;
  .el-menu-item {
    padding: 0 20px;
    margin: 0 30px!important;
    font-size: 20px;
  }
  .search {
    width: 200px;
    margin-top: 20px;
  }
  .login {
    float: right;
    margin-top: 20px;
  }
}

</style>
