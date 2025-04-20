import { useState, useEffect } from 'react';

const Patients = [
  {
    _id: "p123a456-b789-c012-d345-efgh6789ijkl",
    name: "Awlad Hossain",
    designation: "Product Designer",
    image: "/Ellipse 2.png",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.",
    rating: 5
  },
  {
    _id: "q987z654-y321-x098-w765-vuts4321mnop",
    name: "Farhana Hossain",
    designation: "Brand Designer",
    image: "/Ellipse 2 (1).png",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.",
    rating: 4
  },
];

const PatientsReview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">TESTIMONIALS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Patients.map((patient, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-full h-full bg-blue-100 rounded-full"></div>
                  <img 
                    src={patient.image} 
                    alt={patient.name} 
                    className="w-16 h-16 rounded-full object-cover relative z-10"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{patient.name}</h4>
                      <p className="text-blue-600">{patient.designation}</p>
                    </div>
                    <div className="flex">
                      {renderStars(patient.rating)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <svg className="absolute top-0 left-0 w-10 h-10 text-blue-100 transform -translate-x-6 -translate-y-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic relative z-10">{patient.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatientsReview;
