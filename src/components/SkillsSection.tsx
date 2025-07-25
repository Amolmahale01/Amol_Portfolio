import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  Cloud, 
  Monitor, 
  Brain,
  Settings 
} from 'lucide-react';
import { staggerContainer, fadeInUp, cardHover } from '@/components/animations/AnimationVariants';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'ERP Platforms',
      icon: <Settings className="w-6 h-6" />,
      skills: ['ERPNext', 'Frappe Framework', 'Tally Integration', 'ERP Customization'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MariaDB', 'MySQL', 'PostgreSQL', 'MS SQL Server'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Integrations',
      icon: <Monitor className="w-6 h-6" />,
      skills: ['REST API', 'GST API', 'e-Invoicing', 'Tally Connector'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Analytics & BI',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Frappe Insights', 'Power BI', 'Data Visualization', 'Custom Reports'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'Docker', 'Git', 'Linux', 'CI/CD'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
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
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive overview of my technical expertise and tools I work with
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 20
              }}
              style={{ perspective: 1000 }}
            >
              <Card className="card-gradient shadow-card border-0 h-full overflow-hidden relative group">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />
                <CardHeader className="pb-3 relative z-10">
                  <CardTitle className="flex items-center space-x-3">
                    <motion.div 
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.div>
                    <span className="text-lg font-semibold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.6 + index * 0.1 + skillIndex * 0.05 
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="skill-gradient hover:bg-primary/20 cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;