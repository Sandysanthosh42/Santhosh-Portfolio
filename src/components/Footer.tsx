import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-25 border-top border-light border-opacity-10">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center text-white-50 m-0 fs-7">
              &copy; {new Date().getFullYear()} Santhosh. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;