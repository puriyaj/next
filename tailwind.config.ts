import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,html,mdx}',
    './components/**/*.{js,ts,jsx,tsx,html,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'ethereal': '#E4E4DE',
      'sophisticated': '#C4C5BA',
      'timeless ': '#1B1B1B',
      'muted': '#595f39',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'creme':'#c9bdb4',
      'creme2':'#a28c60',
      'dark':'#333333',
      'creme3':'#f4f4ec'
    },
    extend: {
      backgroundImage: {
        'photo': 'url("../public/images/3.jpg")',
     
        
      },
      
      fontFamily:{
        roboto:['var(--font-roboto)','sans-serif'],
        edu:['var(--font-edu)','sans-serif']
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
