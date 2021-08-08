const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Sec: resolve(__dirname, 'Sec/Security.html'),
        QA: resolve(__dirname, 'QA/QualityAssurance.html'),
        BE: resolve(__dirname, 'BE/BadExample.html'),
      }
    }
  }
}