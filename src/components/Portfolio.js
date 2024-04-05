import { useDeferredValue, useEffect, useState } from 'react'
import watflix from '../assets/mockup.png'
import apple from '../assets/mockup2.png'
import gentle from '../assets/mockup3.png'
import pro from '../assets/mockup4.png'
import portfolio01 from '../assets/mockup5.png'
import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import Modal from './Modal'

export default function Portfolio() {

    // 모달 상태값 
    const [modal, setModal] = useState(false);
    // 프로젝트 데이터 저장 상태
    const [project, setProject] = useState([]);

    // 모달 열고 닫는 함수 정의
    const toggle = () => {
        // modal 상태값을 현재의 반대로 변경
        setModal(!modal);
        // 모달이 열린 경우 URL에 #modal 추가, 닫힌 경우 #modal 제거
        if (!modal) {
            window.history.pushState(null, null, '#modal');
        } else {
            window.history.pushState(null, null, window.location.pathname)
        }
    }

    useEffect(() => {
        // 데이터 비동기적으로 가져오는 함수
        const fetchData = async () => {
            try {
                const response = await fetch('https://hojushin.github.io/data/project.json');
                const result = await response.json();
                setProject(result);

            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        // 컴포넌트가 마운트될 때 fetchData 함수를 호출하여 데이터를 가져dha
        fetchData();
    }, []); // 빈 배열을 전달하여 마운트될 때만 실행되도록 함.

    return (
        <div className='portfolio-block'>
            <ScrollAnimation
                startingPoint="bottom"
                duration={1}
                amount="xl"
                delay={0.1}
                repeat={false}
            >
                <div className='section-text'>
                    <h2>Check my projects</h2>
                </div>
            </ScrollAnimation>
            <div className='portfolio-projects'>
                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.2}
                    repeat={false}
                >
                    <div className='project' onClick={toggle}>
                        <div className='project-mockup'>
                            <img src={pro} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.3}
                    repeat={false}
                >
                    <div className='project' onClick={toggle}>
                        <div className='project-mockup'>
                            <img src={watflix} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.4}
                    repeat={false}
                >
                    <div className='project' onClick={toggle}>
                        <div className='project-mockup'>
                            <img src={apple} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.5}
                    repeat={false}
                >
                    <div className='project' onClick={toggle}>
                        <div className='project-mockup'>
                            <img src={gentle} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.6}
                    repeat={false}
                >
                    <div className='project' onClick={toggle}>
                        <div className='project-mockup'>
                            <img src={portfolio01} alt='portfolio' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.7}
                    repeat={false}
                >
                    <div className='project' onClick={toggle}>
                        <div className='project-mockup'>
                            <img src={watflix} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            {modal ? <Modal /> : null}
        </div>

    )
}