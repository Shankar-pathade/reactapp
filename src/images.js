import { useSelector } from "react-redux";

const Images = () => {
  const data = useSelector((state) => state.array);
  const { array } = data;
  console.log(array);
  return (
    <div className="container d-flex flex-wrap">
      {array.map((item) => (
        <img
          key={item.id}
          src={item.urls.small}
          alt="LL"
          style={{ margin: "10px", height: "200px" }}
        />
      ))}
    </div>
  );
}

export default Images;