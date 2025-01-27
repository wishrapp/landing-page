import React from 'react';

const testimonials = [
  { quote: "Am loving this app so far. Whenever I come across something I might like, I add it to my wish list, and when it gets closer to Christmas I'll share it with my boyfriend!", author: "Sarah J." },
  { quote: "Now I won't end up with rubbish I don't want on my birthday! This app means I'll get things I actually will use and wear!", author: "Michael R." },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Love by Beta Testers!</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <blockquote key={i} className="p-6 bg-white rounded-xl shadow-lg">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <footer className="font-medium text-purple-600">– {testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}