import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import RecipeDetails from "./pages/RecipeDetails";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import OverviewPage from "./pages/OverviewPage";
import LoginPage from "./pages/LoginPage";
import SourceCodePage from "./pages/SourceCodePage";
import UserPage from "./pages/UserPage";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/about" element ={<AboutUsPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sourceCode" element={<SourceCodePage />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App