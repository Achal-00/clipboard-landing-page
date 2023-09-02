const width = screen.width;

export default function LandingSection() {
  return (
    <div className="landing-section">
      <div className="logo-holder">
        <img src="logo.svg" alt="logo" />
      </div>
      <div className="detail">
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <div className="button-holder">
        <button>Download for iOS</button>
        <button>Download for Mac</button>
      </div>
      <img
        src={width < 560 ? "bg-header-mobile.png" : "bg-header-desktop.png"}
        alt="background"
        className="bg-image"
      />
    </div>
  );
}
