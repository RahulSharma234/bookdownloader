
const firebaseConfig = {
    apiKey: "AIzaSyCjI3UEjy61W7MsE0fO6D3qgiFlMYrKKko",
    authDomain: "book-785cb.firebaseapp.com",
    projectId: "book-785cb",
    storageBucket: "book-785cb.appspot.com",
    messagingSenderId: "492470157347",
    appId: "1:492470157347:web:adda3a43a4adad814af196",
    measurementId: "G-V1E72D90H0"
  };
  

  // Initialize Firebase
 const db =  firebase.initializeApp(firebaseConfig);



function moveHome(){
    
    db.auth().signInWithEmailAndPassword($('#username').val(), $('#password').val())
    .then((userCredential) => {
      alert("Login suceessfull !")
      window.location.href="/src/html/home.html"
    })
    .catch((error) => {
        alert(error)
    });  
    
}

function forgetpass(){
    window.location.href='/src/html/signUp.html' 
}
function moveRegister() {
    window.location.href='/src/html/signUp.html' 
}






