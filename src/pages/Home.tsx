import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import Card from '../components/Card';
import heroIMG from '../assets/e4c3a7bd600393b1420b0ffef056534d.svg';

gsap.registerPlugin(ScrollTrigger, TextPlugin);
const Home: React.FC = () => {

    useEffect(() => {
        document.querySelectorAll('.hidden').forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    markers: false,
                    scrub: 2,
                    //   start: 'top 90%',
                    //   end: 'bottom 20%',
                    toggleActions: "restart pause none restart",
                    toggleClass: "show"
                }
            });
        });


        gsap.to('.thank', {
            scrollTrigger: {
                trigger: '.thank',
                toggleActions: "restart pause none restart",
            },
            duration: 2,
            text: "Thank you for visiting our website !",
            ease: "none",
        });

        gsap.to('.welcome', {
            duration: 3,
            start: 'center center',
            end: 'bottom 80%',
            text: "Welcome Kaviru",
            ease: "none",
        });

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Set CSS variables for mouse position
            document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
        });
    }, []);



    return (
        <div>
            <section className="hidden container">
                <div className="hero-img-container">
                    <img src={heroIMG} alt="" className='hero-img' />
                </div>
                <h1 className="welcome"></h1>
                <p>to web site</p>
            </section>
            <section>
                <h1 className="hidden">About</h1>
                <p className="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi optio sunt at vero eaque! Mollitia
                    expedita officiis provident error enim inventore voluptatem cupiditate tempore quidem? Adipisci sunt neque
                    ullam suscipit!</p>
            </section>
            <section className='cards hidden'>
                <Card title="Welcome" description="Welcome to my website!" />
                <Card title="About" description="Learn more about what we do." />
                <Card title="Contact" description="Get in touch with us." />
                <Card title="Services" description="Discover our range of services." />
                <Card title="Portfolio" description="Check out our previous work." />
                <Card title="Testimonials" description="Read what our clients say about us." />
            </section>
            <section>
                <h1 className="hidden">Contact</h1>
                <p className="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi optio sunt at vero eaque! Mollitia
                    expedita officiis provident error enim inventore voluptatem cupiditate tempore quidem? Adipisci sunt neque
                    ullam suscipit!</p>
            </section>
            <section>
                <h1 className="hidden">Services</h1>
                <p className="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi optio sunt at vero eaque! Mollitia
                    expedita officiis provident error enim inventore voluptatem cupiditate tempore quidem? Adipisci sunt neque
                    ullam suscipit!</p>
            </section>

            <section className="hidden">
                <h1 className="hidden thank"></h1>
                <div className="logos hidden">
                    <img className="logo hidden" src="https://img.icons8.com/color/500/000000/facebook.png" alt="facebook" />
                    <img className="logo hidden" src="https://img.icons8.com/color/500/000000/instagram-new.png" alt="instagram" />
                    <img className="logo hidden" src="https://img.icons8.com/fluency/500/twitterx--v1.png" alt="twitter" />
                    <img className="logo hidden" src="https://img.icons8.com/color/500/000000/linkedin.png" alt="linkedin" />
                </div>
            </section>
        </div>
    );
};

export default Home;