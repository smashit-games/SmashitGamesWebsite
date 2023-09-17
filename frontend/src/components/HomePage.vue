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

    <!-- Content Sections Loop -->
    <div class="section-container">
      <section v-for="(section, index) in sections" :key="section.id" class="alternating-section">
        <div class="content-wrapper" :style="{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }">
          <div class="image-section">
            <img :src="section.image" :alt="section.alt" />
          </div>
          <div class="text-section">
            <h2>{{ section.title }}</h2>
            <p>{{ section.description }}</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <footer>
      <div>© 2023 smashit.games</div>
      <div>
        <router-link to="/terms-of-service">Terms of Use</router-link> |
        <router-link to="/privacy-policy">Privacy Policy</router-link> |
        <router-link to="/cookie-statement">Cookie Statement</router-link>
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
  },
  data() {
    return {
      sections: [
        {
          id: 1,
          title: "Face the Puppeteers of Darkness",
          description: "Challenging, fierce, and unpredictable - confront the formidable guardians of Nocturnum's dominion. Each boss battle tests your mettle, demanding strategy, agility, and the will to survive.",
          image: require('@/assets/boss.jpg'),
          alt: "Boss Battle"
        },
        {
          id: 2,
          title: "The Cycle of Rebirth",
          description: "Death is not the end, but a new beginning. With each demise, return to your camp, harness the lessons learned, and prepare for the next descent into the abyss. Spend your hard-earned gold for redemption and strength, ensuring you're better equipped for the battles ahead.",
          image: require('@/assets/campsite.jpg'),
          alt: "Campsite"
        },
        {
          id: 3,
          title: "Discover the Land of Inferna",
          description: "A realm of mystery, danger, and ancient legends. Journey through the diverse landscapes of Inferna, from the darkest abyss to the remnants of a world once filled with harmony. Unravel its secrets, and restore the balance.",
          image: require('@/assets/arena.jpg'),
          alt: "Inferna Landscape"
        }
      ]
    };
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.image-section img {
  max-width: 300px;
}

.hero-section h1 {
  font-family: 'Cinzel', serif;
  font-size: 5rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0;
  line-height: 1.2;
}

.hero-section p,
.text-section p {
  font-family: 'Bitter', serif;
  font-size: 1.5rem;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.text-section h2 {
  font-family: 'Metamorphous', cursive;
  font-size: 2.5rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

footer {
  font-family: 'Cormorant Garamond', serif;
  padding: 2rem 0;
  text-align: center;
  color: white;
}

/* Default styles assuming dark theme */
.text-section h2,
.text-section p,
footer {
  color: #ffffff;
}

/* Override styles for light theme */
.v-theme--light .text-section h2,
.v-theme--light .text-section p,
.v-theme--light footer {
  color: black;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5rem; /* Reduced font size for mobile */
  }

  .hero-section p,
  .text-section p {
    font-size: 1rem; /* Reduced font size for mobile */
  }

  .text-section h2 {
    font-size: 1.5rem; /* Reduced font size for mobile */
  }

  .alternating-section .content-wrapper {
    flex-direction: column; /* Stack image and text on top of each other for mobile */
    gap: 1rem;
    padding-left: 15px;
    padding-right: 15px;
  }

  .image-section img {
    max-width: 100%; /* Ensure image doesn't exceed screen width */
  }

  footer {
    font-size: 0.9rem; /* Reduced font size for footer on mobile */
  }
}
</style>