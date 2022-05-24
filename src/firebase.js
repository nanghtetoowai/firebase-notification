import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDQfwCdJ2BJSPG_cgFuS7j5HXV-LamCfU8",
  authDomain: "my-notification-844db.firebaseapp.com",
  projectId: "my-notification-844db",
  storageBucket: "my-notification-844db.appspot.com",
  messagingSenderId: "153721523703",
  appId: "1:153721523703:web:2317360972a6a1ddb7b2f2",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();
export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BO-N7HpPjehNQrIpkgPZl_zO2eF6fTdT8TQA92EkP6jxJfqNsnan18Qoen4SUHUeVUm4OfaLmGP6sUq9nKbyYh0",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
// Replace this firebaseConfig object with the congurations for the project you created on your firebase console.
