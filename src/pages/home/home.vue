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
import {funs} from './../../api'

export default {
  components: { roof },
  template: " <roof />",
  mounted(){
     funs('musicRankings').then((s)=>{
       console.log(s);
     });
  }
};
</script>

<style>
.left-icon{
  font-weight: bold;
}
</style>