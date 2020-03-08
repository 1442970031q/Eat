<template>
  <div class="menus">
    <div class="menu" v-bind:class="{'active':($route.path==='/home'||$route.path==='/')}" v-on:click="gotoNewComponent('/home')">
      <i class="icon iconfont icon-homepage_fill"></i>
      <p class="name">首页</p>
    </div>
    <div class="menu" v-bind:class="{'active':$route.path==='/search'}" v-on:click="gotoNewComponent('/search')">
      <i class="icon iconfont icon-todo-fill"></i>
      <p class="name">订单</p>
    </div>
    <div class="menu"  v-bind:class="{'active':$route.path==='/center'}" v-on:click="gotoNewComponent('/center')">
      <i class="icon iconfont icon-people_fill"></i>
      <p class="name">我的</p>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    gotoNewComponent(path){
      if(path===this.$route.path){
        return;
      }
      this.$router.replace(path);
    }
  }
};
</script>

<style>
.menus {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  background: white;
}
.menus .menu {
  width: 33.333333333%;
  text-align: center;
  padding-top: 3px;
  box-sizing: border-box;
}
.menus  .active{
  color: green;
}
.menus .menu .iconfont {
  font-size: 1.8em;
}

.menus .menu .name {
  font-size: 0.8em;
}
</style>