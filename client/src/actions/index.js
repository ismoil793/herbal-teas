import axios from "axios";


export function addPost(postData) {
   const request = axios.post("/api/post", postData)
       .then(response => response.data);

   return {
      type: "ADD_POST",
      payload: request
   }
}

// export function getQuestions() {
//    const request = axios.get(`http://localhost:3004/questions`)
//        .then(response => response.data);
//
//    return {
//       type: "GET_QUESTIONS",
//       payload: request
//    }
// }
//
// export function addLeader(name) {
//    let body = {
//       id: name,
//       score: 0,
//       time: 0
//    };
//    const request = axios.post(`http://localhost:3004/leaderBoard`, body)
//        .then(response => response.data)
//        .catch(e => {
//           return null
//        });
//
//    return {
//       type: "ADD_LEADER",
//       payload: request
//    }
// }
//
//
// export function clearUser() {
//    return {
//       type: "CLEAR_USER",
//       payload: null
//    }
// }
//
// export function clearLeaders() {
//    return {
//       type: "CLEAR_LEADERS",
//       payload: null
//    }
// }
//
// export function clearQuestions() {
//    return {
//       type: "CLEAR_QUESTIONS",
//       payload: null
//    }
// }
//
//
// export function getLeaders() {
//    const request = axios.get(`http://localhost:3004/leaderBoard`)
//        .then(response => response.data);
//
//    return {
//       type: "GET_LEADERS",
//       payload: request
//    }
// }
