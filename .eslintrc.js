module.exports = {
    "extends": [
        "airbnb",  
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
          "pragma": "React",  // Pragma to use, default to "React"
          "version": "16.5.0", // React version, default to the latest React stable release
        }
    },
    "plugins": [
        "react"
      ],
      "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
      }
};