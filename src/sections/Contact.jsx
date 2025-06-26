import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    // Full Name: Required, min 2 chars, letters and spaces only
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'Full name can only contain letters and spaces';
    }
    // Email: Required, valid format
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    // Mobile: Required, 10-15 digits
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\+?\d{10,15}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid mobile number (10-15 digits)';
    }
    // Project Type: Required
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }
    // Message: Optional, max 500 chars
    if (formData.message.length > 500) {
      newErrors.message = 'Message cannot exceed 500 characters';
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field on change
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormStatus('Please correct the errors in the form.');
      return;
    }
    // Simulate successful submission
    setFormStatus('Your booking request has been submitted! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      projectType: '',
      budget: '',
      message: '',
    });
    setErrors({});
    setTimeout(() => setFormStatus(null), 5000); // Clear message after 5 seconds
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890'; // Replace with actual phone number
  };

  return (
    <div id="contact" className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="lg:w-[80%] w-[90%] m-auto py-16 flex lg:flex-row flex-col justify-between items-start gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.h3
            variants={slideUpVariants}
            className="uppercase text-[#F4A261] text-xl lg:text-2xl"
          >
            Contact Us
          </motion.h3>
          <motion.h2
            variants={slideUpVariants}
            className="uppercase text-[#2B3A55] text-4xl lg:text-5xl font-bold"
            id="contact-form-heading"
          >
            Book Your Construction Project
          </motion.h2>
          <div className="w-[120px] h-[6px] bg-[#F4A261]"></div>
          <p className="text-[#A0AEC0] text-2xl lg:text-3xl italic mt-8">
            With 25 years of expertise, Aurora Builders is ready to bring your vision to life!
          </p>
        </motion.div>

        <div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
        >
          <form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col justify-center items-start gap-4 w-full"
            onSubmit={handleSubmit}
            aria-labelledby="contact-form-heading"
            noValidate
          >
            <div className="w-full">
              <label htmlFor="fullName" className="text-[#2B3A55] text-sm lg:text-base">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="px-4 py-3 border-2 border-[#2B3A55] w-full text-[#2B3A55] rounded-lg focus:outline-none focus:border-[#F4A261] transition-colors"
                required
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-red-500 text-xs mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-[#2B3A55] text-sm lg:text-base">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-3 border-2 border-[#2B3A55] w-full text-[#2B3A55] rounded-lg focus:outline-none focus:border-[#F4A261] transition-colors"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="mobile" className="text-[#2B3A55] text-sm lg:text-base">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="px-4 py-3 border-2 border-[#2B3A55] w-full text-[#2B3A55] rounded-lg focus:outline-none focus:border-[#F4A261] transition-colors"
                required
                aria-required="true"
                aria-invalid={!!errors.mobile}
                aria-describedby={errors.mobile ? 'mobile-error' : undefined}
              />
              {errors.mobile && (
                <p id="mobile-error" className="text-red-500 text-xs mt-1">
                  {errors.mobile}
                </p>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="projectType" className="text-[#2B3A55] text-sm lg:text-base">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="px-4 py-3 border-2 border-[#2B3A55] w-full text-[#2B3A55] rounded-lg focus:outline-none focus:border-[#F4A261] transition-colors"
                required
                aria-required="true"
                aria-invalid={!!errors.projectType}
                aria-describedby={errors.projectType ? 'projectType-error' : undefined}
              >
                <option value="" disabled>
                  Select Project Type
                </option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="infrastructure">Infrastructure</option>
              </select>
              {errors.projectType && (
                <p id="projectType-error" className="text-red-500 text-xs mt-1">
                  {errors.projectType}
                </p>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="budget" className="text-[#2B3A55] text-sm lg:text-base">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="px-4 py-3 border-2 border-[#2B3A55] w-full text-[#2B3A55] rounded-lg focus:outline-none focus:border-[#F4A261] transition-colors"
              >
                <option value="" disabled>
                  Select Budget Range
                </option>
                <option value="under-100k">Under $100,000</option>
                <option value="100k-500k">$100,000 - $500,000</option>
                <option value="500k-1m">$500,000 - $1,000,000</option>
                <option value="over-1m">Over $1,000,000</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="message" className="text-[#2B3A55] text-sm lg:text-base">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Describe Your Project"
                value={formData.message}
                onChange={handleInputChange}
                className="px-4 py-3 border-2 border-[#2B3A55] w-full text-[#2B3A55] rounded-lg focus:outline-none focus:border-[#F4A261] transition-colors"
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>
            {formStatus && (
              <p className={`text-sm lg:text-base ${formStatus.includes('Please') ? 'text-red-500' : 'text-[#F4A261]'}`}>
                {formStatus}
              </p>
            )}
            <button
              variants={zoomInVariants}
              type="submit"
              className="bg-[#F4A261] hover:bg-[#E89B4E] text-[#2B3A55] font-bold py-3 px-6 rounded-lg w-full transition-colors duration-300"
              aria-label="Submit booking form"
            >
              Submit Booking
            </button>
            <button
              variants={zoomInVariants}
              onClick={handleCallClick}
              className="bg-[#2B3A55] hover:bg-[#1A263A] text-[#F9F7F3] font-bold py-3 px-6 rounded-lg w-full transition-colors duration-300"
              aria-label="Call us directly"
            >
              Call Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;