import React from 'react';
import Comment from './Comment';


export default function Movie(props){
  const { _id,title, yearReleased, director, comments } = props;
  return(
    <div className="movie" >
      <br/>
      <span>Title: </span>
      <span> {title}</span>
      <br/>
      <span>Year: {yearReleased}</span>

      {director && <span>Director: {director.firstName} {director.lastName}
      </span>}
      <div>
        {
          comments ? ( comments.map(comment => (
              <Comment key={comment._id}>
                {comment.body}
              </Comment>
            ))
          ) : ('no comments')
        }

      </div>
    </div>
  )
};
