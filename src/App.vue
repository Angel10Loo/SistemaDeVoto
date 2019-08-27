<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <router-link to="/" class="text-white">Home</router-link>||||
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <router-link to="/about" class="text-white">About</router-link>||||
            </li>
            <li class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <router-link to="/Contact" class="text-white">Contact</router-link>
            </li>||||
            <li class="nav-item">
              <router-link to="/Users" class="text-white">Users</router-link>||
            </li>||||
            <li class="nav-item">
              <router-link to="/States" class="text-white">States</router-link>||
            </li>||||
            <li class="nav-item">
              <router-link to="/Groups" class="text-white">Group</router-link>
            </li>
||||
            <li class="nav-item">
              <router-link to="/Votings" class="text-white">Votings</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-primary mr-sm-2">Iniciar seccion</button>
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Registrarse</button>
          </form>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
