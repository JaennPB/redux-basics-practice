import * as actionTypes from "../actions";

const initialState = {
  persons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age,
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
