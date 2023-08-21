module.exports = {
    webpack: {
        configure: {
            resolve: {
                alias: {
                    'react/jsx-runtime': 'react/jsx-runtime.js'
                }
            },
        }
    }
}