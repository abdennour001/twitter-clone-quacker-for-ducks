var form = document.querySelector("form");
var loading = document.querySelector(".loading");

form.addEventListener("submit", event => {
    event.preventDefault();

    var formData = new FormData(form);
    var quack = formData.get();
    console.log(quack);
});
