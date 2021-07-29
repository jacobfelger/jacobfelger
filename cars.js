var xhttp = new XMLHttpRequest();
var cars = [];
var popupWindow = document.createElement("dialog");
var typePopup = document.createElement("dialog");
popupWindow.id = 'reviewsPopup';
typePopup.id = 'typePopup';
var vehicle = '';
var model = '';

xhttp.onreadystatechange = function() {
  if((this.readyState == 4) && (this.status == 200)){
    var list = JSON.parse(this.responseText);
    for(var i=0; i<list.length; i++){
      cars.push(list[i]);
    }
  }
};

function customerReviews(){
    xhttp.open("GET", "https://sandbox.api.kbb.com/idws/" + (vehicle) +  "/" + (model), true);
    xhttp.setRequestHeader("x-api-key", "(api key)");
    xhttp.send();

    var reviewsString = "";
    cars.forEach(car => {
      car.customerReviews.forEach(review => {
        reviewsString = reviewsString.concat(review.title);
        reviewsString = reviewsString.concat('\n')
        reviewsString = reviewsString.concat(review.author);
        reviewsString = reviewsString.concat('\n\n')
        reviewsString = reviewsString.concat(review.text);
        reviewsString = reviewsString.concat('\n\n\n\n')
      })
    });

    document.body.appendChild(popupWindow)
    var title = document.createTextNode("  Customer Reviews\n\n\n\n");
    var text = document.createTextNode(reviewsString);
    var close = document.createElement("button")
    close.textContent = 'X';
    close.addEventListener("click", () => {
      popupWindow.removeChild(close);
      popupWindow.removeChild(title);
      popupWindow.removeChild(text);
      minimize();
    })
    popupWindow.style.textAlign = "center";
    popupWindow.style.fontWeight = "bold";
    popupWindow.style.fontSize = "20px";
    popupWindow.appendChild(close);
    popupWindow.appendChild(title);
    popupWindow.appendChild(text);
    popupWindow.showModal();
}
function expertReviews(){
    xhttp.open("GET", "https://sandbox.api.kbb.com/idws/" + (vehicle) +  "/" + (model), true);
    xhttp.setRequestHeader("x-api-key", "(api key)");
    xhttp.send();

    var reviewsString = "";
    cars.forEach(car => {
      car.expertReviews.forEach(review => {
        reviewsString = reviewsString.concat(review.title);
        reviewsString = reviewsString.concat('\n')
        reviewsString = reviewsString.concat(review.author);
        reviewsString = reviewsString.concat('\n\n')
        reviewsString = reviewsString.concat(review.text);
        reviewsString = reviewsString.concat('\n\n\n')
      })
    });

    document.body.appendChild(popupWindow)
    var title = document.createTextNode("  Expert Reviews\n\n\n\n");
    var text = document.createTextNode(reviewsString);
    var close = document.createElement("button")
    close.textContent = 'X';
    close.addEventListener("click", () => {
      popupWindow.removeChild(close);
      popupWindow.removeChild(title);
      popupWindow.removeChild(text);
      minimize();
    })
    popupWindow.appendChild(close);
    popupWindow.appendChild(title);
    popupWindow.appendChild(text);
    popupWindow.showModal();

}

function minimize() {
    popupWindow.close();
    typePopup.close();

}

function luxury() {
  xhttp.open("GET", "https://sandbox.api.kbb.com/idws/luxury", true);
  xhttp.setRequestHeader("x-api-key", "(api key)");
  xhttp.send();

  var reviewsString = "";
  cars.forEach(car => {
    reviewsString = reviewsString.concat(car.make);
    reviewsString = reviewsString.concat('\n')
    reviewsString = reviewsString.concat(car.model);
    reviewsString = reviewsString.concat('\n\n')
  });

  document.body.appendChild(typePopup)
  var title = document.createTextNode("  Luxury Cars\n\n\n\n");
  var text = document.createTextNode(reviewsString);
  var close = document.createElement("button")
  close.textContent = 'X';
  close.addEventListener("click", () => {
    typePopup.removeChild(close);
    typePopup.removeChild(title);
    typePopup.removeChild(text);
    minimize();
  })
  typePopup.style.textAlign = "center";
  typePopup.style.fontWeight = "bold";
  typePopup.style.fontSize = "20px";
  typePopup.appendChild(close);
  typePopup.appendChild(title);
  typePopup.appendChild(text);
  typePopup.style.width = "80%";
  typePopup.style.height = "80%";
  typePopup.showModal();
}

function affordable() {
  xhttp.open("GET", "https://sandbox.api.kbb.com/idws/affordable", true);
  xhttp.setRequestHeader("x-api-key", "(api key)");
  xhttp.send();

  var reviewsString = "";
  cars.forEach(car => {
    reviewsString = reviewsString.concat(car.make);
    reviewsString = reviewsString.concat('\n')
    reviewsString = reviewsString.concat(car.model);
    reviewsString = reviewsString.concat('\n\n')
  });

  document.body.appendChild(typePopup)
  var title = document.createTextNode("  Affordable Cars\n\n\n\n");
  var text = document.createTextNode(reviewsString);
  var close = document.createElement("button")
  close.textContent = 'X';
  close.addEventListener("click", () => {
    typePopup.removeChild(close);
    typePopup.removeChild(title);
    typePopup.removeChild(text);
    minimize();
  })
  typePopup.style.textAlign = "center";
  typePopup.style.fontWeight = "bold";
  typePopup.style.fontSize = "20px";
  typePopup.appendChild(close);
  typePopup.appendChild(title);
  typePopup.appendChild(text);
  typePopup.style.width = "80%";
  typePopup.style.height = "80%";
  typePopup.showModal();
}

function newCars() {
  xhttp.open("GET", "https://sandbox.api.kbb.com/idws/new", true);
  xhttp.setRequestHeader("x-api-key", "(api key)");
  xhttp.send();

  var reviewsString = "";
  cars.forEach(car => {
    reviewsString = reviewsString.concat(car.make);
    reviewsString = reviewsString.concat('\n')
    reviewsString = reviewsString.concat(car.model);
    reviewsString = reviewsString.concat('\n\n')
  });

  document.body.appendChild(typePopup)
  var title = document.createTextNode("  New Cars\n\n\n\n");
  var text = document.createTextNode(reviewsString);
  var close = document.createElement("button")
  close.textContent = 'X';
  close.addEventListener("click", () => {
    typePopup.removeChild(close);
    typePopup.removeChild(title);
    typePopup.removeChild(text);
    minimize();
  })
  typePopup.style.textAlign = "center";
  typePopup.style.fontWeight = "bold";
  typePopup.style.fontSize = "20px";
  typePopup.appendChild(close);
  typePopup.appendChild(title);
  typePopup.appendChild(text);
  typePopup.style.width = "80%";
  typePopup.style.height = "80%";
  typePopup.showModal();
}
