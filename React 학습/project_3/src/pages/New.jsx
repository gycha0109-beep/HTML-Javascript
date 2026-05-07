import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { setPageTitle } from "../util";

const New = () => {
    const navigate = useNavigate();
    const { onCreate } = useContext(DiaryDispatchContext);
    useEffect(() => {
        setPageTitle("감정 일기장");
    }, []);
    const goBack = () => {
        navigate(-1);
    }

    const onSubmit = (data) => {
        const { date, content, emotionID } = data;
        onCreate(date, content, emotionID);
        navigate("/", { replace: true });
    }
    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
};

export default New;