import { useState, useEffect, useRef } from "react";
import "./index.css";
function App() {
  const [email, setEmail] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const emailInputRef = useRef(null);
  useEffect(() => {
    const calculateCountdown = () => {
      // Target date: May 14, 2026
      const targetDate = new Date(2026, 4, 14, 0, 0, 0).getTime(); // Month is 0-indexed
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
      }
    };
    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setEmail("");
      alert(
        "Thank you for signing up! You'll be notified when Motoradar launches."
      );
    }
  };
  return (
    <div className="min-h-screen bg-[#0A2239] text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-start px-6 pt-16 md:pt-24 lg:pt-32 pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif">
            Motoradar
          </h1>
          <div className="flex justify-center">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              {/* Motorcycle Logo */}
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <g>
                  <circle
                    cx="30"
                    cy="65"
                    r="12"
                    stroke="#4A7C9E"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <circle
                    cx="30"
                    cy="65"
                    r="8"
                    stroke="#4A7C9E"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle
                    cx="70"
                    cy="65"
                    r="12"
                    stroke="#4A7C9E"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <circle
                    cx="70"
                    cy="65"
                    r="8"
                    stroke="#4A7C9E"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 30 65 L 45 50 L 55 45 L 60 50 L 70 65"
                    stroke="#4A7C9E"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 60 50 L 65 40 L 70 35"
                    stroke="#4A7C9E"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 40 45 L 50 43"
                    stroke="#4A7C9E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </g>
                <g transform="translate(65, 15)">
                  <circle
                    cx="0"
                    cy="0"
                    r="14"
                    fill="#4CAF50"
                    stroke="#0A2239"
                    strokeWidth="2"
                  />
                  <path
                    d="M 0 -6 L 0 3 M -6 0 L 6 0"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="0" cy="0" r="3" fill="white" />
                </g>
              </svg>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-tight px-4">
              Made for Motorcycle Riders
              <br />
              Focused on Group Riding,
              <br />
              Safety, and Community.
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto px-4 leading-relaxed">
              It combines GPS tracking, real-time location sharing, emergency
              support, and social features into a single seamless experience.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                const emailSection = document.getElementById("email-signup");
                if (emailSection) {
                  emailSection.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => emailInputRef.current?.focus(), 500);
                }
              }}
              className="bg-[#4CAF50] hover:bg-[#45A049] text-white font-medium px-10 py-3.5 rounded-full text-base md:text-lg transition-colors duration-200 shadow-lg"
            >
              Notify Me
            </button>
          </div>
        </div>
      </section>
      {/* Phone Mockup */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto flex justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F0164d85e61d5494ea08ea524fac7a766%2F37828a89adfa42e49491fa56aecf9a5b?format=webp&width=1200"
            alt="Motoradar App - Map and Route Views"
            className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>
      {/* Coming Soon Countdown */}
      <section className="relative px-6 py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2239] via-[#0F2D45] to-[#0A2239]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
        <style>{`
          @keyframes flip-vertical {
            0% { transform: rotateX(90deg); opacity: 0; }
            100% { transform: rotateX(0); opacity: 1; }
          }
          @keyframes glow-pulse {
            0%, 100% {
              box-shadow: 0 0 30px rgba(76, 175, 80, 0.4),
                          inset 0 0 20px rgba(76, 175, 80, 0.1);
            }
            50% {
              box-shadow: 0 0 60px rgba(76, 175, 80, 0.6),
                          inset 0 0 30px rgba(76, 175, 80, 0.2);
            }
          }
          .countdown-flip {
            animation: flip-vertical 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            perspective: 1000px;
          }
          .countdown-container {
            animation: glow-pulse 3s ease-in-out infinite;
          }
        `}</style>
        <div className="relative max-w-5xl mx-auto text-center space-y-16 md:space-y-20">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic tracking-tight">
              Coming soon
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light">
              Be ready for the revolution in group riding
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
            {/* Countdown Blocks */}
            {[{ label: "Days", value: String(days).padStart(3, "0") },
              { label: "Hours", value: String(hours).padStart(2, "0") },
              { label: "Minutes", value: String(minutes).padStart(2, "0") }
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-4 md:gap-6"
              >
                <div className="countdown-container w-28 h-32 md:w-32 md:h-40 lg:w-40 lg:h-48 bg-gradient-to-br from-[#4CAF50]/20 to-[#45A049]/20 backdrop-blur-sm rounded-2xl md:rounded-3xl flex items-center justify-center border border-[#4CAF50]/40 relative overflow-hidden group">
                  <span className="countdown-flip text-5xl md:text-6xl lg:text-7xl font-bold text-[#4CAF50] font-mono tracking-wider relative z-10">
                    {item.value}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="text-xs md:text-sm font-bold text-[#4CAF50] uppercase tracking-[0.15em]">
                    {item.label}
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="email-signup"
        className="relative py-24 md:py-32 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2239] via-[#4CAF50]/5 to-[#0A2239]"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#4CAF50]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CAF50]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CAF50]/30 to-transparent"></div>
        <div className="relative max-w-2xl mx-auto text-center space-y-10 md:space-y-12">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic tracking-tight">
            Be Part of the Community
          </h3>
          <p className="text-base md:text-lg text-white/70 font-light max-w-lg mx-auto">
            Get exclusive early access, updates, and be the first to join the
            Motoradar revolution
          </p>
  
  <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto group"
            >
              <input
                ref={emailInputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-6 md:px-8 py-4 md:py-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-all duration-300 text-base md:text-lg"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#4CAF50] to-[#45A049] hover:from-[#5DBE5F] hover:to-[#50B154] text-white font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-base md:text-lg whitespace-nowrap uppercase tracking-wider transform hover:scale-105 active:scale-95"
              >
                Get Access
              </button>
            </form>
            <p className="text-xs md:text-sm text-white/50 font-light">
              We'll never spam you. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    );
}
export default App;
