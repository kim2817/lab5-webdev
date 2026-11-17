import { useState } from "react";

function MovieInput(props) {
  const setMovies = props.setMovies;
  const MoviesList = props.MoviesList;
  const [movieinput, setmovieinput] = useState("");

  function saveMovieInput(event) {
    setmovieinput(event.target.value);
  }
  function addMovie() {
    setMovies([...MoviesList, { movieName: movieinput }]);
  }

  return (
    <div>
      <input onChange={saveMovieInput} />
      <button onClick={addMovie}> Add </button>
    </div>
  );
}

export default MovieInput;
