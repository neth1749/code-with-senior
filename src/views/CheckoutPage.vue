<template>
  <div class="checkout-container">

    <div class="left-panel">
      <section class="delivery-address">
        <h2>Delivery address</h2>
        <div class="address-content">

          <button class="add-address" @click="showAddressDialog = true">
            Add Your Address
          </button>
          
          <div class="divider"></div>

          <div class="address-item">
            <img src="@/assets/images/logo.png" alt="Delivery Icon" class="delivery-icon" />
            <div class="address-details">
              <p>PTES Sart Delivery</p>
              <small>(Delivery within 2-3 days)</small>
            </div>
          </div>

        </div>
      </section>

      <section class="shopping-cart">
        <h2>My shopping cart ({{ cart.length }})</h2>
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" alt="item.name" class="cart-item-image" />
          <div class="cart-item-details">
            <p>{{ item.name }}</p>
            <p>Size: {{ item.size }}</p>
            <p>Quantity: {{ item.quantity }}</p>
            <p class="item-price">${{ item.price.toFixed(2) }}</p>
          </div>
        </div>
      </section>
    </div>

    <div class="right-panel">
      <section class="payment-options">
        <h2>Payment Methods</h2>
        <form class="payment-cart" @submit.prevent="submitPayment">
          <label v-for="method in paymentMethods" :key="method.id">
            <input type="radio" name="payment" :value="method.id" />
            {{ method.name }}
          </label>
        </form>
      </section>

      <section class="contact-preference">
        <h2>Preferred contact line:</h2>
        <form class="contact">
          <label><input type="checkbox" value="Phone" />
            <p>Phone Call</p>
          </label>
          <label><input type="checkbox" value="Telegram" />
            <p>Telegram</p>
          </label><br />
          <label><input type="checkbox" value="WhatsApp" />
            <p>WhatsApp</p>
          </label><br />
        </form>
      </section>

      <div class="noted-text">
        <h1>Noted</h1>
        <textarea name="text" id="" placeholder="text" class="text"></textarea>
        <hr />
      </div>

      <section class="pay-money">
        <div class="total-money">
          <div>Total: ${{ total.toFixed(2) }}</div>
          <div>Delivery fee: ${{ deliveryFee.toFixed(2) }}</div>
        </div>
        <div class="total-money">
          <div>Save</div>
          <div>${{ deliveryFee.toFixed(2) }}</div>
        </div>
        <div class="total-money">
          <div>delivery</div>
          <div>${{ deliveryFee.toFixed(2) }}</div>
        </div>
      </section>
      <hr>
      <div class="total-money">
        <div>Amount to pay:</div>
        <div> ${{ (total + deliveryFee).toFixed(2) }}</div>
      </div>
      <button @click="proceedToCheckout" class="button-checkout">Proceed to Checkout</button>
    </div>

    <!-- Pass showAddressDialog and methods to AddressDialog -->
    <AdressDialog :show="showAddressDialog"  @update:show="showAddressDialog = $event" />

  </div>
</template>

<script>
import AdressDialog from '../components/AdressDialog.vue';

export default {
  name: 'CheckoutPage',
  components: {
    AdressDialog,
  },
  data() {
    return {
      showAddressDialog: false,
      addresses: [{ id: 1, line: '1234 Main St, Anytown, USA' }],
      cart: [
        {
          id: 1,
          name: 'Printable Fall Landscape Set of 3 Split Prints',
          size: 'S',
          quantity: 1,
          price: 4.99,
          image: new URL('@/assets/images/testimage.png', import.meta.url).href,
        },
      ],
      paymentMethods: [
        { id: 'card', name: 'Credit/Debit Card' },
        { id: 'aba', name: 'ABA Pay' },
        { id: 'acleda', name: 'ACLEDA Pay' },
        { id: 'cash', name: 'Cash On Delivery' },
      ],
      total: 4.99,
      deliveryFee: 0.99,
    };
  },
  methods: {
    // addAddress() {
    //   this.showAddressDialog = true;
    // },
    // hideAddressDialog() {
    //   this.showAddressDialog = false;
    // },
    proceedToCheckout() {
      // Add your logic here to handle the checkout process
    },
    submitPayment() {
      // Your payment submission logic goes here
    },
  },
};
</script>

<style scoped>
.checkout-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.left-panel,
.right-panel {
  width: 50%;
}

.delivery-address button,
.order-summary button {
  margin-top: 10px;
}

.cart-item-image {
  width: 100px;
  height: auto;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.item-price {
  font-weight: bold;
  text-align: end;
  color: #da292e;
}

.address-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 500px;
  height: 180px;
  background-color: #e7e7e7;
  border-radius: 5px;
  padding: 29px 44px 29px 44px;
}

.address-content .add-address {
  align-self: center;
  width: 50%;
  height: 36px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
}

.divider {
  border-bottom: 2px solid #ccc;
  width: 100%;
}

.address-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
  /* Spacing above the address item */
}

.delivery-icon {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 10px;
}

.item-price {
  font-weight: bold;
  text-align: end;
  color: #da292e;
}

.address-details {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.cart-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 500px;
  height: 180px;
  background-color: #e7e7e7;
  border-radius: 5px;
  padding: 29px 44px 29px 44px;
}

.contact {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

.contact-preference {
  width: 500px;
  background-color: rgba(128, 128, 128, 0.181);
}

.contact {
  display: flex;
  justify-content: space-between;
}

.contact label {
  display: flex;
}

.contact p {
  background-color: white;
  padding: 4px 10px;
  border: 1px solid;
  border-radius: 5px;
}

.text {
  width: 500px;
  height: 100px;
  font-size: 20px;
}

hr {
  width: 500px;
  float: inline-start;
  border: 2px solid rgba(128, 128, 128, 0.677);
}

.pay-money {
  margin-top: 30px;
  width: 500px;
  background: #0000002a;
}

.total-money {
  width: 500px;
  display: flex;
  padding: 3px 0px;
  justify-content: space-between;
}

.button-checkout {
  margin-top: 10px;
  width: 500px;
  padding: 15px;
  background: #000;
  color: white;

}

.payment-cart {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
