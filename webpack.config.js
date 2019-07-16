module.exports = env => {
    const mode = env.prod ? "prod" : "dev";
    return require(`./webpack/webpack.${mode}.js`);
}
