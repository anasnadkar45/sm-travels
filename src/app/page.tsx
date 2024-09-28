"use client"
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, PhoneIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import car from './ertiga-exterior-right-front-three-quarter-5.jpg';

export default function ModernLandingPage() {
  // State to manage form inputs
  const [tripDetails, setTripDetails] = useState({
    destination: "",
    date: "",
    days: "",
  });

  // Handler to update state on input change
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setTripDetails({
      ...tripDetails,
      [name]: value,
    });
  };

  // Handler for form submission (opens WhatsApp)
  const handleBookTrip = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { destination, date, days } = tripDetails;

    if (!destination || !date || !days) {
      alert("Please fill in all details");
      return;
    }

    // WhatsApp message URL with trip details
    const whatsappUrl = `https://wa.me/7083989774?text=${encodeURIComponent(
      `Trip Details:\n\nDestination: ${destination}\nDate: ${date}\nDays: ${days}\n\nLooking forward to this trip!`
    )}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank");
  };

  // Settings for react-slick carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-500">SM Travels</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-yellow-500 transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-yellow-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-yellow-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-500 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              className="hidden md:inline-flex bg-yellow-500 hover:bg-yellow-600 text-white transform hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => window.open('https://wa.me/7083989774', '_blank')}
            >
              Book Now
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  <a href="#home" className="text-gray-600 hover:text-yellow-500 transition-colors">Home</a>
                  <a href="#services" className="text-gray-600 hover:text-yellow-500 transition-colors">Services</a>
                  <a href="#about" className="text-gray-600 hover:text-yellow-500 transition-colors">About</a>
                  <a href="#contact" className="text-gray-600 hover:text-yellow-500 transition-colors">Contact</a>
                  <a href="https://wa.me/7083989774" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                      Book Now
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Explore India with Comfort</h2>
              <p className="text-xl mb-6 text-gray-800">Travel anywhere in India with our reliable Maruti Suzuki Ertiga</p>
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleBookTrip} className="space-y-4">
                    <Input
                      type="text"
                      name="destination"
                      placeholder="Where do you want to go?"
                      value={tripDetails.destination}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                    <div className="flex space-x-4">
                      <Input
                        type="date"
                        name="date"
                        value={tripDetails.date}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                      <Input
                        type="number"
                        name="days"
                        placeholder="Days"
                        value={tripDetails.days}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-white transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                      Book Your Trip
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              className="md:w-1/2 md:pl-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={car}
                alt="Maruti Suzuki Ertiga"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose SM Travels?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: MapPinIcon, title: "Pan-India Travel", description: "Travel anywhere in India with our reliable service" },
                { icon: CalendarIcon, title: "Flexible Booking", description: "Book for a day or extended trips as per your needs" },
                { icon: PhoneIcon, title: "24/7 Support", description: "Round-the-clock customer support for your journey" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <feature.icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Section */}
        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Vehicle
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={car}
                  alt="Maruti Suzuki Ertiga"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pl-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Maruti Suzuki Ertiga</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="mr-2 text-yellow-500">✓</span> Comfortable seating for up to 7 passengers</li>
                  <li className="flex items-center"><span className="mr-2 text-yellow-500">✓</span> Ample luggage space for your belongings</li>
                  <li className="flex items-center"><span className="mr-2 text-yellow-500">✓</span> Fuel-efficient for long journeys</li>
                  <li className="flex items-center"><span className="mr-2 text-yellow-500">✓</span> Well-maintained and regularly serviced</li>
                  <li className="flex items-center"><span className="mr-2 text-yellow-500">✓</span> Air-conditioned for a pleasant ride</li>
                </ul>
                <Button
                  className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white transform hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => window.open('https://wa.me/7083989774', '_blank')}
                >
                  Book This Vehicle
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { question: "What is the booking process?", answer: "You can book by filling in the trip details and confirming via WhatsApp." },
                { question: "What is your cancellation policy?", answer: "You can cancel up to 24 hours before the trip for a full refund." },
                { question: "Are there any additional charges?", answer: "No hidden fees. The price you see is the price you pay." },
              ].map((faq, index) => (
                <motion.details
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input type="text" placeholder="First Name" />
                    <Input type="text" placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Phone" />
                  <textarea
                    className="w-full p-3 border rounded-md"
                    rows={4}
                    placeholder="Your Message"
                  ></textarea>
                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white transform hover:scale-105 transition duration-300 ease-in-out"
                    onClick={() => window.open('https://wa.me/7083989774', '_blank')}
                  >
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-10 bg-yellow-100">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Stay Updated
            </motion.h2>
            <p className="text-center text-gray-700 mb-4">Subscribe to our newsletter for the latest travel offers</p>
            <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Input type="email" placeholder="Enter your email" className="p-3 rounded-lg w-full md:w-auto" />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white transform hover:scale-105 transition duration-300 ease-in-out">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="mb-4">&copy; 2024 SM Travels. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
