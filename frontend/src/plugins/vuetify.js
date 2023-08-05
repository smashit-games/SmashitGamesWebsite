import '@mdi/font/css/materialdesignicons.min.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                dark: false,
                colors: {
                    background: '#FFFFFF',
                    surface: '#FFFFFF',
                    primary: '#6200EE',
                    'primary-darken-1': '#3700B3',
                    secondary: '#03DAC6',
                    'secondary-darken-1': '#018786',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00'
                }
            },
            dark: {
                dark: true,
                colors: {
                    background: '#121212',
                    surface: '#121212',
                    primary: '#BB86FC',
                    'primary-darken-1': '#3700B3',
                    secondary: '#03DAC6',
                    'secondary-darken-1': '#018786',
                    error: '#CF6679',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00'
                }
            }
        }
    },
    icons: {
        defaultSet: 'mdi' // Use MDI for icons
    }
});

export default vuetify;
