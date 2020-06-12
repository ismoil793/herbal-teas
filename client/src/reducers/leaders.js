export default function (state = {}, action) {
   switch (action.type) {


      case("GET_LEADERS"):
         return {...state, leaders: action.payload};

      case("ADD_LEADER"):
         return {...state, status: action.payload};

      case("CLEAR_USER"):
         return {...state, status: action.payload};

      case("CLEAR_LEADERS"):
         return {...state, leaders: action.payload};
      default:
         return state;
   }
}