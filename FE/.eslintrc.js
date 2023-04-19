module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:react-hooks/recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks", "prettier", "jest"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/order": ["error", {
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true
      }
    }]
  }
};