import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import articles from "./article-content";
import "./../App.css";

const ArticlesList = ({ excludeArticle = "" }) => (
  <>
    {articles
      .filter((artcl) => artcl.name !== excludeArticle)
      .map((article, key) => {
        return (
          <Link
            className="article-list-item"
            key={key}
            to={`/article/${article.name}`}
          >
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </Link>
        );
      })}
  </>
);

export default ArticlesList;
