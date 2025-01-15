import tseslint from 'typescript-eslint';
import * as jsonParser from 'jsonc-eslint-parser';

export default tseslint.config(
  {
    files: ['*.ts'],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json', // Ensure project option is under languageOptions.parserOptions
      },
    },
  },
  {
    files: ['*.json'],
    languageOptions: {
      parser: jsonParser,
    },
  }
);
