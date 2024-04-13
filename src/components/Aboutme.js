import { ScrollAnimation } from "@lasbe/react-scroll-animation";

export default function Aboutme() {
    return (
        <>
            <div className='aboutme-block' >
                <ScrollAnimation
                    startingPoint="bottom"
                    duration={0.5}
                    amount="sm"
                    delay={0.1}
                    repeat={false}
                >
                    <div className='section-text'>
                        <h2>About me</h2>
                    </div>
                </ScrollAnimation>
                <div className='aboutme-box' >
                    <ScrollAnimation
                        startingPoint="bottom"
                        duration={0.5}
                        amount="lg"
                        delay={0.2}
                        repeat={false}
                    >
                        <div className='box'>
                            <div className="box01">
                                <p>5+</p>
                            </div>
                            <div className="box02">
                                <p>프로젝트 완성</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation
                        startingPoint="bottom"
                        duration={0.5}
                        amount="lg"
                        delay={0.3}
                        repeat={false}
                    >
                        <div className='box'>
                            <div className="box01">
                                <p>8+</p>
                            </div>
                            <div className="box02">
                                <p>보유 스킬</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation
                        startingPoint="bottom"
                        duration={0.5}
                        amount="lg"
                        delay={0.4}
                        repeat={false}
                    >
                        <div className='box'>
                            <div className="box01">
                                <p>4+</p>
                            </div>
                            <div className="box02">
                                <p>프로젝트 완성</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className='aboutme-desc'>
                    <div className='aboutme-desc-text'>
                        <ScrollAnimation
                            startingPoint="bottom"
                            duration={0.5}
                            amount="lg"
                            delay={0.5}
                            repeat={false}
                        >
                            <p>웹 퍼블리셔는 마치 벽돌을 하나하나 쌓아 올려 집을 짓는 건축가와 같다고 생각해요. 코드와 디자인을 조합하여 디지털 공간에 아름다운 건축물을 세우며, 사용자들에게 새로운 경험과 편안함을 제공하기 때문이죠. 제 역량을 바탕으로 사용자들이 웹 페이지를 탐험하며 즐겁게 머무를 수 있는 경험을 창출하는 것에 목적을 두고 있어요! </p>
                        </ScrollAnimation>
                        <ScrollAnimation
                            startingPoint="bottom"
                            duration={0.5}
                            amount="lg"
                            delay={0.5}
                            repeat={false}
                        >
                            <p>웹 페이지에서 사용자의 집중을 높이는 것을 우선시하며, 최근에는 인터렉티브 웹사이트에 대한 관심을 깊게 가지고 있습니다. 사용자와의 상호작용을 강화하고 흥미로운 경험을 제공하기 위해 노력하고 있으며, 이를 위해 다양한 기술과 디자인 요소를 탐구하고 적용하는 것을 즐깁니다. 특히 JavaScript 프레임워크 및 라이브러리를 활용하여 동적이고 반응형 웹사이트를 구축하는 것에 흥미를 느끼고 있습니다. 또한 사용자 경험<span className="textcolor">(UX)</span>과 사용자 인터페이스<span className="textcolor">(UI)</span> 디자인에 대한 지속적인 연구와 실험을 통해 웹사이트의 질적 향상에 기여하고자 합니다.</p>
                        </ScrollAnimation>
                    </div>

                    <div className='aboutme-desc-info'>

                        <div className='aboutme-desc-info-adress'>
                            <ScrollAnimation
                                startingPoint="bottom"
                                duration={0.5}
                                amount="lg"
                                delay={0.5}
                                repeat={false}
                            >
                                <div className='adress-card'>
                                    <h3>Name</h3>
                                    <p>신호주 </p>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation
                                startingPoint="bottom"
                                duration={0.5}
                                amount="lg"
                                delay={0.5}
                                repeat={false}
                            >
                                <div className='adress-card'>
                                    <h3>Phone</h3>
                                    <p>010-4821-2399</p>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation
                                startingPoint="bottom"
                                duration={0.5}
                                amount="lg"
                                delay={0.5}
                                repeat={false}
                            >
                                <div className='adress-card'>
                                    <h3>Email</h3>
                                    <p>tlsghwn03@gmail.com</p>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation
                                startingPoint="bottom"
                                duration={0.5}
                                amount="lg"
                                delay={0.5}
                                repeat={false}
                            >
                                <div className='adress-card'>
                                    <h3>Tech Blog</h3>
                                    <a href='https://github.com/HojuShin' target='_blank'>
                                        GitHub
                                    </a>
                                    <a href='https://shj0318.tistory.com/' target='_blank'>
                                        tistory
                                    </a>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}