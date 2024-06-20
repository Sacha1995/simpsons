const Name = ({ name }) => {
  if (name === "Apu Nahasapeemapetilon") {
    return (
      <h2>
        Apu Nahasapee
        <wbr />
        mapetilon
      </h2>
    );
  }
  return <h2>{name}</h2>;
};

export default Name;
