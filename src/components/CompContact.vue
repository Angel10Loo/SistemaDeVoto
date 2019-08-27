<template>

    <div class="Contact">

        <h3>{{msg}}</h3>
       <div class="center"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Dajabon&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.org"></a></div>
       </div>

    </div>
</template>

<script>
export default {
  name: 'CompContact',
  props:['msg']
   
}
</script>

<style scoped>
.mapouter {
        position: relative;
        text-align: right;
        height: 500px;
        width: 600px;
    }

    .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 500px;
        width: 600px;
    }
</style>