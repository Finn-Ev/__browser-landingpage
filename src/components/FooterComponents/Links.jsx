import React from "react";

function Links() {
  return (
    <>
      <div className="links">
        <a href="https://www.google.de/">
          <i id="google" className="fab fa-google"></i>
        </a>
        <a href="https://www.youtube.com/?gl=DE&hl=de">
          <i id="youtube" className="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/?hl=de">
          <i id="instagram" className="fab fa-instagram"></i>
        </a>
        <a href="https://de-de.facebook.com/">
          <i id="facebook" className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/?lang=de">
          <i id="twitter" className="fab fa-twitter"></i>
        </a>
      </div>
    </>
  );
}

export default Links;
