import { useEffect, useState } from 'react'
import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import Modal from './Modal'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Portfolio() {

    // 모달 상태값 
    const [modal, setModal] = useState(true);
    // 프로젝트 데이터 저장 상태
    const [project, setProject] = useState([]);
    // 현재 url 값과 일치하는 데이터 저장
    const [mtcDt, setMtcDt] = useState('');

    //현재 url 정보 가져오기
    const location = useLocation();

    const navigate = useNavigate();

    // 모달창 여닫 함수
    const toggle = (project) => {
        setModal(!modal);
        setMtcDt(project);
        if (!modal) {
            const url = new URLSearchParams(location.search);
            url.delete('id');
            navigate({ search: url.toString() });
        } else {
            const url = new URLSearchParams(location.search);
            url.set('id', project.id);
            navigate({ search: url.toString() });
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

    // 버튼 외부를 클릭하면 모달창 닫기
    useEffect(() => {
        // 클릭 이벤트가 발생했을 때 호출되는 함수 
        const handleOutsideClick = (event) => {
            // portfolio-projects 요소 가져오기
            const projectButton = document.querySelector('.portfolio-projects');
            //projectButton이 존재하고, 그리고 사용자가 클릭한 대상이 projectButton의 하위 요소가 아니라면
            if (projectButton && !projectButton.contains(event.target)) {
                //모달창 영역을 닫기 위해 Modal 상태를 ture로 설정
                setModal(true);
            }
        };

        // 컴포넌트가 마운트될 때, 화면 전체에 대한 클릭 이벤트를 감지하는 handleOutsideClick 추가
        // 사용자가 화면 어디를 클릭하던지간에 클릭 이벤트를 감지
        document.addEventListener('click', handleOutsideClick);

        // 컴포넌트가 언마운트될 때.
        // 컴포넌트가 더 이상 화면에 렌더링되지 않을 때 해당 이벤트 리스너를 더 이상 유지할 필요가 없기 때문 이벤트 리스너 제거
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [modal]);

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
                                <div className='project' onClick={() => toggle(project)} key={index}>
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
            {modal ? null : <Modal mtcDt={mtcDt} toggle={toggle} />}
        </div>

    )
}