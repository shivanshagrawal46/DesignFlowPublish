import { motion } from "framer-motion";
import ownerImage from "@assets/generated_images/Owner_portrait_professional_81a14a33.png";

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div 
          className="text-center mb-8 md:mb-12 space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={ownerImage}
            alt="Maya Chen - Founder"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-lg ring-4 ring-primary/10"
            data-testid="img-founder"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <div className="space-y-2">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground" data-testid="name-founder">
            Dr. Rishi Narayan Shambharkar
            </h3>
            <p className="text-base md:text-lg text-muted-foreground" data-testid="title-founder">
              Founder
              
            </p>
            <p className="text-base md:text-lg text-muted-foreground" data-testid="title-founder">
            Swara Vigyan- The Path to divine success
              
            </p>
            
            <p className="text-sm md:text-base text-muted-foreground" data-testid="credentials-founder">
            Mindfulness Coach • MBBS • DVD
            </p>
          </div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground" data-testid="heading-about">
            About the Course & Mentor

            </h2>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p data-testid="text-about-paragraph-1">
              I am Dr. Rishikesh, a dermatologist by profession and a practitioner of Swadhyaya, meditation, and mindfulness since the age of 18.
              </p>
              
              <p data-testid="text-about-paragraph-2">
              Over the years, I have observed that many people struggle with stress, anxiety, poor health, lack of focus, and weak relationships. In today’s fast-paced life, people are constantly chasing goals but often feel mentally exhausted and dissatisfied.
              </p>
              
              <blockquote className="font-serif text-xl md:text-2xl font-light italic text-foreground my-8 py-6 border-l-4 border-primary pl-6" data-testid="quote-mission">
                "Only a few are able to handle life’s challenges calmly and stay focused on what truly matters."
              </blockquote>
              
              <p data-testid="text-about-paragraph-3">
              Through Swadhyaya and mindfulness, I have seen real and positive changes in people’s lives. They become calmer, more balanced, and more satisfied with their personal and professional lives.
              </p>
              <p data-testid="text-about-paragraph-3">
              This is why I created this Swadhyaya course—to help everyone learn these practices and apply them in daily life for better mental clarity, emotional balance, and overall well-being.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
