import React, { FC } from "react";

const BlogLayout: FC = (props) => {
  const {children} = props
  return <div>{children}</div>;
};

export default BlogLayout;
