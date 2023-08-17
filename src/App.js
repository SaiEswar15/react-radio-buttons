import "./styles.css";

import {useState} from "react";


export default function App() {

  const [data, setData] = useState({
    gender : ""
  });

  function changeHandler(e)
  {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className="App">
      <h1>Gender</h1>
      <div>
        <label htmlFor = "male">Male</label>
        <input type = "radio" value = "male" name = "gender" id = "male" onChange= {changeHandler}/>
        <label htmlFor = "female">Female</label>
        <input type = "radio" value = "female" name = "gender" id = "female" onChange= {changeHandler}/>
      </div>
      <h1>{data.gender}</h1>
    </div>
  );
}
