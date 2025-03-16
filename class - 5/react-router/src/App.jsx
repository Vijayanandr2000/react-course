import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { useState } from "react";
import Result from "./pages/Result";

function App() {
  // const pathName = location.pathname;
  // return <>{pathName == "/quiz" ? <Quiz /> : <Home />}</>;
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/quiz"
          element={<Quiz setScore={setScore} user={user} />}
        />
        <Route path="/result" element={<Result user={user} score={score} />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
