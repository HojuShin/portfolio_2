import watflix from '../assets/mockup.png'
import apple from '../assets/mockup2.png'
import gentle from '../assets/mockup3.png'
import pro from '../assets/mockup4.png'
import portfolio01 from '../assets/mockup5.png'

export default function Portfolio() {
    return (
        <div className='portfolio-block'>
            <div className='section-text'>
                <h2>Check my projects</h2>
            </div>
            {/* <video src={video} loop autoPlay muted className='video'></video> */}
            <div className='portfolio-projects'>
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
            </div>
        </div>
    )
}