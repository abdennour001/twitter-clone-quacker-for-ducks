var form = document.querySelector("form");
var loading = document.querySelector(".loading");

loading.style.display = "none";

form.addEventListener("submit", event => {
    event.preventDefault();

    var formData = new FormData(form);
    var name = formData
        .get("name")
        .trim()
        .toString();
    var quack = formData
        .get("content")
        .trim()
        .toString();

    data = {
        name,
        quack
    };

    form.style.display = "none";
    loading.style.display = "";

    console.log(data);
});
