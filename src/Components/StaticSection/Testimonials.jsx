import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className=" mx-auto p-4 md:px-16 md:py-8 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          What Our <span className="text-purple-600">Users Say</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white border-2 border-purple-600 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-4">
                “Amazing platform! I sold my laptop within 2 days. Super easy
                and secure.”
              </p>
              <h3 className="font-bold text-purple-600">— Sarah M.</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
