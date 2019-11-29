
var sidebar_open = false

var menu_elements = {
    "Text Compare"      : "text_compare/text_compare.html",
    "Regex testing"     : "regex_test/regex_test.html",
    "String converter"  : "string_convert/string_convert.html",
    "Number conversion" : "num_convert/num_convert.html",
}

function load_content(content) {
    document.getElementById("window_content").innerHTML = `
        <object type="text/html" height="100%" width="100%" data="${content}">
        </object>`
}

function load_sidebar(element) {
    var menu_contents = ""

    for (var key in menu_elements){
        menu_contents += `<a href="javascript:void(0)" onclick="load_content(\'${menu_elements[key]}\')">
            ${key}
            </a>`
    }

     document.getElementById(element).innerHTML=`
        <button id="menu_button" class="openbtn" onclick="toggle_sidebar()">☰ Menu</button>
        <div id="mysidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="close_sidebar()">×</a>
            ${menu_contents}
        </div>`;
}

function toggle_sidebar(){
    if (sidebar_open){
        close_sidebar()
    }
    else{
        open_sidebar()
    }
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function open_sidebar() {
    sidebar_open = true
    document.getElementById("mysidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function close_sidebar() {
    sidebar_open = false
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
