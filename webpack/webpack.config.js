const path = require("path");//node 内置模块配置路径
const HtmlWebpackPlugin=require("html-webpack-plugin")//提取html
const MiniCssStractPlugin=require("mini-css-extract-plugin")//提取css
const OptimizeCss=require('optimize-css-assets-webpack-plugin')//css 压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');//压缩js
module.exports={
    optimization:{//优化项
        minimizer:[
            new OptimizeCss(),
            new UglifyJsPlugin({
                cache: true,
                sourceMap:true
            })
            ]
    },
    //开发服务器的配置
    devServer:{
        port:3000,
        progress:true,
        contentBase: path.join(__dirname, "dist"),
        compress:true

    },
    mode: "development",
    //入口的配置
    entry: './src/entry.js',
   //出口的配置
    output:{
        publicPath:'./',
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')//必须为绝对路径
    },
    //loader 顺序 从右到左 从下岛上执行
    module: {
        rules:[
            //打包css的图片，图片大小小于limit设置的8192B的会转化成base字符串引入，减少请求
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:8192,
                            outputPath:'./img/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssStractPlugin.loader,
                    {
                        loader: "css-loader" //接续@import这种语法
                    },
                    {
                        loader: "postcss-loader" //将less转换成css
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssStractPlugin.loader,
                    {
                        loader: "css-loader" //接续@import这种语法
                    },
                    {
                        loader: "postcss-loader" //将less转换成css
                    },
                    {
                        loader: "less-loader" //将less转换成css
                    }
                ]
            },{
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{//es6->es5
                        presets:[
                            '@babel/preset-env',
                        ],
                        plugins:[
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }]
                        ]
                    },
                }
            }
        ]
    },
    //放置所有webpack插件
    plugins: [
        new HtmlWebpackPlugin(({
            template:'./src/index.html',
            filename:"index.html",
            minify:{
                removeAttributeQuotes:true
            },
            hash:true
        })),
        new MiniCssStractPlugin({
            filename:'index.css'
            }
        )
    ]
}