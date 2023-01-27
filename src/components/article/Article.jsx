import React from 'react';

import './article.css';


//passing it through the promp
const Article = ({ imgUrl,title, }) => {
  return (

    <div className="jump__blog-container_article">

    <div className="jump__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="jump__blog-container_article-content">
      <div>
        <h3>{title}</h3>
      </div>
      <p>Read more...</p>
    </div>
  </div>


)}

export default Article