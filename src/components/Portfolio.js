import { useEffect, useState } from 'react'
import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import Modal from './Modal'

export default function Portfolio() {

    // 모달 상태값 
    const [modal, setModal] = useState(false);
    // 프로젝트 데이터 저장 상태
    const [project, setProject] = useState([]);
    // 현재 url 값과 일치하는 데이터 저장
    const [mtcDt, setMtcDt] = useState('');

    // 모달을 토글하는 함수
    const toggleModal = (project) => {
        setModal(!modal);
        setMtcDt(project)

        if (!modal) {
            window.history.pushState(null, null, `${project.id}`)
        } else {
            window.history.back()
        }
    };
    
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
                                <div className='project' onClick={() => toggleModal(project)} key={index}>
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

            {modal ? <Modal mtcDt={mtcDt} toggleModal={toggleModal} /> : null}
        </div>

    )
}