import React from "react"
import './App.css';
import Header from "./Header";
import TinderBodyCard from "./TinderCard";
import SwipButtons from "./SwipButtons";
function App() {
  return (
    <div className="app">
      <Header />
      <TinderBodyCard />
      <SwipButtons />


      {/* Like and Dislike Buttons */}

    </div>
  );
}

export default App;
