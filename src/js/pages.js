const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Dashboard",
        head
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/loader.html",
        filename: "loader.html",
        inject: "body",
        title: "Loader | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/page.html",
        filename: "page.html",
        inject: "body",
        title: "Title child page | Dashboard",
        head,
        sectionHeader,
        sectionFooter,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/ui.html",
        filename: "ui.html",
        inject: "body",
        title: "UI-Kit | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/login.html",
        filename: "login.html",
        inject: "body",
        title: "Login | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/home.html",
        filename: "home.html",
        inject: "body",
        title: "Home | Dashboard",
        head,
        temp
    })
];