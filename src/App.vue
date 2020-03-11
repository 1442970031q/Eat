<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <menus />
  </div>
</template>

<script>
import menus from "./components/menu/menu";
export default {
  components: { menus },
  template: "<menus />  "
};
</script>

<style>
</style>