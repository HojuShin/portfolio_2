import { ScrollAnimation } from "@lasbe/react-scroll-animation";

export default function Contact() {
    return (
        <div className="contact-block">
            <div className="contact-text">
                <ScrollAnimation
                    startingPoint="left"
                    duration={1}
                    amount="sm"
                    delay={0.1}
                    repeat
                >
                    <h1>Contact me</h1>
                </ScrollAnimation>
                <ScrollAnimation
                    startingPoint="right"
                    duration={1}
                    amount="sm"
                    delay={0.1}
                    repeat
                >
                    <h2>함께 일하고 싶은 열정적인 퍼블리셔를 만나보세요</h2>
                </ScrollAnimation>
            </div>
            <div className="contact-info">

                <div className="contact-info-adress">
                    <div className="adress">
                        <h4>Location</h4>
                        <p>Changwon, South Korea</p>
                    </div>
                    <div className="adress">
                        <h4>Phone</h4>
                        <p>+82 10-4821-2399</p>
                    </div>
                    <div className="adress">
                        <h4>Email</h4>
                        <p>tlsghwn03@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}