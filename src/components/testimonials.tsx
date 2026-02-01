import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import testimonial1 from "@assets/generated_images/Testimonial_woman_portrait_b8e52259.png";
import testimonial2 from "@assets/generated_images/Testimonial_man_portrait_d41119a6.png";
import testimonial3 from "@assets/generated_images/Testimonial_yoga_woman_0f880104.png";

const testimonials = [
  {
    quote: "This journey has transformed not just my meditation practice, but my entire approach to life. I've found a peace I didn't know was possible.",
    name: "Sarah Mitchell",
    journey: "8 months of practice",
    image: testimonial1,
  },
  {
    quote: "The guidance and support I received helped me navigate through one of the most challenging periods of my life with grace and clarity.",
    name: "David Chen",
    journey: "1 year of practice",
    image: testimonial2,
  },
  {
    quote: "I came seeking stress relief and discovered a profound connection to myself. The practices here are deeply authentic and life-changing.",
    name: "Elena Rodriguez",
    journey: "6 months of practice",
    image: testimonial3,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14 space-y-3 md:space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground" data-testid="heading-testimonials">
            Transformative Journeys
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-intro">
            Stories from those who have walked the path to inner peace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card
                className="p-6 md:p-8 space-y-6 hover-elevate transition-all duration-300 h-full"
                data-testid={`card-testimonial-${index}`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto ring-2 ring-primary/10"
                  data-testid={`img-testimonial-${index}`}
                />
                <p className="font-serif text-lg md:text-xl font-light italic text-foreground leading-relaxed" data-testid={`quote-testimonial-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="space-y-1 text-center">
                  <p className="font-medium text-foreground" data-testid={`name-testimonial-${index}`}>{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground" data-testid={`journey-testimonial-${index}`}>{testimonial.journey}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
