import typewriter from "../Images/type.png";
import newsletter1 from "../Images/newsletter1.png";
import newsletter2 from "../Images/newsletter2.png";
import avatar1 from "../Images/avatar1.png";
import avatar2 from "../Images/avatar2.png";
import avatar3 from "../Images/avatar3.png";
import avatar4 from "../Images/avatar4.png";
import like from "../Images/like.png";
import m from "../Images/m.png";
import m2 from "../Images/m2.png";
import arrow from "../Images/Arrow 1.png";
import './about.css';
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "../TechnicalComponents/SplitText.min.js";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import Footer from "../App/Footer";

const About = () => {
    let container = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".zee .img-wrapper:after");

    const tl = new TimelineLite();

    useEffect(()=> {
        tl.to(container, 1, { css: { visibility: "visible", overflow: "visible" }}).to(
            imageReveal,
            1,
            { height: "0%", ease: Power2.easeInOut }
        ).to(image, 2, {scale: 1, ease: Power2.easeInOut, delay: -1.6});
        const split = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineParent"
        });
        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "power2",
            delay: .5
        });
        window.scrollTo(0,0);
    }, [])  
    const [btnState, setBtnstate] = useState(false);

    const handleSubmit = (e) => {
        setBtnstate(true);
        e.preventDefault();
    }
    let toggleClassCheck = btnState ? 'sub-active' : null;
    return ( 
        <div className="about-wrapper">
            <div className={`sub-msg-alert ${toggleClassCheck}`}>
                fuck you
            </div>
            <div className="about-container">
                <div className="zee">
                    <div ref={el => container = el} className="img-wrapper">
                        <img ref={el => image = el} src={typewriter} alt="" />
                    </div>
                    <article>
                        <h2 id="split-text">about zee</h2>
                        <p id="split-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quibusdam voluptate quae, excepturi voluptatem animi!</p>
                        <ul>
                            <li id="split-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, possimus.</li>
                            <li id="split-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quasi.</li>
                            <li id="split-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus?</li>
                        </ul>
                    </article>
                </div>
                <article className="article">
                    <p>
                    Whether they are discovering themself, finding their feet in a new career, navigating relationships, keeping up with academics, or exploring that new and thrilling hobby, they need support, even if it is just a little.                     </p>
                    <p>
                    Zee is for them. Zee is for every twenty-something, by a twenty-something. 
                    </p>
                    <p>
                    Zee provides guidance and inspiration to twenty-something-year-olds steering through life with intricately delivered how-to guides, inspiring features, and relatable firsthand accounts. Zee is rooting for every young person to have a well-balanced and fulfilling life and wants them always to remember that we are their biggest and loudest cheerleaders.                    </p>
                </article>
            </div>
            <div className="newsletter-stn">
                <div className="graphics">
                    <img className="m" src={m} alt="" />
                    <div className="img-tile1">
                        <img className="newsletter-img-wrappers" src={newsletter2} alt="" />
                        <div className="graphics-texts">
                            <p>susan</p>
                            <p>writer</p>
                            <div className="readers-stats">
                                <div className="user-avatars">
                                    <img src={avatar1} alt="" />
                                    <img src={avatar2} alt="" />
                                    <img src={avatar3} alt="" />
                                    <img src={avatar4} alt="" />
                                </div>
                                <span className="readers-no-stats">1.1389</span>
                                <div className="likes">
                                    <img src={like} alt="" />
                                    <span>11351</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-tile2">
                    <img className="newsletter-img-wrappers" src={newsletter1} alt="" />
                        <div className="graphics-texts">
                            <p>susan</p>
                            <p>writer</p>
                            <div className="readers-stats">
                                <div className="user-avatars">
                                    <img src={avatar1} alt="" />
                                    <img src={avatar2} alt="" />
                                    <img src={avatar3} alt="" />
                                    <img src={avatar4} alt="" />
                                </div>
                                <span className="readers-no-stats">1.1389</span>
                                <div className="likes">
                                    <img src={like} alt="" />
                                    <span>11351</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter-sub-stn">
                    <img src={m2} alt="" />
                    <h2>subscribe to our newsletter</h2>
                    <p>Join many other lifestyle enthusiasts who receive our content in their inbox.</p>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="email" name="" id="" placeholder="Email"/>
                        <button> <span>Subscribe</span> <img src={arrow} alt="" /> </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default About;