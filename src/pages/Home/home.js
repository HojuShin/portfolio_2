import { useEffect, useState } from 'react';
import Background from '../../components/Background';
import '../../styles/home.css'

export default function Home() {

    const [position, setPosition] = useState('home')

    const scrollCallBack = (targetId) => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }
    
    useEffect(() => {
        const handleScroll = () => {
            const aboutMeSection = document.getElementById('aboutme');
            const portfolioSection = document.getElementById('portfolio');
            const contactSection = document.getElementById('contact');

            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY >= contactSection.offsetTop) {
                setPosition('contact');
            } else if (scrollY >= portfolioSection.offsetTop) {
                setPosition('portfolio');

            } else if (scrollY >= aboutMeSection.offsetTop) {
                setPosition('aboutme');
            } else {
                setPosition('home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // useEffect는 한 번만 실행되도록 빈 배열을 전달합니다.

    return (
        <>
            <div className="App">
                <Background />

                <header id='header'>
                    <div className='header-nav'>
                        <nav>
                            <ul>
                                <li className={position === 'home' ? 'active' : ''}
                                    onClick={() => {
                                        scrollCallBack('home')

                                    }}><p>Home</p></li>
                                <li className={position === 'aboutme' ? 'active' : ''}
                                    onClick={() => {
                                        scrollCallBack('aboutme')

                                    }}><p>About Me</p></li>
                                <li className={position === 'portfolio' ? 'active' : ''}
                                    onClick={() => {
                                        scrollCallBack('portfolio')

                                    }}><p>Portfolio</p></li>
                                <li className={position === 'contact' ? 'active' : ''}
                                    onClick={() => {
                                        scrollCallBack('contact')

                                    }}><p>Contact</p></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='header-mode'>
                        <div className='lightmode'>
                            <p>Light Mode</p>
                        </div>
                    </div>
                </header>

                <div className='container'>
                    <div className='container-content'>

                        <section id='home'>

                        </section>

                        <section id='aboutme' >

                        </section>

                        <section id='portfolio'>

                        </section>
                        <section id='contact'>

                        </section>
                    </div>
                </div>
            </div>
            <div className="noise"></div>
        </>
    );
}