import React from "react";
import '../components/Designs/CommentBox.css';
const comments = [
  {
    id: 1,
    text: "I am delighted with the top-notch quality of the paper plate-making machine I purchased from Bajarangi Industries. It's efficient, easy to use, and has boosted my production significantly!",
  },
  {
    id: 2,
    text: "Highly impressed with Bajarangi Industries' customer service! They helped me choose the perfect paper cup-making machine for my business needs. Couldn't be happier!",
  },
  {
    id: 3,
    text: "I've been using their paper glass-making machine for over a year now, and it still runs like a charm! Excellent performance and durability.",
  },
  {
    id: 4,
    text: "Kudos to Bajarangi Industries for offering budget-friendly prices without compromising on quality! Their carry bag-making machine is a game-changer for my retail store.",
  },
  {
    id: 5,
    text: "The agarbatti-making machine I bought from them exceeded my expectations. The whole process of making incense sticks is now effortless and efficient!",
  },
  {
    id: 6,
    text: "I can't thank Bajarangi Industries enough for their prompt delivery and installation of the paper plate-making machine. It's been a pleasure doing business with them.",
  },
  {
    id: 7,
    text: "Their wide range of machine models allowed me to find the perfect fit for my business. The paper cup-making machine has been a great investment!",
  },
  {
    id: 8,
    text: "Great value for money! The paper glass-making machine is so user-friendly, and it has increased our productivity substantially.",
  },
  {
    id: 9,
    text: "Bajarangi Industries' attention to detail in their products is commendable. The carry bag-making machine has been a game-changer for our eco-friendly brand.",
  },
  {
    id: 10,
    text: "The agarbatti-making machine has made our production process smoother and more efficient. Highly recommended!",
  },
  {
    id: 11,
    text: "Their dedication to customer satisfaction is evident in the quality of their products. The paper plate-making machine is an absolute workhorse in our kitchen!",
  },
  {
    id: 12,
    text: "I am incredibly satisfied with the performance of the paper cup-making machine. It has saved us time and effort while delivering consistent results.",
  },
  {
    id: 13,
    text: "The paper glass-making machine from Bajarangi Industries is so easy to maintain, which is a big plus for our busy business operations.",
  },
  {
    id: 14,
    text: "I couldn't be happier with my purchase from Bajarangi Industries. The carry bag-making machine has not only reduced costs but also helped us reduce our environmental impact.",
  },
  {
    id: 15,
    text: "The agarbatti-making machine has been a profitable addition to our business. Thank you, Bajarangi Industries, for an excellent product!",
  },
  {
    id: 16,
    text: "I'm impressed by the reliability and consistency of their machines. The paper plate-making machine has streamlined our production process like never before.",
  },
  {
    id: 17,
    text: "The paper cup-making machine has exceeded all our expectations. Bajarangi Industries truly delivers on their promise of quality products.",
  },
  {
    id: 18,
    text: "The efficiency and speed of the paper glass-making machine have made our serving process much smoother. Our customers are happy, and so are we!",
  },
  {
    id: 19,
    text: "Bajarangi Industries' commitment to providing the best machines is evident in the performance of the carry bag-making machine we purchased. Highly satisfied!",
  },
  {
    id: 20,
    text: "The agarbatti-making machine has given our business the competitive edge it needed. Thank you, Bajarangi Industries, for such a fantastic product!",
  },
];

const CommentsSection = () => {
  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <p className="comment-text">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;









