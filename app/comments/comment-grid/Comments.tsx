import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import Button from "@/app/components/button/Button";
import { sort } from "fast-sort";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Props {
  sortOrder: string;
}

const Comments = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments: Comment[] = await res.json();

  sort(comments).asc(
    sortOrder === "name"
      ? (comments) => comments.name
      : (comments) => comments.body,
  );

  return (
    <>
      <div>
        <h2>Comments</h2> <Link href="/comments/sortOrder=name">Sort Name</Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-8 bg-amber-200">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-amber-50 p-8">
              <strong>
                {" "}
                <h5 className="pb-3">{comment.name.slice(0, 10)}</h5>
              </strong>
              <h6>{comment.email.slice(0, 10)}</h6>
              <p className="text-1xl">{comment.body.slice(0, 500)}</p>

              <Button
                variant="accent"
                btnLabel="Read More"
                className="mt-4"
                icon={<RiArrowRightSLine size={20} />}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
