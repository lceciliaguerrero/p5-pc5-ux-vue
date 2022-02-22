<template>
  <div class="col bg-transparent">
    <form class="needs-validation row justify-content-md-center" method="get" @submit.prevent>
      <div class="my-3 pb-3 border-bottom border-2 border-naranja-texto-oscuro">
        <h4 class="mb-3">Datos del usuario</h4>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">Nombre</label>
            <input id="firstName" class="form-control" type="text" name="firstName"
                   placeholder="Escriba su nombre de pila" v-model="nombrePila" aria-required="true" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Apellidos</label>
            <input id="lastName" class="form-control" type="text" name="lastName"
                   placeholder="Escriba sus apellidos de pila" v-model="apellidoPila" aria-required="true" required>
          </div>
        </div>
        <div class="mb-3">
          <label for="username">Nombre de usuario</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">@</span>
            </div>
            <input id="username" class="form-control" type="text" name="username"
                   placeholder="Escriba su nombre de usuario" v-model="nombreUsuario" aria-required="true" required>
          </div>
        </div>
        <div class="mb-3">
          <label for="email">Correo electrónico <span class="text-muted">(Optional)</span></label>
          <input id="email" class="form-control" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" name="userEmail" v-model="correoUsuario"
                 placeholder="you@example.com" aria-required="false">
        </div>
      </div>
      <div class="my-3 pb-5 border-bottom border-2 border-naranja-texto-oscuro">
        <h4 class="mb-3">Forma de pagar</h4>
        <div class="d-flex flex-row justify-content-md-around">
          <div class="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" value="credito"
                   v-model="metodoPago"
                   aria-required="true" required>
            <label class="custom-control-label" for="credit">Tarjeta de Crédito</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" value="debito"
                   v-model="metodoPago"
                   aria-required="true" required>
            <label class="custom-control-label" for="debit">Tarjeta de Debito</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" value="paypal"
                   v-model="metodoPago"
                   aria-required="true" required>
            <label class="custom-control-label" for="paypal">PayPal</label>
          </div>
        </div>
      </div>
      <div class="my-3 pb-3 border-bottom border-5 border-naranja-texto-oscuro">
        <h4 class="mb-3">Datos de la tarjeta</h4>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-text">Nombre de la Tarjeta</label>
            <input type="text" class="form-control" id="cc-text" v-model="nombreTarjeta"
                   placeholder="Escribe el nombre de la tarjeta" aria-required="true" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="cc-number">Numero de la Tarjeta</label>
            <input type="text" class="form-control" id="cc-number" v-model="numeroTarjeta"
                   placeholder="Escribe el numero de la tarjeta" aria-required="true" required>
          </div>
        </div>
        <div class="mb-3">
          <label for="cc-expiration">Fecha de Caducidad de la Tarjeta</label>
          <input type="date" class="form-control" id="cc-expiration" v-model="numeroExpiracionTarjeta"
                 aria-required="true" required>
        </div>
        <div class="mb-3">
          <label for="cc-cvv">Valor de Verificación de la Tarjeta</label>
          <input type="text" class="form-control" id="cc-cvv" v-model="valorVerificacionTarjeta"
                 placeholder="Escribe el numero de verificación de la tarjeta"
                 aria-required="true" required>
        </div>
      </div>
      <input
          class="col-md-7 col-sm-12 border border-2 p-md-0 border-naranja-texto-oscuro user-select-none btn btn-lg button-degradado text-white fs-3"
          type="submit" v-on:click="crearComprador" value="Continue to checkout">
    </form>
  </div>
</template>

<script>
import router from "@/router";

export default {
  text: "Checkout",
  data() {
    return {
      idComprador: 0,
      nombrePila: '',
      apellidoPila: '',
      nombreUsuario: '',
      correoUsuario: '',
      metodoPago: '',
      nombreTarjeta: '',
      numeroTarjeta: '',
      numeroExpiracionTarjeta: '',
      valorVerificacionTarjeta: ''
    }
  },
  methods: {
    crearComprador() {
      this.idComprador++;
      let fecha = `${this.numeroExpiracionTarjeta.toString().substring(8, 10)} / ${this.numeroExpiracionTarjeta.toString().substring(5, 7)} / ${this.numeroExpiracionTarjeta.toString().substring(0, 4)}`;
      let comprador = {
        id: this.idComprador, nombrePila: this.nombrePila, apellidoPila: this.apellidoPila,
        nombreUsuario: this.nombreUsuario, correoUsuario: this.correoUsuario,
        metodoPago: this.metodoPago, nombreTarjeta: this.nombreTarjeta,
        numeroTarjeta: this.numeroTarjeta, numeroExpiracionTarjeta: fecha,
        valorVerificacionTarjeta: this.valorVerificacionTarjeta
      }
      this.$store.commit('crearComprador', comprador);
      router.push({path: '/recibo'});
    }
  }
}
</script>

<style scoped>

</style>