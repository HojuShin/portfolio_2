import { useEffect, useState } from 'react'
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
            window.history.pushState(null, null, 'project');
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

    console.log(project)


    return (
        <div className='portfolio-block'>
            <ScrollAnimation
                startingPoint="bottom"
                duration={0.5}
                amount="xl"
                delay={0.1}
                repeat={false}
            >
                <div className='section-text'>
                    <h2>Check my projects</h2>
                </div>
            </ScrollAnimation>

            <div className='portfolio-projects'>
                {
                    project.map((project, index) => {
                        return (
                            <ScrollAnimation
                                startingPoint="bottom"
                                duration={0.5}
                                amount="xl"
                                delay={0.1 * (index + 1)} 
                                repeat={false}
                            >
                                <div className='project' onClick={toggle} key={index}>
                                    <div className='project-mockup'>
                                        <img src={project.img} alt='project' />
                                    </div>
                                    <div className='project-btn'>
                                        <div className='view-btn'>
                                            <p>Learn more</p>
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        )
                    })
                }
                
            </div>

            {modal ? <Modal project={project} setModal={setModal} /> : null}
        </div>

    )
}