var form = document.querySelector("#quackquack");
var loading = document.querySelector(".loading");
var quacksContainer = document.querySelector(".quacks-container");

var loginForm = document.querySelector("#login");
var registerForm = document.querySelector("#register");
var loginLink = document.querySelectorAll(".loginLink");
var registerLink = document.querySelectorAll(".registerLink");
var logoutLink = document.querySelector("#logout");
var notAuthMessageContainer = document.querySelector(".not-auth");
var emailTag = document.querySelector("#emailTag");

loginForm.style.display = "none";
registerForm.style.display = "none";
form.style.display = "none";

const API_URL_ROOT =
    window.location.hostname === "127.0.0.1"
        ? "http://localhost:5000"
        : "https://quacker-api.vercel.app";

const API_URL =
    window.location.hostname === "127.0.0.1"
        ? "http://localhost:5000/quacks"
        : "https://quacker-api.vercel.app/quacks";

loading.style.display = "none";

// check if user is auth
const isAuth = () => {
    token = localStorage.getItem("token");
    return token;
};

const login = (email, password) => {
    loading.style.display = "";
    loginForm.style.display = "none";
    registerForm.style.display = "none";
    fetch(API_URL_ROOT + "/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            if (res.auth) {
                const token = res.token;
                const user = res.user;
                localStorage.setItem("token", token);
                localStorage.setItem("email", user.email);
                form.style.display = "";
                loading.style.display = "none";
                emailTag.textContent = user.email;
                notAuthMessageContainer.style.display = "none";
                console.log(localStorage.getItem("token"));
            } else {
                console.log(res.message);
            }
        })
        .catch(err => console.log(err));
};

const register = (email, password) => {
    loading.style.display = "";
    registerForm.style.display = "none";
    loginForm.style.display = "none";
    fetch(API_URL_ROOT + "/auth/", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            if (res.auth) {
                const { token, user } = res;
                localStorage.setItem("token", token);
                localStorage.setItem("email", user.email);
                emailTag.textContent = user.email;
                form.style.display = "";
                loading.style.display = "none";
                notAuthMessageContainer.style.display = "none";
            } else {
                console.log(res.message);
            }
        })
        .catch(err => console.log(err));
};

const logout = () => {
    localStorage.clear();
    window.location.reload();
};

loginLink.forEach(loginlink => {
    loginlink.addEventListener("click", e => {
        e.preventDefault();

        loginForm.style.display = "";
        registerForm.style.display = "none";
        notAuthMessageContainer.style.display = "none";
    });
});

registerLink.forEach(registerlink => {
    registerlink.addEventListener("click", e => {
        e.preventDefault();

        registerForm.style.display = "";
        loginForm.style.display = "none";
        notAuthMessageContainer.style.display = "none";
    });
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    var formData = new FormData(loginForm);
    var email = formData
        .get("email")
        .trim()
        .toString();
    var password = formData
        .get("password")
        .trim()
        .toString();
    login(email, password);
});

registerForm.addEventListener("submit", e => {
    e.preventDefault();
    var formData = new FormData(registerForm);
    var email = formData
        .get("email")
        .trim()
        .toString();
    var password = formData
        .get("password")
        .trim()
        .toString();
    var passwordConfirm = formData
        .get("passwordConfirm")
        .trim()
        .toString();
    if (password !== passwordConfirm) {
        registerForm.reset();
        return;
    }
    register(email, password);
});

logoutLink.addEventListener("click", e => {
    logout();
});

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

    if (isAuth()) {
        form.style.display = "";
        notAuthMessageContainer.style.display = "none";
    }

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
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("token")}`
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
emailTag.textContent = localStorage.getItem("email");
