export default function (state = {}, action) {
   switch (action.type) {

      case("ADD_POST"):
         return {...state, newPost: action.payload};
      case("GET_POSTS"):
         return {...state, list: action.payload};
      case("GET_POSTS_COUNT"):
         return {...state, count: action.payload};

      default:
         return state;
   }
}