import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Card(props: any) {

    useEffect(() => {
        document.querySelectorAll('.card-shadow-hide').forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    markers: true,
                    scrub: 2,
                    start: 'top center',
                    end: 'bottom 20%',
                    toggleActions: "restart pause none restart",
                    toggleClass: "card-shadow-show"
                },
                duration: 2,
            });
        });
    }, []);

    return (
        <div className="card">
            <div className="card-shadow-hide"></div>
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;