<template>
 <div class="index">
<el-container>
 <!-- 侧边栏-->
   <v-aside></v-aside>
   <!-- /侧边栏-->
  <el-container>
    <el-header>
       <v-header></v-header>
    </el-header>
    <el-main>
      <v-content></v-content>
    </el-main>
    <el-footer>Copyright © 2018 xuAdmin.</el-footer>
  </el-container>
</el-container>
 </div>
</template>
<script>
 import aside from '../components/aside.vue';
 import header from '../components/header.vue'
 import content from '../components/content.vue'
export default{
   data(){
       return{

       }
   },
   components:{
       'v-aside':aside,
       'v-header':header,
       'v-content': content
   }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0; 
    height:100%;
}
.el-header{
    padding:0;
}
.el-aside{
   
}
.el-footer{
    height:100px;
    width:100%;
    overflow:hidden;
    background-color:#f2f2f2;
    color:#999;
    position:relative;
    padding-top:20px;
}
</style>