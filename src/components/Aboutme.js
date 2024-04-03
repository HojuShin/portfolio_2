export default function Aboutme({ scrollCallBack }) {
    return (
        <>
            <div className='aboutme-block'>
                <div className='section-text'>
                    <h2>About me</h2>
                </div>
                <div className='aboutme-box'>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div className='aboutme-desc'>
                    <div className='aboutme-desc-text'>
                        <p>웹 퍼블리셔는 마치 벽돌을 하나하나 쌓아 올려 집을 짓는 건축가와 같다고 생각합니다. 코드와 디자인을 조합하여 디지털 공간에 아름다운 건축물을 세우며, 사용자들에게 새로운 경험과 편안함을 제공합니다.</p>
                        <p>웹 페이지에서 사용자의 집중을 높이는 것을 우선시하며, 최근에는 인터렉티브 웹사이트에 대한 관심을 깊게 가지고 있습니다. 사용자와의 상호작용을 강화하고 흥미로운 경험을 제공하기 위해 노력하고 있으며, 이를 위해 다양한 기술과 디자인 요소를 탐구하고 적용하는 것을 즐깁니다. 제 경험과 역량을 바탕으로 사용자들이 웹 페이지에 머무르고 싶어하는 경험을 만들어내고자 노력하고 있습니다</p>
                        {/* <div className='aboutme-desc-text-btn'>
                            <button onClick={() => scrollCallBack('portfolio')}>프로젝트 보기</button>
                        </div> */}
                    </div>
                    <div className='aboutme-desc-info'>
                        <div className='aboutme-desc-info-adress'>
                            <div className='adress-card'>
                                <h3>Name</h3>
                                <p>신호주 </p>
                            </div>
                            <div className='adress-card'>
                                <h3>Phone</h3>
                                <p>010-4821-2399</p>
                            </div>
                            <div className='adress-card'>
                                <h3>Email</h3>
                                <p>tlsghwn03@gmail.com</p>
                            </div>
                            <div className='adress-card'>
                                <h3>Tech Blog</h3>
                                <a href='https://github.com/HojuShin' target='_blank'>
                                    GitHub
                                </a>
                                <a href='https://shj0318.tistory.com/' target='_blank'>
                                    tistory
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}