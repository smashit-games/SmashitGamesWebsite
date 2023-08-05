<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero-section">
      <img :src="require('@/assets/heroimage.jpg')" alt="Game Image" class="full-width-image"/>
      <div class="hero-content">
        <h1>Hellfire Hands</h1>
        <p>Fight. Level Up. Reign Supreme.</p>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about-section alternating-section">
      <div class="content-wrapper">
        <div class="image-section">
          <img :src="require('@/assets/shamblingzombie.jpg')" alt="About Us" />
        </div>
        <div class="text-section">
          <h2>About Us</h2>
          <p>Lorem ipsum about the studio.</p>
        </div>
      </div>
    </section>

    <!-- Current Game Section -->
    <section class="game-section alternating-section">
      <div class="content-wrapper">
        <div class="text-section">
          <h2>Our Game</h2>
          <p>Lorem ipsum about the game.</p>
        </div>
        <div class="image-section">
          <img :src="require('@/assets/powerorbsscaled.jpg')" alt="Our Game" />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div>© 2023 Smashit Games</div>
      <div>
        <a href="#">Terms of Use</a> |
        <a href="#">Privacy Policy</a> |
        <a href="#">Cookie Statement</a>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "HomePage",
  components: {
    AppHeader
  }
}
</script>

<style scoped>
.full-width-image {
  width: 100%;
}

.hero-section {
  position: relative;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.alternating-section .content-wrapper {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 2rem 0;
}

.alternating-section:nth-child(even) .content-wrapper {
  flex-direction: row-reverse;
}

.image-section img {
  max-width: 300px;
}

.hero-section h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 5rem; /* Adjust as per your needs */
  font-weight: 700;  /* Boldness */
  color: #ffffff;   /* White color for better visibility on dark backgrounds */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);  /* Shadow for depth */
  margin: 0; /* Remove default margin */
  line-height: 1.2;  /* Adjust line height */
}

.hero-section p {
  font-size: 1.5rem; /* Adjust as per your needs */
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

footer {
  padding: 2rem 0;
  text-align: center;
  background-color: #333;
  color: white;
}
</style>
