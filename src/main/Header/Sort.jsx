import FormElements from "../Reusable/FormElements";

const Sort = ({ callback }) => {
  return (
    <div className="dropdown">
      <FormElements
        type="select"
        label="Order:"
        id="select"
        name="order"
        callback={callback}
        options={["Original", "AZ", "ZA", "Liked"]}
      />
    </div>
  );
};

export default Sort;
