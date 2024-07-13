/**
 * @type {import('lint-staged').Config}
 */
export default {
  '*.{js,jsx}': ['eslint --fix --cache', 'prettier --write'],
  '*.{json,md,yml,yaml}': ['prettier --write']
};
