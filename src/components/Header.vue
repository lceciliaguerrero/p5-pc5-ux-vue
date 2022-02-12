<template>
  <div class="encabezado">
    <header class="container-fluid px-md-0">
      <!-- Menú para versión Responsibe -->
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="../assets/img/logo.gif" alt="logo"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto fs-6">
              <li class="nav-item ms-6">
                <router-link to="/"
                ><a class="nav-link">Home</a></router-link
                >
              </li>
              <li class="nav-item ms-6">
                <router-link to="/shop"
                ><a class="nav-link">Shop</a></router-link
                >
              </li>
              <li class="nav-item ms-6">
                <router-link to="/blog"
                ><a class="nav-link">Blog</a></router-link
                >
              </li>
              <li class="nav-item ms-6">
                <router-link to="/checkout"
                ><a class="nav-link">Checkout</a></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>

</style>
