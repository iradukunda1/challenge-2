import React from "react";
import Card from "./Card";
import "./card-list.css";

function CardList({ isLoading, results }) {
  let data = [];
  if (results.data) {
    data = results.data || [];
  }
  return isLoading ? (
    <div className="loader"></div>
  ) : (
    <div className="results-container">
      {data.length <= 0 ? (
        <h4 className="not-found">Sorry Not Result Found!</h4>
      ) : (
        <div className="result">
          {data.map((item) => (
            <Card key={item.id} album={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardList;
