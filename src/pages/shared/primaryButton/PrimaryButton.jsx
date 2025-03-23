const PrimaryButton = ({desc}) => {
  return (
    <button className="btn btn-outline border-0 border-b-3 uppercase rounded-b-lg text-lg px-5 duration-500">
      {desc}
    </button>
  );
};

export default PrimaryButton;
