
const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
          <div className="text-2xl font-bold mb-4 md:mb-0">TaskMaster</div>
          <nav className="space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-200">Features</a>
            <a href="#" className="hover:text-blue-200">Pricing</a>
            <a href="#" className="hover:text-blue-200">About Us</a>
            <a href="#" className="hover:text-blue-200">Contact</a>
          </nav>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-200">Twitter</a>
            <a href="#" className="hover:text-blue-200">LinkedIn</a>
            <a href="#" className="hover:text-blue-200">Facebook</a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-blue-200">
          © 2023 TaskMaster. All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;