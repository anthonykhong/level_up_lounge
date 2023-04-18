import { useNavigate } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";
import NewBlogForm from "../../components/NewBlogForm/NewBlogForm";

export default function NewBlog() {
  const navigate = useNavigate();

  async function handleAddNewPost(postData) {
    await postsAPI.createNewPost(postData);
    navigate("/posts");
  }

  return (
    <div>
      <div>
        <NewBlogForm handleAddNewPost={handleAddNewPost} navigate={navigate} />
      </div>
    </div>
  );
}
