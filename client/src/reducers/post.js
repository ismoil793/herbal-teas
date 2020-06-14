export default function (state = {}, action) {
   switch (action.type) {

      case("ADD_POST"):
         return {...state, newPost: action.payload};
      case("DELETE_POST"):
         return {...state, postDeleted: action.payload};
      case("CLEAR_POST"):
         return {...state, newPost: action.payload};
      case("GET_POSTS"):
         return {...state, list: action.payload};
      case("GET_ALL_POSTS"):
         return {...state, allPosts: action.payload};
      case("GET_POSTS_COUNT"):
         return {...state, count: action.payload};
      case("GET_POST"):
         return {...state, post: action.payload};
      case("POST_CLEAR"):
         return {...state, post: action.payload};

      default:
         return state;
   }
}