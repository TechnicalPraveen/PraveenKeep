import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target; //object destructuring
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const btoNormal = () => {
    setExpand(false);
  };
  return (
    <>
      <div className="main_note" onDoubleClick={btoNormal}>
        <form action="">
          {expand ? (
            <input
              name="title"
              type="text"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            name="content"
            cols=""
            rows=""
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note...."
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};
export default CreateNote;
