module.exports = {
    ignorePatterns: ['.eslintrc.js'],
    env: {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "plugin:i18next/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            jsx: true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next",
    ],
    rules: {
        "no-console": "warn",
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": ["error", 2],
        "indent": ["error", 2],
        "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".tsx"] }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid']
            }
        ],
        "max-len": ["error", { code: 100, ignoreComments: true }]
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                "i18next/no-literal-string": "off",
            }
        }
    ]
}