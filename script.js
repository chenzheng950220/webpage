

function myFunction() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 12) {
        return "Good morning! &#19978;&#21320;&#22909;! Bonjour!";
    } else if (hour < 19) {
        return "Good afternoon! &#19979;&#21320;&#22909;! Bonjour!";
    } else {
        return "Good night! &#26202;&#19978;&#22909;! Bonsoir!";
    }
}


document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li1><a href='index.html'>Zheng Chen</a></li1>" +
"<li2><a href='index.html'>Home</a></li2>" +
"<li2><a href='projects.html'>Projects</a></li2>" +
"<li2><a href='about.html'>About Me</a></li2>" +
"<li2><a href='contact.html'>Contact</a></li2>" +
"</ul>";

document.getElementById("greet").innerHTML =
myFunction();