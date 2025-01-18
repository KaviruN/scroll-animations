import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Card(props: any) {

    useEffect(() => {
        document.querySelectorAll('.sl').forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    markers: false,
                    scrub: 2,
                    start: 'top center',
                    end: 'bottom 20%',
                    toggleActions: "restart pause none restart",
                    toggleClass: "sm"
                },
                duration: 2,
            });
        });
    }, []);

    return (
        <div className="card hidden">
            <div className="sl"></div>
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;