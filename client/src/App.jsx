import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import Js from "./pages/Javascript"
import Html from "./pages/html"
import Home from "./pages/Home";
import Css from "./pages/Css";
import Footer from "./containers/Footer"
import { TaskContextProvider } from "./context/TaskProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<TaskForm />} />
            <Route path="/information" element={<TasksPage />} />
            <Route path="/js" element={<Js />} />
            <Route path="/html" element={<Html/>} />
            <Route path="/css" element={<Css/>} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
       <Footer/> 
      </div>
    </div>
  );
}

export default App;
