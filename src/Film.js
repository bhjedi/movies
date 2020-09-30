import React, { useState } from "react";
import movies from "./movies";
import "./Film.css";
import { Card, FormControl } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { MenuItem, Select } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
function Film() {
  const [suprime, setSuprime] = useState(movies);
  const [sup, setSup] = useState(movies);
  const [category, setCategory] = useState("All category");

  const deleteMovie = (movieIndex) => {
    const data = [...suprime];
    //const suprime = [...movies];
    data.splice(movieIndex, 1);
    setSuprime(data);
    console.log(data);
  };

  let resultf = sup.map((a) => a.category);
  let filter = (resultf) =>
    resultf.filter((item, index) => resultf.indexOf(item) === index);
  console.log(filter(resultf));

  const onCategoryChange = (event) => {
    const categoryCode = event.target.value;
    setCategory(categoryCode);
  };

  return (
    <div className="film">
      <div className="menu">
        <FormControl className="menu__m">
          <Select
            varaint="outlined"
            onChange={onCategoryChange}
            value={category}
          >
            <MenuItem value="All category">All category</MenuItem>
            {filter(resultf).map((movie) => (
              <MenuItem value={movie}>{movie}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <hr />

      <hr />
      <div className="movies">
        {suprime.map((movie, index) => {
          if (movie.category === category && category !== "All category")
            return (
              <Card className="movieCard" key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.category}</p>
                <div className="movieCard__jauge ">
                  <IconButton>
                    <ThumbUpAltIcon className="like" />
                  </IconButton>

                  <p>{movie.likes}</p>
                  <IconButton>
                    <ThumbDownAltIcon className="dislike" />
                  </IconButton>

                  <p>{movie.dislikes}</p>
                </div>

                <button className="button" onClick={() => deleteMovie(index)}>
                  Supprimé
                </button>
              </Card>
            );
          else if (category === "All category") {
            return (
              <Card className="movieCard" key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.category}</p>
                <div className="movieCard__jauge ">
                  <IconButton>
                    <ThumbUpAltIcon className="like" />
                  </IconButton>
                  <p>{movie.likes}</p>
                  <IconButton>
                    <ThumbDownAltIcon className="dislike" />
                  </IconButton>
                  <p>{movie.dislikes}</p>
                </div>

                <button className="button" onClick={() => deleteMovie(index)}>
                  Supprimé
                </button>
              </Card>
            );
          }
        })}
      </div>
      <div className="buttonBottom">
        <Link to="/">
          <button className="precedent">Precedent</button>
        </Link>
        <Link to="/movies">
          <button className="suivant">Suivant</button>
        </Link>
      </div>
    </div>
  );
}

export default Film;
