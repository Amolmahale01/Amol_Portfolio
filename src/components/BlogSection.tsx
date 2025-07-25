// import { motion } from 'framer-motion';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Calendar, Clock, ArrowRight } from 'lucide-react';
// import { fadeInUp, staggerContainer } from '@/components/animations/AnimationVariants';

// const BlogSection = () => {
//   const blogPosts = [
//     {
//       title: 'How I Integrated Tally with ERPNext using REST API',
//       excerpt: 'A comprehensive guide on creating seamless data synchronization between Tally and ERPNext for real-time financial data management.',
//       readTime: '8 min read',
//       publishDate: 'Dec 15, 2024',
//       tags: ['ERPNext', 'Tally', 'REST API', 'Integration'],
//       color: 'from-blue-500 to-blue-600'
//     },
//     {
//       title: 'Visualizing Solar Project Progress using Frappe Insights',
//       excerpt: 'Building custom dashboards and reports to track solar installation projects with real-time progress monitoring and analytics.',
//       readTime: '6 min read',
//       publishDate: 'Nov 28, 2024',
//       tags: ['Frappe Insights', 'Solar', 'Dashboards', 'Analytics'],
//       color: 'from-orange-500 to-orange-600'
//     },
//     {
//       title: 'GST Compliance Made Easy with ERPNext Customizations',
//       excerpt: 'Custom modules and reports for automated GST filing, invoice generation, and compliance tracking in ERPNext.',
//       readTime: '10 min read',
//       publishDate: 'Nov 10, 2024',
//       tags: ['GST', 'ERPNext', 'Compliance', 'e-Invoicing'],
//       color: 'from-green-500 to-green-600'
//     }
//   ];

//   return (
//     <section id="blog" className="py-20 px-4">
//       <div className="container mx-auto">
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.h2 
//             className="text-3xl md:text-4xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Latest Blog Posts
//           </motion.h2>
//           <motion.p 
//             className="text-muted-foreground text-lg max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Insights, tutorials, and case studies from my ERP development journey
//           </motion.p>
//         </motion.div>

//         <motion.div 
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           {blogPosts.map((post, index) => (
//             <motion.div
//               key={post.title}
//               variants={fadeInUp}
//               whileHover={{ 
//                 scale: 1.03,
//                 rotateY: 3,
//                 z: 20
//               }}
//               style={{ perspective: 1000 }}
//             >
//               <Card className="card-gradient shadow-card border-0 h-full overflow-hidden relative group cursor-pointer">
//                 <motion.div 
//                   className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-10`}
//                   transition={{ duration: 0.3 }}
//                 />
                
//                 <CardHeader className="relative z-10">
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//                   >
//                     <CardTitle className="text-lg font-bold mb-2 line-clamp-2">
//                       {post.title}
//                     </CardTitle>
//                   </motion.div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                   >
//                     <CardDescription className="text-sm leading-relaxed line-clamp-3">
//                       {post.excerpt}
//                     </CardDescription>
//                   </motion.div>
//                 </CardHeader>
                
//                 <CardContent className="relative z-10 space-y-4">
//                   <motion.div
//                     className="flex items-center space-x-4 text-xs text-muted-foreground"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
//                   >
//                     <div className="flex items-center space-x-1">
//                       <Calendar className="w-3 h-3" />
//                       <span>{post.publishDate}</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <Clock className="w-3 h-3" />
//                       <span>{post.readTime}</span>
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     className="flex flex-wrap gap-2"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                   >
//                     {post.tags.map((tag, tagIndex) => (
//                       <motion.div
//                         key={tag}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ 
//                           duration: 0.3, 
//                           delay: 0.7 + index * 0.1 + tagIndex * 0.05 
//                         }}
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         <Badge 
//                           variant="secondary" 
//                           className="text-xs skill-gradient cursor-pointer"
//                         >
//                           {tag}
//                         </Badge>
//                       </motion.div>
//                     ))}
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
//                   >
//                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <Button 
//                         variant="ghost" 
//                         size="sm" 
//                         className="group transition-smooth hover:bg-primary/5 w-full justify-between"
//                       >
//                         <span>Read More</span>
//                         <ArrowRight 
//                           size={14} 
//                           className="group-hover:translate-x-1 transition-transform" 
//                         />
//                       </Button>
//                     </motion.div>
//                   </motion.div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;
