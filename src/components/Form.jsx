import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    name: '',
    URL: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, URL } = this.state;

    return (
      <form className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            URL
          </label>
          <input
            type="text"
            name="URL"
            value={URL}
            onChange={this.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        
        <input 
          type="button" 
          value="Submit" 
          onClick={this.submitForm}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer"
        />
      </form>
    );
  }
}

export default Form;
