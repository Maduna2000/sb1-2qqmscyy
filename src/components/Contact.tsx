import React from 'react';
import { Clock, Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#070909] mb-6 text-center">
            Get in Touch
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-[#248416] mr-4" />
              <div>
                <h3 className="font-bold text-[#070909]">Operating Hours</h3>
                <p className="text-[#524944]">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-[#524944]">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-[#524944]">Sunday: Closed</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="h-6 w-6 text-[#248416] mr-4" />
              <div>
                <h3 className="font-bold text-[#070909]">Phone</h3>
                <p className="text-[#524944]">+268 7602 3495</p>
              </div>
            </div>

            <div className="flex items-center">
              <Mail className="h-6 w-6 text-[#248416] mr-4" />
              <div>
                <h3 className="font-bold text-[#070909]">Email</h3>
                <p className="text-[#524944]">info@nsibazezulu.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-[#248416] mr-4" />
              <div>
                <h3 className="font-bold text-[#070909]">Location</h3>
                <p className="text-[#524944]">Manzini, Eswatini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;