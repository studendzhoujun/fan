<template>
   <div>
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
    <Product></Product>
  </div>
</template>

<style scoped>
 .image {
    width: 700px;
    height: 700px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;
  }
</style>
<script>
  import api from '../APIconfig.js'
  import Product from './product.vue'
  export default {
    data () {
      return {
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    },
    components:[Product],
    created(){
       console.log(api.data[0].focusPhotoListTemplet)
      //  api.data[0].focusPhotoListTemplet.forEach(item=>{
      //    console.log('https:'+item.imageUrl)
      //    this.imageList.push('https:'+item.imageUrl)
      //  })
    },
    methods:{
      go(){
        alert(1)
      }
    }
  }
</script>
