import React from "react";
import HeroImg from "../../assets/images/hero.png";
import CountUp from "react-countup";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-scroll";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Software Developer.", "Front-end Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      className="container pt-5 sm:pt-0 sm:w-full sm:flex items-center font-titlefont sm:h-screen"
      id="home"
    >
      <div className="sm:w-1/2 sm:flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-semibold"> Olá, seja bem vindo</h4>
          <h1 className="text-5xl font-bold text-headingColor dark:text-textDark leading-none sm:leading-none">
            Eu sou{window.innerWidth < 1025 ? <br /> : " "}
            <span className="text-primaryColor capitalize leading-3 lg:text-6xl">
              {"\n"}João Carlos
            </span>
          </h1>
          <h2 className="text-[28px] lg:text-[42px] sm:leading-2 leading-3 sm:text-[26px] text-3xl sm:font-bold md:text-3xl md:leading-5 font-extrabold text-headingColor my-0 dark:text-textDark">
            um <span className="sm:leading-[0px] leading-7">{text}</span>
            <Cursor
              cursorBlinking={true}
              cursorStyle="|"
              cursorColor="#5C00F1"
            />
          </h2>
          <p className="text-base dark:text-textDark font-bodyFont leading-6 tracking-wide mt-2">
            Bem-vindo ao meu portfólio. Sinta-se à vontade para navegar e deixar
            suas sugestões no meu repositório no Github. Obrigado pela visita!
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
            className="flex items-center gap-5 mt-7 "
          >
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] cursor-pointer"
            >
              <i className="ri-mail-line"></i>E-mail
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              offset={-80}
              duration={500}
              className="group text-smallTextColor font-[700] text-[18px] border-b border-solid border-primaryColor dark:text-textDark cursor-pointer"
            >
              Veja o portfolio{" "}
              <span className="transform group-hover:rotate-90 inline-block duration-300">
                <HiArrowNarrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 sm:w-1/2 mt-10 w-full flex justify-center items-center sm:items-center sm:justify-center">
        <figure className="flex items-center justify-center hover:scale-110 duration-500">
          <img src={HeroImg} alt="" />
        </figure>
      </div>
      <div className="hidden z-10 lg:flex fixed flex-col top-[35%] lg:right-[0px]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-blue-600"  style="padding: 15px"; "border-radius: 10px 0 0 10px">
            <a
              className="flex justify-between items-center w-full text-gray-50 pr-2 "
              target="blank"
              href="https://www.linkedin.com/in/jo%C3%A3o-carlos-pinheiro/"
            >
              <FaLinkedin size={30} />
              Linkedin
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-darkMode dark:bg-black" style="padding: 15px"; "border-radius: 10px 0 0 10px" >
            <a
              className="flex justify-between items-center w-full text-gray-50 dark:text-textDark pr-2 "
              target="blank"
              href="https://github.com/joaocpinheiro"
            >
              <FaGithub size={30} />
              GitHub
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#6fc2b0]" style="padding: 15px"; "border-radius: 10px 0 0 10px" >
            <a
              className="flex justify-between items-center w-full text-gray-50 pr-2"
              href="mailto:joaocpinheiro03@gmail.com"
            >
              <HiOutlineMail size={30} />
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
