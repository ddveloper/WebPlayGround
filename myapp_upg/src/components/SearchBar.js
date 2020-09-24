import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  //   onInputChange(event) {
  //     // console.log(event.target.value);
  //   }

  onFormSubmit = (event) => {
    // add arrow to fix "this" issue
    event.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmit(this.state.term); // use this.props to get "props"
  };

  render() {
    // don't put this.onInputChange() instead, pass only reference
    // this makes sure it got called when needed, not every time rendered
    // other similar events-handler: onClick / onSubmit, etc.
    // the handler can also be a lambda (e) => {console.log(e)}
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
