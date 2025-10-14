import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends Component {
  state = {
    favLinks: [
      {
        name: 'FreeCodeCamp',
        URL: 'https://www.freecodecamp.com',
      },
      {
        name: 'Codecademy',
        URL: 'https://www.codecademy.com',
      },
      {
        name: 'JavaScript.info',
        URL: 'https://javascript.info',
      },
    ],
  };

  // deletes a link from the array
  removeLink = (index) => {
    const { favLinks } = this.state;

    this.setState({
      favLinks: favLinks.filter((link, i) => {
        return i !== index;
      }),
    });
  };

  // gets the link from the form and adds it
  handleSubmit = (link) => {
    this.setState({ favLinks: [...this.state.favLinks, link] });
  };

  render() {
    const { favLinks } = this.state;

    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          My Favorite Links
        </h1>
        <p className="text-gray-600 mb-6">
          Add a new url with a name and link to the table.
        </p>
        
        <Table linkData={favLinks} removeLink={this.removeLink} />
        
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-xl font-bold text-gray-700 mb-4">
            Add New
          </h3>
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default LinkContainer;
