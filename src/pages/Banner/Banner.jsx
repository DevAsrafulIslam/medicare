import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeartPulse } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/heart.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-slate-900/20"></div>
      
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center mr-3">
                <FaHeartPulse className="text-white text-xl" />
              </div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl font-medium tracking-wider text-white"
              >
                INSPIRING BETTER HEALTH
              </motion.h3>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-red-600 drop-shadow-sm">Healthy heart,</span>{" "}
              <br />
              <span className="text-white">healthy family</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl"
            >
              We provide comprehensive cardiac care with cutting-edge technology and 
              compassionate specialists. Your heart health is our priority, ensuring 
              your family enjoys a vibrant, active life together.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full py-6 px-8 text-lg font-medium shadow-lg hover:shadow-xl transition-all group">
                DISCOVER MORE
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="bg-white text-slate-900 hover:bg-gray-100 rounded-full py-6 px-8 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                VIEW OUR SERVICES
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
    </div>
  );
};

export default Banner;
