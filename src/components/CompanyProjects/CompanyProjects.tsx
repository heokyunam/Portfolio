import './CompanyProjects.scss';
import ktotm from './KTOTM.jpg';
import lgu_dd9 from './LGU_DD9.png';

const CompanyProjects = () => {
    return (
        <div className="company">
            <div className="title">
                회사 프로젝트
            </div>
            <div className="list">
                <div className="item">
                    <div className="content">
                        <div className="title">KTOTM 모바일 프로야구 웹뷰</div>
                        <div className="description">
                            <div>
                                JQuery로 개발되었습니다. (CSS 작업은 하지 않았습니다.)
                            </div>
                            <div>
                                모바일 웹뷰입니다.
                            </div>
                            <div>
                                화면 상단에서는 실제 경기내에 다음 구를 던질때 
                                해당 구가 그래픽으로 나타납니다.
                                화면 하단에서는 각 타석별로 던진 공의 궤적을 
                                순서대로 애니메이션으로 보여줍니다.
                            </div>
                        </div>
                        <div className="more">
                            자세히보기 &gt; 
                        </div>
                        <img src={ktotm} />
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="title">LG U+ Dream9 Demo</div>
                        <div className="description">
                            <div>
                                React Hook, Material UI를 사용하여 개발되었습니다.
                            </div>
                            <div>
                                PC화면입니다.
                            </div>
                            <div>
                                API 호출시 모든 투구 데이터를 한번에 받으나,
                                클라이언트가 이해하기 쉽도록
                                다음 구 버튼을 누를때마다 row가 하나씩 추가되게
                                개발하였습니다.
                            </div>                            
                        </div>
                        <div className="more">
                            자세히보기 &gt; 
                        </div>
                        <img src={lgu_dd9} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProjects;