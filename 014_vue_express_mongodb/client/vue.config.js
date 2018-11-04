const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname,'../server/public'),// 把build的aeest的目标路径从dist改成server里面的public
    devServer: {
        proxy: {
            '/api':{
                target: 'http://localhost:5000'
            }
        }
    }
}