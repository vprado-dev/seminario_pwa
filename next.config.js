/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  // config
  pwa:{
    dest:"public",
    register:true,
    skipWaiting:true,
  }
})
