<template>
  <div id="app">
    <!--router-view插槽，嵌套所有组件 -->
      <router-view></router-view>
  </div>
</template>
<script>
  export default{
    data(){
      return{}
    }
  }
</script>
<style lang="less">
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
}
a{
  color: #56a9ff;
}
.fade-enter-active,
.fade-leave-active {
	transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
