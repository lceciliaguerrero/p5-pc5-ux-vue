import { createStore } from 'vuex'

export default createStore({
  state: {
    carrito: [
    ],
    datosComprador: {}
  },
  mutations: {
    comprarProducto: (state, prod) => {
      let product = {
        id: prod.id,
        nombre: prod.nombre,
        precio: prod.precio,
        unidades: prod.unidades
      };
      let searchProduct = state.carrito.findIndex((produc) => product.id === produc.id);
      if (searchProduct === -1) {
        state.carrito.push(product);
      }
    },
    anyadirCantidad: (state, prod) => {
      let searchProduct = state.carrito.findIndex((produc) => prod.id === produc.id);
      if (state.carrito[searchProduct].unidades < 10) {
        state.carrito[searchProduct].unidades += 1;
      }
    },
    eliminarCantidad: (state, prod) => {
      let searchProduct = state.carrito.findIndex((produc) => prod.id === produc.id);
      if (state.carrito[searchProduct].unidades > 0) {
        state.carrito[searchProduct].unidades -= 1;
      }
    },
    eliminarProducto: function (state, prod) {
      let searchProduct = state.carrito.findIndex((produc) => prod.id === produc.id);
      state.carrito.splice(searchProduct.id, 1);
    }/**/
  },
  getters: {
    getImprimirTotal: function (state) {
      console.log(state);
      let total = 0;
      for (let item of state.carrito) {
        total += item.precio * item.unidades;
      }
      return total.toFixed(2);
    }
  },
  actions: {
  },
  modules: {
  }
})
