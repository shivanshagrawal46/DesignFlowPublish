import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import studioImage from "@assets/generated_images/Wellness_studio_interior_6740c720.png";
import forestImage from "@assets/generated_images/Forest_meditation_scene_5ffbad03.png";

const programs = [
  {
    name: "Inner Peace Immersion",
    description: "A 6-week journey into the depths of meditation and mindfulness, designed to cultivate lasting inner peace and emotional resilience.",
    image: studioImage,
    benefits: [
      "Rooted in authentic Swara Vigyan principles",
      "Gentle, natural, and safe practices",
      "Practical application for modern life",
      "Suitable for all age groups",
      "Focused on sustainable mind wellness",
    ],
  },
  {
    name: "Nature Healing Retreat",
    description: "Away from daily distractions, participants are gently guided to experience mindful breathing practices, for reconnecting the roots and wisdom through nature.",
    image: forestImage,
    benefits: [
      "Full-day nature immersion experiences",
      "Guided forest meditation walks",
      "Sound healing in natural settings",
      "Seasonal wellness rituals",
    ],
  },
];

export function Programs() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14 space-y-3 md:space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground" data-testid="heading-programs">
            Wellness Programs
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-programs-intro">
          In Modern Lifestyles or hectic day schedules we have forgotten our most vital element – OUR BREATH.
          </p>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-programs-intro">
          If we practice breathing exercise through guided principal, it does miracle to our lives.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div 
                className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-auto aspect-video object-cover rounded-2xl shadow-lg"
                  data-testid={`img-program-${index}`}
                />
              </motion.div>

              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground" data-testid={`heading-program-${index}`}>
                  {program.name}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground" data-testid={`text-program-description-${index}`}>
                  {program.description}
                </p>

                <ul className="space-y-3">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start gap-3"
                      data-testid={`benefit-${index}-${benefitIndex}`}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-base text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="default"
                  size="lg"
                  onClick={scrollToContact}
                  data-testid={`button-learn-more-${index}`}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
