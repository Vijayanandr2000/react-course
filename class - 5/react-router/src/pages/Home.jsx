import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ user, setUser }) => {
  const navigator = useNavigate();
  const handleSubmit = () => {
    navigator("/quiz");
  };

  return (
    <div>
      <h1>Welcome to Quiz App...!</h1>
      <>
        <section>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => {
              const { value } = e.target;
              setUser(value);
            }}
          />
        </section>
        <br />
        <button disabled={user.length === 0} onClick={handleSubmit}>
          Submit
        </button>
      </>
    </div>
  );
};

export default Home;
