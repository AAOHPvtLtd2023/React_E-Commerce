import React from "react";
import "../components/Designs/CommentBox.css";
const comments = [
  {
    id: 1,
    text: "I am delighted with the top-notch quality of the paper plate-making machine I purchased from Bajarangi Industries. It's efficient, easy to use, and has boosted my production significantly!",
    name: "Aryan Kumar",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "1 weeks",
  },
  {
    id: 2,
    text: "Highly impressed with Bajarangi Industries' customer service! They helped me choose the perfect paper cup-making machine for my business needs. Couldn't be happier!",
    name: "Ronald Smith",
    image: "https://img.freepik.com/free-photo/young-bearded-hindu-student-with-backpack-pastel-wall_496169-1524.jpg?semt=ais_hybrid",
    week: "3 weeks",
  },
  {
    id: 3,
    text: "I've been using their paper glass-making machine for over a year now, and it still runs like a charm! Excellent performance and durability.",
    name: "Priya Desai",
    image: "https://cdn.pixabay.com/photo/2024/02/12/17/23/ai-generated-8569065_1280.jpg",
    week: "9 weeks",
  },
  {
    id: 4,
    text: "Kudos to Bajarangi Industries for offering budget-friendly prices without compromising on quality! Their carry bag-making machine is a game-changer for my retail store.",
    name: "Rajesh Patel",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "1 weeks",
  },
  {
    id: 5,
    text: "The agarbatti-making machine I bought from them exceeded my expectations. The whole process of making incense sticks is now effortless and efficient!",
    name: "Anita Sharma",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "11 weeks",
  },
  {
    id: 6,
    text: "I can't thank Bajarangi Industries enough for their prompt delivery and installation of the paper plate-making machine. It's been a pleasure doing business with them.",
    name: "Vikram Mehta",
    image: "https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA=",
    week: "12 weeks",
  },
  {
    id: 7,
    text: "Their wide range of machine models allowed me to find the perfect fit for my business. The paper cup-making machine has been a great investment!",
    name: "Sunita Rao",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "13 weeks",
  },
  {
    id: 8,
    text: "Great value for money! The paper glass-making machine is so user-friendly, and it has increased our productivity substantially.",
    name: "Amit Joshi",
    image: "https://static6.depositphotos.com/1008005/595/i/450/depositphotos_5954955-stock-photo-senior-indian-man.jpg",
    week: "14 weeks",
  },
  {
    id: 9,
    text: "Bajarangi Industries' attention to detail in their products is commendable. The carry bag-making machine has been a game-changer for our eco-friendly brand.",
    name: "Rina Kapoor",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "15 weeks",
  },
  {
    id: 10,
    text: "The agarbatti-making machine has made our production process smoother and more efficient. Highly recommended!",
    name: "Manoj Verma",
    image: "https://plus.unsplash.com/premium_photo-1689838026921-c09632fd77ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
    week: "15 weeks",
  },
  {
    id: 11,
    text: "Their dedication to customer satisfaction is evident in the quality of their products. The paper plate-making machine is an absolute workhorse in our kitchen!",
    name: "Deepa Singh",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "16 weeks",
  },
  {
    id: 12,
    text: "I am incredibly satisfied with the performance of the paper cup-making machine. It has saved us time and effort while delivering consistent results.",
    name: "Sahil Khan",
    image: "https://cdn.pixabay.com/photo/2016/01/09/08/38/man-1129953_1280.jpg",
    week: "20 weeks",
  },
  {
    id: 13,
    text: "The paper glass-making machine from Bajarangi Industries is so easy to maintain, which is a big plus for our busy business operations.",
    name: "Kavita Bhatia",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "21 weeks",
  },
  {
    id: 14,
    text: "I couldn't be happier with my purchase from Bajarangi Industries. The carry bag-making machine has not only reduced costs but also helped us reduce our environmental impact.",
    name: "Rohit Malhotra",
    image: "https://images.unsplash.com/photo-1534339480783-6816b68be29c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
    week: "24 weeks",
  },
  {
    id: 15,
    text: "The agarbatti-making machine has been a profitable addition to our business. Thank you, Bajarangi Industries, for an excellent product!",
    name: "Neha Gupta",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "25 weeks",
  },
  {
    id: 16,
    text: "I'm impressed by the reliability and consistency of their machines. The paper plate-making machine has streamlined our production process like never before.",
    name: "Arjun Mishra",
    image: "https://img.freepik.com/free-photo/indian-man-portrait-temple_53876-14535.jpg?semt=ais_hybrid",
    week: "26 weeks",
  },
  {
    id: 17,
    text: "The paper cup-making machine has exceeded all our expectations. Bajarangi Industries truly delivers on their promise of quality products.",
    name: "Pooja Kulkarni",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "26 weeks",
  },
  {
    id: 18,
    text: "The efficiency and speed of the paper glass-making machine have made our serving process much smoother. Our customers are happy, and so are we!",
    name: "Karan Tiwari",
    image: "https://img.freepik.com/free-photo/indian-stylish-man-yellow-traditional-clothes-with-white-scarf-posed-outdoor-against-wooden-background-shows-namaste-hands-sign_627829-12668.jpg",
    week: "27 weeks",
  },
  {
    id: 19,
    text: "Bajarangi Industries' commitment to providing the best machines is evident in the performance of the carry bag-making machine we purchased. Highly satisfied!",
    name: "Sneha Chawla",
    image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    week: "28 weeks",
  },
  {
    id: 20,
    text: "The agarbatti-making machine has given our business the competitive edge it needed. Thank you, Bajarangi Industries, for such a fantastic product!",
    name: "Vishal Jha",
    image: "https://cdn.pixabay.com/photo/2015/02/19/12/48/indian-642055_1280.jpg",
    week: "32 weeks",
  },
];


const CommentsSection = () => {
  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <div
            style={{ display: "flex", gap: 10, borderBottom: "1px solid #ccc" }}
          >
            <img
              src={comment.image}
              alt={`${comment.name}'s profile`}
              className="profile-image"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <span className="comment-author">{comment.name}</span>
              <span className="comment-time">{comment.week} ago</span>
            </div>
          </div>
          <div className="comment-content">
            <p className="comment-text">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
