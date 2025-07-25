import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHover } from '@/components/animations/AnimationVariants';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Chemcon ERP Implementation',
      description: 'Complete ERPNext implementation for Chemcon Speciality Chemicals with custom modules for chemical inventory management, regulatory compliance, and batch tracking.',
      technologies: ['ERPNext', 'Frappe', 'Python', 'MariaDB', 'JavaScript'],
      features: [
        'Chemical inventory & batch tracking',
        'Regulatory compliance management',
        'Custom pricing rules for chemicals',
        'Integration with laboratory systems',
        'Automated purchase workflows'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Medicap GST Dashboard Integration',
      description: 'Custom GST compliance dashboard for Medicap Pharmaceuticals with automated invoice generation, GST filing, and e-invoicing integration.',
      technologies: ['ERPNext', 'GST API', 'Python', 'REST API', 'Power BI'],
      features: [
        'Automated GST return filing',
        'e-Invoicing API integration',
        'Real-time tax calculations',
        'Compliance reporting dashboard',
        'Invoice reconciliation system'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Hi-Tech Frappe Insights Custom Reports',
      description: 'Customized ERPNext modules for Accounting, CRM, and Helpdesk along with Frappe Insights dashboards for business analytics and reporting.',

      technologies: ['ERPNext', 'Frappe', 'Python', 'SQL', 'Frappe Insights'],
      features: [
    'Customized Accounting workflows and GST reports',
    'Integrated CRM and lead tracking system',
    'Helpdesk ticketing with custom scripts',
    'Real-time dashboards using Frappe Insights',
    'Client training and post-go-live support'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Showcase of my technical projects demonstrating problem-solving skills and innovation
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.03,
                rotateX: 2,
                rotateY: 2,
                z: 20
              }}
              style={{ perspective: 1000 }}
            >
              <Card className="card-gradient shadow-card border-0 h-full overflow-hidden relative group">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </motion.div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.6 + techIndex * 0.1 
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="skill-gradient cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="text-sm text-muted-foreground flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.8 + featureIndex * 0.1 
                          }}
                        >
                          <motion.span 
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.9 + featureIndex * 0.1 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="flex space-x-2 pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" className="transition-smooth hover:bg-primary/5">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" className="transition-smooth hover:bg-primary/5">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;