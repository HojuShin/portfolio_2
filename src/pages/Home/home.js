import Background from '../../components/Background';
import '../../styles/home.css'

export default function Home() {

    const scrollCallBack = (targetId) => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className="App">
                <Background />

                <header id='header'>
                    <div className='header-nav'>
                        <nav>
                            <ul>
                                <li onClick={() => scrollCallBack('home')}><p>Home</p></li>
                                <li onClick={() => scrollCallBack('aboutme')}><p>About Me</p></li>
                                <li onClick={() => scrollCallBack('portfolio')}><p>Portfolio</p></li>
                                <li onClick={() => scrollCallBack('contact')}><p>Contact</p></li>
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