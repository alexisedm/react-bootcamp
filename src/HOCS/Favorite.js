import React from 'react';
import { withToggler } from './withToggler';

function Favorite(props) {
  // const [isFavorited, setIsFavorite] = React.useState(false);

  // const toggleFavorite = (prevState) => {
  //   setIsFavorite({ isFavorited: !prevState.isFavorited });
  // };

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={props.toggle}>{props.on ? '❤️' : '♡'}</span>
      </h1>
    </div>
  );
}
const SuperchargedFavoriteComponent = withToggler(Favorite, {
  defaultOnValue: false,
});
export default SuperchargedFavoriteComponent;
