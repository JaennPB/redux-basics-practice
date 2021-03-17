import * as actionTypes from "../actions";

const initialState = {
  persons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: "PERSON",
        age: Math.floor(Math.random() * 40),
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case actionTypes.DEL_PERSON:
      return {
        ...state,
        persons: state.persons.filter(
          (person) => person.id !== action.personId
        ),
      };
  }
  return state;
};

export default rootReducer;
