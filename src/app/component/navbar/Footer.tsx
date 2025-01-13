

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white p-4 m-2">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Hooria Khan. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="www.hkdashdeals.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">Website</a>
          <a href="www.linkedin.com/in/hooria-fatima-54753927b" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">LinkedIn</a>
          <a href="https://www.instagram.com/hooria_codehub?igsh=ZWhvMmVucm5ueHBl" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">Instagram</a>
        </div>
      </div>
    </footer>
  );
};


