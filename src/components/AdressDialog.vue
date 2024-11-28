<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <h2>Add New Address</h2>
      <form @submit.prevent="submitAddress">
        <div class="form-group">
          <label for="recipientName">Recipient Name:</label>
          <input type="text" id="recipientName" v-model="recipientName" required>
        </div>
        <div class="form-group">
          <label for="deliveryAddress">Delivery Address:</label>
          <input type="text" id="deliveryAddress" v-model="deliveryAddress" required>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" v-model="phoneNumber" required>
        </div>
        <div class="form-group">
          <label for="notes">Additional Notes:</label>
          <textarea id="notes" v-model="notes"></textarea>
        </div>
        <div class="button-group">
          <button type="button" @click="hideDialog">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressDialog',
  data() {
    return {
      show: false,
      recipientName: '',
      deliveryAddress: '',
      phoneNumber: '',
      notes: '',
    };
  },
  methods: {
    showDialog() {
      this.show = true;
    },
    hideDialog() {
      this.show = false;
      this.recipientName = '';
      this.deliveryAddress = '';
      this.phoneNumber = '';
      this.notes = '';
    },
    submitAddress() {
      // Handle form submission here, e.g., send data to API or update local state
      console.log('Submitting address:', {
        recipientName: this.recipientName,
        deliveryAddress: this.deliveryAddress,
        phoneNumber: this.phoneNumber,
        notes: this.notes,
      });
      this.hideDialog();
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.button-group button {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.button-group button[type="submit"] {
  background-color: #000;
  color: white;
}
</style>
