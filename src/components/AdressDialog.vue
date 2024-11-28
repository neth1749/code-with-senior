<template>
  <transaction name="fade">
    <div class="modal-overlay" v-if="show">
      <div class="modal">
        <div class="modal-header">
          <h2>Add New Address</h2>
          <button @click="hideDialog" class="close-button">&times;</button>
        </div>
        <div class="modal-content">
          <!-- <form @submit.prevent="submitAddress">
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
              <button type="button" @click="clearForm">Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form> -->
        </div>
      </div>
    </div>
  </transaction>
</template>

<script>
export default {
  name: 'AddressDialog',
  props: ['show'],
  data() {
    return {
      recipientName: '',
      deliveryAddress: '',
      phoneNumber: '',
      notes: '',
    };
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
      this.clearForm();
    },
    submitAddress() {
      // Implement your submission logic here
      this.hideDialog();
    },
    clearForm() {
      this.recipientName = '';
      this.deliveryAddress = '';
      this.phoneNumber = '';
      this.notes = '';
    }
  },
};
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #00000040;
  z-index: 1000;
}

.modal {
  height: 100vh; /* Full viewport height */
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 500px; /* Adjust width as necessary */
  max-width: 1000px; /* Maximum width can be adjusted */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Optional: adds shadow for better visibility */
  overflow-y: auto; /* Adds scroll to the modal content if it exceeds the viewport height */
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 20px; /* Increased margin for better spacing */
}

.button-group {
  display: flex;
  justify-content: space-between;
}
</style>
