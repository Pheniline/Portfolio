import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      {/* Next: Skills Section */}
    </div>
  );
}

export default App;
