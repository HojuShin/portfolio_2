export default function Homecmpt({ scrollCallBack }) {
    return (
        <>
            <div className='home-desc'>
                <h1>Web design and <br />
                    Web publishing<br />
                    + App</h1>
            </div>

            <div className="rotating-btn">
                <a onClick={() => scrollCallBack('aboutme')} className="rotating-btn__link slide-down">
                    <svg x="0px" y="0px" viewBox="0 0 120 120" style={{ transform: "translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px) rotate(150.891deg);" }} className="animate-rotation" data-value="360">
                        <defs>
                            <path id="textPath" d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"></path>
                        </defs>
                        <g>
                            <use href="#textPath" fill="none"></use>
                            <text className="rotating-btn-text">
                                <textPath href="#textPath">Scroll for More * Scroll for More * </textPath>
                            </text>
                        </g>
                    </svg>
                    <i className="ph-bold ph-arrow-down">
                    </i>
                </a>
            </div>
        </>

    )
}