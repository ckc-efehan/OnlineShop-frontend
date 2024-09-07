<template>
  <div class="hauptmenu">
    <!-- Navigationsleiste -->
    <nav class="navbar">
      <h1>Online Shop</h1>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Produkte</a></li>
        <li><a href="#">Angebote</a></li>
        <li><a href="#">Kontakt</a></li>
        <li><a href="#">Warenkorb</a></li>
      </ul>
    </nav>

    <!-- Kategorienbereich -->
    <div class="categories">
      <h2>Unsere Kategorien</h2>
      <div class="category-list">
        <div class="category-item">
          <img src="https://via.placeholder.com/150" alt="Elektronik" />
          <h3>Elektronik</h3>
        </div>
        <div class="category-item">
          <img src="https://via.placeholder.com/150" alt="Kleidung" />
          <h3>Kleidung</h3>
        </div>
        <div class="category-item">
          <img src="https://via.placeholder.com/150" alt="Bücher" />
          <h3>Bücher</h3>
        </div>
        <div class="category-item">
          <img src="https://via.placeholder.com/150" alt="Sport" />
          <h3>Sport</h3>
        </div>
      </div>
    </div>

    <!-- Produktbereich -->
    <div class="products">
      <h2>Beliebte Produkte</h2>
      <div class="product-list">
        <div class="product-item">
          <img src="https://via.placeholder.com/150" alt="Produkt 1" />
          <h3>Produkt 1</h3>
          <p>€49.99</p>
          <button>Kaufen</button>
        </div>
        <div class="product-item">
          <img src="https://via.placeholder.com/150" alt="Produkt 2" />
          <h3>Produkt 2</h3>
          <p>€29.99</p>
          <button>Kaufen</button>
        </div>
        <div class="product-item">
          <img src="https://via.placeholder.com/150" alt="Produkt 3" />
          <h3>Produkt 3</h3>
          <p>€19.99</p>
          <button>Kaufen</button>
        </div>
        <div class="product-item">
          <img src="https://via.placeholder.com/150" alt="Produkt 4" />
          <h3>Produkt 4</h3>
          <p>€89.99</p>
          <button>Kaufen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Styling für das Hauptmenü */
.hauptmenu {
  font-family: Arial, sans-serif;
}

/* Navigationsleiste */
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #4CAF50;
  padding: 15px;
}

.navbar h1 {
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  color: white;
  text-decoration: none;
}

.nav-links li a:hover {
  text-decoration: underline;
}

/* Kategorienbereich */
.categories {
  padding: 20px;
}

.category-list {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.category-item {
  text-align: center;
}

.category-item img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.category-item h3 {
  margin-top: 10px;
}

/* Produktbereich */
.products {
  padding: 20px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.product-item {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-item img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.product-item h3 {
  margin-top: 10px;
}

.product-item p {
  font-size: 1.2em;
  color: #333;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
