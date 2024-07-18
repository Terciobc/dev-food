// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
      "@babel/preset-env",  // Adicionando o preset-env
    ],
    plugins: [
      "@babel/plugin-transform-modules-commonjs",  // Adicionando o plugin para transformar módulos ES
    ],
  };
};
