import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import CreatePost from "./pages/Posts/CreatePost";
import PostDetail from "./pages/Posts/PostDetail";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/createPost" exact>
          <CreatePost />
        </Route>
        <Route path="/PostDetail" exact>
          <PostDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
