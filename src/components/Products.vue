<template>
  <div class="poroducts">
    <div class="row">
      <div class="col bg-transparent">

        <div class="card-group row">
          <div v-for="prod in listProducts" v-bind:key="prod.id" class="px-sm-1 col-sm-4">
            <div class="card">
              <div class="card-header bg-transparent">
                <img v-bind:src="prod.imagen" class="card-img-top" v-bind:alt="prod.nombre">
              </div>
              <div class="card-body">
                <p class="card-text texto-justificado fs-8 lh-sm text-naranja-texto fw-bold text-capitalize text-center">{{ prod.nombre }}</p>
                <p class="card-text texto-justificado fs-8 lh-sm text-grey-texto">{{ prod.precio }} € la unidad</p>
              </div>
              <div class="card-footer text-center">
                <p class="nav d-flex flex-column card-text">
                  <small class="text-muted nav-item">
                    <input
                        class="border border-2 p-md-0 border-naranja-texto-oscuro user-select-none btn btn-lg button-degradado text-white fs-3"
                        type="button" name="comprarFrita1" value="comprar" v-on:click="comprarProducto(prod)">
                    <!-- v-on:click="comprarFrita1"-->
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        <h3>Carrito</h3>
        <table class="table text-center table-responsive">
          <thead>
          <tr>
            <th>Nombre</th>
            <th>Unidades</th>
            <th>Precio por unidad</th>
            <th colspan="3">Acciones</th>
          </tr>
          </thead>
          <tbody>
<!--          <tr v-for="pro in listProductsComp" v-bind:key="pro.id">
            <td>{{ pro.nombre }}</td>
            <td>{{ pro.unidades }}</td>
            <td class="text-end">{{ pro.precio }} €</td>
            <td><button class="border-0 bg-transparent user-select-none" type="button" v-on:click="anyadirCantidad(pro)">+</button></td>
            <td><button class="border-0 bg-transparent user-select-none" type="button" v-on:click="eliminarCantidad(pro)">-</button></td>
            <td><button class="border-0 bg-transparent user-select-none" type="button" v-on:click="eliminarProducto(pro)"><i class="far fa-trash-alt"></i></button></td>
          </tr>-->
          <tr v-for="pro in $store.state.carrito" v-bind:key="pro.id">
            <td>{{ pro.nombre }}</td>
            <td>{{ pro.unidades }}</td>
            <td class="text-end">{{ pro.precio }} €</td>
            <td><button class="border-0 bg-transparent user-select-none" type="button" v-on:click="anyadirCantidad(pro)">+</button></td>
            <td><button class="border-0 bg-transparent user-select-none" type="button" v-on:click="eliminarCantidad(pro)">-</button></td>
            <td><button class="border-0 bg-transparent user-select-none" type="button" v-on:click="eliminarProducto(pro)"><i class="far fa-trash-alt"></i></button></td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td><!--{{ this.$store.state.carrito.getProduct() }}-->
              Total
            </td>
<!--            <td class="text-end" colspan="2">{{imprimirTotal()}} €</td>-->
            <td class="text-end" colspan="2">{{$store.getters.getImprimirTotal}} €</td>
          </tr>
          <tr>
            <td>
              <router-link to="/checkout"
              ><a class="nav-link">Checkout</a></router-link
              >
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      listProducts: [
        {
          id: 0,
          imagen: 'https://raw.githubusercontent.com/lceciliaguerrero/p5-pc5-ux-vue/master/src/assets/img/products/product1.webp?token=GHSAT0AAAAAABP2DGRNIHIZWYAXBU2QWTD6YQT3VOA',
          nombre: 'Arándano rojo',
          precio: 2.00.toFixed(2),
          moneda: 'euro',
          unidades: 0
        },
        {
          id: 1,
          imagen: 'https://raw.githubusercontent.com/lceciliaguerrero/p5-pc5-ux-vue/master/src/assets/img/products/product2.webp?token=GHSAT0AAAAAABP2DGRN53SIBPZ2F2KKDEKKYQT3WDA',
          nombre: 'Manzana',
          precio: 0.50.toFixed(2),
          moneda: 'euro',
          unidades: 0
        },
        {
          id: 2,
          imagen: 'https://raw.githubusercontent.com/lceciliaguerrero/p5-pc5-ux-vue/master/src/assets/img/products/product3.webp?token=GHSAT0AAAAAABP2DGRNJTNVZDCDMR7PT5B2YQT3WVA',
          nombre: 'Tomate Cherri',
          precio: 0.10.toFixed(2),
          moneda: 'euro',
          unidades: 0
        },
      ],
      listProductsComp: [],
      total: 0.00.toFixed(2)
    }
  },
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
    }/*,
    imprimirTotal() {

      let total = 0;
      for (let i = 0; i < this.listProductsComp.length; i++) {
        total += this.listProductsComp[i].precio * this.listProductsComp[i].unidades;
      }
      return total.toFixed(2);
      this.$store.getters.imprimirTotal;
    }*/
  }
}
</script>

<style scoped>

</style>