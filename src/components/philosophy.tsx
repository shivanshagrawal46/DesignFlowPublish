import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.div 
          className="space-y-6 text-lg md:text-xl font-light leading-loose text-foreground" 
          data-testid="text-philosophy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <p>
            We believe that true wellness begins within. Through ancient practices and modern understanding, we guide you on a transformative path to inner harmony, mindful presence, and lasting peace.
          </p> */}
          <p>
            Mind Wellness through Swara Vigyan is a transformative course rooted in ancient yogic science that teaches how the flow of breath through the nostrils influences mental clarity, emotional balance, decision-making, and overall well-being.
          </p>
          <p>
            Swara Vigyan is not merely a breathing technique—it is a science of awareness, enabling you to understand when to act, rest, think, or heal by observing your breath patterns. This course integrates timeless wisdom with practical applications suitable for modern lifestyles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
