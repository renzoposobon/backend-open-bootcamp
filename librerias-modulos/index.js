import axios from "axios";

// API YUGI-OH
// axios.get('https://ygoprodeck.com/card/ameba-7922')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// API ADOPCION ANIMALES
axios.get('https://api.adoptapet.com/search/pets_at_shelter?key=A34F48&v=1&output=xml&shelter_id=2342')
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})