// src/pageparts/Footer.jsx
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white/90 border-t shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} FitBuddy — Built with React & Tailwind
      </div>
    </footer>
  );
}
