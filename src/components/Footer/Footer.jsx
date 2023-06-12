

function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content d-flex justify-content-center">
        <h5 className="">
          <p className="mb-0">
            &copy; {currentDate} RAST Mobile Co. All rights reserved.
          </p>
        </h5>
       </div>
    </footer>
  );
}

export default Footer;
