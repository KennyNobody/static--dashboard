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
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/profile.html",
        filename: "profile.html",
        inject: "body",
        title: "Profile | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/profile.html",
        filename: "profile.html",
        inject: "body",
        title: "Profile | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/profile-filled.html",
        filename: "profile-filled.html",
        inject: "body",
        title: "Profile | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/multi-group.html",
        filename: "multi-group.html",
        inject: "body",
        title: "Group Dashboard | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/multi-person.html",
        filename: "multi-person.html",
        inject: "body",
        title: "Person Dashboard | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant.html",
        filename: "restaurant.html",
        inject: "body",
        title: "Restaurant | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant-main.html",
        filename: "restaurant-main.html",
        inject: "body",
        title: "Main info | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant-hours.html",
        filename: "restaurant-hours.html",
        inject: "body",
        title: "Business hours | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant-co-owners.html",
        filename: "restaurant-co-owners.html",
        inject: "body",
        title: "Co-owners | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/restaurant-managers.html",
        filename: "restaurant-managers.html",
        inject: "body",
        title: "Managers | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report.html",
        filename: "report.html",
        inject: "body",
        title: "Report | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-edit.html",
        filename: "report-edit.html",
        inject: "body",
        title: "Report edit | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-sales.html",
        filename: "report-sales.html",
        inject: "body",
        title: "Sales | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-sales-edit.html",
        filename: "report-sales-edit.html",
        inject: "body",
        title: "Sales edit | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-services.html",
        filename: "report-services.html",
        inject: "body",
        title: "Services | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-services-edit.html",
        filename: "report-services-edit.html",
        inject: "body",
        title: "Services edit | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-comps.html",
        filename: "report-comps.html",
        inject: "body",
        title: "Comps | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-comps-edit.html",
        filename: "report-comps-edit.html",
        inject: "body",
        title: "Comps edit | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-notes.html",
        filename: "report-notes.html",
        inject: "body",
        title: "Notes | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-notes-edit.html",
        filename: "report-notes-edit.html",
        inject: "body",
        title: "Notes edit | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-reviews.html",
        filename: "report-reviews.html",
        inject: "body",
        title: "Reviews | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-reviews-edit.html",
        filename: "report-reviews-edit.html",
        inject: "body",
        title: "Reviews edit | Dashboard",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/report-table.html",
        filename: "report-table.html",
        inject: "body",
        title: "Table | Dashboard",
        head,
        temp
    }),
];
