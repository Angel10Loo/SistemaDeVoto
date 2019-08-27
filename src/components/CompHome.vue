<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    
    <div class="jumbotron">
    <div class="row">
        <div class="col-md-5">
            <h1>Democracia</h1>
            <p class="lead text-primary">Sistema de votacion para el pais</p>

            
        </div>
        <div class="col-md-7">

            <img src="../assets/Dmc.jpg" width="400px" height="220px" alt="Alternate Text" />

            </div>
        </div>
    </div>
   <div class="row">
            <div class="col-md-4">
                <h2>Configuracion</h2>
                <img src="../assets/st.png" width="100px" height="90px" alt="Alternate Text" />
                <p>
                    Datos Personales
                </p>
               <button class="btn btn-primary">Configuracion</button>
            </div>
            <div class="col-md-4">
                <h2>Votaciones</h2>
            <img src="../assets/vt.jpg" width="100px" height="90px" alt="Alternate Text" />
                <p>Votas por diferentes candidatos</p>
              <button class="btn btn-warning">Votaciones</button>
            </div>
            <div class="col-md-4">
                <h2>Resultado</h2>
                <img src="../assets/rs.png" width="100px" height="90px" alt="Alternate Text" />
                <p>Ver los resultado de las votaciones</p>
              <button class="btn btn-info">Resultado</button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'CompHome',
  props: {
    msg: String
  }
}
</script>
