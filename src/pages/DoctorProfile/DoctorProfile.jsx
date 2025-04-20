import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FaCalendarAlt, FaMapMarkerAlt, FaAward, FaGraduationCap, FaBriefcase, FaStethoscope } from "react-icons/fa";
import { DOCTORS } from "@/data/doctors";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = DOCTORS.find((d) => d._id === id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/banner.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>
        <div className="container mx-auto px-4 h-full flex items-end">
          <h1 className="text-4xl md:text-5xl font-bold text-white pb-12 relative z-10">
            Doctor Profile
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Doctor Info Card */}
        <div className={`-mt-20 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="md:flex">
            <div className="md:w-1/3 relative overflow-hidden">
              <img 
                className="w-full h-full object-cover object-center md:h-96" 
                src={doctor.image} 
                alt={doctor.name} 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4 md:hidden">
                <h2 className="text-2xl font-bold text-white">{doctor.name}</h2>
                <p className="text-blue-100">{doctor.designation}</p>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8 md:p-10">
              <div className="hidden md:block">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  {doctor.department || 'General Medicine'}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
                <p className="text-blue-600 text-lg mb-4">{doctor.designation}</p>
              </div>
              
              <div className="flex items-center mb-6">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={doctor.rating}
                  readOnly
                />
                <span className="ml-2 text-gray-600">({doctor.rating} out of 5)</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Location</h4>
                    <p className="text-gray-600">{doctor.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <FaCalendarAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Available</h4>
                    <p className="text-gray-600">{doctor.available}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">About</h3>
                <p className="text-gray-600">
                  {doctor.bio || 'Dr. ' + doctor.name + ' is a highly skilled medical professional with years of experience in their field. They are dedicated to providing exceptional patient care and staying at the forefront of medical advancements.'}
                </p>
              </div>
              
              <div className="mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className={`mt-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full grid grid-cols-4 rounded-xl bg-blue-50 p-1">
              <TabsTrigger 
                value="overview" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="locations" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                Locations
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger 
                value="business" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                Business
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">About Me</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <FaGraduationCap className="text-blue-600 text-xl mr-2" />
                          <h3 className="text-xl font-bold text-gray-800">Education</h3>
                        </div>
                        
                        <div className="space-y-6 pl-8">
                          <div className="relative border-l-2 border-blue-200 pl-6 pb-2">
                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                            <h4 className="font-bold text-gray-800">American Dental Medical University</h4>
                            <p className="text-blue-600">BDS</p>
                            <p className="text-gray-500">1998 - 2003</p>
                          </div>
                          
                          <div className="relative border-l-2 border-blue-200 pl-6">
                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                            <h4 className="font-bold text-gray-800">American Dental Medical University</h4>
                            <p className="text-blue-600">MDS</p>
                            <p className="text-gray-500">2003 - 2005</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <FaBriefcase className="text-blue-600 text-xl mr-2" />
                          <h3 className="text-xl font-bold text-gray-800">Work & Experience</h3>
                        </div>
                        
                        <div className="space-y-6 pl-8">
                          <div className="relative border-l-2 border-blue-200 pl-6 pb-2">
                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                            <h4 className="font-bold text-gray-800">Glowing Smiles Family Dental Clinic</h4>
                            <p className="text-gray-500">2010 - Present (5 years)</p>
                          </div>
                          
                          <div className="relative border-l-2 border-blue-200 pl-6 pb-2">
                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                            <h4 className="font-bold text-gray-800">Comfort Care Dental Clinic</h4>
                            <p className="text-gray-500">2007 - 2010 (3 years)</p>
                          </div>
                          
                          <div className="relative border-l-2 border-blue-200 pl-6">
                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                            <h4 className="font-bold text-gray-800">Dream Smile Dental Practice</h4>
                            <p className="text-gray-500">2005 - 2007 (2 years)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-4">
                          <FaStethoscope className="text-blue-600 text-xl mr-2" />
                          <h3 className="text-xl font-bold text-gray-800">Services</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 pl-8">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Tooth cleaning</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Root Canal Therapy</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Implants</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Composite Bonding</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Fissure Sealants</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Surgical Extractions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <FaAward className="text-blue-600 text-xl mr-2" />
                          <h3 className="text-xl font-bold text-gray-800">Awards</h3>
                        </div>
                        
                        <div className="space-y-6 pl-8">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-blue-600 text-sm">July 2019</p>
                            <h4 className="font-bold text-gray-800 mb-1">Humanitarian Award</h4>
                            <p className="text-gray-600 text-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
                              Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            </p>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-blue-600 text-sm">March 2011</p>
                            <h4 className="font-bold text-gray-800 mb-1">Certificate for International Volunteer Service</h4>
                            <p className="text-gray-600 text-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
                              Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            </p>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-blue-600 text-sm">May 2008</p>
                            <h4 className="font-bold text-gray-800 mb-1">The Dental Professional of The Year Award</h4>
                            <p className="text-gray-600 text-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
                              Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-4">
                          <FaStethoscope className="text-blue-600 text-xl mr-2" />
                          <h3 className="text-xl font-bold text-gray-800">Specializations</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 pl-8">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Children Care</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Dental Care</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Oral and Maxillofacial Surgery</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Orthodontist</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Periodontist</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <p>Prosthodontics</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="locations">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Location</CardTitle>
                  <CardDescription className="text-gray-600">
                    Visit Dr. {doctor.name} at the following location
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.4993085984!2d90.25487720921492!3d23.781067235456177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1723014722522!5m2!1sen!2sbd"
                      width="600"
                      height="450"
                      className="w-full"
                      style={{ border: "0" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Patient Reviews</CardTitle>
                  <CardDescription className="text-gray-600">
                    See what patients are saying about Dr. {doctor.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <p className="text-gray-500">No reviews available yet.</p>
                    <button className="mt-4 px-6 py-2 bg-blue-100 text-blue-600 font-medium rounded-lg hover:bg-blue-200 transition-colors">
                      Write a Review
                    </button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="business">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Business Hours</CardTitle>
                  <CardDescription className="text-gray-600">
                    When you can visit Dr. {doctor.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="py-3 px-4 bg-blue-50 rounded-lg">
                      <p className="font-medium text-gray-800">Monday - Friday</p>
                      <p className="text-blue-600">9:00 AM - 5:00 PM</p>
                    </div>
                    <div className="py-3 px-4 bg-blue-50 rounded-lg">
                      <p className="font-medium text-gray-800">Saturday</p>
                      <p className="text-blue-600">9:00 AM - 2:00 PM</p>
                    </div>
                    <div className="py-3 px-4 bg-blue-50 rounded-lg">
                      <p className="font-medium text-gray-800">Sunday</p>
                      <p className="text-blue-600">Closed</p>
                    </div>
                    <div className="py-3 px-4 bg-blue-50 rounded-lg">
                      <p className="font-medium text-gray-800">Holidays</p>
                      <p className="text-blue-600">Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
