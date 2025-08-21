import {FaJs, FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaRegCommentDots, FaGithub, FaBootstrap} from "react-icons/fa";
import {SiMongodb, SiExpress, SiNextdotjs, SiPostgresql, SiTypescript,SiTailwindcss, SiMicrodotblog, SiGnubash,} from "react-icons/si";
import { SiPostman, SiCanva, SiGreensock } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function SkillsSection() {


    const SkillBadge = ({ icon, label, color }) => (
        <span
            className={`inline-flex items-center gap-3 px-3 py-1.5 text-sm max-md:text-xs font-medium mr-2 mb-2 rounded-full bg-opacity-30 duration-300 border`}
            style={{ backgroundColor: getColor(color) }}
        >
            {icon} {label}
        </span>
    );

    // Helper function to map color names to actual colors
    function getColor(color) {
        switch (color) {
            case "blue": return "#164728";
            case "green": return "#3F2657";
            case "purple": return "#542121";
            case "red": return "#6D1B1B"; 
            case "black": return "#53420E";
            case "orange": return "#1E3356";
            default: return "#ccc";
        }
    }

    return (
        <div className="my-10">
            <h2 className="text-5xl font-bold mb-6 text-gray-100 montez">Skills</h2>

            {/* Languages */}
            <div className="mb-4 ">
                <h4 className="text-2xl font-medium mb-2 text-gray-200 capitalize">Languages</h4>
                <div className="flex flex-wrap">
                    <SkillBadge icon={<FaPython size={25} color="#3E74A4" />} label="Python" color="blue" />
                    <SkillBadge icon={<SiTypescript size={25} color="blue" />} label="TypeScript" color="blue" />
                    <SkillBadge icon={<FaJs size={25} color="yellow" />} label="JavaScript" color="blue" />
                </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="mb-4">
                <h4 className="text-2xl font-medium mb-2 text-gray-200 capitalize">Frameworks & Libraries</h4>
                <div className="flex flex-wrap">
                    <SkillBadge icon={<FaReact size={25} color="#0DD9FF"/>} label="ReactJS" color="purple" />
                    <SkillBadge icon={<SiNextdotjs size={25} color="#080808" />} label="NextJS" color="purple" />
                    <SkillBadge icon={<SiTailwindcss size={25} color="#5AC1B3" />} label="Tailwind Css" color="purple" />
                    <SkillBadge icon={<SiGreensock size={25} color="#96D508" />} label="G-sap" color="purple" />
                    <SkillBadge icon={<FaBootstrap size={25} color="#5A437F" />} label="Bootstrap" color="purple" />
                </div>
            </div>

            {/* Backend */}
            <div className="mb-4">
                <h4 className="text-2xl font-medium mb-2 text-gray-200 capitalize">Backend</h4>
                <div className="flex flex-wrap">
                    <SkillBadge icon={<FaNodeJs size={25} color="#84BF08" />} label="Node.js" color="green" />
                    <SkillBadge icon={<SiExpress size={25} color="#292929" />} label="ExpressJS" color="green" />
                    <SkillBadge icon={<SiMicrodotblog size={25} color="#0899D7" />} label="REST APIs" color="green" />
                </div>
            </div>

            {/* Databases */}
            <div className="mb-4">
                <h4 className="text-2xl font-medium mb-2 text-gray-200 capitalize">Databases</h4>
                <div className="flex flex-wrap">
                    <SkillBadge icon={<SiPostgresql size={25} color="#396B94"/>} label="PostgreSQL" color="red" />
                    <SkillBadge icon={<SiMongodb size={25} color="#55AD47" />} label="MongoDB" color="red" />
                </div>
            </div>

            {/* Practices */}
            <div className="mb-4">
                <h4 className="text-2xl font-medium mb-2 text-gray-200 capitalize">Practices</h4>
                <div className="flex flex-wrap">
                    <SkillBadge icon={<SiMicrodotblog size={25} color="" />} label="Microservices" color="black" />
                    <SkillBadge icon={<FaGitAlt size={25} color="#F05539" />} label="Git" color="black" />
                    <SkillBadge icon={<SiGnubash size={25} color="#08A208" />} label="CLI / Bash" color="black" />
                </div>
            </div>

            {/* tools */}
            <div className="mb-4">
                <h4 className="text-2xl font-medium mb-2 text-gray-200 capitalize">Tools</h4>
                <div className="flex flex-wrap">
                    <SkillBadge icon={<img src='/images/chatGpt.svg' alt="ChatGPT" className="w-4 h-4" />} label="ChatGPT" color="orange" />
                    <SkillBadge icon={<VscVscode size={25} color="#2CACF3" />} label="VS Code" color="orange" />
                    <SkillBadge icon={<SiPostman size={25} color="#FF713D" />} label="Postman" color="orange" />
                    <SkillBadge icon={<SiCanva size={25} color="#3382E2" />} label="Canva" color="orange" />
                    <SkillBadge icon={<FaGithub size={25} color="black" />} label="Github" color="orange" />
                </div>
            </div>
        </div>
    );
}
