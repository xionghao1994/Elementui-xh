<template>
 <div class="index">
    <div class="menu_left">
     <v-aside></v-aside>
    </div>
    <div class="menu_right">
     <v-header></v-header> 
     <div class="content-box">
        <v-Tags></v-Tags>
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
     </div>
    </div>
 </div>
</template>
<script>
 import aside from '../components/aside.vue';
 import header from '../components/header.vue'
 import Tags from '../components/Tags.vue'
 import bus from './bus';
export default{
   data(){
       return{
         tagsList: []
       }
   },
   created(){
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for(let i = 0, len = msg.length; i < len; i ++){
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        })
   },
   components:{
       'v-aside':aside,
       'v-header':header,
       'v-Tags':Tags
   }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.index{
    height:100%;
    position:relative;
}
.content-box {
    position:relative;
    width:100%;
    left:auto;
    right: 0;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
}
.menu_left{
    float:left;
    height:100%;
}
.content{
    padding-top:12px; 
}
</style>