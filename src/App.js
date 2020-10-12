import React, { useState, useEffect } from "react";
// Pagination
import Posts from "./components/pagination/Posts";
import Pagination from "./components/pagination/Pagination";
// Progress Bar
import ProgressBar from "./components/progressBar/ProgressBar";
//Api cal
import axios from "axios";
//CSS
import "./App.css";

const App = () => {
  // pagination state
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // progress Bar state
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  // get data into posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    </div>
  );
};

export default App;
