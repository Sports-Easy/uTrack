module.exports = () => {
    /* eslint-disable */
    const withLess = require('@zeit/next-less')
    const lessToJS = require('less-vars-to-js')
    // fix: prevents error when .less files are required by node
    if (typeof require !== 'undefined') {
        require.extensions['.less'] = file => {}
    }
    return withLess({
        lessLoaderOptions: {
            javascriptEnabled: true,
        }
    })
};