import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/components/animations/AnimationVariants';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Amol's expertise in ERPNext implementation transformed our business operations. His attention to detail and innovative solutions exceeded our expectations.",
      name: "Kaushik Kacha",
      designation: "Project Manager, Chemcon Speciality Chemicals",
      avatar: "RK",
      company: "Chemcon"
    },
    {
      quote: "The GST dashboard integration was seamless. Amol delivered exactly what we needed for our compliance requirements with excellent documentation.",
      name: "Gaurav Pawar",
      designation: "Finance Head, Medicap Pharmaceuticals",
      avatar: "PS",
      company: "Medicap"
    },
    {
      quote: "His custom Frappe Insights reports gave us incredible visibility into our solar project progress. The visualizations are both beautiful and functional.",
      name: "Sachin Gavali",
      designation: "Operations Director, Hi-Tech Solar Solutions",
      avatar: "AP",
      company: "Hi-Tech"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
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
            Client Testimonials
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            What clients say about my ERP implementations and customizations
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.03,
                rotateY: 3,
                z: 20
              }}
              style={{ perspective: 1000 }}
            >
              <Card className="card-gradient shadow-card border-0 h-full overflow-hidden relative group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <CardContent className="p-6 relative z-10">
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  </motion.div>
                  
                  <motion.blockquote 
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    "{testimonial.quote}"
                  </motion.blockquote>
                  
                  <motion.div 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.designation}</p>
                      <p className="text-xs text-primary/70 font-medium">{testimonial.company}</p>
                    </div>
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

export default TestimonialsSection;