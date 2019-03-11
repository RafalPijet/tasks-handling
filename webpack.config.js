const path = require("path");

module.exports = (env) => {
    return {
        mode: env,
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "app.bundle.js"
        }
    }
};