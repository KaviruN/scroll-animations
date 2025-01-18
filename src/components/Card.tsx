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
                    markers: true,
                    scrub: 2,
                    start: 'top center',
                    end: 'bottom 20%',
                    toggleActions: "restart pause none restart",
                    
                },
                opacity: 1,
                direction: "alternate",
            });
        });
    }, []);

    return (
        <div className="card">
            <div className="sl"></div>
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;