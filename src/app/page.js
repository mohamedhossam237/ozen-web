'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import WhyOzen from '@/components/WhyOzen';
import DoctorsSection from '@/components/DoctorsSection';
import VirtualTour from '@/components/VirtualTour';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';

import ThreeCanvasBackground from '@/components/ThreeCanvasBackground';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [lang, setLang] = useState('ar');

  const handleOpenBooking = (specialty = null) => {
    setSelectedSpecialty(specialty);
    setBookingModalOpen(true);
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#F9F8F6] text-[#2A1F1B] selection:bg-[#C5A059] selection:text-white relative overflow-x-hidden w-full max-w-full flex flex-col items-center">
      
      {/* Scroll-driven 3D WebGL Background Canvas */}
      <ThreeCanvasBackground />

      {/* Luxury Navigation Bar */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Hero Banner */}
      <Hero 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Medical Specialties & Clinics - Enhanced & Centered */}
      <SpecialtiesSection 
        onOpenBooking={handleOpenBooking}
      />

      {/* Why Choose Ozen Polyclinic */}
      <WhyOzen />

      {/* Elite Consultants & Doctors */}
      <DoctorsSection 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Facilities, Interior Facade & Virtual Tour */}
      <VirtualTour />

      {/* Footer */}
      <Footer />

      {/* Interactive Step-by-Step Appointment Booking Modal */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setSelectedSpecialty(null);
        }}
        initialSpecialty={selectedSpecialty}
      />

    </div>
  );
}

