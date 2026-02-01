import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (format: country code + number without +)
    const phoneNumber = "1234567890"; // Example: Replace with actual number
    const message = encodeURIComponent("Hello! I'm interested in learning more about your wellness programs.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-[hsl(40,20%,98%)] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(145,30%,45%) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(145,30%,45%)]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Top Section - Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Limited Seats Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(145,30%,45%)]/10 border border-[hsl(145,30%,45%)]/20 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4 text-[hsl(145,30%,45%)]" />
            <span className="text-sm font-medium text-[hsl(145,30%,40%)] tracking-wide">
              Limited Seats Available
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-light text-[hsl(30,8%,20%)] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            data-testid="heading-contact"
          >
            Begin Your Journey
          </motion.h2>

          {/* Elegant Divider */}
          <motion.div
            className="flex items-center justify-center gap-3 py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[hsl(145,30%,45%)] to-transparent" />
            <div className="w-2 h-2 rounded-full border border-[hsl(145,30%,45%)]" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent via-[hsl(145,30%,45%)] to-transparent" />
          </motion.div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column - WhatsApp CTA */}
          <div className="lg:col-span-7">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl text-[hsl(30,6%,40%)] font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                data-testid="text-contact-intro"
              >
                Connect with us on WhatsApp to reserve your spot and start your transformative wellness journey today.
              </motion.p>

              {/* WhatsApp Button */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="group relative px-8 py-6 bg-[#25D366] hover:bg-[#20BA5A] text-white text-base md:text-lg font-medium tracking-wide rounded-sm shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300"
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Message on WhatsApp
                </Button>
              </motion.div>

              {/* Additional Info */}
              <motion.p
                className="text-sm text-[hsl(30,6%,45%)] pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                We typically respond within a few hours
              </motion.p>
            </motion.div>
          </div>

          {/* Right Column - Connect With Us */}
          <div className="lg:col-span-5">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-serif text-2xl font-light text-[hsl(30,8%,20%)]">
                Connect With Us
              </h3>
              
              <div className="space-y-6">
                {/* Our Studio */}
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  data-testid="contact-location"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[hsl(145,30%,45%)]/10 rounded-full flex items-center justify-center border border-[hsl(145,30%,45%)]/20">
                    <MapPin className="h-5 w-5 text-[hsl(145,30%,45%)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[hsl(30,8%,20%)] mb-1">Our Studio</p>
                    <p className="text-[hsl(30,6%,45%)] text-sm leading-relaxed">
                      123 Tranquility Lane
                      <br />
                      Boulder, CO 80302
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  data-testid="contact-email"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[hsl(145,30%,45%)]/10 rounded-full flex items-center justify-center border border-[hsl(145,30%,45%)]/20">
                    <Mail className="h-5 w-5 text-[hsl(145,30%,45%)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[hsl(30,8%,20%)] mb-1">Email</p>
                    <p className="text-[hsl(30,6%,45%)] text-sm">
                      hello@swaravigyanwellness.com
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  data-testid="contact-phone"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[hsl(145,30%,45%)]/10 rounded-full flex items-center justify-center border border-[hsl(145,30%,45%)]/20">
                    <Phone className="h-5 w-5 text-[hsl(145,30%,45%)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[hsl(30,8%,20%)] mb-1">Phone</p>
                    <p className="text-[hsl(30,6%,45%)] text-sm">
                      (555) 123-4567
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
