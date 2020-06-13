import axios from "axios";


export function addPost(postData) {
   const request = axios.post("/api/post", postData)
       .then(response => response.data);

   return {
      type: "ADD_POST",
      payload: request
   }
}

export function clearPost() {
   return {
      type: "CLEAR_POST",
      payload: null
   }
}

export function auth() {
   const request = axios.get(`/api/auth`)
       .then(response => response.data);

   return {
      type: "USER_AUTH",
      payload: request
   }
}


export function loginUser({email, password}) {

   const request = axios.post(`/api/login`, {email, password})
       .then(response => response.data);

   return {
      type: "USER_LOGIN",
      payload: request
   }
}

export function getPosts(limit = 10, start = 0, order = "asc", list = "") {

   const request = axios.get(`/api/posts/?limit=${limit}&skip=${start}&order=${order}`)
       .then(response => {
          if (list) {
             return [...list, ...response.data]
          } else {
             return response.data
          }
       });

   return {
      type: "GET_POSTS",
      payload: request
   }
}


export function getPostsCount() {
   const request = axios.get(`/api/postsCount`)
       .then(response => {
          return response.data
       });

   return {
      type: "GET_POSTS_COUNT",
      payload: request
   }
}


export function getAllPosts() {
   const request = axios.get('/api/getAllPosts')
       .then(response => response.data)

   return {
      type: "GET_ALL_POSTS",
      payload: request
   }
}

export function deletePost(id) {
   const request = axios.delete(`/api/delete_post?id=${id}`)
       .then(response => response.data);

   return {
      type: "DELETE_POST",
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
