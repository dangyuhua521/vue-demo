<template>
    <div >
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>
<script>
import DetailBanner from './compt/banner'
import DetailHeader from './compt/header'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader
    }
}
</script>
<style scoped>
.content{
    height: 50rem;
}
</style>

