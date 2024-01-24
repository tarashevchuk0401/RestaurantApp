export const firebaseConfig = {
    apiKey: "AIzaSyDOCEijr1NxGnDYWPPhRS98-GLg7e8nO_0",
    authDomain: "restaurant-app-af60c.firebaseapp.com",
    projectId: "restaurant-app-af60c",
    storageBucket: "restaurant-app-af60c.appspot.com",
    messagingSenderId: "248625552131",
    appId: "1:248625552131:web:ba1ed8d0250fd767016736",
    measurementId: "G-49Z9VW6ZFZ",
    endpoints: {
      signUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
      logIn: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
      categories: 'https://restaurant-app-af60c-default-rtdb.europe-west1.firebasedatabase.app/categories/',
      menu: 'https://restaurant-app-af60c-default-rtdb.europe-west1.firebasedatabase.app/menu/'
    }
  };