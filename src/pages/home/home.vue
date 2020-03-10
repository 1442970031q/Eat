<template>
  <div>
    <roof title="首页">
      <div slot="left-icon">
        <i class="icon iconfont icon-sixin"></i>
      </div>
    </roof>
  </div>
</template>

<script>
import roof from "./../../components/roof/roof";
import { funs, getHomeDataAjax } from "./../../api";

export default {
  components: { roof },
  template: " <roof />",
  mounted() {
    // this.getData();
    getHomeDataAjax().then(success => {
      console.log(success);
    });
  },
  methods: {
    // async getData() {
    //   let data = await ajaxs("/home");
    //   console.log(data);
    // }
  }
};
</script>

<style>
.left-icon {
  font-weight: bold;
}
</style>