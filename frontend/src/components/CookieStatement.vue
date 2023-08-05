
<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Cookie Statement Content -->
    <section class="privacy-policy-section">
      <h1>Cookie Statement</h1>

      <p><strong>Last Updated: 6/8/2023</strong></p>

      <h3>Use of Cookies and Web Technologies:</h3>
      <p>A “cookie” is a small text file that identifies your computer or device. When you visit our website, unique cookies are placed on your browser. A web beacon is a technology with a unique identifier typically contained in a small graphic file in a web page or in an email. We may use these Technologies to identify that you have logged into the website, suggest content, and products, and monitor our website's aggregate usage.</p>

      <h3>Interest-Based Advertising:</h3>
      <p>We work with advertising partners who may use technologies such as cookies to gather browsing information about you. Our advertising partners may also gather information about your visits to other websites for targeting our advertisements.</p>

      <h3>Analytics:</h3>
      <p>We may also use Google Analytics and other service providers to collect information regarding visitor behavior and demographics.</p>
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
  name: "CookieStatementPage",
  components: {
    AppHeader
  }
}
</script>

<style scoped>
/* Assuming the styles are the same as those in the PrivacyPolicy.vue file */
.privacy-policy-section {
  padding: 2rem 6rem;
  font-family: 'Bitter', serif;
  color: #ffffff;
}

.privacy-policy-section h1 {
  font-family: 'Metamorphous', cursive;
  font-size: 3rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  text-align: center;
}

.privacy-policy-section p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

footer {
  font-family: 'Cormorant Garamond', serif;
  padding: 2rem 0;
  text-align: center;
  color: white;
}

/* Default styles assuming dark theme */
.privacy-policy-section h1,
.privacy-policy-section p,
footer {
  color: #ffffff;
}

/* Override styles for light theme */
.v-theme--light .privacy-policy-section h1,
.v-theme--light .privacy-policy-section p,
.v-theme--light footer {
  color: black;
}
</style>
