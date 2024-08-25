import React from 'react';
import { useParams } from 'react-router-dom';
import BlogItem from '../BlogItem';

const BlogItemWrapper = () => {
  const params = useParams(); 
  return <BlogItem id={params.id} />;
};

export default BlogItemWrapper;
