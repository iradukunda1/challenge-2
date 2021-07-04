import React, { useState } from "react";
import albumService from "./api/albumService";
import CardList from "./components/cards/CardList";
import SearchPage from "./components/search/SearchPage";
import "./App.css";

function App() {
  const [state, setState] = useState({
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = async (id) => {
    setIsLoading(true);
    const results = await albumService.get(`/${id}/photos`);
    setIsLoading(false);
    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="App">
      <div className="container search-app">
        <SearchPage onSearch={onSearch} />
        <CardList isLoading={isLoading} results={state.results} />
      </div>
    </div>
  );
}

export default App;
