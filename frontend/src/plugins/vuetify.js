// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const vuetifyInstance = createVuetify({
    theme: {
        defaultTheme: 'dark', // Set dark mode by default
        themes: {
            light: {
                primary: '#1976D2', // blue
                secondary: '#424242', // grey darken-3
                accent: '#82B1FF', // blue accent-1
                error: '#FF5252', // red accent-2
                info: '#2196F3', // blue
                success: '#4CAF50', // green
                warning: '#FFC107' // amber
            },
            dark: {
                primary: '#2196F3', // blue
                secondary: '#424242', // grey darken-3
                accent: '#FF4081', // pink accent-2
                error: '#FF5252', // red accent-2
                info: '#2196F3', // blue
                success: '#4CAF50', // green
                warning: '#FFC107' // amber
            }
        }
    },
    icons: {
        defaultSet: 'mdi' // Use MDI for icons
    }
});

vuetifyInstance.toggleTheme = function() {
    this.theme.current = this.theme.current === 'dark' ? 'light' : 'dark';
}

export default vuetifyInstance;