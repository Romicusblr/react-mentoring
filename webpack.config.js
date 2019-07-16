module.exports = env => {
    const mode = Object.keys(env)[0] || "dev";
    const configPath = `./webpack/webpack.${mode}.js`;
    return require(configPath);
}
