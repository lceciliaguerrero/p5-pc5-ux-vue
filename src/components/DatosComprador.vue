<template>
  <div class="card-text mb-md-4 lh-sml fs-7 text-grey-texto texto-display">
    <div v-for="com in $store.state.datosComprador" v-bind:key="com.id">
      <div class="fw-normal d-flex flex-row text-grey-texto">
        <p class="pe-lg-6 pe-md-3 me-sm-0">
          <i class="fw-bold text-naranja-texto">Nombre</i>:<br><i>{{com.nombrePila}}</i><br>
          <i class="fw-bold text-naranja-texto">Apellidos</i>:<br><i>{{com.apellidoPila}}</i><br>
          <i class="fw-bold text-naranja-texto">@</i><i>{{com.nombreUsuario}}</i><br>
          <i class="fw-bold text-naranja-texto">Correo electrónico</i>:<br><i>{{com.correoUsuario}}</i><br>
          <i class="fw-bold text-naranja-texto">Método de pago</i>:<br>
          <i v-if="com.metodoPago === 'credito'">Tarjeta de Crédito</i>
          <i v-else-if="com.metodoPago === 'debito'">Tarjeta de Debito</i>
          <i v-else-if="com.metodoPago === 'paypal'">PayPal</i><br>
        </p>
        <p>
          <i class="fw-bold text-naranja-texto">Nombre de la Tarjeta</i>:<br><i>{{com.nombreTarjeta}}</i><br>
          <i class="fw-bold text-naranja-texto">Numero de la Tarjeta</i>:<br><i>{{com.numeroTarjeta}}</i><br>
          <i class="fw-bold text-naranja-texto">Fecha de caducidad de la Tarjeta</i>:<br><i>{{com.numeroExpiracionTarjeta}}</i><br>
          <i class="fw-bold text-naranja-texto">Valor de Verificación de la Tarjeta</i>:<br><i>{{com.valorVerificacionTarjeta}}</i><br>
        </p>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "DatosComprador"
}
</script>

<style scoped>

</style>