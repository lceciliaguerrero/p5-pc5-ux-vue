<template>
  <div class="checkout">
    <form class="needs-validation" method="get">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Nombre</label>
          <input id="firstName" class="form-control" type="text" name="firstName"
                 placeholder="Escriba su nombre de pila" v-model="nombrePila" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="lastName">Apellidos</label>
          <input id="lastName" class="form-control" type="text" name="lastName"
                 placeholder="Escriba sus apellidos de pila" v-model="apellidoPila" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="username">Nombre de usuario</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input id="username" class="form-control" type="text" name="username"
                 placeholder="Escriba su nombre de usuario" v-model="nombreUsuario" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="email">Correo electrónico <span class="text-muted">(Optional)</span></label>
        <input id="email" class="form-control" type="email" name="userEmail" v-model="userEmail"
               placeholder="you@example.com">
      </div>
      <h4 class="mb-3">Payment</h4>
      <div class="d-block my-3">
        <div class="custom-control custom-radio">
          <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
          <label class="custom-control-label" for="credit">Credit card</label>
        </div>
        <div class="custom-control custom-radio">
          <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
          <label class="custom-control-label" for="debit">Debit card</label>
        </div>
        <div class="custom-control custom-radio">
          <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
          <label class="custom-control-label" for="paypal">PayPal</label>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="cc-text">Name on card</label>
          <input type="text" class="form-control" id="cc-text" placeholder="" required>
          <small class="text-muted">Full text as displayed on card</small>
          <div class="invalid-feedback">
            Name on card is required
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="cc-number">Credit card number</label>
          <input type="text" class="form-control" id="cc-number" placeholder="" required>
          <div class="invalid-feedback">
            Credit card number is required
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 mb-3">
          <label for="cc-expiration">Expiration</label>
          <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
          <div class="invalid-feedback">
            Expiration date required
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="cc-cvv">CVV</label>
          <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
          <div class="invalid-feedback">
            Security code required
          </div>
        </div>
      </div>
      <hr class="mb-4">
      <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
    </form>
  </div>
</template>

<script>
export default {
  text: "Checkout",
  data() {return {
    nombrePila: '',
    apellidoPila: '',
    nombreUsuario: '',
    userEmail: ''
  }}
}
</script>

<style scoped>

</style>