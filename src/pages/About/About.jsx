const About = () => {
  const statsData = [
    { count: '50+', label: 'Doctors', icon: 'user-md' },
    { count: '15+', label: 'Clinics', icon: 'hospital' },
    { count: '10K+', label: 'Patients', icon: 'users' },
    { count: '25+', label: 'Awards', icon: 'award' },
  ];

  const teamMembers = [ 
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Head of Cardiology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Pediatrics',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-600 to-blue-500 transform -skew-y-6 origin-top-left -translate-y-32 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">Medicare</span>
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Providing exceptional healthcare services with a commitment to excellence and compassion since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image with overlapping elements */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-lg z-0"></div>
              <div className="rounded-lg overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern hospital facility" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Text content with modern styling */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-2">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Leading Healthcare Provider Since 2005
              </h2>
              
              <p className="text-gray-600 text-lg">
                Medicare is dedicated to providing the highest quality healthcare services to our community. With state-of-the-art facilities and a team of experienced medical professionals, we strive to deliver exceptional care that meets the unique needs of each patient.
              </p>
              
              <p className="text-gray-600 text-lg">
                Our mission is to improve the health and wellbeing of the individuals and communities we serve. We do this by providing patient-centered healthcare and wellness services with excellence and compassion.
              </p>
              
              <div className="pt-6">
                <a href="#services" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Our Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats with animated counters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 text-white border-r border-blue-300 last:border-r-0"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-white bg-opacity-20 text-white rounded-full backdrop-blur-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold mb-1">{stat.count}</h3>
                  <p className="text-blue-100 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-2">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do at Medicare, from patient care to community outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">We are committed to delivering the highest standard of care through continuous improvement and innovation.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compassion</h3>
              <p className="text-gray-600">We treat each patient with kindness, empathy, and respect, recognizing their individual needs and concerns.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">We are dedicated to serving our community and improving the health and wellbeing of all individuals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-2">Our Team</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of healthcare professionals is dedicated to providing the highest quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Better Healthcare?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule an appointment today and take the first step towards better health with Medicare is comprehensive care.
          </p>
          <a 
            href="/appointment" 
            className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
