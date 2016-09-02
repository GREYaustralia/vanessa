# Vanessa

### Application Structure
- index.html
    - assets
        - css
        - fonts
        - img
        - js
            - src
        - scss
            - components
            - modules
            - vendors
        - video
- node_modules
- .gitignore
- gulpfile.js
- package.json
- README.md

### Setup
This project takes advantage of [Gulp](http://gulpjs.com) in order to automate task like minification and concatenation of CSS and JavaScript files. So first of all, make sure to run `sudo npm install` from the projects root directory. This will install all necessary node packages for you.

Before you start editing your files run `gulp watch` from the projects root to start the builder. This will compile the SCSS files from `assets/scss` into one minified CSS-file located in `assets/css/app.css` and the JavaScript files from `assets/js/src` to `assets/js/app.js`.