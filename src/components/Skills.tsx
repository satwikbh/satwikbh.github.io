import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Cloud, Brain, Settings, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      description: "Core programming expertise",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "TypeScript/JavaScript", level: 90 },
        { name: "Go", level: 80 },
        { name: "Rust", level: 70 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Terraform", level: 80 },
        { name: "GCP", level: 75 }
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "AI/ML model development",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "MLOps", level: 85 },
        { name: "Data Engineering", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Databases & Storage",
      description: "Data persistence solutions",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Elasticsearch", level: 75 },
        { name: "Apache Kafka", level: 80 }
      ]
    },
    {
      icon: Settings,
      title: "DevOps & SRE",
      description: "Reliability & automation",
      skills: [
        { name: "Monitoring (Prometheus)", level: 90 },
        { name: "CI/CD", level: 85 },
        { name: "Incident Response", level: 90 },
        { name: "Automation", level: 85 },
        { name: "Performance Tuning", level: 80 }
      ]
    },
    {
      icon: Users,
      title: "Leadership & Soft Skills",
      description: "Team and project leadership",
      skills: [
        { name: "Technical Leadership", level: 90 },
        { name: "Mentoring", level: 85 },
        { name: "System Architecture", level: 90 },
        { name: "Project Management", level: 80 },
        { name: "Cross-team Collaboration", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set across software engineering, machine learning, and site reliability engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;