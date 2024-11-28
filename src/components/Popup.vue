<template>
  <div class="popup-overlay" v-if="isPopupShown">
    <div class="popup-container">
      <button class="close-button" @click="closePopup">&times;</button>
      <h2>ADD NEW ADDRESS</h2>
      <form @submit.prevent="saveAddress">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" placeholder="Enter first name">
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" placeholder="Enter last name">
        </div>
        <div class="form-group">
          <label for="telephone">Telephone (Required):</label>
          <input type="tel" id="telephone" placeholder="+855 Enter mobile number">
        </div>
        <div class="form-group">
          <label for="address">Address (Required):</label>
          <input type="text" id="address" placeholder="Enter address">
        </div>
        <div class="form-group">
          <label for="country">Country (Required):</label>
          <select id="country">
            <option value="Cambodia">Cambodia</option>
            </select>
        </div>
        <div class="form-group">
          <label for="city">City/Province (Required):</label>
          <select id="city">
            <option value="Phnom Penh">Phnom Penh</option>
            </select>
        </div>
        <button type="submit">Save Address</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressPopup',
  data() {
    return {
      isPopupShown: false,
      firstName: '',
      lastName: '',
      telephone: '',
      address: '',
      country: 'Cambodia',
      city: 'Phnom Penh'
    };
  },
  methods: {
    showPopup() {
      this.isPopupShown = true;
    },
    closePopup() {
      this.isPopupShown = false;
    },
    saveAddress() {
      // Validate the input data
      if (!this.firstName || !this.lastName || !this.telephone || !this.address) {
        alert('Please fill in all required fields');
        return;
      }
      // Here you would typically send the data to a server
      console.log('Saving address:', this.firstName, this.lastName, this.telephone, this.address, this.country, this.city);
      this.closePopup(); // Optionally close the popup after saving
    }
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
