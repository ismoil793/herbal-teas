export default function (state = {}, action) {
   switch (action.type) {

      case("ADD_POST"):
         return {...state, newPost: action.payload};

      default:
         return state;
   }
}