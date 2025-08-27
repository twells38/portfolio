import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [{
    id: 1,
    title: "FindMyPaws",
    description: "A RESTful Web Application using Java and JavaScript to provide a simple user experience for reporting lost and found pets. It provided authentication and user credentials to ensure a secure user experince. It provided basic features based on CRUD operations.",
    image: import.meta.env.BASE_URL+"/projects/pet.jpg",
    tags: ["HTML", "CSS", "JavaScript", "BootStrap", "Java", "Spring Boot", "Spring Initializr" ,"Fetch API", "PostgreSQL", "Supabase"],
    demoUrl: "https://www.youtube.com/watch?v=mCkWwyyzmBY&t=7s",
    githubUrl: "https://github.com/twells38/Capstone-Project2"
},
{
    id: 2,
    title: "Reading-Log",
    description: "Reading-Log is a RESTful Web application was created to keep track of the books that users have read. it provides basic features that users can view, add, update and delete books. This application utilizes Axios for its implementation.",
    image: import.meta.env.BASE_URL +"/projects/reading-log.png",
    tags: ["HTML", "CSS", "JavaScript", "BootStrap", "Google-Fonts", "Font-Awesome"," Node.js", "Express.js", "PGweb"," Sequelize", "ProsgreSQL", "Google Books API"],
    demoUrl: "https://www.youtube.com/watch?v=0VrU97lsyFc&t=14s",
    githubUrl: "https://github.com/twells38/capstone-project"
},
{
    id: 3,
    title: "Todo List",
    description: "A simple effective task management tool built with React, allowing users to organize and prioritize their daily tasks. The users can add new tasks with a simple interface, edit, delete and mark tasks as completed. ",
    image: import.meta.env.BASE_URL+"/projects/todoList.png",
    tags: ["HTML", "CSS", "JavaScript", "React.js"],
    demoUrl: "https://twells38.github.io/react-todoList/",
    githubUrl: "https://github.com/twells38/react-todoList"
 }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">
                    {" "}
                    Pro<span className="text-primary">jects</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg dark:bg-black overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={ project.image } alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag) => (
                                        <span
                                            className="px-2 py-1 text-xs text-blue-500 font-medium rounded-full bg-primary/20 text-secondary-foreground ">
                                          {tag}  
                                        </span>
                                    ))}
                                </div>
                            
                            <h3 className="text-xl font semibold mb-2 text-blue-600">
                                {project.title}
                            </h3>
                            <p className="text-left text-muted-foreground text-sm mb-4 text-blue-400">
                                {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 text-blue-400" >
                                        <ExternalLink size={20} color="blue" />
                                        </a>
                                        <a href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 text-blue-400" >
                                        <Github size={20} color="blue" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                       </div>
                   ))} 
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/twells38"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My GitHub <ArrowRight size={20} color="blue"
                         />
                    </a>
                </div>
            </div>
        
    </section>)
}