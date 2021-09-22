import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Parallax = ({ images, anchors, children }) => {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        let tl = gsap.timeline();
        images.forEach((image, index) => {
            tl.to(".parallax-content img", {
                attr: { src: image },
                scrollTrigger: {
                    trigger: element.querySelector(anchors[index]),
                    start: "top top",
                    end: "bottom center",
                    scrub: true
                }
            })
        })
    }, [images, anchors]);

    return (
        <div className=" parallax-container" id="parallax" ref={ref}>
            <div className="parallax-content">
                <div style={{ position: "sticky", right: "0", top: "0" }}>
                    <div style={{ position: "absolute", right: "0", top: "15rem" }} >
                        <img src="https://cataas.com/cat?b" style={{ maxWidth: "200px" }} />
                    </div>
                </div>
                <div style={{ maxWidth: "780px" }}> {children} </div>
            </div>
        </div >)
}

export default Parallax;