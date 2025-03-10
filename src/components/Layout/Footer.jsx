export function Footer() {
  return (
      <footer className="w-full text-center py-4 border-t mt-8 text-gray-600">
        <div className="mb-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="#" className="hover:text-gray-800">Refund Policy</a></li>
            <li><a href="/contact-us" className="hover:text-gray-800">Contact</a></li>
            <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-800">FAQ</a></li>
          </ul>
        </div>
        <p>© {new Date().getFullYear()} ecomStore. All rights reserved.</p>
      </footer>
  );
}
