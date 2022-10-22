import articles from "./article-content";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ArticlesList from "./ArticleList";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AddIcon from "@mui/icons-material/Add";
import AddComment from "./AddComment";

const ArticlePage = () => {
  let params = useParams();
  const article = articles.find((article) => article.name === params.name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const [showAddComment, setShowAddComment] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${params.name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [params.name]);

  const upvoteHandler = async () => {
    const result = await fetch(`/api/articles/${params.name}/upvote`, {
      method: "POST",
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  const addCommentHandler = async (comment) => {
    setShowAddComment(false);
    const result = await fetch(`/api/articles/${params.name}/add-comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      <p>
        <ThumbUpIcon style={{ color: "black" }} onClick={upvoteHandler} />{" "}
        {articleInfo.upvotes}
      </p>
      {article.content.map((para, key) => {
        return <p key={key}>{para}</p>;
      })}

      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Comments</h2>
        <AddIcon
          style={{
            color: "black",
            alignSelf: "center",
          }}
          onClick={() => {
            setShowAddComment(true);
          }}
        />
      </span>
      {articleInfo.comments.map((comment) => {
        return (
          <div>
            <h4 style={{ display: "inline-block" }}>{comment.username}: </h4>
            <p style={{ display: "inline-block" }}>{" " + comment.text}</p>
          </div>
        );
      })}
      {showAddComment && (
        <AddComment
          postCommentHandler={addCommentHandler}
          closeAddCommentHandler={() => {
            setShowAddComment(false);
          }}
        />
      )}

      <h2>Other Articles</h2>
      <ArticlesList excludeArticle={params.name} />
    </>
  );
};

export default ArticlePage;
