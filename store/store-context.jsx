import React, { useState } from "react";
const PostContext = React.createContext({
  posts: null,
  postArrayHandler: (posts) => {},
});

export const PostContextProvider = (props) => {
  const [post, setPost] = useState(null);
  const postsArrayHandler = (posts) => {
    setPost(posts);
  };

  const contextValue = { posts: post, postArrayHandler: postsArrayHandler }
  return (
    <PostContext.Provider
      value={contextValue}
    >
        {props.children}
    </PostContext.Provider>
  );
};
export default PostContext;
