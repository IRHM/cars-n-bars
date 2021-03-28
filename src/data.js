import firebase from "firebase/app";
import "firebase/database";
import store from "./store";

var firebaseConfig = {
  apiKey: "AIzaSyC66QiZpBaPJPvsigHhZ1we2lEghx2ydiw",
  authDomain: "cars-n-bars.firebaseapp.com",
  databaseURL: "https://cars-n-bars-default-rtdb.firebaseio.com",
  projectId: "cars-n-bars",
  storageBucket: "cars-n-bars.appspot.com",
  messagingSenderId: "956661453994",
  appId: "1:956661453994:web:817cc0023dc9eb9d8c2cd3",
  measurementId: "G-P1PELNFNGR",
};

const db = firebase.initializeApp(firebaseConfig).database();

async function setCarData() {
  db.ref("/")
    .get()
    .then(function(snapshot) {
      if (snapshot.exists()) {
        // Call mutation to update state with new cars
        store.commit("addCars", snapshot.val());

        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch(function(error) {
      console.error(error);
    });
}

export function emptyCar() {
  return {
    id: "",
    make: "",
    model: "",
    bodyType: "",
    transmission: "",
    fuel: "",
    mileage: "",
    doors: "",
    price: "",
    image: "",
  };
}

export default setCarData;
