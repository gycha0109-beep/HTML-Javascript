import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
    const navigate = useNavigate();
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();

    useEffect(() => {
        const matchDiary = data.find((it) => String(it.id) === String(id));

        if (matchDiary) {
            setDiary(matchDiary);
        } else {
            alert("존재하지 않는 일기입니다.");
            navigate("/", { replace: true });
        }
    }, [id, data]);

    return diary;
}

export default useDiary;