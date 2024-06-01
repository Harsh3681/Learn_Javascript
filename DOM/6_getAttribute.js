

const linksss = document.querySelector(".myheader .tempfield .nav-class a");
console.log(linksss.getAttribute("href"));      // here with "#"
console.log(linksss.getAttribute("href").slice(1));      // here show without "#"

//  We can change the "href" value i.e "homu" also see below👇

linksss.setAttribute("href", "https://google.com"); // here set href
console.log(linksss.getAttribute("href"));

const inputWala = document.querySelector(".form-todo input");   // we can put name of ele directly also like "input"
console.log(inputWala.getAttribute("type"));









