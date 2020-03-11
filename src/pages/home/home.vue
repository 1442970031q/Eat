<template>
  <div class="pd-55">
    <roof title="首页">
      <div slot="left-icon">
        <i class="icon iconfont icon-sixin"></i>
      </div>
    </roof>
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in pageModel.data.Swipers" v-bind:key="item.id">
          <img class="swipe_img" v-bind:src="item.ImageAddress" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <ul class="notice">
      <li class="menu">
        <i class="icon iconfont icon-yaoqing"></i>
        <p class="name">任务</p>
      </li>
      <li class="menu">
        <i class="icon iconfont icon-empty-fans"></i>
        <p class="name">领导</p>
      </li>
      <li class="menu">
        <i class="icon iconfont icon-scan"></i>
        <p class="name">扫描</p>
      </li>
      <li class="menu">
        <i class="icon iconfont icon-mima"></i>
        <p class="name">密码</p>
      </li>
    </ul>
    <div class="content">
      <p class>跨境购物</p>
      <ul class="blocks">
        <li  class="block" v-for="item in pageModel.data.Products" v-bind:key="item.Id" >
          <div  >
            <img v-bind:src="item.ImageAddress" class="img" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import roof from "./../../components/roof/roof";


export default {
  data() {
    return {
      pageModel: {}
    };
  },
  components: { roof },
  template: " <roof />",
  mounted() {
    console.log('--------------------------------------------')
    this.$store.dispatch("getHomeData");
    this.pageModel = this.$store.state.home;
  },
  methods: {}
};
</script>

<style>
.pd-55{
  padding-bottom: 65px;
}

.left-icon {
  font-weight: bold;
}

.swipe {
  padding: 0 15px;
  background-color: white;
  padding-top: 10px;
}

.swipe .swipe_img {
  display: block;
  width: 100%;
  border-radius: 5px;
}

.notice {
  padding: 10px;
  background-color: white;
  display: flex;
}

.notice .menu {
  width: 25%;
  text-align: center;
}

.notice .menu .icon {
  font-size: 1.6em;
}

.notice .menu .name {
  font-size: 0.8em;
}

.content {
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: white;
  margin-top: 10px;
}

.content .title {
  font-weight: 800;
  color: #7563eb;
}

.content .blocks {
  display: flex;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}


.content .blocks .block {
  width: 50%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 15px;
}

.content .blocks .block .img {
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
}
</style>