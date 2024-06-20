import Character from "./CharacterCard";

const Characters = ({ toggleFav, onDelete, characters }) => {
  return (
    <div>
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
