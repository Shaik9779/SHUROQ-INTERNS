import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <div className="hero-badge">
                    <Sparkles size={16} />
                    Internship Applications Open
                </div>

                <h1>
                    Start your journey.
                    <span> Build your future.</span>
                </h1>

                <p>
                    Gain real-world experience, work on meaningful
                    projects, and grow your career with Shuroq.
                </p>

                <div className="hero-buttons">

                    <Link to="/apply" className="primary-btn">
                        Apply Now
                        <ArrowRight size={18} />
                    </Link>

                    <a href="#roles" className="secondary-btn">
                        Explore Roles
                    </a>

                </div>

            </div>

            <div className="hero-card">

                <div className="hero-card-top">
                    <span>SHUROQ</span>
                    <span>2026</span>
                </div>

                <div className="hero-card-number">
                    01
                </div>

                <p>
                    Learn. Build. Launch.
                </p>

            </div>

        </section>
    );
}

export default Hero;