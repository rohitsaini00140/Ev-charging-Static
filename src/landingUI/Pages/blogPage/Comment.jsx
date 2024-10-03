import { Typography,Button,Box } from '@mui/material';
import React, { useState } from 'react';
// import { FaRegThumbsUp } from "react-icons/fa";
import {read_more } from './blogsStyle';

const Comment = ({ comment }) => {

    const [isExpanded, setIsExpanded] = useState(false);
     const handleTogglereply = () => {
      setIsExpanded(!isExpanded);
    };
    const shouldShowReadMore = comment.comment.length > 250;
    return (
       <div className="comment">
            <p><strong className='comment_name'>{comment.user}</strong> : 5 day ago</p>
         <Box> 
        <Typography variant='span' className='comment_text'>
        {isExpanded ? comment.comment : `${comment.comment.slice(0, 250)}...`} 
        {shouldShowReadMore && (<Button sx={read_more} color="#253745" onClick={handleTogglereply}>
        {isExpanded ? 'Read Less' : 'Read More'}</Button>)}
        </Typography>
         </Box>
        </div>
    );
};
    const CommentsSection = (props) => {
    const comments = props.comments
    return (
        <div>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </div>
    );
};
export default CommentsSection;
