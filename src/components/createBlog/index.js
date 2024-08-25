import React, { Component } from 'react';
import './index.css';

import Header from '../Header';

class CreateBlog extends Component {
  state = {
    title: '',
    description: '',
    isLoading: false,
    successMessage: '',
    errorMessage: '',
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeContent = (event) => {
    this.setState({ description: event.target.value });
  };

  submitForm = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true, successMessage: '', errorMessage: '' });

    const { title, description } = this.state;
    const postDetails = { title, description };
    const url = 'http://localhost:3001/blogs/create';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postDetails),
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          title: '',
          description: '',
          successMessage: 'Post created successfully!',
          isLoading: false,
        });
      } else {
        const errorData = await response.json();
        console.log(errorData);
        this.setState({
          errorMessage: 'Failed to create post. Please try again.',
          isLoading: false,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      this.setState({
        errorMessage: 'An error occurred. Please try again later.',
        isLoading: false,
      });
    }
  };

  render() {
    const { title, description, isLoading, successMessage, errorMessage } = this.state;

    return (
      <div className='bg-container'>
        <Header />
        <div className="main-container">
          <h2>Create Post</h2>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={this.submitForm}>
            <div className="input-container">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.onChangeTitle}
                placeholder="Post Title"
                required
                disabled={isLoading}
              />
            </div>
            <div className="input-container">
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                value={description}
                onChange={this.onChangeContent}
                placeholder="Post Content"
                required
                disabled={isLoading}
              />
            </div>
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create Post'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateBlog;
