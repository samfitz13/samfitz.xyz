import { Box } from "@chakra-ui/react";
import React from "react";
import Retool from "react-retool";
import "./App.css";

function App() {
  return (
    <Box height="100vh">
      <Retool url="https://tools.samfitz.me/embedded/public/ac2f8c5c-611a-40c6-ae53-e0e7d95687c0" />
    </Box>
  );
}

export default App;
