/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction, useState } from "react";

import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker, { Theme } from "emoji-picker-react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { type } from "os";
import Comment from "./Comment";
type props = {
  comments: any[];
  setComments: Dispatch<SetStateAction<any[]>>;
};

function CommentSection({ comments, setComments }: props) {
  const [showEmojis, setShowEmojis] = useState(false);
  const [commenttext, setCommenttext] = useState<any>("");
  const [selectedComment, setSElectedComment] = useState<any>({});

  return (
    <div className="min-h-[300px] w-[100%] flex flex-col justify-start items-center overflow-y-scroll ">
      <div className="h-[1px] w-[63%] bg-[#2d2b2b]  ml-12 my-2"></div>
      {Object.keys(selectedComment).length !== 0 && (
        <div className="h-[30px] w-[100%] bg-[#1F1F1F] my-2 flex justify-around items-center">
          <h1 className="text-xs text-white ">
            Replying to {selectedComment.commentor}
          </h1>
          <button
            onClick={() => setSElectedComment({})}
            className="h-[30px] w-[30px]  "
          >
            <img className="h-[20px] w-[20px]" src="/x.svg" alt="" />
          </button>
        </div>
      )}
      <div className="min-h-[50px] w-[87%] flex justify-center items-center  ml-3">
        {" "}
        <div className="h-[40px] w-[40px] rounded-full border-[2px] border-blue-800 mr-2"></div>
        <div className="h-[50px] w-[90%] rounded-3xl  border-[2px] border-[#2d2b2b] bg-[#121212f8] flex items-center justify-between  ">
          <input
            onChange={(e) => setCommenttext(e.target.value)}
            className="text-sm text-[#ffffff96] px-3 box-border h-[100%] w-[100%] focus:outline-none bg-transparent"
            type="text"
            placeholder="Write a comment...."
            value={commenttext}
          />
          <BsEmojiSmile
            onClick={() => setShowEmojis(!showEmojis)}
            className="cursor-pointer mr-2"
            size={30}
          />

          <div className="h-[45px] w-[50px] flex items-center justify-evenly   ">
            <div
              onClick={() => {
                if (Object.keys(selectedComment).length !== 0) {
                  setComments(
                    comments.map((item) =>
                      item.id === selectedComment.id
                        ? {
                            ...item,
                            replies: [
                              ...item.replies,
                              {
                                id: (Math.random() * 1e18).toString(),
                                commentor: "Rahul",
                                comment: commenttext,
                              },
                            ],
                          }
                        : item
                    )
                  );
                  setCommenttext("");
                  setShowEmojis(false);
                } else {
                  setComments([
                    ...comments,
                    {
                      id: (Math.random() * 1e18).toString(),
                      commentor: "Rahul",
                      comment: commenttext,
                      replies: [],
                    },
                  ]);
                  setCommenttext("");
                  setShowEmojis(false);
                }
              }}
              className="h-[35px] w-[35px] rounded-full flex items-center justify-center bg-gradient-to-tr from-[#0057FF] to-[#14d4db]"
            >
              <img className="h-[18px] w-[18px]" src="Vector.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {showEmojis && (
        <div className="h-[1px] w-[63%] bg-[#2d2b2b] ml-12 my-2">
          <Picker
            data={data}
            theme="dark"
            onEmojiSelect={(emoji: any) => {
              setCommenttext(commenttext + emoji.native);
            }}
          />
        </div>
      )}
      <div className=" min-h-[70px]  w-[87%] flex flex-col justify-start items-center  ">
        {" "}
        {comments.map((item, i) => (
          <Comment
            onClick={() => setSElectedComment(item)}
            key={i}
            comment={item.comment}
            commentor={item.commentor}
            replies={item.replies}
          />
        ))}
        <div className="h-[1px] w-[63%] bg-[#2d2b2b]  ml-12 my-2"></div>
        <h1 className="text-white text-xs"> Load more comments</h1>
      </div>
    </div>
  );
}

export default CommentSection;
