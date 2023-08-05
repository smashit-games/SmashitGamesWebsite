<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- About Us Content -->
    <section class="content-section">
      <h1>About Us</h1>
      <p>
        This is the about us page content. You can replace this with relevant information about your company or project.
      </p>
    </section>

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
  }
}
</script>

<style scoped>
/* You can add any specific styles for this page here */
</style>
