import './index.scss';
import university from './University.jpg';
import employ from './Employ.jpg';
import now from './Now.jpg';

const History = () => {
    return (
    <div className="history">
        <div className="title">
            HISTORY
        </div>
        <div className="item">
            <img src={university} alt=""/>
            <div className="description">
                <div className="title">
                    컴퓨터공학과 입학
                </div>
                <div className="sub">
                    게임을 할 때마다 '나는 좀 다르게 만들고 싶은데'라는 생각을 하며
                    프로그래머가 되고 싶다는 생각을 하게 되며, 이는 컴퓨터공학과를
                    가게 되는 계기가 됩니다.
                </div>
                <div className="sub">
                    3학년 때 웹 프로그래밍, 데이터베이스 수업을 들으면서
                    내가 만약 게임 개발말고도 웹 개발도 정말 재미있구나라고
                    느끼게 되었습니다.
                </div>
            </div>
        </div>
        <div className="item">
            <img src={employ} alt=""/>
            <div className="description">
                <div className="title">
                    지금 다니는 회사에 취업
                </div>
                <div className="sub">
                    게임회사에 지원서를 넣었으나 포트폴리오를 잘못 만들어
                    어느곳에도 취업이 되지 않았습니다.
                </div>
                <div className="sub">
                    게임회사 취업을 포기하고 웹 개발 회사를 지원하고 면접을 보면서
                    제 포트폴리오에 문제가 있다는 것을 알고 수정한 끝에
                    지금 회사에 취업하게 되었습니다.
                </div>
            </div>
        </div>
        <div className="item">
            <img src={now} alt=""/>
            <div className="description">
                <div className="title">
                    그리고 현재
                </div>
                <div className="sub">
                    스포츠투아이에서 JQuery와 ASP.NET으로 웹페이지를 개발했습니다.
                    그러던 어느날 자회사인 랩투아이의 파견제안이 왔고, 고민 끝에 가기로 하였습니다.
                </div>
                <div className="sub">
                    랩투아이에서 React와 Flask(Python RESTful API)로 개발하게 되었습니다.
                    주로 개발해낸 AI 기술에 대해 사람들에게 보여주는 데모페이지 위주로 개발하였습니다.
                </div>
            </div>
        </div>
        <div className="outro">
            앞으로 함께 미래를 그려나가고 싶습니다.
        </div>
    </div>
    )
}

export default History;