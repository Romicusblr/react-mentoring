module.exports = env => {
    const mode = env.production ? "production" : "development";
    return require(`./webpack/webpack.${mode}.js`);
}
