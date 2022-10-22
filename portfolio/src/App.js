import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";
import NotFound from "./pages/NotFoundPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles-list" element={<ArticlesListPage />} />
          <Route path="/article/:name" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
