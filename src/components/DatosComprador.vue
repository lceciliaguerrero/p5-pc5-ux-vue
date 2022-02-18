<template>
  <div class="card-text mb-md-4 lh-sml fs-7 text-grey-texto texto-display">
    <div v-for="com in $store.state.datosComprador" v-bind:key="com.id">
      <p class="fw-normal">
        <i class="fw-bold">Nombre</i>: {{com.nombrePila}} <br>
        <i class="fw-bold">Apellidos</i>: {{com.apellidoPila}} <br>
        <i class="fw-bold">@</i>{{com.nombreUsuario}} <br>
        <i class="fw-bold">Correo electrónico</i>: {{com.correoUsuario}} <br>
        <i class="fw-bold">Método de pagp</i>: {{com.metodoPago}} <br>
        <i class="fw-bold">Nombre de la Tarjeta</i>: {{com.nombreTarjeta}} <br>
        <i class="fw-bold">Numero de la Tarjeta</i>: {{com.numeroTarjeta}} <br>
        <i class="fw-bold">Fecha de caducidad de la Tarjeta</i>: {{com.numeroExpiracionTarjeta}} <br>
        <i class="fw-bold">Valor de Verificación de la Tarjeta</i>: {{com.valorVerificacionTarjeta}} <br>
      </p>
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