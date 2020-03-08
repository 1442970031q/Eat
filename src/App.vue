<template>
  <div>
      <router-view></router-view>
      <menus />
  </div>
</template>

<script>
import menus from './components/menu/menu'

export default {
  components:{menus},
  template:'<menus />'
}
</script>

<style>

</style>