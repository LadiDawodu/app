import React from 'react';
import Article from '../../components/article/Article'
import { blog1, blog2, blog3, blog4, blog5, blog7, blog6 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className="jump__blog section__padding" id="blog">
    <div className="jump__blog-heading">
      <h1 >A lot can happen, when you design it.</h1>
    </div>
    <div className="jump__blog-container">
      <div className="jump__blog-container_groupA">
        <Article imgUrl={blog1} title="STRATEGIES TO TAKE YOUR STARTUP TO THE NEXT LEVEL" />
        <Article  imgUrl={blog6} title="THE MOMENT BETWEEN USER AND PRODUCT IS DESIGN" />
        <Article  imgUrl={blog7} title="THE POWER OF BLANK THOUGHT SHOULD INSPIRE YOU" />
      </div>
      <div className="jump__blog-container_groupB">
        <Article imgUrl={blog2}  title="STRATEGIES TO TAKE YOUR STARTUP TO THE NEXT LEVEL" />
        <Article imgUrl={blog3}title="LIFESTYLE STORYTELLING IS ADVERTISING" />
        <Article imgUrl={blog4} title="APPROACHING DESIGN IS A BRICK WALL TO CREATIVITY. THINK THROUGH OPEN THE DOOR" />
        <div className='blog5'>
        <Article imgUrl={blog5}title="EFFECTIVE SOCIAL MEDIA MARKETING ISN'T A CAMPAIGN. THE JOURNEY IS THE CONVERSATION" />
        </div>
      </div>
    </div>
  </div>
  )
};

export default Blog