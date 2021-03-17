import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd} />
        {this.props.personsArray.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personsArray: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAdd: () => dispatch({ type: actionTypes.ADD_PERSON }),
    onPersonDelete: (id) => dispatch({ type: actionTypes.DEL_PERSON, id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
