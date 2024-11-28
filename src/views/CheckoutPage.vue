<template>
  <div class="checkout-container">
    <div class="left-panel">
      <section class="delivery-address">
        <h2>Delivery address</h2>
        <div class="address-content">
          <button class="add-address" @click="addAddress">Add Your Address</button>
          <div class="divider"></div>
          <div class="address-item">
            <img src="@/assets/images/logo.png" alt="Delivery Icon" class="delivery-icon"/>
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
          <img :src="item.image" alt="item.name" class="cart-item-image">
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
        <form @submit.prevent="submitPayment">
          <label v-for="method in paymentMethods" :key="method.id">
            <input type="radio" name="payment" :value="method.id">
            {{ method.name }}
          </label>
        </form>
      </section>

      <section class="contact-preference">
        <h2>Preferred contact line:</h2>
        <form>
          <label><input type="checkbox" value="Phone"> Phone Call</label>
          <label><input type="checkbox" value="Telegram"> Telegram</label>
          <label><input type="checkbox" value="WhatsApp"> WhatsApp</label>
        </form>
      </section>

      <section class="order-summary">
        <h2>Order Summary</h2>
        <p>Total: ${{ total.toFixed(2) }}</p>
        <p>Delivery fee: ${{ deliveryFee.toFixed(2) }}</p>
        <p><strong>Amount to pay: ${{ (total + deliveryFee).toFixed(2) }}</strong></p>
        <button @click="proceedToCheckout">Proceed to Checkout</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addresses: [
        { id: 1, line: "1234 Main St, Anytown, USA" }
      ],
      cart: [
        {
          id: 1,
          name: "Printable Fall Landscape Set of 3 Split Prints",
          size: "S",
          quantity: 1,
          price: 4.99,
          image: new URL('@/assets/images/testimage.png', import.meta.url).href
        }
      ],
      paymentMethods: [
        { id: 'card', name: 'Credit/Debit Card' },
        { id: 'aba', name: 'ABA Pay' },
        { id: 'acleda', name: 'ACLEDA Pay' },
        { id: 'cash', name: 'Cash On Delivery' }
      ],
      total: 4.99,
      deliveryFee: 0.99,
    };
  },
  methods: {
    addAddress() {
      // Logic to add an address
      console.log("Add address logic goes here");
    },
    submitPayment() {
      // Submit payment method choice
      console.log("Submit payment method logic goes here");
    },
    proceedToCheckout() {
      // Process the checkout
      console.log("Proceed to checkout logic goes here");
    }
  }
};
</script>

<style scoped>
.checkout-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.left-panel, .right-panel {
  width: 50%;
}

.delivery-address button, .order-summary button {
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
  color: #DA292E;
}

.address-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 542px;
  height: 180px;
  background-color: #E7E7E7;
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
  border-bottom: 2px solid #ccc; /* Light grey border for separation */
  width: 100%; /* Ensures the divider stretches across the container */
}

.address-item {
  display: flex;
  align-items: center;
  margin-top: 20px; /* Spacing above the address item */
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
  color: #DA292E;
}

.address-details {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
</style>
