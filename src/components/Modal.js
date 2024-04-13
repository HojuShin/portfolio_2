import { Link } from "react-router-dom"
import '../styles/modal.css'

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
                                    {mtcDt.Contribution.map((contribution, i) => (
                                        <li key={i}>{contribution}</li>
                                    ))}
                                    {mtcDt.tools.map((tools, i) => (
                                        <li key={i}>{tools}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mc-shot-main">
                            <img src={mtcDt.img} alt="shot" />
                        </div>
                        <div className="mc-desc-main">
                            <p>{mtcDt.desc01}</p>
                        </div>
                        <div className="mc-desc-function">
                            <div className="mc-df-01">
                                <div className={mtcDt.toolLogo ? "shot-box01" : "shot-box01-hidden"}>
                                    {mtcDt.toolLogo && <img src={mtcDt.toolLogo} alt="shot" className="shot" />}
                                </div>
                                <div className="shot-box02">
                                    <video src={mtcDt.toolShot} loop autoPlay muted className='video'></video>
                                </div>
                            </div>
                            <div className="mc-df-02">
                                <div className="shot-box01">
                                    <p>{mtcDt.desc02}</p>
                                </div>
                                <div className="shot-box02">
                                    <p>{mtcDt.desc03}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mc-symbol">
                            <div className="symbol-color">
                                <div className="symbol-color-text">
                                    <p>Color Palette</p>
                                </div>
                                <div className="symbol-color-list">
                                    {mtcDt.color.map((color, i) => (
                                        <div className="color-circle" key={i}>
                                            <div className="color" style={{ backgroundColor: color }}></div>
                                            <p>{color}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="symbol-logo">
                                <div className="symbol-color-text">
                                    <p>Logo</p>
                                </div>
                                <div className="symbol-color-logo">
                                    <img src={mtcDt.logo[0]} alt="logo"></img>
                                    <p>{mtcDt.logo[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mc-post">
                            <div className="mc-post-text">
                                <p>Posting</p>
                            </div>
                            <div className="mc-post-list">
                                {
                                    mtcDt.post.length
                                        ? (mtcDt.post.map((post, i) => (
                                            <div className="posting" key={i}>
                                                <Link to={post.url} target="blank" >
                                                    <h1>🗒️ {post.title}</h1>
                                                </Link>
                                            </div>
                                        )))
                                        : <div className="posting-noting">
                                            <h1>관련 포스팅이 없습니다. 기록을 습관화하겠습니다 ✏️</h1>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-count">
                        <div class="minmaxContainer">
                            <div class="min">
                                <p class="minHeading">{mtcDt.id + 1}</p>
                            </div>
                            <div class="max">
                                <p class="maxHeading">4</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
} 