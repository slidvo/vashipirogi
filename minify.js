const minify = require('minify')
const tryToCatch = require('try-to-catch')
const fs = require('fs')
const options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false
    }
}

let filesForMinify = [
    'src/public/js/pages/index/handlers/button_add_to_cart_handler.js',
    'src/public/js/pages/index/handlers/button_basket_handler.js',
    'src/public/js/pages/index/handlers/button_weight_handler.js',
    'src/public/js/pages/index/handlers/navbar_click_handler.js',
    'src/public/js/pages/index/handlers/productCardHandler.js',
    'src/public/js/pages/index/alert_cookie.js',
    'src/public/js/pages/index/index_handler.js'
]

let cssForMinify = [
    'src/public/css/style.css',
    'src/public/css/navbar.css',
    'src/public/css/page-4.css',
    'src/public/css/register_order.css',
    'src/public/css/cart.css',
    'src/public/css/uikit.css'
]
let minFiles = new Map([
    ['index', './public/js/pages/index/index.min.js'],
    ['styles', './public/css/styles.min.css'],
    ['thnx_css', './public/css/thnx.min.css']
])
let indexMinPath = minFiles.get('index')
let styleMinPath = minFiles.get('styles')
let thnxMinPath = minFiles.get('thnx_css')





//START
clearFile(indexMinPath);
filesForMinify.forEach((path) => { minifier(path, indexMinPath) })


clearFile(styleMinPath)
cssForMinify.forEach((path) => { minifier(path, styleMinPath) })

clearFile(thnxMinPath)
minifier('src/public/css/thnx.css', thnxMinPath)
    //STOP






async function minifier(path, destPath) {
    const [error, data] = await tryToCatch(minify, path)
    checkErr(error)
    dataAppend(destPath, data)
}

function checkErr(err) {
    if (err) return console.error(err);
}

function dataAppend(path, data) {
    fs.appendFile(path, data, checkErr)
}

function clearFile(path) {
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            checkErr(err)
        } else {
            fs.truncate(path, 0, () => { console.log("file : " + path + "was updated") })
        }
    })
}