import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Staff Software Engineer",
      company: "Tech Company",
      location: "Remote",
      duration: "2023 - Present",
      period: "1.5 years",
      description: "Leading technical architecture decisions and mentoring engineering teams. Driving innovation in system design and implementation.",
      skills: ["System Architecture", "Technical Leadership", "Mentoring", "Strategic Planning"]
    },
    {
      title: "Senior Site Reliability Engineer",
      company: "Scale Company",
      location: "San Francisco, CA",
      duration: "2019 - 2023",
      period: "4 years",
      description: "Built and maintained highly available distributed systems at scale. Implemented monitoring, alerting, and incident response processes.",
      skills: ["Kubernetes", "AWS", "Monitoring", "Incident Response", "Automation"]
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Startup",
      location: "New York, NY",
      duration: "2016 - 2019",
      period: "3 years",
      description: "Developed and deployed machine learning models for production systems. Built ML pipelines and infrastructure.",
      skills: ["Python", "TensorFlow", "MLOps", "Data Engineering", "Model Deployment"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8.5 years of building, scaling, and leading engineering teams across ML, SRE, and software engineering domains.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;