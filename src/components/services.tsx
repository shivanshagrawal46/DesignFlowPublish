import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Wind } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Wind,
    name: "Mindful Meditation",
    description: "Mindful Meditation based on Swara Vigyan principals & guided breathing techniques to channelise your inner peace. Helping participants to understand how breath patterns influence mental states.",
  },
  {
    icon: Sparkles,
    name: "Personalized Wellness Guidance",
    description: "Personalized sessions offering deeper insight into individual breath patterns and mental tendencies. This service supports tailored guidance for emotional balance, clarity, and personal growth using Swara Vigyan principles.",
  },
  {
    icon: Heart,
    name: "Daily Lifestyle Alignment",
    description: "Guidance on aligning daily activities—work, rest, decision-making, and reflection—with active swara patterns. This service helps individuals move through the day with greater ease, efficiency, and mental harmony.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14 space-y-3 md:space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground" data-testid="heading-services">
            Our Services
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-intro">
          We offer thoughtfully designed wellness services rooted in the ancient science of Swara Vigyan, focused on restoring mental balance, emotional stability, and inner clarity through breath awareness and energy alignment. Each service is crafted to support modern lifestyles while remaining true to authentic yogic wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 md:p-8 space-y-5 md:space-y-6 hover-elevate active-elevate-2 transition-all duration-300 h-full"
                  data-testid={`card-service-${index}`}
                >
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-foreground" data-testid={`heading-service-${index}`}>
                    {service.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
