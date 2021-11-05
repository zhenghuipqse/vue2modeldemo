const {VueLoaderPlugin} = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const htmlPlugin = new htmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html"
})

module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "app.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {

                        }
                    },
                    {
                        loader: 'iview-loader',
                        options: {
                            prefix: false
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: ["vue-style-loader", "css-loader", "sass-loader?indentedSyntax"]
            },
            {
                test: /\.less$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
        ],


    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".vue", ".json", ".css", ".node"],
        alias: {
            "@": path.join(__dirname, "./src"),
            "@assets": path.join(__dirname, "./assets"),
        }
    },
    plugins: [
        htmlPlugin, new VueLoaderPlugin(), new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "./data"),
                    to: path.join(__dirname, "./dist/data")
                },
                {
                    from: path.join(__dirname, "./assets"),
                    to: path.join(__dirname, "./dist/assets")
                }
            ],
            options: {
                concurrency: 100
            }
        }),
    ]
}
