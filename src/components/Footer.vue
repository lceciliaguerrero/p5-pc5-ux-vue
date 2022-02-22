<template>
  <div class="pie">
    <footer class="container-fluid py-md-0">
      <div class="d-flex justify-content-around align-items-center">
        <div class="navbar navbar-expand-md navbar-light">
          <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navSupportedContent">
              <ul class="nav fs-9 align-items-center">
                <li class="nav-item border-end">
                  <router-link to="/"
                  ><a class="nav-link">Home</a></router-link
                  >
                </li>
                <li class="nav-item border-end">
                  <router-link to="/about"
                  ><a class="nav-link">About</a></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/shop"
                  ><a class="nav-link">Shop</a></router-link
                  >
                </li>
<!--                <li class="nav-item">
                  <router-link to="/checkout"
                  ><a class="nav-link">Checkout</a></router-link
                  >
                </li>-->
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center fs-9">
          © Copyright © 2011. Company name all rights reserved
        </div>
        <div class="navbar navbar-expand-sm navbar-light">
          <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navLinksSocialIcons"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navLinksSocialIcons">
              <ul class="nav fs-4">
                <li class="nav-item px-md-4">
                  <a class="nav-link"><i class="fab fa-facebook-square text-grey-texto"></i></a>
                </li>
                <li class="nav-item px-md-4">
                  <a class="nav-link"><i class="fab fa-twitter text-grey-texto"></i></a>
                </li>
                <li class="nav-item px-md-4">
                  <a class="nav-link"><i class="fab fa-vimeo-v text-grey-texto"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>

</style>
