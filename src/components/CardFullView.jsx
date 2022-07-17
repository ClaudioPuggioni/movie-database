import { Link } from "react-router-dom";

function CardFullView(props) {
  function findTrailer(trailerArr) {
    for (const ele of trailerArr) {
      if (ele[0].includes("trailer") && ele[1].includes("trailer") && ele[2].includes("youtube")) {
        return `https://www.youtube.com/watch?v=${ele[3]}`;
      } else if (ele[0].includes("trailer") && ele[1].includes("trailer") && ele[2].includes("vimeo")) {
        return `https://vimeo.com/${ele[3]}`;
      }
    }
  }

  return (
    <div className="cardFullPage" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original${props.cardDetailBgImg}")`, backgroundSize: "cover" }}>
      <div className="cardFullContainer">
        <Link to="/" onClick={() => props.handleClick(false)}>
          <img className="xBtn" src="x-button.svg" alt="X Button" />
        </Link>
        <img className="cardFullPoster" src={`https://image.tmdb.org/t/p/w500${props.cardDetailPrImg}`} alt={`FullViewPoster ${props.idNum}`} />
        <div className="cardFullBody">
          <div className="cardFullTitle">{props.cardDetailTitle}</div>
          <div className="cardFullTagline">{props.cardDetailTagline}</div>
          <div className="cardFullSynopsis">{props.cardDetailBodyTxt}</div>
          <div className="cardFullGenres">
            {props.cardDetailGenres.map((ele) => (
              <button className="buttonGenres">{ele}</button>
            ))}
          </div>
          <div className="cardFullTitle">
            <a href={`${findTrailer(props.cardDetailTrailer)}`} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button className="buttonTrailer">
                Watch Trailer <img className="playImg" src="\play-button.svg" alt="Play Button" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFullView;
