<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/> 
        </div>
            <div 
            v-show="keyword"
            class="search-content"
            ref="search"
            >
                <ul>
                    <li 
                    class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                    >{{item.name}}</li>
                    <li 
                    class="search-item border-bottom"
                    v-show="hasData"
                    >
                        没有找到匹配数据
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name:'CitySearch',
  props:{
      cities:Object
  },
  data (){
      return {
          keyword:'',
          list:[],
          timer:null
      }
  },
  computed:{
      hasData(){
          return !this.list.length
      }
  },
    watch:{
       keyword(){
        if(this.timer){
           clearTimeout(this.timer) 
        }
        if(!this.keyword){
            this.list=[]
            return
        }
        this.timer=setTimeout(()=>{
            const result=[]
            for(let i in this.cities){
                this.cities[i].forEach((value)=>{
                    if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword)> -1){
                        result.push(value)
                    }
                })
            }
            this.list=result
        },100)
       } 
    },
    methods:{
        handleCityClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.search)
    }
}
</script>
<style scoped>
.search{
    height: .72rem;
    background: #00bcd4;
    padding: 0 .1rem;
}
.search-input{
    padding: 0 .1rem;
    box-sizing: border-box;
    height: .62rem;
    line-height: .62rem;
    width: 100%;
    text-align: center;
    border-radius: .06rem;
    color: #666;
}
.search-content{
    overflow: hidden;
    background: #eee;
    z-index: 1;
    position: absolute;
    top:1.58rem;
    left:0;
    right:0;
    bottom:0;
}
.search-item{
    line-height: .62rem;
    padding-left:.2rem;
    background: #fff;
    color: #666; 
}
</style>
