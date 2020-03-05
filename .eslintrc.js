module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "window": true,
        "define": true,
        "require": true,
        "module": true,
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "es6": true,
        },
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
                                               // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            "flowVersion": "0.53" // Flow version
        },
    },
    "plugins": [
        "babel",
        "react"
    ],
    "rules": {
        "indent": ["error", 4, {"SwitchCase":1}],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "single" ],
        "semi": [ "error", "always"],
        "react/jsx-boolean-value": 0,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-no-undef": 1,
        "no-console": "off",
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/react-in-jsx-scope": 1,
        "react/prefer-es6-class": 1,
    }
};
