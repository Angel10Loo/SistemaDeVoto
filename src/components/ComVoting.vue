<template>
    <div class="votings">
        <br>
        <br>
        <br>
        <br>
        <br>
        <button class="btn btn-primary form-inline my-2 my-lg-0">Add voting</button>
        <table class="table Container">

  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Descripton state</th>
      <th scope="col">Voting descripton</th>
      <th scope="col">DateTime start</th>
      <th scope="col">DateTime end</th>
      <th scope="col">Quantity vote</th>
        <th scope="col">Winner</th>
        <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Opend</td>
      <td>Candidatos 2019</td>
      <td>1/8/2019</td>
     <td>2/8/2019</td>
      <td>0</td>
      <td></td>
      <button class="btn btn-info"> Edit</button>
      <button class="btn btn-warning"> Details</button>
      <button class="btn btn-danger"> Delete</button>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Opend</td>
      <td>Candidatos 2019</td>
      <td>1/8/2019</td>
     <td>2/8/2019</td>
      <td>0</td>
      <td></td>
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
  name: 'ComVoting',
 
   
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