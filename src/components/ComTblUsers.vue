<template>
    <div class="users">




        <br>
        <br>
        <br>
        <br>
        <br>
        <button class="btn btn-primary form-inline my-2 my-lg-0">Add user</button>
        <table class="table Container">

  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">E-mail</th>
      <th scope="col">User</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Grade</th>
        <th scope="col">Group</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>angel10elduro@gmail.com</td>
      <td>Angel,Gonzalez</td>
      <td>343523</td>
     <td>Dajabon</td>
      <td>4toA</td>
      <td>A2</td>
      <button class="btn btn-info"> Edit</button>
      <button class="btn btn-warning"> Details</button>
      <button class="btn btn-danger"> Delete</button>
    </tr>
    <tr>
      <th scope="row">2</th>
   <td>Leo30Lo@gmail.com</td>
      <td>Jorge,Gonzalez</td>
      <td>343523</td>
     <td>Dajabon</td>
      <td>4toA</td>
      <td>D2</td>
      <button class="btn btn-info"> Edit</button>
      <button class="btn btn-warning"> Details</button>
      <button class="btn btn-danger"> Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Manuel@gmail.com</td>
      <td>Manuel,Acevedo</td>
      <td>343523</td>
     <td>Dajabon</td>
      <td>4toC</td>
      <td>B2</td>
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
  name: 'ComTblUsers',
 
   
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