import React from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Expenses />
      <Form />
    </React.Fragment>
  );
}

export default App;
