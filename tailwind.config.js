/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './src/**/*.{html,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: '20px'
    },
    colors: {
      transparent: 'transparent',
      mask: 'rgba(45, 45, 45, .5)',
      primary: '#EB1212',
      'primary-hover': '#E56464',
      // secondary: '#FB7402',
      // 'light-secondary': '#4c6179',
      white: '#ffffff',
      'very-light-grey': '#F1F1F1',
      'light-grey': '#EEEEEE',
      'grey': '#C5C5C5',
      'med-grey': '#878787',
      'dark-grey': '#3D3D3D',
      black: '#101010',
      danger: '#e82323',
      success: '#1ad692',
      active: '#3d618b',
    },
    borderRadius: {
      none: '0',
      5: '5px',
      4: '4px',
      8: '8px',
      10: '10px',
      20: '20px',
      30: '30px',
      50: '50px',
      60: '60px',
      100: '100px',
      full: '999px'
    },
    boxShadow: {
      card: '0px 4px 8px rgba(0, 0, 0, 0.12)',
      button: '0px 1px 2px rgba(0, 0, 0, 0.25)',
    },
    spacing: {
      0: '0',
      5: '5px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      15: '15px',
      16: '16px',
      20: '20px',
      22: '22px',
      24: '24px',
      25: '25px',
      28: '28px',
      30: '30px',
      40: '40px',
      50: '50px',
      55: '55px',
      68: '68px',
      80: '80px',
      100: '100px',
      120: '120px',
      156: '156px',
      280: '280px',
    },
    fontFamily: {
      sans: ['Roboto Condensed'],
      manitou: ['Manitou']
    },
    fontSize: {
      11: '11px',
      13: '13px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      48: '48px',
      62: '62px',
      80: '80px'
    },
    lineHeight: {
      16: '16px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      33: '33.6px'
    },
    fontWeight: {
      300: '300',
      regular: '400',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      900: '900'
    },
    extend: {},
  },
  variants: {
    extend: {
      //
    }
  },
  plugins: [],
  experimental: {
    // Removes --tw- variables from universal selector
    // https://github.com/tailwindlabs/tailwindcss/discussions/7317
    optimizeUniversalDefaults: false
  }
}

