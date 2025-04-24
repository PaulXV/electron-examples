const path = require('path');

module.exports = {
  mode: 'development',
  target: 'electron-main',  // Assicurati che Webpack sia configurato per l'ambiente di Electron
  entry: './src/main.js',   // Il tuo file di entry per Electron
  output: {
    filename: 'main.bundle.js',  // Nome del file di output
    path: path.resolve(__dirname, '.webpack'),  // Cartella in cui viene creato il bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',  // Assicurati di avere il supporto per il codice ES6+
      }
    ],
  },
};
