<template>
<div>
    <router-link 
    v-show="showabs"
    tag="div" to="/" 
    class="header-abs">
        <div class="iconfont header-abs-back" >&#xe624;</div>
    </router-link>
    <div 
    :style="opacityStyle"
    class="header-fixed"
    v-show="!showabs"
    >
            <router-link to="/">
              <div class="iconfont header-fixed-back" >&#xe624;</div>  
            </router-link>
        景点详情
    </div>
</div>
</template>
<script>
export default {
    name:'DetailHeader',
    data(){
        return {
            showabs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
        const top=document.documentElement.scrollTop
            if(top > 60){
                let opacity=top/140
                opacity=opacity > 1 ? 1 :opacity
                this.opacityStyle={opacity}
                this.showabs=false
            }else{
               this.showabs=true
            }  
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>
<style scoped>
.header-abs{
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    border-radius: .4rem;
    background: rgba(0, 0, 0, .8);
    text-align: center;
    line-height: .8rem;
}
.header-abs-back{
    color: #fff;
    font-size: .4rem;
}
.header-fixed{
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    font-size: .32rem;
}
.header-fixed-back{
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    color: #fff;
}
</style>