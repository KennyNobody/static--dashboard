const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const aside = fs.readFileSync("src/includes/aside.html");
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const footer = fs.readFileSync("src/includes/footer.html");
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
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/profile.html",
        filename: "profile.html",
        inject: "body",
        title: "Profile | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/profile.html",
        filename: "profile.html",
        inject: "body",
        title: "Profile | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/profile-filled.html",
        filename: "profile-filled.html",
        inject: "body",
        title: "Profile | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/multi-group.html",
        filename: "multi-group.html",
        inject: "body",
        title: "Group Dashboard | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/multi-person.html",
        filename: "multi-person.html",
        inject: "body",
        title: "Person Dashboard | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant.html",
        filename: "restaurant.html",
        inject: "body",
        title: "Restaurant | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant-main.html",
        filename: "restaurant-main.html",
        inject: "body",
        title: "Main info | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant-hours.html",
        filename: "restaurant-hours.html",
        inject: "body",
        title: "Business hours | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant-co-owners.html",
        filename: "restaurant-co-owners.html",
        inject: "body",
        title: "Co-owners | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant-managers.html",
        filename: "restaurant-managers.html",
        inject: "body",
        title: "Managers | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report.html",
        filename: "report.html",
        inject: "body",
        title: "Report | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-edit.html",
        filename: "report-edit.html",
        inject: "body",
        title: "Report edit | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-sales.html",
        filename: "report-sales.html",
        inject: "body",
        title: "Sales | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-sales-edit.html",
        filename: "report-sales-edit.html",
        inject: "body",
        title: "Sales edit | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-services.html",
        filename: "report-services.html",
        inject: "body",
        title: "Services | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-services-edit.html",
        filename: "report-services-edit.html",
        inject: "body",
        title: "Services edit | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-comps.html",
        filename: "report-comps.html",
        inject: "body",
        title: "Comps | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-comps-edit.html",
        filename: "report-comps-edit.html",
        inject: "body",
        title: "Comps edit | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-notes.html",
        filename: "report-notes.html",
        inject: "body",
        title: "Notes | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-notes-edit.html",
        filename: "report-notes-edit.html",
        inject: "body",
        title: "Notes edit | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-reviews.html",
        filename: "report-reviews.html",
        inject: "body",
        title: "Reviews | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-reviews-edit.html",
        filename: "report-reviews-edit.html",
        inject: "body",
        title: "Reviews edit | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-table.html",
        filename: "report-table.html",
        inject: "body",
        title: "Table | Dashboard",
        aside,
        head,
        footer,
        temp
    }),
];
