<template>
  <div class="BlogCard">
    <div class="row-cols-auto bg-transparent">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col-sm-auto px-md-5">
          <div class="card">
            <div class="card-header bg-transparent">
              <img src="@/assets/img/pastries.jpg" class="card-img-top" alt="pastries">
            </div>
            <div class="card-body">
              <p class="card-text texto-justificado fs-8 lh-sm text-grey-texto">This website template has been
                designed by Free Website Templates for you, for free. You can replace all this text
                with your own text.</p>
            </div>
            <div class="card-footer text-center bg-background-gray">
              <p class="nav d-flex flex-column card-text">
                <small class="text-muted nav-item">
                  <router-link to="/blog">
                    <a class="nav-link">
                      <button class="border-0 user-select-none" data-bs-toggle="button" type="button">
                        <img
                          src="@/assets/img/button-more.jpg"
                          class="card-img-top"
                          alt="pastries"
                        />
                      </button>
                    </a>
                    </router-link>
                </small>
                <small class="text-muted nav-item fst-italic">
                  <router-link to="/blog">
                    <a class="nav-link">
                      Click to read more <span class="badge text-naranja-texto"><i class="far fa-thumbs-up"></i><sup>6</sup></span>
                    </a>
                  </router-link>

                </small>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-auto px-md-5">
          <div class="card">
            <div class="card-header bg-transparent">
              <img src="@/assets/img/pastries.jpg" class="card-img-top" alt="pastries">
            </div>
            <div class="card-body">
              <p class="card-text texto-justificado fs-8 lh-sm text-grey-texto">This website template has been
                designed by Free Website Templates for you, for free. You can replace all this text
                with your own text.</p>
            </div>
            <div class="card-footer text-center bg-background-gray">
              <p class="nav d-flex flex-column card-text">
                <small class="text-muted nav-item">
                  <router-link to="/blog">
                    <a class="nav-link">
                      <button class="border-0 user-select-none" data-bs-toggle="button" type="button">
                        <img
                            src="@/assets/img/button-more.jpg"
                            class="card-img-top"
                            alt="pastries"
                        />
                      </button>
                    </a>
                  </router-link>
                </small>
                <small class="text-muted nav-item fst-italic">
                  <router-link to="/blog">
                    <a class="nav-link">
                      Click to read more <span class="badge text-naranja-texto"><i class="far fa-thumbs-up"></i><sup>4</sup></span>
                    </a>
                  </router-link>

                </small>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-auto px-md-5">
          <div class="card">
            <div class="card-header bg-transparent">
              <img src="@/assets/img/pastries.jpg" class="card-img-top" alt="pastries">
            </div>
            <div class="card-body">
              <p class="card-text texto-justificado fs-8 lh-sm text-grey-texto">This website template has been
                designed by Free Website Templates for you, for free. You can replace all this text
                with your own text.</p>
            </div>
            <div class="card-footer text-center bg-background-gray">
              <p class="nav d-flex flex-column card-text">
                <small class="text-muted nav-item">
                  <router-link to="/blog">
                    <a class="nav-link">
                      <button class="border-0 user-select-none" data-bs-toggle="button" type="button">
                        <img
                            src="@/assets/img/button-more.jpg"
                            class="card-img-top"
                            alt="pastries"
                        />
                      </button>
                    </a>
                  </router-link>
                </small>
                <small class="text-muted nav-item fst-italic">
                  <router-link to="/blog">
                    <a class="nav-link">
                      Click to read more <span class="badge text-naranja-texto"><i class="far fa-thumbs-down"></i><sup>2</sup></span>
                    </a>
                  </router-link>

                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BlogCard"
}
</script>

<style scoped>
</style>