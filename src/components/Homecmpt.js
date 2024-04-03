import { ScrollAnimation } from "@lasbe/react-scroll-animation";

export default function Homecmpt() {
    return (
        <div className='home-desc'>
            <ScrollAnimation
                startingPoint="bottom"
                duration={0.5}
                amount="xl"
                delay={0.1}
                repeat={false}
            >
                <h1>Web design and <br />
                    Web publishing<br />
                    + App</h1>
            </ScrollAnimation>
        </div>
    )
}