
<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Privacy Policy Content -->
    <section class="privacy-policy-section">
      <h1>Privacy Policy</h1>

      <p><strong>Last Updated: 6/8/2023</strong></p>

      <h3>Introduction:</h3>
      <p>Smash it Games Pty Ltd (“Smash It Games,” “we,” “us,” and “our”) provides a virtual reality (“VR”) gaming experience on gaming platforms (Steam and Oculus Quest). This section details our policies regarding the information collected from our Services.</p>

      <h3>Non-Identifiable Information:</h3>
      <p>We may also use technology to collect non-identifiable information.</p>

      <h3>Children’s Privacy:</h3>
      <p>Our Services are not directed to children nor do Smash It Games intentionally collect or maintain any personal information from children under the age of 13.</p>

      <h3>Legally Required Disclosure of Information:</h3>
      <p>Although we strive to preserve the privacy of our visitors, we may be compelled to disclose personal information when required by law.</p>

      <h3>Your California Privacy Rights:</h3>
      <p>Under the California Consumer Privacy Act of 2018 (“CCPA”), California residents have specific rights regarding their personal information. These rights include:

      Access: You have the right to request that Smash It Games disclose certain information about our collection and use of your personal information over the past 12 months.
      Deletion: You have the right to request that Smash It Games delete any of your personal information that we collected from you, subject to certain exceptions.
      Opt-Out: You have the right to direct Smash It Games to not sell your personal information, which is referred to as the right to opt-out.
      Non-Discrimination: You have the right not to be discriminated against for exercising any of your CCPA rights.
      To exercise any of these rights, please contact us at support@smashit.games.</p>

      <h3>Supplemental Notice for Nevada Residents:</h3>
      <p>Residents of the State of Nevada have the right to opt-out of the sale of certain personal information to third parties who intend to license or sell that personal information. We do not currently sell your personal information as sales are defined in Nevada Revised Statutes Chapter 603A. If you wish to exercise this right, please contact us at the provided contact information.</p>

      <h3>GDPR Rights</h3>
      <p>For individuals in the European Economic Area (EEA), the General Data Protection Regulation (GDPR) provides certain rights regarding personal data:

        Right to Access: You can request details of your personal data that we hold.
        Right to Rectify: You can have any incomplete or inaccurate data we hold about you corrected.
        Right to Erasure: You can ask us to delete or remove your personal data where there is no valid reason for us to continue processing it.
        Data Portability: You can request a transfer of your data to you or a third party in a machine-readable format.
        Right to Withdraw Consent: If you have provided your consent to the collection, processing, and transfer of your personal data, you have the right to fully or partially withdraw your consent.
        Right to Object: You can object to our processing of your personal data based on our legitimate interests.
        Rights in Relation to Automated Decision Making and Profiling: You have the right not to be subject to a decision based solely on automated processing.
        To exercise any GDPR rights, please contact us. We may need to verify your identity for security reasons before proceeding.</p>

      <h3>Australian Privacy Rights:</h3>
      <p>Under the Australian Privacy Act 1988 (Cth), individuals in Australia have rights concerning their personal information. These include:

        Right to Access: You have a right to access your personal data that we hold.
        Correction: If you believe any of your data is incorrect, you can ask for it to be updated.
        Complaints: If you believe there's been a breach of your rights, you have the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC).
        Opt-Out: You have a right to opt-out of direct marketing communications.
        For any inquiries or to exercise any of your rights, please reach out to us at support@smashit.games.</p>
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
  name: "PrivacyPolicyPage",
  components: {
    AppHeader
  }
}
</script>

<style scoped>
  .privacy-policy-section {
    padding: 4rem 10rem; /* increased padding */
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
    text-align: center; /* center align the h1 */
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
