// import axios from 'axios';

// function http(method, endpoint, payload, headers) {
//    switch (method){
//       case 'GET':
//           axios.get(endpoint).then((data, status)=>{
//                if (status === 200) {
//                console.log("valid");
//                dispatch({ type: "USER_ME", payload: response });
//           }
//      //similarly for other methods POST,PUT, PATCH ...
//    }

// }
// export default http;


// import axios from 'axios';

// import { accountService } from '_services';

// export function jwtInterceptor() {
//     axios.interceptors.request.use(request => {
//         // add auth header with jwt if account is logged in and request is to the api url
//         const account = accountService.accountValue;
//         const isLoggedIn = account?.token;
//         const isApiUrl = request.url.startsWith(process.env.REACT_APP_API_URL);

//         if (isLoggedIn && isApiUrl) {
//             request.headers.common.Authorization = `Bearer ${account.token}`;
//         }

//         return request;
//     });
// }