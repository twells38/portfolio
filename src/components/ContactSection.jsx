import { Mail, MapPin, Phone } from "lucide-react";
export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-400">
              Get In <span className="text-primary">Touch</span>   
            </h2>
            <div className="grid grid-cols-1  ">
                <div className="space-y-8">
                    <h3 className="text-xl font-semibold mb-6 text-primary">
                        {" "}
                        Contact Infomation
                    </h3>
                    <div className="container mx-auto max-w-5xl space-y-6 justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8  text-blue-400 ">
                        <div className="flex  justify-center  ">
                            <div className="p-6 rounded-full ">
                                <Mail className="h-6 w-6" color="blue"  /> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium text-blue-400">Email</h4>
                                <a href="mailto:wsornya@gmail.com"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    wsornya@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex  justify-center  ">
                            <div className="p-6 rounded-full ">
                                <Phone className="h-6 w-6" color="green"  /> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium text-blue-400">Phone</h4>
                                <a href="tel:+14706261561"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (470) 626-1561
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center  ">
                            <div className="p-6 rounded-full ">
                                <MapPin className="h-6 w-6" color="red"/> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium text-blue-400">Location</h4>
                                <a href="mailto:wsornya@gmail.com"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    Kennesaw, GA 30144
                                </a>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </section>
    )
}