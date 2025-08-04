import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience and internships that shaped my career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient shadow-card transition-smooth hover:shadow-elegant animate-slide-up">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-2 md:space-y-0">
                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold flex items-center space-x-2">
                    <Building className="w-5 h-5 text-primary" />
                    <span>ERPNext Developer</span>
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    CBD IT Solutions Pvt Ltd.
                  </CardDescription>
                </div>
                <div className="flex flex-col items-start md:items-end space-y-1">
                  <Badge className="hero-gradient text-white">
                    <CalendarDays className="w-3 h-3 mr-1" />
                    Sep 2024 - Present
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    Mumbai, India
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Working on comprehensive ERPNext implementations and customizations, focusing on 
                creating innovative solutions that streamline business processes and enhance user experiences.
              </p>

              <div>
                <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-2">
                  {[
                    'ERPNext implementation and system customization for diverse business requirements',
                    'Development of custom dashboards using Frappe Insights for data visualization',
                    'LMS (Learning Management System) module integration and enhancement',
                    'Implementation of UPI-based payment workflows for seamless transactions',
                    'Collaboration with cross-functional teams to deliver scalable solutions'
                  ].map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['ERPNext', 'Frappe Framework', 'Python', 'JavaScript', 'MySQL', 'Git', 'Docker'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="skill-gradient">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
