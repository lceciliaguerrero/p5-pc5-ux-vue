<template>
  <div class="home">
    <main class="container-fluid py-md-0">
      <Featured />
      <LogCard />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import Featured from "@/components/Featured";
import LogCard from "@/components/BlogCard";
export default {
  name: "Home",
  components: { Featured, LogCard },
  data() {

  },
  methods: {

  }
};
</script>
