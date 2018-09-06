<template>
    <div class="container" @click="handleBannerClick">
       <div class="mt-swipe">
            <mt-swipe :auto="3000"  >
            <mt-swipe-item 
                v-for="(item,index) in imgs"
                :key="index"
            >
                <img :src="item" >
            </mt-swipe-item>
            </mt-swipe>       
        </div>  
    </div>
</template>
<script>
export default {
    name:'CommonGallary',
    props:{
        imgs:{
            type:Array,
            default (){
                return []
            }
        }
    },
    methods:{
        handleBannerClick(){
            this.$emit('close')
        }
    }
}
</script>
<style>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
}
.mt-swipe{
    overflow: hidden;
    height: 36%;
    /* width: 100%; */
}
.mt-swipe img{
    width: 100%;
    height:100%;
}
</style>
