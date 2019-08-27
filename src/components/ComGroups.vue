<template>
    <div class="groups">


        <br>
        <br>
        <br>
        <br>
        <br>
        <button class="btn btn-primary form-inline my-2 my-lg-0">Create new</button>
        <table class="table Container">

  <thead class="thead-dark">
    <tr>
      
      
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Cenadores</td>
    
      <button class="btn btn-info"> Edit</button>
      <button class="btn btn-warning"> Details</button>
      <button class="btn btn-danger"> Delete</button>
    </tr>
    <tr>
      <th scope="row"></th>
   <td>Presidentes</td>
     
      <button class="btn btn-info"> Edit</button>
      <button class="btn btn-warning"> Details</button>
      <button class="btn btn-danger"> Delete</button>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {
  name: 'ComGroups',
 
   
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