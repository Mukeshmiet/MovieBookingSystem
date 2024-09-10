import logo from "./media/heropageimg.png";
import "./App.css";

function App() {
  return (
    <>
      {/* Header Section */}
      <div className="header-container">
        <header>
          <div className="container">
            <div className="logo">
              <h1>MovieTime</h1>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {/* Main Section */}
      
      <main>
        <div className="main-container">
          <div className="text-container">
            <h1>Welcome to MovieTime</h1>
            <p>Book your favorite movies in nearby theaters effortlessly.</p>
            <div className="buttons">
              <button className="login">
                <a href="/">Login</a>
              </button>
              <button className="signin">
                <a href="/">Sign Up</a>
              </button>
            </div>
          </div>
          <div className="image-container">
            {/* Replace with SVG or an image related to movies */}
            <img src={logo} alt="Movie Illustration" />
          </div>
        </div>
      </main>
      

      {/* Footer Section */}
      <div className="footer-container">
      <footer>
        <div className="footer-container">
          <div className="social-icons">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#5371ae"
                viewBox="0 0 256 256"
                >
                <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>
              </svg>
            </a>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#5371ae"
                viewBox="0 0 256 256"
              >
                <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>
              </svg>
            </a>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#5371ae"
                viewBox="0 0 256 256"
                >
                <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
              </svg>
            </a>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#5371ae"
                viewBox="0 0 256 256"
              >
                <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z"></path>
              </svg>
            </a>
          </div>
          <div className="footer-text">
            <p>&copy; 2024 All rights reserved</p>
            <a href="/">Privacy & Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Terms of Use</a>
          </div>
        </div>
      </footer>
        </div>
    </>
  );
}

export default App;
