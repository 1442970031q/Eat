<template>
  <!-- 头部导航栏
  prams: type,title ,slot-->
  <div class="head">
    <slot name="left">
      <div class="left">
        <slot name="left-icon"></slot>
      </div>
    </slot>
    <slot name="center">
      <div class="center">
        <slot name="center-content">
          <div class="title" v-text="title"></div>
        </slot>
      </div>
    </slot>
    <slot name="right">
      <div class="right">
        <slot name="right-icon"></slot>
      </div>
    </slot>
  </div>
</template>
 

<script>
export default {
  props: ["type", "title"]
};
</script>

<style>
.head {
  height: 45px;
  background: white;
}

.head .left,
.head .right {
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.head .center {
  display: inline-block;
  width: calc(100% - 90px);
  height: 45px;
}
.head .left,
.head .right,
.head .center {
  display: inline-block;
  position: absolute;
}
.head .center {
  left: 45px;
}
.head .right {
  right: 0;
}
.head .center .title {
  text-align: center;
  line-height: 45px;
  font-size: 1.3em;
}
.head .left .iconfont {
  font-size: 1.3em;
}
</style>