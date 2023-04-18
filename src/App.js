import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state";
import { bindActionCreators } from "redux";
import { useRef, useState } from "react";
import Images from "./images";

const App = () => {
  const [searchs, setSearchs] = useState("");
  const [page, setPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState(0);
  const perPage = 10; 
  useSelector((state) => state.array);
  const focus = useRef(null);

  const dispatch = useDispatch();
  const { addItem, deleteItem } = bindActionCreators(actionCreators, dispatch);

  const getDataOnPage = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${searchs}&client_id=MBduWf3tdGoa5BxJ5ueT8i_E2wObbtemjdNFmuF5BIk`
    );
    const data = await response.json();
    const results = data.results;
    addItem(results);
    setPage(page + 2);
    setLoadedImages(loadedImages + results.length);
  };

  const fetchMoreData = () => {
    getDataOnPage();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for Photos"
              aria-label="Search"
              value={searchs}
              ref={focus}
              onChange={(e) => setSearchs(e.target.value)}
              style={{ border: "2px solid #da61fb" }}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => {
                setPage(1);
                getDataOnPage();
              }}
              style={{ backgroundColor: "greenyellow", color: "black", fontFamily: "inherit" }}>Search Photos
            </button>
            <button className="btn btn-outline-success" onClick={() => deleteItem(setSearchs(""), focus.current.focus())}  style={{ backgroundColor: "red", color: "white", fontFamily: "inherit"}}>Delete Photos</button>
          </div>
        </div>
      </nav>
      <Images />
      {loadedImages >= perPage && (
        <div className="text-center mt-3">
          <button className="btn btn-outline-success" onClick={fetchMoreData} style={{ backgroundColor: "black", color: "white" }}>Load more</button>
        </div>
      )}
    </div>
  );
}

export default App;
