
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCZanNciOZCayjYpiaK9VQZePGxCH-eNQc",
      authDomain: "kwitter-9e328.firebaseapp.com",
      projectId: "kwitter-9e328",
      storageBucket: "kwitter-9e328.appspot.com",
      messagingSenderId: "961321538026",
      appId: "1:961321538026:web:cfa293f3a2d9fea5186293",
      measurementId: "G-CQNV9D9Q9G"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
