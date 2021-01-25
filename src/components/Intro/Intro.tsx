import logo from "./Logo.svg";
import profile from "./profile.jpg";
import './Intro.scss';

const Intro = () => {
    return (
        <div className="intro">
            <img src={logo}></img>
            <div className="profile">
                <div className="text">
                    <div>
                        안녕하세요! 👋 제 이름은 허규남입니다!
                    </div>
                    <div>
                        제가 만든 웹사이트가 다른 이에게 도움이 될때
                        가장 큰 보람을 느끼는 개발자입니다.😎
                    </div>                    
                </div>
                <div className="image">
                    <div className="gradient"></div>
                    <img src={profile} alt=""/>                    
                </div>
            </div>
        </div>
    )
}

export default Intro;