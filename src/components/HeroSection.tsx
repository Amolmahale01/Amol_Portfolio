import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Plus, Circle, Square, Triangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { textReveal, fadeInLeft, fadeInRight, buttonHover, floatingAnimation, floatingShapes, backgroundText } from '@/components/animations/AnimationVariants';
import { Typewriter } from 'react-simple-typewriter';
const HeroSection = () => {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden relative">
      {/* Large background text */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        variants={backgroundText}
        animate="animate"
      >
        <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black text-muted/5 tracking-tight leading-none">
          AMOL
        </h1>
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 md:left-20 text-primary/20"
        variants={floatingShapes.floating1}
        animate="animate"
      >
        <Plus size={24} className="md:w-8 md:h-8" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16 md:right-32 text-primary/30"
        variants={floatingShapes.floating2}
        animate="animate"
      >
        <Circle size={20} className="md:w-6 md:h-6" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-16 md:left-32 text-primary/25"
        variants={floatingShapes.floating3}
        animate="animate"
      >
        <Square size={22} className="md:w-7 md:h-7" />
      </motion.div>
      
      <motion.div
        className="absolute top-60 left-1/2 text-primary/20"
        variants={floatingShapes.floating1}
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        <Triangle size={18} className="md:w-5 md:h-5" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 md:right-20 text-primary/30"
        variants={floatingShapes.floating2}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-current rotate-45" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4 overflow-hidden">

<motion.h1 
  className="text-4xl md:text-6xl font-bold tracking-tight"
  variants={textReveal}
  initial="hidden"
  animate="visible"
>
  <motion.span
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Hi, I'm{' '}
  </motion.span>

  <motion.span 
    className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <Typewriter
      words={['Amol Mahale', 'ERPNext Developer', 'Web Developer', 'ERPNext Consultant', 'ERPNext Implementor']}
      loop={Infinity}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </motion.span>
</motion.h1>

              <motion.h2 
                className="text-xl md:text-2xl text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                ERPNext Developer | Data Science Enthusiast
              </motion.h2>
            </div>

            <motion.div 
              className="flex flex-col space-y-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: MapPin, text: "Mumbai, India" },
                { icon: Phone, text: <a href="tel:+919579842665">+91 9579842665</a> },
                { icon: Mail, text: <a href="mailto:amolm01rcpit@gmail.com">amolm01rcpit@gmail.com</a> }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <item.icon size={18} className="text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p 
              className="text-lg text-muted-foreground max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Passionate developer skilled in ERPNext customization, cloud computing, and data science. 
              Currently working on meaningful tech solutions and always eager to learn.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="hero-gradient shadow-elegant relative overflow-hidden"
                >
                  <motion.span
                    className="relative z-10"
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Get In Touch
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="transition-smooth hover:bg-primary/5 border-2"
                >
                  <a href="#about">Learn More</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/amol-mahale-9aa796215", label: "LinkedIn Profile" },
                { icon: Github, href: "https://github.com/Amolmahale01", label: "GitHub Profile" }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="sm" asChild className="transition-smooth hover:text-primary">
                    <a 
                      href={social.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image with card-style presentation */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="relative"
              variants={floatingAnimation}
              animate="animate"
            >
              {/* Card container with border and background */}
              <motion.div
                className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-6 border border-border/50 shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 3,
                  rotateX: 2
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Decorative corner elements */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 border-2 border-primary/40 rounded-full"
                  variants={floatingShapes.floating1}
                  animate="animate"
                />
                
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/40 rotate-45"
                  variants={floatingShapes.floating2}
                  animate="animate"
                />
                
                {/* Scattered dots */}
                <motion.div 
                  className="absolute top-4 right-8 flex space-x-1"
                  variants={floatingShapes.floating3}
                  animate="animate"
                >
                  <div className="w-2 h-2 bg-primary/60 rounded-full" />
                  <div className="w-2 h-2 bg-primary/40 rounded-full" />
                  <div className="w-2 h-2 bg-primary/60 rounded-full" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-4 right-6 flex flex-col space-y-1"
                  variants={floatingShapes.floating1}
                  animate="animate"
                  style={{ animationDelay: '1.5s' }}
                >
                  <div className="w-2 h-2 bg-secondary/60 rounded-full" />
                  <div className="w-2 h-2 bg-secondary/40 rounded-full" />
                  <div className="w-2 h-2 bg-secondary/60 rounded-full" />
                </motion.div>
                
                {/* Main image */}
                <motion.div
                  className="relative z-10 w-64 h-72 md:w-72 md:h-80 overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src="src/assets/amol-image.jpg"
                    alt="Amol Mahale"
                    style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                    className="rounded-2xl shadow-md"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </motion.div>
                
                {/* Floating geometric shapes around the card */}
                <motion.div 
                  className="absolute -top-8 -left-8 text-primary/30"
                  variants={floatingShapes.floating2}
                  animate="animate"
                >
                  <Square size={20} />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -right-8 text-secondary/40"
                  variants={floatingShapes.floating3}
                  animate="animate"
                >
                  <Circle size={16} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;