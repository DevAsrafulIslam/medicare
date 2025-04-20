import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

import { DOCTORS } from "@/data/doctors";

const Doctors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get unique departments for filter
  const departments = [...new Set(DOCTORS.map(doctor => doctor.department || 'General'))];

  // Filter doctors based on selected department
  const filteredDoctors = filter === 'all' 
    ? DOCTORS 
    : DOCTORS.filter(doctor => doctor.department === filter);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">OUR SPECIALISTS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Expert Doctors</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            All Specialists
          </button>
          
          {departments.map(dept => (
            <button 
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === dept 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                  src={doctor.image} 
                  alt={doctor.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium bg-blue-600 inline-block px-3 py-1 rounded-full mb-2">
                    {doctor.department || 'General Medicine'}
                  </p>
                  <p className="text-sm">{doctor.bio || 'Specialized healthcare professional dedicated to patient care and well-being.'}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h4>
                <p className="text-blue-600 mb-3">{doctor.designation}</p>
                <Rating
                  className="mb-4"
                  style={{ maxWidth: 110 }}
                  value={doctor.rating}
                  readOnly
                />
                
                <div className="space-y-2 mb-6 text-gray-600">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-500" />
                    {doctor.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" />
                    {doctor.available}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaDollarSign className="text-blue-500" />
                    {doctor.visit_charge}
                  </p>
                </div>
                
                <Link to={`/profile/${doctor._id}`}>
                  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No doctors found in this department. Please try another filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
