var data;
function loadData() {
  let http = new XMLHttpRequest();
  http.open("GET", "https://hp-api.herokuapp.com/api/characters");
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      data = JSON.parse(this.responseText);
      console.log(data);
      //document.getElementById("result").innerHTML = data;
    }
    if (this.readyState == 4 && this.status == 404) {
      document.getElementById("result").innerHTML = "Not Found";
    }
  };
  http.send();
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const s1 = data
    .map((character) => {
      return `
        <li class="character">
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <img src="${character.image}"></img>
        </li>
    `;
    })
    .join("");
  document.getElementById("result").innerHTML = s1;
});

loadData();

// let jsondata = JSON.stringify(data);

// localStorage.setItem("data", jsondata);
