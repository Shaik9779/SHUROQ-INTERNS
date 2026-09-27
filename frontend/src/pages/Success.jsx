import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

function Success() {
    const application = JSON.parse(
        sessionStorage.getItem("application")
    );

    return (
        <div className="success-page">

            <div className="success-card">

                <div className="success-icon">
                    <CheckCircle2 size={42} />
                </div>

                <p className="eyebrow">
                    APPLICATION RECEIVED
                </p>

                <h1>
                    You're officially
                    <span> on your way.</span>
                </h1>

                <p className="success-message">
                    Thank you for applying to the Shuroq Internship
                    Program. We've received your application successfully.
                </p>

                {application && (
                    <div className="application-summary">

                        <div>
                            <span>Name</span>
                            <strong>{application.name}</strong>
                        </div>

                        <div>
                            <span>Email</span>
                            <strong>{application.email}</strong>
                        </div>

                        <div>
                            <span>Role</span>
                            <strong>{application.role}</strong>
                        </div>

                    </div>
                )}

                <div className="success-actions">

                    <Link to="/" className="primary-btn">
                        Back to Home
                        <ArrowRight size={18} />
                    </Link>

                </div>

                <p className="success-note">
                    Our team will review your application and
                    contact you if you're shortlisted.
                </p>

            </div>

        </div>
    );
}

export default Success;