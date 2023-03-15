import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Kategori from "./js/admin/Kategori";
import Login from "./js/admin/Login";
import Main from "./js/user/Main";
import Search from "./js/user/Search";
import View from "./js/user/View";

const App = () => 
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>}>
      <Route path="search" element={<Search/>}/>
      <Route path="view" element={<View/>}/>
    </Route>
    <Route path="/admin">
      <Route path="login" element={<Login/>}/>
      <Route path="kategori" element={<Kategori/>}/>
    </Route>
    <Route path="*" element={<Navigate to="/"/>}/>
  </Routes>
</BrowserRouter>


export default App;