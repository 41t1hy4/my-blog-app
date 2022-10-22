import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import articles from "./article-content";
import "./../App.css";
import ArticlesList from "./ArticleList";

const ArticlesListPage = () => (
  <>
    <h1>Articles!</h1>
    <ArticlesList />
  </>
);

export default ArticlesListPage;
