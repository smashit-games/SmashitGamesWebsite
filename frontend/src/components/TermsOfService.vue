<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Terms of Use Content -->
    <section class="terms-section">
      <h1>Terms of Use</h1>

      <p><strong>Last Updated: 6/8/2023</strong></p>

      <h3>Acceptance of Our Terms and Conditions:</h3>
      <p>Your use of this website constitutes your acceptance of our Privacy Policy and your consent to the related practices. We reserve the right to change our Privacy Policy and our terms and conditions at will. We disclaim any obligation to advise you of any changes to our Privacy Policy or the terms and conditions, and we suggest that you periodically check for any updates to the Privacy Policy and terms and conditions.</p>

      <h3>Third-Party Sites:</h3>
      <p>This Policy only applies to information collected by Smash It Games through the website and does not extend to any third-party websites or communications that may reference this website.</p>

      <h3>Surveys, Sweepstakes, and Promotions:</h3>
      <p>On our Services, you may be able to participate in surveys, sweepstakes, and other promotions. If you choose to participate in any of these, we may ask you to provide information such as your Discord ID, platform username, email address and such. We use this information to administer our contests, sweepstakes, and other promotions. We also may use the information to communicate with you about our products, services, and promotions.</p>

      <h3>Contact:</h3>
      <p>If you have questions and/or concerns about our Terms of Use, please contact us at: support@smashit.games</p>
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
  name: "TermsOfServicePage",
  components: {
    AppHeader
  }
}
</script>

<style scoped>
.terms-section {
  padding: 2rem 6rem;
  font-family: 'Bitter', serif;
  color: #ffffff;
}

.terms-section h1 {
  font-family: 'Metamorphous', cursive;
  font-size: 3rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  text-align: center;
}

.terms-section p {
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
.terms-section h1,
.terms-section p,
footer {
  color: #ffffff;
}

/* Override styles for light theme */
.v-theme--light .terms-section h1,
.v-theme--light .terms-section p,
.v-theme--light footer {
  color: black;
}
</style>