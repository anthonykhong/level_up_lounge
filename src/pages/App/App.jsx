import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import BlogPage from "../BlogPage/BlogPage";
import NewBlog from "../NewBlog/NewBlog";
import EditBlog from "../../components/EditBlog/EditBlog";
import Footer from "../../components/Footer/Footer";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  function updateUser(userState) {
    setUser(userState);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar updateUser={updateUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/posts"
              element={<BlogPage user={user} setUser={setUser} />}
            />
            <Route path="/posts/new" element={<NewBlog />} />
            <Route path="/posts/:id/edit" element={<EditBlog />} />
          </Routes>
          <hr />
          <Footer />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
