<template>
  <div class="menus">
    <div
      v-for="(item,index) in menus"
      v-bind:key="index"
      class="menu"
      v-bind:class="{'active': item.path.indexOf($route.path) >=0}"
      v-on:click="gotoNewComponent(item.path[0])"
    >
      <i v-bind:class=" item.path.indexOf($route.path) >=0?item.active : item.default"></i>
      <p class="name" v-text="item.name"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "首页",
          default: "icon iconfont icon-homepage",
          active: "icon iconfont icon-homepage_fill",
          path: ["/home", "/"]
        },
        {
          name: "订单",
          default: "icon iconfont icon-todo-line",
          active: "icon iconfont icon-todo-fill",
          path: ["/search"]
        },
        {
          name: "我的",
          default: "icon iconfont icon-people",
          active: "icon iconfont icon-people_fill",
          path: ["/center"]
        }
      ]
    };
  },
  methods: {
    gotoNewComponent(path) {
      if (path === this.$route.path) {
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
  padding-top: 4px;
  box-sizing: border-box;
}
.menus .active {
  color: green;
}
.menus .menu .iconfont {
  font-size: 1.8em;
}

.menus .menu .name {
  font-size: 0.8em;
}
</style>