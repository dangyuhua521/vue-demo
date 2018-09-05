<template>
    <div>
       <home-header ></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
    
</template>
<script>
import HomeHeader from './pages/header'
import HomeSwiper from './pages/swiper'
import HomeIcons from './pages/icons'
import HomeRecommend from './pages/recommend'
import HomeWeekend from './pages/weekend'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    computed:{
        ...mapState(['city'])
    },
    data(){
       return{
           lastCity:'',
           swiperList:[],
           iconList:[],
           recommendList:[],
           weekendList:[]
       } 
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json?city='+this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res=res.data
            if(res.ret&&res.data){
                const data=res.data
                this.swiperList=data.swiperList
                this.iconList=data.iconList
                this.recommendList=data.recommendList
                this.weekendList=data.weekendList
            }
            console.log(res)
        }
    },
    mounted(){
        this.lastCity=this.city
        this.getHomeInfo()
    },
    activated(){
        if(this.lastCity !==this.city){
            this.lastCity=this.lastCity
            this.getHomeInfo() 
        }
    }

}
</script>
<style>

</style>
