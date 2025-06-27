Paste you

# Aurora Builders Website

![Aurora Builders Logo](https://via.placeholder.com/150x50.png?text=Aurora+Builders)

Welcome to the **Aurora Builders** website, a modern, responsive web application designed to streamline construction project bookings and showcase professional construction services. Built by **Jinad Gamage (JD)**, a full-stack developer from Sri Lanka, this project leverages **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **EmailJS** to deliver a seamless user experience with a construction-themed aesthetic.

## Table of Contents

* *   [Overview](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#overview)
* *   [Features](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#features)
* *   [Tech Stack](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#tech-stack)
* *   [Installation](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#installation)
* *   [Usage](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#usage)
* *   [Project Structure](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#project-structure)
* *   [Email Integration](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#email-integration)
* *   [Contributing](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#contributing)
* *   [Contact](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#contact)
* *   [License](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#license)

## Overview

The Aurora Builders website is a single-page application for a construction company, enabling clients to explore services and submit booking requests. It features a responsive design, smooth animations, and a contact form that sends project details to the admin email (`info@aurorabuilders.com`) via EmailJS. The site reflects professional branding with a color palette of `#F4A261` (accent) and `#2B3A55` (primary).

## Features

* *   **Responsive Design**: Optimized for mobile, tablet, and desktop using Tailwind CSS.
* *   **Dynamic Animations**: Construction-themed loading animation and smooth transitions with Framer Motion.
* *   **Contact Form**: Validated form for booking requests, with fields for full name, email, mobile, project type, budget, and message.
* *   **Email Integration**: Sends form submissions from `jinadinduwidwa@gmail.com` to `info@aurorabuilders.com` using EmailJS.
* *   **Branding**: Consistent use of Aurora Builders' colors (`#F4A261`, `#2B3A55`) across all sections.
* *   **Sections**: Includes Hero, About, Services, Projects, Working, Testimonials, Contact, and Footer.

## Tech Stack

* *   **Frontend**: React, TypeScript
* *   **Styling**: Tailwind CSS
* *   **Animations**: Framer Motion
* *   **Email Service**: EmailJS
* *   **Build Tool**: Vite (assumed; adjust if using Create React App or other)
* *   **Deployment**: \[Add deployment platform, e.g., Netlify, Vercel, or leave blank\]

## Installation

 1.  **Clone the Repository**:

       ```bash
     git clone https://github.com/your-username/aurora-builders.git
          cd aurora-builders
       ```     
 2.  **Install Dependencies**:
   
       ```bash
       npm install
     ```
       
 3.  **Configure EmailJS**:
       
    * *   Sign up at [EmailJS](https://www.emailjs.com/).
    * *   Create an email service named "Construction Contact" and connect `jinadinduwidwa@gmail.com` with Gmail OAuth scopes (`gmail.send`).
    * *   Create an email template with the following fields:
     *     
     *     ```plaintext
     *     To: info@aurorabuilders.com
     *     From: jinadinduwidwa@gmail.com
     *     Subject: New Construction Booking Request
     *     Body:
     *     New Booking Request from Aurora Builders Website
     *     
     *     Full Name: {{fullName}}
     *     Email: {{email}}
     *     Mobile Number: {{mobile}}
     *     Project Type: {{projectType}}
     *     Budget Range: {{budget}}
     *     Message: {{message}}
     *     ```
     *     
     * *   Update `src/sections/Contact.jsx` with your EmailJS credentials:
     *     
     *     ```javascript
     *     emailjs.init('YOUR_PUBLIC_KEY');
     *     await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
     *       fullName: formData.fullName,
     *       email: formData.email,
     *       mobile: formData.mobile,
     *       projectType: formData.projectType,
     *       budget: formData.budget || 'Not specified',
     *       message: formData.message || 'No message provided',
     *     });
     *     ```
     *     
     * *   Replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` with values from your EmailJS dashboard.
 4.  **Run the Development Server**:
     
     ```bash
     npm run dev
     ```
     
     Open `http://localhost:5173` (or your Vite port) in your browser.
      

## Usage

* *   **Explore Sections**: Navigate through Hero, About, Services, Projects, Working, Testimonials, Contact, and Footer to view content and services.
* *   **Submit a Booking**: Use the contact form to send a construction project request. The form includes validation for required fields (full name, email, mobile, project type).
* *   **Animations**: Experience the construction-themed loading animation (stacking "building" effect) and Framer Motion transitions.
* *   **Responsive Testing**: Test on various devices to ensure the layout adapts seamlessly.

## Project Structure

```
aurora-builders/
├── public/
│   └── assets/                 # Static assets (e.g., images, videos)
├── src/
│   ├── sections/               # React components for each section
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Working.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── LoadingButton.jsx
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Tailwind CSS styles
│   ├── animation.js            # Framer Motion animation variants
│   └── main.jsx                # Entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration (adjust if using another tool)
└── README.md                   # This file
```

## Email Integration

The contact form uses **EmailJS** to send booking requests to `info@aurorabuilders.com`. To set up:

 1.  Follow the EmailJS configuration steps in [Installation](https://grok.com/chat/5a098864-5870-407d-982b-e3561daeac34#installation).
 2.  Ensure the Gmail account (`jinadinduwidwa@gmail.com`) has the correct OAuth scopes to avoid errors like `412 Gmail_API: Request had insufficient authentication scopes`.
 3.  Test the email setup in the EmailJS dashboard under **Email Services** > **Construction Contact** > **Test Service**.

## Contributing

Contributions are welcome! To contribute:

   1.  Fork the repository.
   2.  Create a feature branch (`git checkout -b feature/your-feature`).
   3.  Commit your changes (`git commit -m "Add your feature"`).
   4.  Push to the branch (`git push origin feature/your-feature`).
   5.  Open a pull request.

Please ensure code follows the project's coding style and includes tests where applicable.

## Contact

Built by **Jinad Gamage (JD)**, a full-stack developer from Sri Lanka passionate about coding and coffee ☕.

* *   **Email**: [jinadgamage@gmail.com](mailto:jinadgamage@gmail.com)
* *   **LinkedIn**: \[Insert your LinkedIn URL here\]
* *   **GitHub**: \[Insert your GitHub URL here\]

Feedback and collaboration inquiries are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](https://grok.com/chat/LICENSE) file for details.

r rich text content here. You can paste directly from Word or other rich text sources.
