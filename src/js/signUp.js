
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


function signUpClickes(){
    db.auth().createUserWithEmailAndPassword($('#emails').val(), $('#passwords').val()).then(cred => {
        alert('User signed up! move to login');
        window.location.href='/src/html/signIn.html' 
      }).catch((error) => {
        alert(error)
    });  
}