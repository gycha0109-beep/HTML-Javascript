import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";
import "./TodoEditor.css";

const TodoEditor = () => {
    const { onCreate } = useContext(TodoContext);
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    const onChanegeContent = (e) => {
        setContent(e.target.value);
    };
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✍️</h4>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChanegeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..."
                />
                <button onClick={onSubmit}>
                    추가하기
                </button>
            </div>
        </div>
    );
};
export default TodoEditor;