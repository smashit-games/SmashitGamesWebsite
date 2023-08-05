<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Cookie Statement Content -->
    <section class="content-section">
      <h1>Cookie Statement</h1>
      <p>
        This is where you explain how you use cookies on your site.
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
  name: "CookieStatement",
  components: {
    AppHeader
  }
}
</script>

<style scoped>
/* You can add any specific styles for this page here */
</style>
