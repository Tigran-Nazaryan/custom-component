import notFoundData from "../../assets/notFoundData.png";

const Empty = ({ description = "No Data", img, children }) => {
  const defaultStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: ".5rem",
  };
  const defaultImage = (
    <img
      src={notFoundData}
      alt="Empty"
      style={{ width: 200, height: 100, opacity: 0.6 }}
    />
  );
  return (
    <div style={{ ...defaultStyle }}>
      <div>
        <div>{img || defaultImage}</div>
      </div>
      {description}
      {children}
    </div>
  );
};

export default Empty;
