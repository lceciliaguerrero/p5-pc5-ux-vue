<template>
  <div class="container-fluid bg-background-gray py-md-5 px-md-9">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<style></style>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: { Footer, Header },
  data() {

  }
};
</script>