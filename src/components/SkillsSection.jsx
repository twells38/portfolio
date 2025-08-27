import { cn } from "@/lib/util";
import { useState } from "react";

const skills = [
    
    //frontend
        { name: "HTML/CSS", category:"frontend", icon:import.meta.env.BASE_URL+"/projects/icons8-html-48.png"}, 
        { name: "React", category: "frontend", icon:import.meta.env.BASE_URL+"/projects/icons8-react-native-48.png"},
        {name: "Tailwind CSS", category: "frontend", icon:import.meta.env.BASE_URL+"/projects/icons8-tailwindcss-48.png"},
        {name: "BootStrap", category: "frontend", icon:import.meta.env.BASE_URL+"/projects/icons8-bootstrap-48.png"},
        //backend
        {name: "Java", category: "backend", icon:import.meta.env.BASE_URL+"/projects/icons8-java-48.png"},
        {name: "Spring Boot", category: "backend", icon:import.meta.env.BASE_URL+"/projects/icons8-spring-boot-logo-48.png"},
        {name: "Node.js", category: "backend", icon:import.meta.env.BASE_URL+"/projects/icons8-node-js-48.png"},
        {name: "Express.js", category: "backend", icon:import.meta.env.BASE_URL+"/projects/icons8-express-js-50.png"},
        {name: "MongoDB", category: "backend", icon:import.meta.env.BASE_URL+"/projects/icons8-mongodb-48.png"},
        {name: "PostgreSQL", category: "backend", icon:import.meta.env.BASE_URL+"/projects/icons8-postgresql-48.png"},
        
        //tools 
        { name: "Git", category: "tools", icon:import.meta.env.BASE_URL+"/projects/icons8-git-48.png" },
        {name: "GitHub", category: "tools", icon:import.meta.env.BASE_URL+"/projects/icons8-github-logo-48.png"},
        {name: "VS Code", category: "tools", icon:import.meta.env.BASE_URL+"/projects/icons8-vs-code-48.png"},
        {name: "Postman", category: "tools", icon:import.meta.env.BASE_URL+"/projects/icons8-postman-inc-50.png"},
        {name: "Selenium", category: "tools", icon:import.meta.env.BASE_URL+"/projects/icons8-selenium-48.png"},
        {name: "Mockito", category: "tools", icon:import.meta.env.BASE_URL+"/projects/icons8-mojito-96.png"}

    
];
// list of categories
const categories = ["all", "frontend", "backend", "tools"];


export const SkillsSection = () => {
    //create useState allows us to choose categories
    const [activeCategory, setActiveCategory] = useState("all");
    // create filter function allow us to go to each category
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30 ">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12 text-blue-400">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={()=>setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full  transition-colors capitalize ",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forground hover:bg-secondary"
                                
                            )}>
                            {category}
                        </button>
                    ))}
                    
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-gray-300 p-6   rounded-lg shadow-xs card-hover ">
                            <div className="text-center mb-4 ">
                                <img className="h-10 w-10 mx-auto mb-2" src={skill.icon} alt="html" />
                                <h3 className="font-semibold text-xs text-blue-400">{skill.name}  
                                </h3>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>

       </section>)
}