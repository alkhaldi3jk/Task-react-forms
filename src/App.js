import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const createList = (newStudent) => {
    console.log(newStudent);
    setStudentsInfo([...studentsInfo, newStudent]);
  };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList list={studentsInfo} />
      ) : (
        <Form  createList={createList} />
      )}
    </div>
  );
}

export default App;
