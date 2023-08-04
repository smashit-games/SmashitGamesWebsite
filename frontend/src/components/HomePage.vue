<template>
  <v-app>
    <AppHeader />

    <!-- Hero section with studio name and tagline -->
    <v-container class="text-center">
      <v-row>
        <v-col>
          <h1>Smashit Games</h1>
          <p>Your tagline here</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- About Us section -->
    <v-container id="about">
      <v-row>
        <v-col>
          <h2>About Us</h2>
          <p>Your studio's story, vision, team, and other details.</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Current Game section -->
    <v-container id="current-game">
      <v-row>
        <v-col>
          <h2>Our Current Game</h2>
          <p>Details, images, and links related to the game you're currently working on.</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer with legal details -->
    <v-footer>
      <v-col class="text-center">
        <a href="#">Terms of Use</a> |
        <a href="#">Privacy Policy</a> |
        <a href="#">Cookie Statement</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  methods: {
    scrollTo(target) {
      this.$scrollTo(target, 500);
    }
  }
}
</script>

<style scoped>

</style>
