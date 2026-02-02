import { Cpu, Terminal } from "lucide-react";

const CombinedSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 flex flex-col items-start lg:pl-24">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: About */}
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="p-3 bg-primary text-primary-foreground w-fit rounded-full">
              <Terminal size={24} />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Building Robots<br />& Hardware
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Bringing digital designs to life through hands-on robotics. 
              My work spans from motor torque calculations to sensor tuning and real-world deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {['Python', 'C++', 'React', 'Three.js', 'FreeCAD', 'OpenCV'].map((tech) => (
              <div
                key={tech}
                className="bg-card border border-border px-4 py-3 rounded-lg text-sm font-medium text-foreground flex items-center gap-2 hover:bg-accent/10 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="space-y-12 md:pt-32">
          <div className="flex justify-start mb-8">
            <div className="p-3 bg-muted text-foreground w-fit rounded-full">
              <Cpu size={24} />
            </div>
          </div>

          <div className="space-y-8 text-left">
            <div className="space-y-2 group">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Design & Iteration
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Functional CAD modeling and rapid prototyping via 3D printing.
              </p>
            </div>

            <div className="space-y-2 group">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Circuitry & Power
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Modular circuitry and power distribution for servo arrays and sensors.
              </p>
            </div>

            <div className="space-y-2 group">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Physical Interaction
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Human-robot interaction using LLMs to bridge intent and mechanical action.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CombinedSection;
