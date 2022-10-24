import "./BeerInfo.scss";
import { useParams } from "react-router-dom";//its a hook in the package

const BeerInfo = (props) => {
  const {albumId} =useParams() ; // desconstructing and mapping the hook and has to match on app.jsx to the albumID
  console.log(albumId);
  const { albumArr } = props;

  const currentAlbum =albumArr.find((album)=>album.idAlbum===albumId);
  console.log(currentAlbum);   
//   FIND will return back first object rather than an array, has a callback

  return (
    <article className="album-info">
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--first" />
      </div>
      <div className="album-info__content">
        <h2 className="album-info__heading">ALBUM-TITLE</h2>
        {/* <h2 className="album-info__heading">{currentAlbum.strAlbum}</h2> */}
        <p>ALBUM-TEXT</p>
        <h2 className="album-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>Mood : ALBUM-MOOD </li>
          <li>Released : ALBUM-YEAR-RELEASED </li>
          <li>Genre : ALBUM-GENRE </li>
          <li>Score : ALBUM-SCORE </li>
        </ul>
      </div>
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--last" />
      </div>
    </article>
  );
};

export default BeerInfo;