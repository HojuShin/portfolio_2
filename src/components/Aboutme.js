import tstory from '../assets/tstory.png'
import { Link } from 'react-router-dom';

export default function Aboutme({ scrollCallBack }) {
    return (
        <>
            <div className='aboutme-block'>
                <div className='section-text'>
                    <h2>Check my projects</h2>
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
                        <div className='aboutme-desc-text-btn'>
                            <button onClick={() => scrollCallBack('portfolio')}>프로젝트 보기</button>
                        </div>
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

                            <div className='adress-card-link'>
                                <h3>Tech Blog</h3>
                                <Link to={'https://github.com/HojuShin'} target="_blank" >
                                    <div className='profile-link-git'>
                                        <svg height="42" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="42" data-view-component="true" className="color-fg-default">
                                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" fill="#ffffff"></path>
                                        </svg>
                                    </div>
                                </Link>
                                <Link to={'https://shj0318.tistory.com/'} target="_blank" >
                                    <div className='profile-link-t'>
                                        <img src={tstory} alt='t'></img>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}