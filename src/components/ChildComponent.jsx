import axios from "axios";
import { useEffect, useState } from "react";

const ChildComponent = () => {
  const [post, setPost] = useState({});

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/3"
      );
      console.log(response);
      setPost(response.data);
    } catch (error) {
      setPost({ body: error.code });
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <h1>Hello world!</h1>
      <div className="">{post.body}</div>
    </>
  );
};

export default ChildComponent;
