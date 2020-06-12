export default function (state = {}, action) {
   switch (action.type) {

      case("USER_AUTH"):
         return {...state, authLogin: action.payload};
      case("USER_LOGIN"):
         return {...state, login: action.payload};

      default:
         return state;
   }
}