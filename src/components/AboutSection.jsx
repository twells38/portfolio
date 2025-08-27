
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">
                    About <span className="text-primary">Me</span>
                </h2>
                <div>
                    <div className="space-y-6">
                        <p className="text-left text-blue-400 text-base  md:text-xl indent-8">  
            Recently, I graduated in a software engineering program at Hackbright Academy sponsored by Perficient, where I have learned full stack web development in an agile work environment. Being a student software engineer taught me how to acquire and build new skills / experiences and the importance of the act of scrumming. Before that, I worked as a lead hostess and prior to that I worked as a pharmaceutical sales representative with a diverse skill set allows me to approach problem-solving from multiple perspectives. I have a strong passion for learning and creating interactive web applications using HTML, CSS and JavaScript, Java, UI frameworks and techniques. 
                            
            </p>
                        <p class="text-left text-blue-400 text-base  md:text-xl indent-8"> 
              I consider myself a "forever student". Being a software developer will offer an engaging challenge to continually learn and improve my technical skills every single day. I would like to combine my love of education and my programming skill set into a full stack software engineering position after Hackbright.
            </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch
                        </a>

                        <a href="projects/Sornya wells-4.pdf"
                        target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Resume
                        </a>
                        
                    </div>
                </div>
                
            </div>
       
        </section> 
    )
}