/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    setLoading(true);
    axios
      .get("http//localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data).setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  },[]);
  return <div>
    <h1>hello world</h1>
    <div>
      {console.log("hello world")}
    </div>
  </div>;
};

export default HomePage;
