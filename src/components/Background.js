import { ScrollAnimation } from "@lasbe/react-scroll-animation";
export default function Background() {
    return (
        <div className='background-img'>
            <ScrollAnimation
                startingPoint="top"
                duration={1.3}
                amount="xl"
                delay={0.5}
                repeat={false}
            >
                <div className='background-img-01'>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="880px"
                        height="880px"
                        viewBox="0 0 1000 1000"
                        style={{ enableBackground: 'new 0 0 1000 1000' }}
                        xmlSpace="preserve"
                    >
                        <defs>
                            <radialGradient
                                id="color-gradient"
                                cx="418.5665"
                                cy="225.9685"
                                r="499.9326"
                                fx="866.8251"
                                fy="4.6162"
                                gradientTransform="matrix(-0.6935 0.7207 -0.7207 -0.6935 953.1126 355.0528)"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0" stopColor="#CEC4EF" />
                                <stop offset="1" stopColor="#CEC4EF" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <circle
                            className="bg01"
                            cx="500"
                            cy="500"
                            r="500"
                            style={{ fill: 'url(#color-gradient)' }}
                        />
                    </svg>
                </div>
            </ScrollAnimation>

            <ScrollAnimation
                startingPoint="left"
                duration={1.3}
                amount="xl"
                delay={0.5}
                repeat={false}
            >
                <div className='background-img-02'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="880px" height="880px" viewBox="0 0 429.6 429.6" style={{ enableBackground: 'new 0 0 429.6 429.6' }} xmlSpace="preserve">
                        <style>
                            {`.bg02 {fill: url(#color-gradient-2);}`}
                        </style>
                        <defs>
                            <radialGradient id="color-gradient-2" cx="2213.9312" cy="-11537.4219" r="214.85" fx="2393.6191" fy="-11419.6494" gradientTransform="matrix(1.902285e-02 0.9998 0.9998 -1.954636e-02 11706.5303 -2223.4016)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" style={{ stopColor: '#CEC4EF' }} />
                                <stop offset="1" style={{ stopColor: '#CEC4EF', stopOpacity: 0 }} />
                            </radialGradient>
                        </defs>
                        <g id="Layer_1-2">
                            <path className="bg02" d="M63,63C146.9-21,282.9-21,366.8,62.9s83.8,219.9-0.1,303.8s-219.9,83.9-303.8,0.1S-20.9,146.9,63,63z" />
                        </g>
                    </svg>
                </div>
            </ScrollAnimation>
        </div>
    )
}