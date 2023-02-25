import React from 'react';
import './AboutUs.css';
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'

function AboutUs() {
  return (
    <>
      <Navbar />
      
      <div className="about-us">
        <h1 className="header">About Us</h1>
        <p className="text">
          Welcome to our hospital! We are a leading healthcare provider with a commitment to delivering the highest quality care to our patients. With state-of-the-art facilities and a team of skilled healthcare professionals, we are dedicated to providing compassionate, patient-centered care to everyone who walks through our doors.
        </p>
        <h2 className="subheader">Our Mission</h2>
        <p className="text">
          Our mission is to improve the health and well-being of our community by providing exceptional healthcare services that are accessible, affordable, and of the highest quality. We believe in treating every patient with dignity and respect, and we are committed to delivering care that is personalized to meet each patient's unique needs.
        </p>
        <h2 className="subheader">Our Team</h2>
        <p className="text">
          Our hospital is staffed by a team of highly skilled and dedicated healthcare professionals who are committed to providing the best possible care to our patients. From our physicians to our nurses, technicians, and support staff, everyone at our hospital plays a critical role in delivering exceptional care to our patients.
        </p>
        <p className="text">
          Our team includes specialists in a wide range of areas, including cardiology, oncology, neurology, orthopedics, and many others. We also have a team of highly trained surgeons who perform a variety of procedures, from routine surgeries to complex operations.
        </p>
        <h2 className="subheader">Our Facilities</h2>
        <p className="text">
          Our hospital is equipped with state-of-the-art facilities and technology to provide the best possible care to our patients. We have a modern diagnostic imaging center that includes X-ray, CT scan, MRI, and ultrasound machines. We also have a fully equipped laboratory that allows us to perform a wide range of tests and procedures in-house.
        </p>
        <p className="text">
          In addition, our hospital has a comprehensive rehabilitation center that provides physical therapy, occupational therapy, and speech therapy to help our patients recover and regain their independence. We also have a dedicated pediatric unit that is designed to provide a safe and comfortable environment for our youngest patients.
        </p>
        <h2 className="subheader">Community Involvement</h2>
        <p className="text">
          At our hospital, we believe that it is our responsibility to give back to the community that we serve. We are proud to be involved in a wide range of community outreach programs and initiatives that help to promote health and wellness in our community. Some of the programs that we are involved in include free health screenings and wellness events, educational programs and seminars on health topics, and partnerships with local schools and community groups to promote healthy habits and lifestyles.
        </p>
        <h2 className="subheader">Contact Us</h2>
        <p className="text">
          Thank you for considering our hospital for your healthcare needs. If you have any questions or would like to schedule an appointment, please don't hesitate to contact us. We look forward to serving you and your family.
        </p>
        <p className="text">
          Phone: 9825312953<br />
          Email: info@hospital.com<br />
          Address: Itahari-4 
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;