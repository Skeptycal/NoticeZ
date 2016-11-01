"use strict";

function animateOut(a, b) {
    a.className += " animated " + b
}

function htmlToElements(a) {
    var temp = document.createElement('div');
    temp.innerHTML = a;
    return temp.firstChild;
}

function createContent(a, b, c, d, e) {
    var f = {
            success: "<i class='fa fa-check'></i>",
            warning: "<i class='fa fa-times'></i>",
            info: "<i class='fa fa-info'></i>",
            default: ""
        },
        g = {
            success: "background-color: #2ecc71; color: white;",
            warning: "background-color: #e74c3c; color: white;",
            info: "background-color: #3498db; color: white;",
            default: "background-color: #bdc3c7; color: white;"
        },
        h = {
            success: "30%",
            warning: "30%",
            info: "30%",
            default: "0%"
        },
        i = "";
    return i += "<div class='noticeBox' id='" + e + "' style='" + g[d] + ";font-family: " + c + "'>", i += "   <div class='left' style='width: " + h[d] + "'>", i += f[d], i += "   </div>", i += "   <div class='right'>", i += "       <span class='Ztitle'>", i += a, i += "       </span><br>", i += "       <span class='Zbody'>", i += b, i += "       </span>", i += "   </div>", i += "</div>"
}

function noticeZ(a) {
    var b = a.title,
        c = a.body,
        d = void 0 != a.position ? a.position : "topRight",
        e = void 0 != a.time ? a.time : 3e3,
        f = void 0 != a.state ? a.state : "default",
        g = "" + document.getElementsByClassName("noticeBox").length,
        h = void 0 != a.animate ? a.animate : "fadeOut",
        i = void 0 != a.font ? a.font : "Arial",
        j = createContent(b, c, i, f, g);
    if (j = htmlToElements(j), 0 == document.getElementsByClassName(d).length) {
        var k = document.createElement("div");
        k.className = "nContent " + d, k.appendChild(j[0]), document.body.appendChild(k)
    } else document.getElementsByClassName(d)[0].appendChild(j[0]);
    setTimeout(function() {
        animateOut(document.getElementById(g), h), setTimeout(function() {
            document.getElementsByClassName(d)[0].removeChild(document.getElementById(g))
        }, 1010)
    }, e)
}
