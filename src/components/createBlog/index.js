import React, { Component } from 'react';
import './index.css'

class CreateBlog extends Component {
  state = {
    title: '',
    content: '',
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeContent = (event) => {
    this.setState({ content: event.target.value });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    const postDetails = { title, content };
    const url = 'http://localhost:3001/blogs';

    const options = {
      method: 'POST',
      body: JSON.stringify(postDetails),
    };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        console.log(data)
      } else {
        console.log(response)
    }
  };


  render() {
    const { title, content} = this.state;

    return (
      <div className="create-post-container">
        <h2>Create Post</h2>
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
            />
          </div>
          <div className="input-container">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={this.onChangeContent}
              placeholder="Post Content"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

export default CreateBlog;