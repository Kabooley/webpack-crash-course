const path = require('path');

const outputPath = path.resolve(__dirname, "dist")

module.exports = {
    // webpackのエントリ・ポイント設定
    entry: "./src/index.js",
    // webpackの出力側の設定
    // > the target directory for all output files
    // > must be an absolute path (use the Node.js path module)
    // ということで絶対パスで指定しなくてはならない
    output: {
        path: outputPath,
        filename: "main.js",
        
    },
};
