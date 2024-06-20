const Loading = () => {
  return (
    <div className="containerLoading">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loading">Loading...</p>
    </div>
  );
};

export default Loading;
