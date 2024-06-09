module.exports = {
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-plugin-import/recommended',
        'plugin:react-hooks/recommended',
        'eslint-config-prettier',
        'prettier',
        // 'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    env: {
        browser: true,
        es2020: true,
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        'tailwindcss/no-custom-classname': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/destructuring-assignment': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'consistent-return': 'off',
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: [
                            '@shared/*/*/*/*/*/**',
                            '@entities/*/*/*/*/*/**',
                            '@features/*/*/*/*/*/**',
                            '@widgets/*/*/*/*/*/**',
                            '@app/*/*/*/*/*/**',
                        ],
                        message:
                            'Direct access to the internal parts of the module is prohibited',
                    },
                    {
                        group: [
                            '../**/shared',
                            '../**/entities',
                            '../**/features',
                            '../**/widgets',

                            '../**/app',
                        ],
                        message: 'Prefer absolute imports instead of relatives',
                    },
                ],
            },
        ],
        'import/no-extraneous-dependencies': 'error',
        'import/prefer-default-export': 'off',
    },
    overrides: [
        {
            files: ['./src/**/*.ts', './src/**/*.tsx'],
            extends: ['plugin:eslint-plugin-import/typescript'],
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: ['tsconfig.json'],
            },
            plugins: ['@typescript-eslint/eslint-plugin'],
            rules: {
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/no-throw-literal': 'off',
                '@typescript-eslint/no-shadow': 'off',
                'object-curly-newline': 'off',
                '@typescript-eslint/indent': 'off',
                'import/no-extraneous-dependencies': 'error',
            },
        },
        // {
        //     files: ['**/__tests__/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        //     extends: ['plugin:testing-library/react'],
        //     rules: {
        //         'testing-library/no-debugging-utils': 'warn',
        //         'import/no-extraneous-dependencies': [
        //             'error',
        //             { devDependencies: true },
        //         ],
        //     },
        // },
    ],
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: [
                    'node_modules',
                    'src/',
                    'src/features',
                    'src/widgets',
                    'src/entities',
                    'src/shared',
                ],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
}
