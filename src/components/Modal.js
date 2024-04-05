export default function Modal({ mtcDt, toggleModal }) {
    return (
        <>
            <div className="modal-section">
                <div className="modal-back">
                </div>
                <div className="modal-bar">
                    <div className="modal-bar-top">
                        <div className="modal-bar-count">
                            <p>{mtcDt.id + 1} / 6 </p>
                        </div>
                        <div className="modal-bar-close">
                            <button className="closeBtn" onClick={() => toggleModal(mtcDt.id)} >
                                <span class="material-symbols-outlined">close</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="modal-container">
                    <div className="modal-project">
                        <div className="modal-img">
                            <img src={mtcDt.img} alt="mockup"></img>
                        </div>
                        <div className="modal-desc">
                            <div className="modal-desc-title">
                                <h3>{mtcDt.title}</h3>
                            </div>
                            <div className="modal-desc-tools">
                                {mtcDt.tools.map((tools, i) => (
                                    <span key={i}>{tools}</span>
                                ))}
                            </div>
                            <div className="modal-desc-cntrb">
                                <span>기여도 | {mtcDt.Contribution}</span>
                            </div>
                            <div className="modal-desc-text">
                                <p>{mtcDt.desc}</p>
                            </div>
                        </div>
                        {/* <div className="modal-link">
                            <button className="modal-link-btn">
                                <p>홈페이지 바로가기</p>
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div >
        </>
    )
} 