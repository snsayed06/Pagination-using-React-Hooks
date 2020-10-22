import React, { useState, useEffect } from "react";

// Pagination
import Posts from "./Posts";
import PostList from "./PostList";

//Api cal
import axios from "axios";

const Pagination = () => {
  // pagination state

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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
    <div className='container mt-5 '>
      <h1 className='text-primary mb-3 d-flex justify-content-center'>
        My Blog
      </h1>
      <Posts posts={currentPosts} loading={loading} />
      <PostList
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
