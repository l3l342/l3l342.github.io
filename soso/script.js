function nein () {
    btn = document.getElementById("nein");
    new_btn = document.createElement("button");
    new_btn.innerText = "Nein ist nur für show";
    btn.replaceWith(document.createElement(new_btn));


};