const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: outputPath,
    },
    // これで開発サーバを起動したときにすぐにブラウザにdist/index.htmlを表示してくれる
    devServer: {
        static: {
            directory: outputPath,
        },
    },
};
