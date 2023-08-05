<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Privacy Policy Content -->
    <section class="content-section">
      <h1>Privacy Policy</h1>
      <p>
        This is where you explain how you handle user data and respect their privacy.
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
  name: "PrivacyPolicy",
  components: {
    AppHeader
  }
}
</script>

<style scoped>
/* You can add any specific styles for this page here */
</style>
