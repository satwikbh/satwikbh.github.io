import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Distributed ML Pipeline",
      description: "Scalable machine learning pipeline processing millions of data points daily. Built with Kubernetes, Apache Kafka, and TensorFlow Serving.",
      technologies: ["Python", "Kubernetes", "TensorFlow", "Apache Kafka", "PostgreSQL"],
      githubUrl: "https://github.com/satwikbh/ml-pipeline",
      demoUrl: "https://demo.example.com",
      stars: 234,
      category: "Machine Learning"
    },
    {
      title: "Infrastructure Monitoring Suite",
      description: "Comprehensive monitoring and alerting system for distributed infrastructure. Reduced incident response time by 60%.",
      technologies: ["Go", "Prometheus", "Grafana", "AWS", "Docker"],
      githubUrl: "https://github.com/satwikbh/monitoring-suite",
      demoUrl: "https://monitoring.example.com",
      stars: 156,
      category: "SRE"
    },
    {
      title: "Real-time Analytics Engine",
      description: "High-performance analytics engine processing real-time data streams. Handles 100k+ events per second with sub-100ms latency.",
      technologies: ["Java", "Apache Flink", "Redis", "Elasticsearch", "Docker"],
      githubUrl: "https://github.com/satwikbh/analytics-engine",
      demoUrl: "https://analytics.example.com",
      stars: 89,
      category: "Backend"
    },
    {
      title: "AutoML Platform",
      description: "Self-service machine learning platform enabling data scientists to train and deploy models with minimal DevOps overhead.",
      technologies: ["Python", "React", "Kubernetes", "MLflow", "FastAPI"],
      githubUrl: "https://github.com/satwikbh/automl-platform",
      demoUrl: "https://automl.example.com",
      stars: 312,
      category: "Machine Learning"
    },
    {
      title: "Service Mesh Security",
      description: "Security layer for microservices architecture with automatic certificate management and policy enforcement.",
      technologies: ["Rust", "Istio", "Kubernetes", "gRPC", "Envoy"],
      githubUrl: "https://github.com/satwikbh/service-mesh-security",
      stars: 178,
      category: "Security"
    },
    {
      title: "Developer Productivity Tools",
      description: "Suite of CLI tools and VS Code extensions that improved team productivity by 40%. Used by 500+ engineers.",
      technologies: ["TypeScript", "Node.js", "VS Code API", "GitHub Actions"],
      githubUrl: "https://github.com/satwikbh/dev-tools",
      demoUrl: "https://marketplace.visualstudio.com/items?itemName=satwikbh.dev-tools",
      stars: 445,
      category: "Developer Tools"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects spanning machine learning, infrastructure, and developer tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary">{project.category}</Badge>
                  {project.stars && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4" />
                      {project.stars}
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button variant="professional" size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;