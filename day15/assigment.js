// const meal = document.getElementById("meal")

var data;
function loadData() {
  let http = new XMLHttpRequest();
  http.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php");
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

const btn = document.getElementById("get_meal");
btn.addEventListener("click", () => {
  const s1 = `
        <li class="character">
            <p> Category: ${data.meals.strCategory}</p>
            <p> Area:${data[0].meals.strArea}</p>
            <img src="${data[0].meals.strMealThumb}"></img>
        </li>
    `;
  document.getElementById("meal").innerHTML = s1;
});

loadData(); // loaddata from web server

// let jsondata = JSON.stringify(data);

// localStorage.setItem("data", jsondata);
