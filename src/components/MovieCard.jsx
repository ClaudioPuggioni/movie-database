function MovieCard(props) {
  return (
    <div className="movieCard" onClick={() => props.handleClick(props.id)} id={props.id} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w200${props.srcPPartial}")` }}>
      <div className="cardDetail">
        <div className="cardDetailTitle">{props.cardDetailTitle}</div>
        <div className="cardDetailBody">
          <div className="cardDetailBodyTxt">{props.cardDetailBodyTxt}</div>
          <div className="cardDetailBodyRating">{props.cardDetailRating}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
