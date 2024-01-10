import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./pages/**/*.vue', './components/**/*.vue'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    }
  }
}
