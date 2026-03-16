const ProfileCard = () => {
  const name = "Krrish Kohli";
  const language = "JavaScript";
  const bio =
    "I love building web apps with React and exploring new technologies.";
  const ImageURL =
    "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg";
  const hobbies = ["Coding", "Traveling", "Playing guitar"];
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome to {name}'s profile</h1>
      <img
        style={{
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          marginBottom: "1rem",
        }}
        src={ImageURL}
        alt="profile"
      />
      <p>
        <strong>Favorite Language: {language}</strong>
      </p>
      <p>Bio: {bio}</p>
      <h1>Hobbies</h1>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProfileCard;
