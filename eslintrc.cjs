require('@rushstack/slint-patch/modern-module-resolution')

module.export = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions:{
        ecmaVersion: 'latest'
    },
    plugins: ['jest']
}