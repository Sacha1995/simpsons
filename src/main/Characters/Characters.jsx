import Character from "./CharacterCard";

const Characters = ({ toggleFav, onDelete, characters }) => {
  return (
    <div className="containerCards">
      {characters.map((item, index) => {
        return (
          <Character
            key={index}
            item={item}
            toggleFav={toggleFav}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default Characters;
