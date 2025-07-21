# Gianmarco Arena - Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my work as a Full-Stack Developer with expertise in AI, blockchain, and modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, minimal design inspired by Brittany Chiang and Josh Comeau
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **🎧 Sound Effects**: Interactive sound feedback for UI interactions (theme toggle, navigation, project cards)
- **🔦 Spotlight Cursor**: Subtle circular spotlight effect that follows the cursor (inspired by Brittany Chiang)
- **⚙️ Settings Panel**: Floating settings to toggle sound effects and spotlight cursor
- **Accessibility**: Respects user preferences for reduced motion and sound
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Built with Vite for optimal development and build performance

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Sound Effects**: Web Audio API with fallback sounds
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar with dark mode toggle
│   ├── Hero.tsx        # Hero section with introduction
│   ├── Experience.tsx  # Work experience timeline
│   ├── Projects.tsx    # Featured projects showcase
│   ├── Skills.tsx      # Technical skills with progress bars
│   ├── Contact.tsx     # Contact form and information
│   ├── Footer.tsx      # Footer with social links
│   ├── SoundProvider.tsx # Sound effects context and management
│   ├── SpotlightOverlay.tsx # Cursor spotlight effect
│   └── Settings.tsx    # Settings panel for toggling features
├── utils/
│   └── soundUtils.ts   # Sound utilities and Web Audio API helpers
├── data/
│   └── portfolio.ts    # All portfolio content and data
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Gxarena/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Personal Information

Edit `src/data/portfolio.ts` to update your personal information:

```typescript
export const personalInfo = {
  name: 'Your Name',
  titles: ['Your Title 1', 'Your Title 2'],
  email: 'your.email@example.com',
  location: 'Your Location',
  about: 'Your personal description...',
  resume: '/path-to-your-resume.pdf'
};
```

### Projects

Add or modify projects in the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Short description',
    longDescription: 'Detailed description...',
    image: '/projects/project-image.jpg',
    tags: ['React', 'Node.js', 'TypeScript'],
    github: 'https://github.com/username/project',
    live: 'https://project-demo.com',
    featured: true
  }
];
```

### Experience

Update your work experience in the `experiences` array:

```typescript
export const experiences: Experience[] = [
  {
    id: 'company-id',
    company: 'Company Name',
    role: 'Your Role',
    period: '2023 - Present',
    description: 'Role description...',
    technologies: ['React', 'Node.js', 'Python'],
    achievements: [
      'Achievement 1',
      'Achievement 2'
    ]
  }
];
```

### Skills

Modify your skills in the `skills` array:

```typescript
export const skills: Skill[] = [
  {
    name: 'React',
    category: 'frameworks',
    level: 'expert' // 'beginner' | 'intermediate' | 'advanced' | 'expert'
  }
];
```

### Interactive Features

The portfolio includes several interactive features that can be customized:

#### Sound Effects
- **Theme Toggle**: Switch-on/switch-off sounds when toggling between light/dark modes
- **Navigation Click**: Menu open sound when clicking navigation buttons (no hover sounds)
- **Button/Project Hover**: Plunger immediate sound on hover (no click sounds)
- **Accessibility**: Automatically respects `prefers-reduced-sound` user preference

#### Spotlight Cursor
- **Circular Spotlight**: Follows the cursor with a subtle light effect
- **Performance Optimized**: Uses `requestAnimationFrame` for smooth performance
- **Accessibility**: Automatically disabled when `prefers-reduced-motion` is enabled
- **Customizable**: Adjust size, opacity, and blend mode in `SpotlightOverlay.tsx`

#### Settings Panel
- **Floating Settings**: Accessible via the settings button in the bottom-right corner
- **Toggle Controls**: Enable/disable sound effects and spotlight cursor
- **Persistent Settings**: Settings are saved in localStorage

### Styling

The portfolio uses Tailwind CSS with custom colors defined in `tailwind.config.js`. You can customize:

- **Primary Colors**: Update the `primary` color palette
- **Dark Mode Colors**: Modify the `dark` color palette
- **Light Mode Colors**: Custom `light` color palette for better contrast
- **Animations**: Add custom animations in the `keyframes` section
- **Fonts**: Change font families in the `fontFamily` section

### Images

Replace placeholder images with your own:

1. Add your images to the `public/projects/` directory
2. Update the image paths in `src/data/portfolio.ts`
3. For the hero section, you can add a background image or pattern

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure your domain

### Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service:
- GitHub Pages
- AWS S3
- Firebase Hosting
- Surge.sh

## 📱 Performance

The portfolio is optimized for performance with:

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Optimized images and lazy loading
- **Minification**: CSS and JavaScript minification in production
- **Caching**: Proper cache headers for static assets

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/App.tsx`
3. Update the navigation in `src/components/Navbar.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: gianmarco.arena@example.com
- **GitHub**: [@Gxarena](https://github.com/Gxarena)
- **LinkedIn**: [Gianmarco Arena](https://linkedin.com/in/gianmarco-arena)

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion
