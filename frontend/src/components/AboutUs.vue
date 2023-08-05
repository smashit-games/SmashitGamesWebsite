<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Hero Image -->
    <section class="hero-section">
      <img :src="require('@/assets/smashitlogo-cropped.png')" alt="About Us Hero Image" class="full-width-image"/>
    </section>

    <v-divider class="short-divider my-4"></v-divider>


    <!-- G'day Section -->
    <section class="content-section">
      <h1>G'day!</h1>
      <p>
        smashit.games is a VR focused indie game studio base in Brisbane Australia. We're creating polished games with an inclusive, sustainable work environment. Come have fun!
      </p>
    </section>

    <v-divider class="short-divider my-4"></v-divider>

    <!-- The Crew Section -->
    <section class="crew-section">
      <h2>The Crew</h2>
      <div class="crew-members">
        <div v-for="member in crew" :key="member.id" class="crew-member">
          <img :src="member.image" :alt="member.name" class="crew-image"/>
          <h3>{{ member.name }}</h3>
          <p>{{ member.bio }}</p>
        </div>
      </div>
    </section>

    <v-divider class="short-divider my-4"></v-divider>

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
  name: "AboutUs",
  components: {
    AppHeader
  },
  data() {
    return {
      crew: [
        {
          id: 1,
          name: "unclelukie",
          bio: "You know, if the emperor of man wasn't such a bad dad, the Horus Heresy wouldn't have ever happened, just sayin'.",
          image: require('@/assets/unclelukie.png')
        },
        {
          id: 2,
          name: "anonymoose",
          bio: "Explosiosnz1!!111!!11~1-",
          image: require('@/assets/hiddenperson.jpg')
        },
        {
          id: 3,
          name: "LF1M Unity coder",
          bio: "please send tell",
          image: require('@/assets/hiddenperson.jpg')
        },
        {
          id: 4,
          name: "LF1M Technical Artist",
          bio: "please sent tell",
          image: require('@/assets/hiddenperson.jpg')
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

.content-section, .crew-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 0; /* Increased padding from 2rem to 3rem */
}

.content-section h1 {
  font-family: 'Dancing Script', cursive;
  font-size: 8rem;
  text-align: center;
}

.content-section p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 3rem;
}

.crew-section {
  text-align: center;
  padding-bottom: 5rem; /* Added more padding after The Crew section */
}

.crew-section h2 {
  font-family: 'Cinzel', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem; /* Add this line */
}

.crew-members {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.crew-image {
  width: 150px;
  max-height: 150px; /* Add this line */
  border-radius: 50%;
  object-fit: cover; /* Add this line */
}

.crew-member {
  flex: 1;
  max-width: 23%;
}

.crew-member p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}

.short-divider {
  width: 50%; /* Adjust this value as needed */
  margin-left: auto;
  margin-right: auto;
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

</style>