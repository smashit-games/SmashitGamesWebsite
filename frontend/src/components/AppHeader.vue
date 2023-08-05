<template>
  <v-app-bar app class="px-sm-11">
    <v-img :src="logo" alt="smashit.games Logo" height="50"></v-img>

    <v-spacer></v-spacer>

    <v-btn text :to="'/'">
      <v-icon left>mdi-fire</v-icon>
      Hellfire Hands
    </v-btn>
    <v-btn text :to="'/about-us'">
      <v-icon left>mdi-information</v-icon>
      About Us
    </v-btn>
    <v-btn text href="https://smash-it-games.notion.site/Job-Board-cb3cf317f59a4ba0bce1921b6e97c153" target="_blank" rel="noopener noreferrer">
      <v-icon left>mdi-briefcase</v-icon>
      Jobs
    </v-btn>
    <v-btn text href="https://discord.gg/84zvK3y3Cs" target="_blank" rel="noopener noreferrer">
      <v-icon left>mdi-discord</v-icon>
      Discord
    </v-btn>

    <!-- Theme Toggle Button -->
    <v-btn icon @click="toggleDarkMode">
      <v-icon>{{ themeIcon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  data() {
    return {
      logo: require('@/assets/smashitlogo-cropped.png')
    };
  },
  computed: {
    themeIcon() {
      return this.theme.global.current.value.dark ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny';
    }
  },
  setup() {
    const theme = useTheme();

    function toggleDarkMode() {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    }

    return {
      theme,
      toggleDarkMode
    };
  }
}
</script>