import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech in Data Science',
      institution: 'R. C. Patel Institute of Technology',
      score: '7.09 CGPA',
      type: 'Bachelor\'s Degree',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Science Stream',
      score: '64.46%',
      type: 'Higher Secondary',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Maharashtra State Board',
      score: '78.20%',
      type: 'Secondary School',
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  const certifications = [
    'Data Science Foundations – Great Learning',
    'Statistical Data Visualization – IBM',
    'Virtual Classroom with Google Slides – Coursera',
    'Aptitude & Technical Training – Campus Credentials'
  ];

  const achievements = [
    'Participated in Google Cloud Ready Facilitator Program',
    'Active contributor to open-source projects',
    'Consistent academic performance with strong technical foundation'
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background, professional certifications, and notable achievements
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-primary" />
              Education
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card 
                  key={edu.degree}
                  className="card-gradient shadow-card transition-smooth hover:shadow-elegant hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 text-primary mb-2">
                      {edu.icon}
                      <Badge variant="secondary" className="text-xs">
                        {edu.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold leading-tight">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Score:</span>
                      <Badge className="hero-gradient text-white font-semibold">
                        {edu.score}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-primary" />
              Certifications
            </h3>
            <Card className="card-gradient shadow-card transition-smooth hover:shadow-elegant animate-slide-up">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg skill-gradient">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-primary" />
              Achievements
            </h3>
            <Card className="card-gradient shadow-card transition-smooth hover:shadow-elegant animate-slide-up">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;