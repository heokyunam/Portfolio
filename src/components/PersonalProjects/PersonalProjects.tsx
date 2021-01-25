import './PersonalProjects.scss';
import chatting from './chatting.png';
import kanban from './Kanban.png';

const PersonalProjects = () => {
    return (
    <div className="personal">
        <div className="title">
            개인 프로젝트
        </div>
        <div className="item">
            <img src={chatting} />
            <div className="spec">
                <div className="title">Issue Chatter - 채팅</div>
                <div className="description">
                    입력한 채팅 메시지는 제일 마지막에 추가되며,
                    왼쪽의 채팅방 리스트에는 제일 최근의 채팅메시지가 나옵니다.
                </div>
                <div className="link">
                    실제로 보기 &gt;
                </div>
            </div>
        </div>
        <div className="item">
            <img src={kanban} />
            <div className="spec">
                <div className="title">Issue Chatter - Kanban</div>
                <div className="description">
                    이슈들을 할 일, 진행중인 일, 완료된 일로 분류하여 관리합니다.
                    다른 유저에게 이슈를 할당할 수 있습니다.
                </div>
                <div className="link">
                    실제로 보기 &gt;
                </div>
            </div>
        </div>
    </div>
    )
}

export default PersonalProjects;