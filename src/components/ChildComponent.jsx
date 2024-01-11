import { useEffect, useState } from "react";

const ChildComponent = () => {
  const [post, setPost] = useState({});

  const fetchPost = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    setPost(await response.json());
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
