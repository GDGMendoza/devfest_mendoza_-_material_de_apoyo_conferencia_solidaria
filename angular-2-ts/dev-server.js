//this is only for dev work
var bs = require("browser-sync").create();

bs.init({
    server: "public",
    port: 3001,
    middleware: [],
    files: "**/*.html, **/*.js, , **/*.ts",
    notify: false
});
