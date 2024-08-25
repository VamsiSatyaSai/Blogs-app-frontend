import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import Header from '../Header';

class Home extends Component {
  state = {
    blogsList: [],
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const url = 'http://localhost:3001/blogs/';

    const options = {
      method: 'GET',
    };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        this.setState({ blogsList: data });
      } else {
        console.log(response);
      }
  };

  render() {
    const {blogsList} = this.state
    return (
      <div className='bg-container'>
        <Header/>
        <div className='main-container'>
            <ul className='blogs-list'>
            {blogsList.map((eachBlog) => (
              <li key={eachBlog.id} className='blog-item'>
                <h3 className='blog-title'>{eachBlog.title}</h3>
                <Link to={`/blogs/${eachBlog.id}`} className="blogs-link">View Details</Link>
              </li>
            ))}
            </ul>

        </div>
      </div>
    )
  }
}

export default Home;