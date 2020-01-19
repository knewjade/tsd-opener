module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? 'tsd-opener/'
        : '/',
    outputDir: 'docs/',
};
