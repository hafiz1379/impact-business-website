module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true // Add Node.js environment
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // Add any custom rules here
    }
};
