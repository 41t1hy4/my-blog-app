import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddComment = ({ postCommentHandler, closeAddCommentHandler }) => {
  const [comment, setComment] = useState({
    username: "",
    text: "",
  });
  return (
    <div>
      <TextField
        id="outlined-search"
        label="Username"
        fullWidth
        type="text"
        value={comment.username}
        onChange={(e) => {
          setComment({ ...comment, username: e.target.value });
        }}
      />
      <br></br>
      <TextField
        style={{ marginTop: 10, marginBottom: 10 }}
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        fullWidth
        rows={4}
        multiline
        value={comment.text}
        onChange={(e) => {
          setComment({ ...comment, text: e.target.value });
        }}
      />
      <br></br>
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          style={{ color: "black", borderColor: "black" }}
          variant="outlined"
          onClick={closeAddCommentHandler}
        >
          Close
        </Button>
        <Button
          style={{ backgroundColor: "black" }}
          variant="contained"
          onClick={() => {
            postCommentHandler(comment);
          }}
        >
          Post
        </Button>
      </span>
    </div>
  );
};

export default AddComment;
