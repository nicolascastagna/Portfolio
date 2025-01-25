import React, { useCallback, useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import CustomButton from "./generics/CustomButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Instagram,
    Sparkles,
} from "lucide-react";
import SocialLink from "./generics/SocialLink";
import AOS from "aos";

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Full Stack", "PHP/Symfony", "JS/React"];

const SOCIAL_LINKS = [
    { icon: Github, link: "https://github.com/nicolascastagna" },
    {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/nicolas-castagna-259bb61b1/",
    },
    { icon: Instagram, link: "https://www.instagram.com/nicolas.castagna" },
];

const Header = () => {
    // const fullstack: string[] = "full stack".split("");
    // const phpJs: string[] = "php/js".split("");
    // const [items, setItems] = useState<string[]>(fullstack);
    // const [count, setCount] = useState<number>(0);
    // const [play, setPlay] = useState<boolean>(false);

    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);

    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                once: true,
                offset: 10,
            });
        };

        initAOS();
        window.addEventListener("resize", initAOS);
        return () => window.removeEventListener("resize", initAOS);
    }, []);

    // useInterval(
    //     () => {
    //         // Anime Front-End
    //         setItems(fullstack);
    //         setCount(count + 1);

    //         if (count === 1) {
    //             setCount(0);
    //             setItems(phpJs);
    //         }
    //     },
    //     play ? 6000 : null
    // );

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setItems(phpJs);
    //         setPlay(true);
    //     }, 4000);
    //     return () => clearTimeout(timer);
    // }, []);

    const handleTyping = useCallback(() => {
        if (isTyping) {
            if (charIndex < WORDS[wordIndex].length) {
                setText((prev) => prev + WORDS[wordIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else {
                setTimeout(() => setIsTyping(false), PAUSE_DURATION);
            }
        } else {
            if (charIndex > 0) {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else {
                setWordIndex((prev) => (prev + 1) % WORDS.length);
                setIsTyping(true);
            }
        }
    }, [charIndex, isTyping, wordIndex]);

    useEffect(() => {
        const timeout = setTimeout(
            handleTyping,
            isTyping ? TYPING_SPEED : ERASING_SPEED
        );
        return () => clearTimeout(timeout);
    }, [handleTyping]);

    const lottieOptions = {
        src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
        },
        style: { width: "100%", height: "100%" },
        className: `w-full h-full transition-all duration-500 ${
            isHovering
                ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
                : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
        }`,
    };

    return (
        <header id="home" style={{ opacity: `${isLoaded ? 1 : 0}` }}>
            {/* <div> */}
            <div
                className="container header__container"
                data-aos="fade-right"
                data-aos-delay="200"
            >
                <div className="text-contain">
                    <h1 data-aos="fade-right" data-aos-delay="800">
                        Nicolas Castagna
                    </h1>
                    <div
                        className="contain-dynamic_text"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        <h2>Développeur</h2>
                        <span> {text}</span>
                        {/* <div className="anim-text">
                            {items.map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                        </div> */}
                    </div>
                    <div
                        className="contain-icons"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                    >
                        <Link smooth to="/#projects">
                            <CustomButton text="Projects" icon={ExternalLink} />
                        </Link>
                        <Link smooth to="#contact">
                            <CustomButton text="Contact" icon={Mail} />
                        </Link>
                    </div>
                    <div
                        className="contain-icons"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                    >
                        {SOCIAL_LINKS.map((social, index) => (
                            <SocialLink key={index} {...social} />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="container picture__container"
                data-aos="fade-left"
                data-aos-delay="600"
                style={{
                    transition:
                        "transform 0.5s ease-in-out, opacity 0.7s ease-in-out",
                    transform: isHovering
                        ? "scale(1.1) rotate(3deg)"
                        : "scale(1) rotate(0deg)",
                    opacity: isHovering ? 1 : 0.9,
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <DotLottieReact {...lottieOptions} />
            </div>
            <div className="scroll-bottom"></div>
            {/* </div> */}
        </header>
    );
};

export default Header;
