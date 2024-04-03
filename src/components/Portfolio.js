import watflix from '../assets/mockup.png'
import apple from '../assets/mockup2.png'
import gentle from '../assets/mockup3.png'
import pro from '../assets/mockup4.png'
import portfolio01 from '../assets/mockup5.png'
import { ScrollAnimation } from "@lasbe/react-scroll-animation";

export default function Portfolio() {
    return (
        <div className='portfolio-block'>
            <ScrollAnimation
                startingPoint="bottom"
                duration={1}
                amount="xl"
                delay={0.1}
                repeat
            >
                <div className='section-text'>
                    <h2>Check my projects</h2>
                </div>
            </ScrollAnimation>
            {/* <video src={video} loop autoPlay muted className='video'></video> */}
            <div className='portfolio-projects'>
                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.2}
                    repeat
                >
                    <div className='project'>
                        <div className='project-mockup'>
                            <img src={pro} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.3}
                    repeat
                >
                    <div className='project'>
                        <div className='project-mockup'>
                            <img src={watflix} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.4}
                    repeat
                >
                    <div className='project'>
                        <div className='project-mockup'>
                            <img src={apple} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.5}
                    repeat
                >
                    <div className='project'>
                        <div className='project-mockup'>
                            <img src={gentle} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.6}
                    repeat
                >
                    <div className='project'>
                        <div className='project-mockup'>
                            <img src={portfolio01} alt='portfolio' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation
                    startingPoint="bottom"
                    duration={1}
                    amount="xl"
                    delay={0.7}
                    repeat
                >
                    <div className='project'>
                        <div className='project-mockup'>
                            <img src={watflix} alt='watflix' />
                        </div>
                        <div className='project-btn'>
                            <div className='view-btn'>
                                <p>Learn more</p>
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}