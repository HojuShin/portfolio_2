import { Link } from "react-router-dom"
import '../styles/modal.css'
import logo from '../assets/down.png'

export default function Modal({ mtcDt, toggle }) {

    return (
        <>
            <div className="modal-section">
                {/* <div className="modal-back">
                </div> */}
                <div className="modal-container">
                    <header className="modal-top">
                        <div className="modal-header">
                            <div className="modal-header-title">
                                {mtcDt.title}
                            </div>
                            <div className="modal-header-close" onClick={() => toggle(mtcDt.id)} >
                                <span class="material-symbols-outlined">close</span>
                            </div>
                        </div>
                    </header>

                    <div className="modal-link">
                        <div className="modal-link-box">
                            <p>안녕하세요👋<br /> 해당 홈페이지로 안내 해드릴게요! </p>
                            <Link to={mtcDt.link} target="blank">
                                <div className="menu__link">
                                    <p>바로가기</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="modal-content">
                        <div className="modal-content-title">
                            <div className="mc-title">
                                {mtcDt.title}
                            </div>
                            <div className="modal-header-skill">
                                <ul>
                                    {mtcDt.tools.map((tools, i) => (
                                        <li key={i}>{tools}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* <Link to={mtcDt.link} target="blank">
                                <div className="mc-link">
                                    <p>홈페이지 바로가기</p>
                                </div>
                            </Link> */}
                        </div>

                        <div className="mc-shot-main">
                            <img src={mtcDt.img} alt="shot" />
                        </div>
                        <div className="mc-desc-main">
                            <p>{mtcDt.desc0}</p>
                        </div>

                        <div className="mc-desc-function">
                            <div className="mc-df-01">
                                <img src={mtcDt.toolLogo} alt="shot" />
                                <p>{mtcDt.desc02}</p>
                            </div>
                            <div className="mc-df-02">
                                <img src={mtcDt.toolShot} alt="shot" />
                                <p>{mtcDt.desc03}</p>
                            </div>
                        </div>

                        <div className="mc-symbol">
                            <div className="symbol-color">
                                <div className="symbol-color-text">
                                    <p>Color Palette</p>
                                </div>

                                {/* <div className="symbol-color-list">
                                    {mtcDt.color.map((color, i) => (
                                        <div className="color-circle" key={i}>
                                            <div className="color"></div>
                                            <p>{color}</p>
                                        </div>
                                    ))}

                                </div> */}
                            </div>

                            {/* <div className="symbol-logo">
                                <div className="symbol-color-text">
                                    <p>Logo</p>
                                </div>
                                <div className="symbol-color-logo">
                                    
                                    <img src={logo} alt="logo"></img>
                                    <p>자체제작 or 기존 로고 사용</p>
                                </div>
                            </div> */}
                        </div>



                        {/* <div className="mc-skill">
                            <div className="mc-skilll-desc">
                                <p>이 웹사이트는 다음을 사용하여 만들었습니다. </p>
                            </div>
                            <div className="mc-skill-list">
                                <ul>
                                    {mtcDt.tools.map((tools, i) => (
                                        <li key={i}><strong>{tools}</strong></li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
                        {/* 
                        <div className="mc-post">
                            <div className="mc-post-text">
                                <p>Posting</p>
                            </div>
                            <div className="mc-post-list">
                                <div className="posting">
                                    <Link to='https://velog.io/@tlsghwn/Redux%EC%9E%91%EC%84%B1%EC%A4%91' target="blank" >
                                        <h1>"Redux가 실제로 작동하는 방식과 의도하는 방식을 구별해야 한다"</h1>
                                    </Link>

                                </div>
                                <div className="posting">
                                    <Link to='https://velog.io/@tlsghwn/Redux%EC%9E%91%EC%84%B1%EC%A4%91' target="blank" >
                                        <h1>"Redux가 실제로 작동하는 방식과 의도하는 방식을 구별해야 한다"</h1>
                                    </Link>

                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>

            </div >
        </>
    )
} 