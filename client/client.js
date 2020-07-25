var form = document.querySelector("form");
var loading = document.querySelector(".loading");
var quacksContainer = document.querySelector(".quacks-container");

const API_URL = "http://localhost:5000/quacks";

loading.style.display = "none";

const createQuackElement = quack => {
    const div = document.createElement("div");
    div.className = "quack";

    const name = document.createElement("h3");
    name.textContent = quack.name;

    const content = document.createElement("p");
    content.textContent = quack.quack;

    const date = document.createElement("small");
    date.textContent = new Date(quack.created_at);

    div.appendChild(name);
    div.appendChild(content);
    div.appendChild(date);

    quacksContainer.appendChild(div);
};

const getAllQuacks = () => {
    loading.style.display = "";
    form.style.display = "";
    fetch(API_URL)
        .then(res => res.json())
        .then(quacksAll => {
            loading.style.display = "none";
            quacksAll.quacks.forEach(quack => {
                createQuackElement(quack);
            });
        });
};

const removeAllQuacks = () => {
    quacksContainer.innerHTML = "";
};

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

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(createdData => {
            loading.style.display = "none";
            form.reset();
            removeAllQuacks();
            getAllQuacks();
        });

    form.style.display = "none";
    loading.style.display = "";
});

removeAllQuacks();
getAllQuacks();
