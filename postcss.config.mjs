import cssnano from 'cssnano'

export default {
  syntax: 'postcss-scss',
  plugins: [
    cssnano({
      preset: 'default',
    }),
  ],
}
