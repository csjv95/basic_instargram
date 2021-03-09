// import userEvent from "@testing-library/user-event";

// class GetUser {
//   videoId() {
//     // getUser.videoId().then(item => setVideoId(item));
//     const fecthData = async () => {
//       const response = await fetch(
//         "https://graph.instagram.com/me?fields=id,username&access_token=IGQVJYS0EtZAVoyYURLYkhzR3VBRG9fd2gwSTlPV2FCTkM2ZAGhtTDJIajdGTmhIMWFFaWlwa25nMlpLUHZAtRWJrRV91S204UkFjc0ZACRmRhTW1NdXhhYUgzZAkVoS3FCQUZANTEREWTZAn"
//       );
//       try {
//         const result = await response.json();
//         setVideoId(result);
//         console.log(result);
//       } catch (e) {
//         throw Error(e, "Unhandled Error");
//       }
//     };
//     fecthData();
//     setVideoId(getUser());
//   }
// }
// export default GetUser;

// // axios
//  // getUser.videoId().then(item => setVideoId(item));
//  const fecthData = async () => {
      
//   const response = await axios.get(
//     'https://graph.instagram.com/me?fields=id,username&access_token=IGQVJYS0EtZAVoyYURLYkhzR3VBRG9fd2gwSTlPV2FCTkM2ZAGhtTDJIajdGTmhIMWFFaWlwa25nMlpLUHZAtRWJrRV91S204UkFjc0ZACRmRhTW1NdXhhYUgzZAkVoS3FCQUZANTEREWTZAn'
//   );
//   const result = await response.data;
//   setVideoId(result);
// };
// fecthData();

// //fetch 
// const fecthData = async () => {
      
//   const response = await fetch(
//     'https://graph.instagram.com/me?fields=id,username&access_token=IGQVJYS0EtZAVoyYURLYkhzR3VBRG9fd2gwSTlPV2FCTkM2ZAGhtTDJIajdGTmhIMWFFaWlwa25nMlpLUHZAtRWJrRV91S204UkFjc0ZACRmRhTW1NdXhhYUgzZAkVoS3FCQUZANTEREWTZAn'
//   );
//   const result = await response.json();
//   setVideoId(result);
// };
// fecthData();