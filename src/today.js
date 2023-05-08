import React, { useState } from "react";
function Todo() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  const add_activity = () => {
    // setlistData([...listData,activity])
    // console.log(listData)
    setlistData((listData) => {
      const UpdateList = [...listData, activity]
      console.log(UpdateList)
      setActivity('');
      return UpdateList
    })
  }
  const remove_act = (i) => {
    const UpdateListData = listData.filter((elem, id) => {
      return i != id;
    })
    setlistData(UpdateListData);
  }

  return (
    <>
      <div className="container">
        <h1 className="he1">Todolist </h1>
        <br/>
        <h1 className="paa">Please Add Activity</h1>
        <input className="inp_box"
          type="text"
          placeholder=" Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)} />
        <button className="abtn" onClick={add_activity}>+</button>
        <br />
        <div className="rs">
          <p><h1>Here is your List {""}</h1></p>
          {
            listData != [] && listData.map((data, i) => {
              return (
                <>
                  <p key={i}>
                    <div className="od">{data}</div>
                    <button onClick={() => remove_act(i)} className="rbtn">Remove</button>
                  </p>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}
export default Todo;
