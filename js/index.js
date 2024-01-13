console.log("javasctipt ready");

const base_api = "https://api.genderize.io";

function showResult(name, gender, probability) {
  
  if(gender == "male") {
    document.getElementById("imageProfile").src = "assets/img/maleGender.jpeg"
    gender = "laki-laki";
  } else {
    document.getElementById("imageProfile").src = "assets/img/famaleGender.jpeg"
    gender = "perempuan";
  }
  probability *= 100
  
  const predictionElement = document.getElementById("prediction");
  const predictionText = "Selamat  "+name+", prediksi gender dengan nama depan anda adalah "+gender+" dengan persentase sebesar "+probability+"%" ;
  predictionElement.textContent = predictionText;
}

async function predict(event) {
  if(event.key == "Enter") {
    const firstName = event.target.value;
    const queryUrl = `${base_api}/?name=${firstName}`;
    const response = await fetch(queryUrl)
    const result = await response.json();
    console.log(result)
    showResult(result.name, result.gender, result.probability);
  }
}