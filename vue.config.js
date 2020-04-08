const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
    // module: {
    //     rules: [{
    //         test: /\.scss$/,
    //         use: ['style-loader', 'css-loader', 'sass-loader', {
    //             loader: 'style-resources-loader',
    //             options: {
    //                 patterns: [
    //                     '../../assets/css/common.scss',
    //                 ]
    //             }
    //         }]
    //     }]
    // },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
        config.optimization.minimize(true)
        config.optimization.splitChunks({
            chunks: 'all'
        })
    },

}