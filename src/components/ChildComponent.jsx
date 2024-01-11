import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        error: "something went wrong",
        post: {},
      };

    default:
      return state;
  }
};

const fetchPosts = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await request.json();
  return post;
};

const ChildComponent = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    const post = fetchPosts();
    try {
      if (post) {
        dispatch({ type: "FETCH_SUCCESS", payload: post.title });
      }
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  }, []);
  return <h1>{state.loading ? "loading" : state.title}
  {state.error ? state.error : null}
  </h1>;
};

export default ChildComponent;
