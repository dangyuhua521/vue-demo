<template>
    <div class="list">
       <div class="area">
           <div class="title border-topbottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
           </div>
       </div>
       <div class="area">
           <div class="title border-topbottom">热门城市</div>
           <div class="button-list">
               <div 
               class="button-wrapper" 
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)"
               >
                    <div class="button">{{item.name}}</div>
                </div>  
            </div>
       </div>
       <mt-index-list :show-indicator="false">
           <!-- 把a-z的key拿到 -->
           <mt-index-section 
             :index="key"
             v-for="(item,key) in cities"
             :key="key"
            >
               <!-- <mt-cell :title="key" class="item-list"></mt-cell> -->
               <!-- 把a-z渲染到页面上，对应key下的数据循环 -->
               <mt-cell :title="e.name"
                v-for="e of item" 
                :key="e.id"
                @click.native="handleCityClick(e.name)"
                 ></mt-cell> 
           </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'CityList',
    props:{
      hot:Array,
      cities:Object  
    },
    // 把city的共用属性映射到计算属性中
    computed:{
        ...mapState({
            currentCity:"city"
        })
    },
    methods:{
        handleCityClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    }
}
</script>
<style>
.border-topbottom{
    border-bottom: 1px solid #ebebeb;
}
.list{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
}
.title{
    line-height: .54rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
}
.button-list{
    padding: .1rem .6rem .1rem .1rem;
    overflow: hidden;

}
.button-wrapper{
    width: 33.33%;
    float: left;
}
.button{
    text-align: center;
    padding: .1rem 0;
    border-radius: .06rem;
    margin: .1rem;
    border: .02rem solid #ccc;
}
.mint-indexlist-nav{
    bottom: auto;
}
.mint-cell-text{
    font-size: .26rem;
    color: #666;
}
.mint-indexlist-navlist{
    color: #00bcd4;
}
</style>
