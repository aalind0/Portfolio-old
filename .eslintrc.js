module.exports = {
  "env": {
    "browser": true,
    "meteor": true,
    "node": true,
    "mocha": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1,
    "indent": [1, 2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }
      }
    ],
    "linebreak-style": 0,
    "no-console": 1,
    "no-var": 1,
    "prefer-const": 1,
    "quotes": [
      "error",
      "single",
      {"allowTemplateLiterals": true}
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
