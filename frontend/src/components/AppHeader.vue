<template>
  <v-app-bar app>
    <v-img :src="logo" alt="smashit.games Logo" height="40"></v-img>

    <v-spacer></v-spacer>

    <v-btn text @click="scrollTo('#aboutus')">What me doing</v-btn>
    <v-btn text @click="scrollTo('#workwork')">Work work</v-btn>

    <v-spacer></v-spacer>
    <v-btn text href="https://www.notion.so/smash-it-games/Job-Board-cb3cf317f59a4ba0bce1921b6e97c153?pvs=4">Jobs</v-btn>
    <v-btn text href="https://discord.gg/84zvK3y3Cs">Discord</v-btn>

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
  },
  methods: {
    scrollTo(target) {
      this.$scrollTo(target, 500);
    },
    // ... potentially other methods ...
  }
}
</script>