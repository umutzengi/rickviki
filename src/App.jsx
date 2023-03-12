import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import Navbar from "./components/Navbar/Navbar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
