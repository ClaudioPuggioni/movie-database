import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import CardFullView from "./CardFullView";
import { Routes, Route, Link } from "react-router-dom";

function UserInterface() {
  let [movieSelection, setMovieSelection] = useState(null);
  let [selected, setSelected] = useState(false);

  useEffect(() => {
    // let API_KEY = "2d490bbca23b3a3086b893d3e1b7e1d9";
    let URL_NOWPLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=2d490bbca23b3a3086b893d3e1b7e1d9&language=en-US&page=1";
    let URL_DETAILS = "";
    async function getData() {
      let response = await fetch(URL_NOWPLAYING);
      let data = await response.json();

      let detailsArr = [];
      for (let index = 0; index < data.results.length; index++) {
        URL_DETAILS = `https://api.themoviedb.org/3/movie/${data.results[index].id}?api_key=2d490bbca23b3a3086b893d3e1b7e1d9&language=en-US&append_to_response=videos`;
        let responseDetails = await fetch(URL_DETAILS);
        let dataDetails = await responseDetails.json();
        detailsArr.push({ title: data.results[index].title, partialPURL: data.results[index].poster_path, idNum: data.results[index].id, body: data.results[index].overview, rating: data.results[index].vote_average, partialBURL: data.results[index].backdrop_path, tagline: dataDetails.tagline, genres: dataDetails.genres.map((ele) => ele.name), trailer: dataDetails.videos.results.map((ele) => [ele.name.toLowerCase(), ele.type.toLowerCase(), ele.site.toLowerCase(), ele.key]) });
      }
      setMovieSelection(detailsArr);
    }

    getData();
  }, []);

  let selectMovie = (i) => setSelected(i);

  return movieSelection === null ? (
    <div id="moviesContainer">Loading...</div>
  ) : !selected ? (
    <div id="moviesContainer">
      {movieSelection.map((ele) => {
        return (
          <Link to={`/${ele.idNum}`}>
            <MovieCard handleClick={selectMovie} key={ele.idNum} id={ele.idNum} srcPPartial={ele.partialPURL} cardDetailTitle={ele.title} cardDetailBodyTxt={ele.body} cardDetailRating={ele.rating} />
          </Link>
        );
      })}
    </div>
  ) : (
    movieSelection.map((ele) => {
      return (
        <Routes>
          <Route path={`/${ele.idNum}`} element={<CardFullView key={ele.idNum + "P"} cardDetailBgImg={ele.partialBURL} cardDetailPrImg={ele.partialPURL} cardDetailTitle={ele.title} cardDetailTagline={ele.tagline} cardDetailBodyTxt={ele.body} cardDetailGenres={ele.genres} cardDetailTrailer={ele.trailer} />} handleClick={selectMovie} />
        </Routes>
      );
    })
  );
}

export default UserInterface;
