import React from "react";
import Comments from "./comment-grid/Comments";

interface Props {
  params: {}
  searchParams: {sortOrder: string};
}

const commentsPage = async ({searchParams} : Props) => {
  const {sortOrder} = await searchParams;
  return (
    <>
      <Comments sortOrder={sortOrder} />
    </>
  );
};

export default commentsPage;
