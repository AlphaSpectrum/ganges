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
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": ["error", "windows"],
        "react/sort-prop-types": [1, {
            "callbacksLast": true,
            "ignoreCase": false,
            "requiredFirst": true,
            "sortShapeProp": true,
            "noSortAlphabetically": false
          }],
          "react/forbid-prop-types": [0],
          "react/sort-comp": [1]
        },
      "env": {
        "browser": true,
        "node": true
      }
};