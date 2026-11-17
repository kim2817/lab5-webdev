import { useState } from "react";

function MovieBox(props) {
  const movieName = props.movieName;
  const [CommentsList, setComments] = useState([]);
  const [commentinput, setcommentinput] = useState("");
  const [ratingInput, setRatingInput] = useState("⭐");

  const commentsComponents = CommentsList.map((commentT, index) => {
    return (
      <p>
        {commentT.comment} {commentT.rating}
      </p>
    );
  });
  function saveCommentInput(event) {
    setcommentinput(event.target.value);
  }
  function addComment() {
    setComments([
      ...CommentsList,
      { comment: commentinput, rating: ratingInput },
    ]);
  }

  return (
    <div>
      {movieName}
      {commentsComponents}
      <div>
        <input onChange={saveCommentInput} />
        <button onClick={addComment}> Send </button>
      </div>
      <select
        value={ratingInput}
        onChange={(e) => setRatingInput(e.target.value)}
      >
        <option value="⭐">⭐</option>
        <option value="⭐⭐">⭐⭐</option>
        <option value="⭐⭐⭐">⭐⭐⭐</option>
        <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
        <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
      </select>
    </div>
  );
}

export default MovieBox;
