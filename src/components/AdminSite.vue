<template>
  <div class="content">
    <div class="newProducts">
      <h1>Neuer Produkteintrag</h1>
      <span>Wie heißt das Produkt?</span>
      <input v-model="productName" type="text" placeholder="Produktname">
      <span>Was ist die Beschreibung des Produkts?</span>
      <input v-model="productDescr" type="text" placeholder="Produktbeschreibung">
      <span>Wie viel kostet das Produkt?</span>
      <input v-model="productPrice" type="number" step="0.01" placeholder="Produktpreis">
      <button @click="submitEntry">Senden</button>

      <!-- Anzeige für Erfolgs- oder Fehlermeldung -->
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

// Formularfelder für Produkteintrag
const productName = ref('');
const productDescr = ref('');
const productPrice = ref<number | null>(null);

// Erfolgs- und Fehlermeldungen
const successMessage = ref('');
const errorMessage = ref('');

// Funktion, um den Eintrag zu speichern
const submitEntry = async () => {
  const newProduct = {
    name: productName.value,
    description: productDescr.value,
    price: productPrice.value
  };

  try {
    // Produktdaten an die API senden. Der JWT-Cookie wird automatisch mitgesendet.
    await axios.post('http://localhost:8080/products', newProduct, {
      withCredentials: true  // Sende Cookies bei der Anfrage mit
    });

    successMessage.value = 'Produkt erfolgreich gespeichert!';
    errorMessage.value = '';
    productName.value = '';
    productDescr.value = '';
    productPrice.value = null;
  } catch (error: any) {
    successMessage.value = '';
    errorMessage.value = error.response?.data || 'Fehler beim Speichern des Produkts.';
  }
};

</script>

<style scoped>
/* Style für Fehler- und Erfolgsmeldungen */
.success {
  color: green;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
