# 🥊 IronPulse

**IronPulse** is a modern gym and martial arts training website built with **Next.js, TypeScript, and Tailwind CSS**.

The project is designed to provide users with an easy way to explore gym programs, martial arts training, personal training, trainers, schedules, membership plans, and contact information.

---

## 🚀 Live Project

> Add your deployed project URL here.

**Live Demo:** `https://your-project-url.com`

---

## 📌 About The Project

IronPulse is a fitness-focused web application that combines:

* 🏋️ Gym Training
* 🥊 Martial Arts
* 🎯 Personal Training
* 👨‍🏫 Professional Trainers
* 📅 Training Schedule
* 💳 Membership Plans
* 📩 Contact & Inquiry Form

The main goal of the project is to create a clean, responsive, and user-friendly platform for a modern fitness center.

---

## ✨ Features

### 🏠 Home Page

The homepage includes:

* Hero section
* Call-to-action buttons
* Training programs
* Why Choose IronPulse section
* Trainer previews
* Training schedule preview
* Membership CTA

---

### 🏋️ Programs

IronPulse provides multiple training programs:

* Gym Training
* Martial Arts
* Personal Training

Each program has its own dedicated page.

---

### 🥊 Martial Arts

The martial arts section uses **dynamic routing** to display different martial arts styles.

Available styles include:

* Boxing
* Muay Thai
* Judo
* Taekwondo

Example route:

```text
/programs/martial-arts/boxing
```

---

### 👨‍🏫 Trainers

Users can explore available trainers and visit individual trainer profile pages.

Available trainers:

* Alex Rahman
* Sarah Khan
* Michael Hasan

Example:

```text
/trainers/alex-rahman
```

---

### 📅 Training Schedule

The schedule page displays weekly training sessions including:

* Day
* Time
* Program
* Trainer

---

### 💳 Membership

IronPulse provides three membership plans:

* Basic
* Standard
* Premium

Each plan contains:

* Price
* Description
* Features
* Contact/Join CTA

---

### 📩 Contact Form

The contact page includes:

* Name
* Email
* Subject
* Message

The form currently handles submission on the frontend and displays a success message.

> **Note:** Email sending/backend integration is planned for a future version.

---

## 🛠️ Tech Stack

| Technology         | Purpose                      |
| ------------------ | ---------------------------- |
| Next.js            | React framework              |
| TypeScript         | Type safety                  |
| React              | UI development               |
| Tailwind CSS       | Styling                      |
| Next.js App Router | Routing                      |
| Next/Image         | Image optimization           |
| Next/Link          | Client-side navigation       |
| React Hooks        | Client-side state management |

---

## 📂 Project Structure

```text
ironpulse/
│
├── public/
│   ├── logo.png
│   ├── hero-img.png
│   ├── gym-training.jpg
│   ├── martial-arts.jpg
│   ├── personal-training.jpg
│   ├── trainer-1.jpg
│   ├── trainer2.jpg
│   └── trainer-3.jpg
│
├── src/
│   └── app/
│       │
│       ├── components/
│       │   ├── Navbar.tsx
│       │   ├── Hero.tsx
│       │   ├── ProgramCard.tsx
│       │   ├── WhyChooseCard.tsx
│       │   ├── TrainerCard.tsx
│       │   ├── ScheduleItem.tsx
│       │   └── Footer.tsx
│       │
│       ├── data/
│       │   └── trainer.ts
│       │
│       ├── about/
│       │   └── page.tsx
│       │
│       ├── programs/
│       │   ├── page.tsx
│       │   │
│       │   ├── gym/
│       │   │   └── page.tsx
│       │   │
│       │   ├── martial-arts/
│       │   │   ├── page.tsx
│       │   │   └── [style]/
│       │   │       ├── page.tsx
│       │   │       └── not-found.tsx
│       │   │
│       │   └── personal-training/
│       │       └── page.tsx
│       │
│       ├── trainers/
│       │   ├── page.tsx
│       │   └── [trainerId]/
│       │       └── page.tsx
│       │
│       ├── schedule/
│       │   └── page.tsx
│       │
│       ├── membership/
│       │   └── page.tsx
│       │
│       ├── contact/
│       │   └── page.tsx
│       │
│       ├── page.tsx
│       ├── layout.tsx
│       └── globals.css
│
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🗺️ Application Routes

```text
/
├── /about
│
├── /programs
│   ├── /programs/gym
│   ├── /programs/martial-arts
│   │   └── /programs/martial-arts/[style]
│   └── /programs/personal-training
│
├── /trainers
│   └── /trainers/[trainerId]
│
├── /schedule
│
├── /membership
│
└── /contact
```

---

## 🎨 Design

IronPulse uses a dark fitness-focused visual style.

### Color Palette

| Color             | Hex       |
| ----------------- | --------- |
| Dark              | `#111827` |
| Dark Section      | `#273043` |
| Alternate Section | `#1F2937` |
| Primary Text      | `#F9FAFB` |
| Accent            | `#DC2626` |
| Accent Hover      | `#B91C1C` |

The design focuses on:

* Strong typography
* High contrast
* Clear CTAs
* Responsive layouts
* Consistent card design
* Dark fitness aesthetic

---

## 📱 Responsive Design

IronPulse is designed to work across different screen sizes:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

The navigation menu changes to a mobile hamburger menu on smaller screens.

Grid layouts also adapt based on screen size using Tailwind CSS responsive utilities.

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ironpulse.git
```

### 2. Navigate to the Project

```bash
cd ironpulse
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Open in Browser

```text
http://localhost:3000
```

---

## 🧪 Available Scripts

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## 🧠 Next.js Concepts Used

This project was also built to practice important Next.js concepts, including:

* App Router
* File-based routing
* Nested routes
* Dynamic routes
* `notFound()`
* Server Components
* Client Components
* `useState`
* Form handling
* `next/link`
* `next/image`
* Layouts
* Metadata
* Component reusability
* TypeScript interfaces
* Data-driven rendering with `.map()`
* Responsive Tailwind CSS

---

## 🔄 Reusable Components

The project uses reusable components to avoid repeating UI code.

For example:

```tsx
<ProgramCard
  name="Gym Training"
  description="Build strength and improve your fitness."
  image="/gym-training.jpg"
  link="/programs/gym"
/>
```

Similarly, trainer information is displayed through:

```tsx
<TrainerCard
  name={trainer.name}
  role={trainer.role}
  image={trainer.image}
  experience={trainer.experience}
  link={trainer.link}
/>
```

This makes the application easier to maintain and extend.

---

## 📊 Data Management

Trainer information is separated into a dedicated data file:

```text
src/app/data/trainer.ts
```

Example structure:

```tsx
export const trainers = {
  "alex-rahman": {
    name: "Alex Rahman",
    role: "Head Gym Trainer",
    image: "/trainer-1.jpg",
    experience: "8+ Years Experience",
    bio: "Alex specializes in strength training...",
    specialty: "Strength & Fitness Training",
  },
};
```

This data is then used by the dynamic trainer route.

---

## 📩 Contact Form Status

The contact form currently works on the frontend.

Current flow:

```text
User fills the form
        ↓
Submit
        ↓
handleSubmit()
        ↓
Form data is collected
        ↓
Success message appears
```

The current implementation does **not** send emails or store messages in a database.

### Planned

```text
Contact Form
      ↓
API Route
      ↓
Email Service
      ↓
Admin Email
```

---

## 🔮 Future Improvements

Possible future improvements include:

* [ ] Real email sending
* [ ] Backend API
* [ ] Database integration
* [ ] User authentication
* [ ] Online membership registration
* [ ] Online class booking
* [ ] Trainer management system
* [ ] Admin dashboard
* [ ] Payment integration
* [ ] Member dashboard
* [ ] Search and filtering
* [ ] Form validation improvements
* [ ] Loading and error states
* [ ] SEO improvements
* [ ] Production deployment

---

## 🚀 Deployment

The application can be deployed using platforms that support Next.js applications.

Before deployment, make sure to:

* Update production metadata
* Configure environment variables
* Verify all routes
* Optimize images
* Test responsive layouts
* Run the production build

```bash
npm run build
```

---

## 👨‍💻 Author

**MD Al Amin Hossain Jibon**

Frontend / Full-Stack Developer in Progress

Currently learning:

* JavaScript
* TypeScript
* React
* Next.js
* Node.js
* Express.js
* MongoDB

---

## 📚 Project Purpose

IronPulse was created as a practical learning project to improve real-world development skills with **Next.js, React, TypeScript, and Tailwind CSS**.

The project focuses on building a complete multi-page application while practicing reusable components, routing, dynamic routes, responsive UI, forms, and modern React/Next.js patterns.

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

**Built with ❤️ using Next.js, TypeScript & Tailwind CSS.**
