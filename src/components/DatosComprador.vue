<template>
  <div class="card-text mb-md-4 lh-sml fs-7 text-grey-texto texto-display">
    <div v-for="com in $store.state.datosComprador" v-bind:key="com.id">
      <div class="fw-normal d-flex flex-row">
        <p class="pe-lg-6 pe-md-3 me-sm-0">
          <i class="fw-bold">Nombre</i>:<br><i>{{com.nombrePila}}</i><br>
          <i class="fw-bold">Apellidos</i>:<br><i>{{com.apellidoPila}}</i><br>
          <i class="fw-bold">@</i><i>{{com.nombreUsuario}}</i><br>
          <i class="fw-bold">Correo electrónico</i>:<br><i>{{com.correoUsuario}}</i><br>
          <i class="fw-bold">Método de pago</i>:<br>
          <i v-if="com.metodoPago === 'credito'">Tarjeta de Crédito</i>
          <i v-else-if="com.metodoPago === 'debito'">Tarjeta de Debito</i>
          <i v-else-if="com.metodoPago === 'paypal'">PayPal</i><br>
        </p>
        <p>
          <i class="fw-bold">Nombre de la Tarjeta</i>:<br><i>{{com.nombreTarjeta}}</i><br>
          <i class="fw-bold">Numero de la Tarjeta</i>:<br><i>{{com.numeroTarjeta}}</i><br>
          <i class="fw-bold">Fecha de caducidad de la Tarjeta</i>:<br><i>{{com.numeroExpiracionTarjeta}}</i><br>
          <i class="fw-bold">Valor de Verificación de la Tarjeta</i>:<br><i>{{com.valorVerificacionTarjeta}}</i><br>
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