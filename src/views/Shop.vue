<template>
  <div class="shop">
    <main class="container-fluid py-md-0">
      <h2 class="text-grey-texto">Products</h2>

      <div class="row">
        <div class="col-lg-7 col-md-12">
          <Products />
        </div>
        <div class="col-lg-5 col-md-12">
          <Carrito />
          <div>
            <router-link to="/checkout"><a class="nav-link">Checkout</a></router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Carrito from "@/components/Carrito";
import Products from "@/components/Products";
export default {
  components: { Products, Carrito },
  methods: {
    comprarProducto(prod) {
      /*let searchProductFind = this.listProductsComp.find((produc) => product.id === produc.id);
      let pr = searchProductFind.length > 0;
      if (pr === false) {
        this.listProductsComp.push(product);
      } else {
        pr[0].unidades += prod.unidades;
      }
      prod.unidades = 1;
      let searchProduct = this.listProductsComp.findIndex((produc) => product.id === produc.id);
      if (searchProduct === -1) {
        this.listProductsComp.push(product);
      }*/
      this.$store.commit('comprarProducto', prod);
    },
    anyadirCantidad(prod) {
      /*let searchProduct = this.listProductsComp.findIndex((produc) => cantidad.id === produc.id);
      console.log(this.listProductsComp[searchProduct].unidades);
      if (this.listProductsComp[searchProduct].unidades < 10) {
        this.listProductsComp[searchProduct].unidades += 1;
      }
      console.log('cantidad maxima')*/
      this.$store.commit('anyadirCantidad', prod);
    },
    eliminarCantidad(prod) {
      /*let searchProduct = this.listProductsComp.findIndex((produc) => cantidad.id === produc.id);
      if (this.listProductsComp[searchProduct].unidades > 0) {
        this.listProductsComp[searchProduct].unidades -= 1;
      }
      console.log('cantidad minima');*/
      this.$store.commit('eliminarCantidad', prod);

    },
    eliminarProducto(prod) {
      /*let searchProduct = this.listProductsComp.findIndex((produc) => prod.id === produc.id);
      this.listProductsComp.splice(searchProduct.id, 1);*/
      this.$store.commit('eliminarProducto', prod);
    }
  }
}
</script>