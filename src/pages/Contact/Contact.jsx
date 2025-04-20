import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">GET IN TOUCH</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact With Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPhone className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Our friendly team is here to help</p>
            <a href="tel:+8801750141414" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              +88 01750 14 14 14
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaLocationDot className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Come say hello at our office</p>
            <p className="text-blue-600 font-medium">Dhanmondi, Dhaka, Bangladesh</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaClock className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Working Hours</h3>
            <p className="text-gray-600 mb-4">We are available for you</p>
            <p className="text-blue-600 font-medium">Mon-Fri: 9AM - 6PM</p>
            <p className="text-blue-600 font-medium">Sat: 10AM - 4PM</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="mb-8">
                Fill out the form and our team will get back to you within 24 hours. We are looking forward to hearing from you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-30 flex items-center justify-center mr-4">
                    <FaPhone className="text-white" />
                  </div>
                  <span>+88 01750 14 14 14</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-30 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-white" />
                  </div>
                  <span>info@medicare.com</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-30 flex items-center justify-center mr-4">
                    <FaLocationDot className="text-white" />
                  </div>
                  <span>Dhanmondi, Dhaka, Bangladesh</span>
                </div>
              </div>
              
              <div className="mt-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036944846636!2d90.36340672969183!3d23.74705903976446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693913301253!5m2!1sen!2sus"
                  className="w-full h-48 rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Book an Appointment</h3>
              
              {formSubmitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  Thank you! Your appointment request has been submitted. We will contact you shortly.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    <div>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your Email" 
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        id="number" 
                        placeholder="Mobile Number" 
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    <div>
                      <Input 
                        id="dname" 
                        placeholder="Doctor Name" 
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        id="date" 
                        type="date" 
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    <div>
                      <Input 
                        id="time" 
                        type="time" 
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Book Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
