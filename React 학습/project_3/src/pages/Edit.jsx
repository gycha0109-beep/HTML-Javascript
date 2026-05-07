import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { setPageTitle } from "../util";

const Edit = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const data = useDiary(id);
    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
    useEffect(() => {
        setPageTitle(`${id}번 일기 수정하기`);
    }, []);

    const onSubmit = (data) => {
        if (window.confirm("일기를 수정할까요?")) {
            const { date, content, emotionID } = data;
            onUpdate(id, date, content, emotionID);
            navigate("/", { replace: true });
        }
    }
    const goBack = () => {
        navigate(-1);
    }
    const onClickDelete = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            onDelete(id);
            navigate("/", { replace: true });
        }
    }
    if (!data) {
        return <div>일기를 불러오고 있습니다.</div>;
    } else {
        return (<div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button text={"뒤로 가기"} onClick={goBack} />}
                rightChild={<Button
                    type={"negative"}
                    text={"삭제하기"}
                    onClick={onClickDelete}
                />
                }
            />
            <Editor initData={data} onSubmit={onSubmit} />
        </div>
        );
    }

};

export default Edit;