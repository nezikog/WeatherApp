let inp = document.getElementById("inp");
let search = document.getElementById("search");

let inf = document.querySelectorAll(".hide");

let gradient = document.querySelector(".gradientBoxSearch");

search.addEventListener('click', () => {
    const API = '4e1fd4e08047e5f55b581ba5529d08ad';
    const city = inp.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            document.getElementById("city").innerHTML = data.name
            document.getElementById("deg").innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.getElementById("desc").innerHTML = data.weather["0"].description
            document.getElementById("imgg").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather['0'].icon}@2x.png"/>`
            inf.forEach(element => {
                element.classList.remove("hide")
            });
        })
        .catch(err => {
            inf.forEach(e => {
                e.classList.add("hide")
            })
            console.log("ERROR >>>", err)
            alert("Город не введен или введен неккоректно!")
        })
})