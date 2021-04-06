import React from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  //const ref = React.useRef<HTMLInputElement>(null)
  const [title, setTitle] = React.useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // if(ref.current?.value) {
      //     console.log('empty');

      // }
      // props.onAdd(ref.current!.value)
      // ref.current!.value = ""

      if (title === "") {
        return;
      }
      props.onAdd(title)
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={changeHandler}
        // ref = {ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
