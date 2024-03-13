/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'linear-gradient(90deg, rgba(47,53,189,1) 24%, rgba(130,62,205,1) 53%)',
        'bottom-gradient': 'linear-gradient(360deg, #ae73db, transparent)',
        'mission': 'url(/src/assets/mission.jpg)',
        'passport': 'url(/src/assets/passport.jpg)',
        'house': 'url(/src/assets/house.jpg)',
        'city': 'url(/src/assets/city.jpg)'
      },
      boxShadow: {
        'primary': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        'secondary': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
      },
    },
  },
  plugins: [],
}

