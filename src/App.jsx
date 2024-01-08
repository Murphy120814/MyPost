import React from "react";
import { PostsList, FormikMainContainer } from "./components";
function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-yellow-300 font-bold">
      <div className="w-full  border-red-400">
        <FormikMainContainer />
        <PostsList />
      </div>
    </div>
  );
}

export default App;
