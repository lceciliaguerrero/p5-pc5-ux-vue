<template>
  <div class="featured">
    <div class="card border-0 mb-3 bg-transparent">
      <div class="row g-0">
        <div class="col-md-7 d-block justify-content-center align-self-center">
          <div class="card-body me-md-7">
            <h5 class="card-title text-naranja-texto fs-2 lh-lg">This is a FREE website template</h5>
            <p class="card-text mb-md-4 texto-justificado lh-sml fs-7 text-grey-texto texto-display texto-sombreado">
              This website template has been designed by Free Website Templates for you, for free. You can replace all
              this text with your own text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper</p>
            <p class="card-text">
              <small class="text-muted d-grid gap-2 col-md-6 mx-auto">
                <button
                    class="border border-2 p-md-0 border-naranja-texto-oscuro user-select-none btn btn-lg button-degradado text-white fs-3"
                    data-bs-toggle="button" type="button"
                    onclick="parent.location='blog.html'">Read more
                </button>
              </small>
            </p>
          </div>
        </div>
        <div class="col-md-5">
          <img src="@/assets/img/house.jpg" class="img-fluid rounded-start" alt="House">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Featured"
}
</script>

<style scoped>

</style>