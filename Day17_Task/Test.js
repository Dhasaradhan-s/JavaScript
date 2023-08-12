//syntax

// async function fetchData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

async function getWeatherData(val1, val2) {
  var wresponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${val1}&lon=${val2}&APPID=20bf4bd158e253e914576847478e37ed`
  );

  var wdata = await wresponse.json();

  var data = await wdata;

  return data;
}

async function fetchdata() {
  var response1 = await fetch("https://restcountries.com/v2/all");

  var cdata = await response1.json();

  var cdiv = document.createElement("div");
  cdiv.setAttribute("class", "container");

  var rdiv = document.createElement("div");
  rdiv.setAttribute("class", "row d-flex flex-wrap justify-content-center");
  cdiv.append(rdiv);

  cdata.forEach((element, index) => {
    var wdata;

    if (element.latlng != undefined) {
      var lat = element.latlng[0];
      var lang = element.latlng[1];

      var wdata = getWeatherData(lat, lang);

      wdata.then((data) => {
        console.log(data.main);

        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "col-lg-4 col-sm-12");
        cardDiv.innerHTML = `<div class="card m-0" style="width: 15rem; height: auto">
        <div class="card-body p-1">
          <h5 class="card-title bg-dark" style="color: white">${element.name}</h5>
          <img src="${element.flag}" alt="" class="card-img-top" />
          <p class="card-text">Capital:${element.capital}</p>
          <p class="card-text">Region :${element.region}</p>
          <p class="card-text">Country Code :${element.alpha3Code}</p>
          <p class="card-text">LatLng :${element.latlng}</p>
  
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#mymodal-${index}"
            style="margin-top: 10px"
          >
            ClickMe
          </button>
  
          <div class="modal fade" id="mymodal-${index}">
            <div class="modal-dialog">
              <!-- modal-xl -sm -xl  modal-fullscreen  modal-dialog-centered modal-dialog-scrollable-->
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title">${element.name} WeatherData</div>
                </div>
  
                <div class="modal-body">
                <span>${element.capital}</span>
                <span>${data.main.temp}</span>
                </div>
  
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

        rdiv.append(cardDiv);
        document.body.append(cdiv);
      });
    }
  });
}

fetchdata();

// var fdata = fetch("https://restcountries.com/v2/all")
// .then((jdata)=>jdata.json()).then((data)=>{

//   console.log(data);

// })

// console.log("Hello");
