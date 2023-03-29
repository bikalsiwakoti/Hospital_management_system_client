
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';


// let config = {
//   // replace this key with yours
//   "publicKey": mykey.publicTestKey,
//   "productIdentity": "1234567890",
//   "productName": "Hospital Management System",
//   "productUrl": "http://localhost:3000",
//   "eventHandler": {
//     onSuccess(payload) {
//       // hit merchant api for initiating verfication
//       let data = {
//         "token": payload.token,
//         "amount": payload.amount/100,
//       };

//       let config = {
//         headers: { 'Authorization': mykey.secretKey }
//       };

//       axios.post("", data, config)
//         .then(response => {
//           console.log(response.data);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//       toast.success('Succefully placed order', {
//         position: "top-right",
//         theme: "colored"
//       })
//       console.log(payload);
//     },
//     // onError handler is optional
//     onError(error) {
//       // handle errors
//       console.log(error);
//     },
//     onClose() {
//       console.log('widget is closing');
//     }
//   },
//   "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
// };

// export default config;