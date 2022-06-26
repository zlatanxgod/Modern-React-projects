import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);  will give error
    // bind or arrow function will fix that
    // or change  like give arrow function
    // or change callback from the original call back function
    this.props.onSearchSubmit(this.state.term);
    // refernecing props in class
  };
  render() {
    return (
      <div className="ui segment">
        <labe>Image Search</labe>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/* (event) => this.onFormSubmit(event) */}
          <input
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
