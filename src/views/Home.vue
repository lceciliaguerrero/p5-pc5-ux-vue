<template>
  <div class="home">
    <main class="container-fluid py-md-0">
      <div class="row">
        <div class="col-md-12 py-md-5">
          <Featured />
        </div>
        <div class="col-md-12 py-md-5">
          <BlogCard />
        </div>
        <div class="col-md-12 py-md-5">
          <Carrusel />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import Featured from "@/components/Featured";
import BlogCard from "@/components/BlogCard";
import Carrusel from "@/components/Carrusel";
export default {
  name: "Home",
  components: { Featured, BlogCard, Carrusel }
};
</script>
