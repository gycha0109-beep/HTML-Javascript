import "./Viewer.css";
import { emotionList } from "../util";

const Viewer = ({ content, emotionID }) => {
    const emotionItem = emotionList.find((it) => it.id === emotionID);
    return (
        <div className="Viewer">
            <section>
                <h4>오늘의 감정</h4>
                <div
                    className={`emotion_img_wrapper emotion_img_wrapper_${emotionID}`}
                >
                    <img alt={emotionItem.name} src={emotionItem.img} />
                    <div className="emotion_descript">{emotionItem.name}</div>
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    );
}
export default Viewer;