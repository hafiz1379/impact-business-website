module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2021, // Updated ecmaVersion
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // Add any custom rules here
    }
};
