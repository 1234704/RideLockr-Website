# RideLockr - IoT Motorcycle Security Platform

A modern, high-performance tech startup landing page designed to showcase RideLockr's IoT anti-theft and smart tracking system. Built with a dark, cyber-security aesthetic (`zinc-950` and `emerald-500` accents).

##  Tech Stack
* **Frontend:** React.js, Vite
* **Styling:** Tailwind CSS v4 (Zero-config, high-performance styling)
* **Animations:** Framer Motion (Hardware-accelerated)
* **Icons:** Lucide React

##  Core Domains Developed
**1. "How It Works" Interactive Stepper**
* Converted a standard vertical workflow into an interactive, state-driven UI.
* Features a dynamic vertical progress line that tracks the user's active step.
* Utilizes `AnimatePresence` for smooth height expansion when reading step details.

**2. "Target Customers" Solutions Dashboard**
* Engineered a tabbed dashboard interface tailored for specific user demographics (Delivery, Students, Commuters, Fleets).
* Implemented staggered entry animations for security benefits using Framer Motion `staggerChildren`.
* Designed with premium `backdrop-blur` glassmorphism and ambient rotating watermark graphics.

##  Performance Optimizations Applied
* Offloaded continuous ambient animations (glows and rotations) to the GPU using `will-change: transform`.
* Replaced heavy layout blurs with solid layer composites for maximum frame rates on older devices.

##  Primary Contributor
**Shahar Yar** - Frontend Engineering (Workflow & Demographics Domains)
*Branch:* `feature/Shaharyar-how-it-works-customers`