import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { fadeInUp, scaleIn } from '@/components/animations/AnimationVariants';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
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
            About Me
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn more about my journey, passion, and expertise in ERPNext development
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Card className="card-gradient shadow-card border-0 overflow-hidden relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <CardContent className="p-8 relative z-10">
                <motion.div className="space-y-6">
                  {[
                    "A passionate developer skilled in ERPNext customization, cloud computing (AWS & GCP), and data science. Currently working at CBD IT Solutions Pvt Ltd on ERPNext implementations, custom dashboards using Frappe Insights, and LMS module enhancements.",
                    "I'm eager to contribute to meaningful tech solutions and continue learning in a dynamic environment. My experience spans across various technologies and I'm always excited to take on new challenges that push the boundaries of what's possible with technology.",
                    "With a strong foundation in data science and a keen interest in cloud technologies, I bring a unique perspective to software development that combines analytical thinking with practical implementation skills."
                  ].map((text, index) => (
                    <motion.p 
                      key={index}
                      className="text-lg leading-relaxed text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    >
                      {index === 0 ? (
                        <>
                          A passionate developer skilled in ERPNext customization, cloud computing (AWS & GCP), and data science. 
                          Currently working at <span className="text-primary font-semibold">CBD IT Solutions Pvt Ltd</span> on ERPNext implementations, 
                          custom dashboards using Frappe Insights, and LMS module enhancements.
                        </>
                      ) : (
                        text
                      )}
                    </motion.p>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;