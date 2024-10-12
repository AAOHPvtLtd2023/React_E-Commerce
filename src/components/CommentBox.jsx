// CommentBox.js
import React, { useEffect, useRef } from 'react';
import '../components/Designs/CommentBox.css';

const commentsData = [
  { id: 1, text: "This is the first comment." },
  { id: 2, text: "I really enjoyed this post!" },
  { id: 3, text: "Great insights, thank you!" },
  { id: 4, text: "Can't wait to see more content like this." },
  { id: 5, text: "This helped me a lot!" },
  { id: 6, text: "Interesting perspective!" },
  { id: 7, text: "I disagree with some points, but overall a good read." },
  { id: 8, text: "I found this very helpful!" },
  { id: 9, text: "Looking forward to your next article." },
  { id: 10, text: "Well written and informative." },
];

const CommentBox = () => {
  const commentListRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (commentListRef.current) {
        // Check if the list has scrolled to the end
        if (commentListRef.current.scrollLeft >= commentListRef.current.scrollWidth - commentListRef.current.clientWidth) {
          commentListRef.current.scrollLeft = 0; // Reset to the start
        } else {
          commentListRef.current.scrollBy({
            left: 50, // Scrolls 1 pixel to the left
            behavior: 'smooth'
          });
        }
      }
    }, 20); // Adjust interval duration for speed

    return () => clearInterval(scrollInterval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="comment-box">
      <div className="comment-list" ref={commentListRef}>
        {commentsData.map(comment => (
          <div key={comment.id} className="comment-card">
            "{comment.text}"
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
