const TotalFavourites = ({ characters }) => {
  const faved = characters.filter((item) => {
    return item.fav === true;
  });

  return <h3>Total Favourites: {faved.length}</h3>;
};

export default TotalFavourites;
