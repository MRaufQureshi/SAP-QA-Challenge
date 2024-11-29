import tsparser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: ['module', 'commonjs'],
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'jsdoc': jsdoc,
    },
    rules: {
      indent: ['warn', 4, { SwitchCase: 0 }],
      'linebreak-style': ['warn', 'windows'],
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
      'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-empty-function': 'warn',
      'no-duplicate-imports': 'warn',
      'no-empty': 'warn',
      'prefer-template': 'warn',
      'no-shadow': 'warn',
      'prefer-const': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: false,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
        },
      ],
      'object-curly-spacing': ['warn', 'always'],
      'array-bracket-spacing': ['warn', 'never'],
      'arrow-spacing': ['warn', { before: true, after: true }],
    },
  },
  {
    languageOptions: {
      globals: {
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        Given: 'readonly',
        When: 'readonly',
        Then: 'readonly',
      },
    },
  },
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
      'no-shadow': 'warn',
    },
  },
];