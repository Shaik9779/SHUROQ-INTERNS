// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ArrowLeft, CheckCircle2 } from "lucide-react";

// function Apply() {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         education: "",
//         role: ""
//     });

//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value
//         }));

//         // Remove error while user is correcting the field
//         setErrors((prev) => ({
//             ...prev,
//             [name]: ""
//         }));
//     };

//     const validate = () => {
//         const newErrors = {};

//         if (!formData.name.trim()) {
//             newErrors.name = "Full name is required";
//         }

//         if (!formData.email.trim()) {
//             newErrors.email = "Email is required";
//         } else if (
//             !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//         ) {
//             newErrors.email = "Enter a valid email address";
//         }

//         if (!formData.phone.trim()) {
//             newErrors.phone = "Phone number is required";
//         } else if (!/^[0-9]{10}$/.test(formData.phone)) {
//             newErrors.phone = "Phone number must contain 10 digits";
//         }

//         if (!formData.education.trim()) {
//             newErrors.education = "Education is required";
//         }

//         if (!formData.role) {
//             newErrors.role = "Please select an internship role";
//         }

//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const validationErrors = validate();

//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         setLoading(true);

//         try {
//             const response = await fetch(
//                 "http://localhost:5000/api/applications",
//                 {
//                     method: "POST",

//                     headers: {
//                         "Content-Type": "application/json"
//                     },

//                     body: JSON.stringify(formData)
//                 }
//             );

//             const data = await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     data.message || "Failed to submit application"
//                 );
//             }

//             // Save returned application information
//             sessionStorage.setItem(
//                 "application",
//                 JSON.stringify(data.application)
//             );

//             navigate("/success");

//         } catch (error) {
//             console.error(error);

//             setErrors({
//                 submit:
//                     error.message ||
//                     "Something went wrong. Please try again."
//             });

//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="apply-page">

//             {/* Header */}

//             <header className="apply-header">

//                 <Link to="/" className="back-link">
//                     <ArrowLeft size={18} />
//                     Back to home
//                 </Link>

//                 <span className="apply-logo">
//                     SHUROQ
//                 </span>

//             </header>


//             {/* Main */}

//             <main className="apply-container">

//                 <div className="apply-intro">

//                     <p className="eyebrow">
//                         INTERNSHIP APPLICATION
//                     </p>

//                     <h1>
//                         Start your
//                         <span> journey.</span>
//                     </h1>

//                     <p>
//                         Tell us about yourself and the role
//                         you'd like to explore.
//                     </p>

//                 </div>


//                 {/* Form */}

//                 <form
//                     className="application-form"
//                     onSubmit={handleSubmit}
//                 >

//                     {/* Name */}

//                     <div className="form-group">

//                         <label htmlFor="name">
//                             Full Name
//                         </label>

//                         <input
//                             id="name"
//                             name="name"
//                             type="text"
//                             placeholder="Enter your full name"
//                             value={formData.name}
//                             onChange={handleChange}
//                         />

//                         {errors.name && (
//                             <span className="error">
//                                 {errors.name}
//                             </span>
//                         )}

//                     </div>


//                     {/* Email */}

//                     <div className="form-group">

//                         <label htmlFor="email">
//                             Email Address
//                         </label>

//                         <input
//                             id="email"
//                             name="email"
//                             type="email"
//                             placeholder="you@example.com"
//                             value={formData.email}
//                             onChange={handleChange}
//                         />

//                         {errors.email && (
//                             <span className="error">
//                                 {errors.email}
//                             </span>
//                         )}

//                     </div>


//                     {/* Phone */}

//                     <div className="form-group">

//                         <label htmlFor="phone">
//                             Phone Number
//                         </label>

//                         <input
//                             id="phone"
//                             name="phone"
//                             type="tel"
//                             placeholder="10-digit phone number"
//                             maxLength="10"
//                             value={formData.phone}
//                             onChange={handleChange}
//                         />

//                         {errors.phone && (
//                             <span className="error">
//                                 {errors.phone}
//                             </span>
//                         )}

//                     </div>


//                     {/* Education */}

//                     <div className="form-group">

//                         <label htmlFor="education">
//                             Education
//                         </label>

//                         <input
//                             id="education"
//                             name="education"
//                             type="text"
//                             placeholder="e.g. B.Tech CSE"
//                             value={formData.education}
//                             onChange={handleChange}
//                         />

//                         {errors.education && (
//                             <span className="error">
//                                 {errors.education}
//                             </span>
//                         )}

//                     </div>


//                     {/* Role */}

//                     <div className="form-group">

//                         <label htmlFor="role">
//                             Internship Role
//                         </label>

//                         <select
//                             id="role"
//                             name="role"
//                             value={formData.role}
//                             onChange={handleChange}
//                         >

//                             <option value="">
//                                 Select a role
//                             </option>

//                             <option value="Frontend Developer">
//                                 Frontend Developer
//                             </option>

//                             <option value="Backend Developer">
//                                 Backend Developer
//                             </option>

//                             <option value="Data Analyst">
//                                 Data Analyst
//                             </option>

//                         </select>

//                         {errors.role && (
//                             <span className="error">
//                                 {errors.role}
//                             </span>
//                         )}

//                     </div>


//                     {/* Submit Error */}

//                     {errors.submit && (
//                         <div className="submit-error">
//                             {errors.submit}
//                         </div>
//                     )}


//                     {/* Submit */}

//                     <button
//                         type="submit"
//                         className="submit-btn"
//                         disabled={loading}
//                     >

//                         {loading ? (
//                             "Submitting..."
//                         ) : (
//                             <>
//                                 Submit Application
//                                 <CheckCircle2 size={18} />
//                             </>
//                         )}

//                     </button>


//                     <p className="form-note">
//                         By submitting this application, you confirm
//                         that the information provided is accurate.
//                     </p>

//                 </form>

//             </main>

//         </div>
//     );
// }

// export default Apply;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    CheckCircle2,
    Mail,
    Phone,
    User,
    GraduationCap,
    BriefcaseBusiness,
    ShieldCheck
} from "lucide-react";

const roles = [
    {
        title: "Frontend Developer",
        description: "Build modern and responsive web experiences.",
        skills: ["React", "JavaScript", "CSS"]
    },
    {
        title: "Backend Developer",
        description: "Build APIs and scalable backend systems.",
        skills: ["Node.js", "Express", "MongoDB"]
    },
    {
        title: "Data Analyst",
        description: "Transform data into meaningful insights.",
        skills: ["Python", "SQL", "Power BI"]
    }
];

function Apply() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        education: "",
        role: ""
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const selectRole = (role) => {
        setFormData((prev) => ({
            ...prev,
            role
        }));

        setErrors((prev) => ({
            ...prev,
            role: ""
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your full name.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter your phone number.";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit number.";
        }

        if (!formData.education.trim()) {
            newErrors.education = "Please enter your education.";
        }

        if (!formData.role) {
            newErrors.role = "Please select an internship role.";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

            const firstError = Object.keys(validationErrors)[0];

            document
                .getElementById(firstError)
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/applications",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Unable to submit application."
                );
            }

            sessionStorage.setItem(
                "application",
                JSON.stringify(data.application)
            );

            navigate("/success");

        } catch (error) {
            console.error(error);

            setErrors({
                submit:
                    error.message ||
                    "Something went wrong. Please try again."
            });

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="apply-page">

            {/* TOP NAV */}

            <header className="apply-header">

                <Link to="/" className="apply-back">
                    <ArrowLeft size={17} />
                    Back to Shuroq
                </Link>

                <Link to="/" className="apply-logo">
                    SHUROQ
                </Link>

                <div className="application-secure">
                    <ShieldCheck size={16} />
                    Secure Application
                </div>

            </header>


            {/* PAGE */}

            <main className="apply-wrapper">

                {/* LEFT SIDE */}

                <aside className="apply-sidebar">

                    <div>

                        <p className="eyebrow">
                            INTERNSHIP PROGRAM
                        </p>

                        <h1>
                            Build your
                            <span> next chapter.</span>
                        </h1>

                        <p className="apply-sidebar-text">
                            Take the first step toward gaining
                            real-world experience, building meaningful
                            projects and growing with Shuroq.
                        </p>

                    </div>


                    <div className="application-steps">

                        <div className="step active">
                            <div className="step-number">
                                <Check size={15} />
                            </div>

                            <div>
                                <strong>Your details</strong>
                                <span>Tell us about yourself</span>
                            </div>
                        </div>


                        <div className="step">
                            <div className="step-number">
                                2
                            </div>

                            <div>
                                <strong>Choose your role</strong>
                                <span>Find where you fit</span>
                            </div>
                        </div>


                        <div className="step">
                            <div className="step-number">
                                3
                            </div>

                            <div>
                                <strong>Submit application</strong>
                                <span>Take your next step</span>
                            </div>
                        </div>

                    </div>


                    <div className="sidebar-note">

                        <CheckCircle2 size={19} />

                        <div>
                            <strong>What happens next?</strong>

                            <p>
                                Our team will review your application
                                and contact shortlisted candidates.
                            </p>
                        </div>

                    </div>

                </aside>


                {/* FORM SIDE */}

                <section className="apply-form-section">

                    <div className="form-heading">

                        <div>
                            <p className="eyebrow">
                                APPLICATION
                            </p>

                            <h2>
                                Tell us about yourself.
                            </h2>

                            <p>
                                It only takes a few minutes to apply.
                            </p>
                        </div>

                        <span className="required-label">
                            * Required
                        </span>

                    </div>


                    <form
                        className="saas-form"
                        onSubmit={handleSubmit}
                    >

                        {/* PERSONAL INFORMATION */}

                        <div className="form-section-title">

                            <div className="form-section-icon">
                                <User size={18} />
                            </div>

                            <div>
                                <h3>Personal information</h3>
                                <p>
                                    Basic information to help us
                                    identify you.
                                </p>
                            </div>

                        </div>


                        {/* NAME */}

                        <div className="form-field">

                            <label htmlFor="name">
                                Full name <span>*</span>
                            </label>

                            <div
                                className={`input-wrapper ${
                                    errors.name
                                        ? "has-error"
                                        : ""
                                }`}
                            >
                                <User size={18} />

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="e.g. Shaik Mahammad Rehan"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            {errors.name && (
                                <small className="field-error">
                                    {errors.name}
                                </small>
                            )}

                        </div>


                        {/* EMAIL + PHONE */}

                        <div className="form-row">

                            <div className="form-field">

                                <label htmlFor="email">
                                    Email address <span>*</span>
                                </label>

                                <div
                                    className={`input-wrapper ${
                                        errors.email
                                            ? "has-error"
                                            : ""
                                    }`}
                                >
                                    <Mail size={18} />

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                {errors.email && (
                                    <small className="field-error">
                                        {errors.email}
                                    </small>
                                )}

                            </div>


                            <div className="form-field">

                                <label htmlFor="phone">
                                    Phone number <span>*</span>
                                </label>

                                <div
                                    className={`input-wrapper ${
                                        errors.phone
                                            ? "has-error"
                                            : ""
                                    }`}
                                >
                                    <Phone size={18} />

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="10-digit number"
                                        maxLength="10"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                {errors.phone && (
                                    <small className="field-error">
                                        {errors.phone}
                                    </small>
                                )}

                            </div>

                        </div>


                        {/* EDUCATION */}

                        <div className="form-field">

                            <label htmlFor="education">
                                Education <span>*</span>
                            </label>

                            <div
                                className={`input-wrapper ${
                                    errors.education
                                        ? "has-error"
                                        : ""
                                }`}
                            >
                                <GraduationCap size={18} />

                                <input
                                    id="education"
                                    name="education"
                                    type="text"
                                    placeholder="e.g. B.Tech Computer Science"
                                    value={formData.education}
                                    onChange={handleChange}
                                />
                            </div>

                            {errors.education && (
                                <small className="field-error">
                                    {errors.education}
                                </small>
                            )}

                        </div>


                        {/* ROLE */}

                        <div className="form-section-title role-title">

                            <div className="form-section-icon">
                                <BriefcaseBusiness size={18} />
                            </div>

                            <div>
                                <h3>Choose your role</h3>
                                <p>
                                    Select the opportunity that matches
                                    your interests.
                                </p>
                            </div>

                        </div>


                        <div className="role-selection">

                            {roles.map((item) => (

                                <button
                                    type="button"
                                    key={item.title}
                                    className={`role-option ${
                                        formData.role === item.title
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        selectRole(item.title)
                                    }
                                >

                                    <div className="role-option-top">

                                        <div className="role-radio">
                                            {formData.role === item.title && (
                                                <div />
                                            )}
                                        </div>

                                        {formData.role === item.title && (
                                            <Check
                                                size={17}
                                                className="role-check"
                                            />
                                        )}

                                    </div>


                                    <div className="role-option-content">

                                        <h4>
                                            {item.title}
                                        </h4>

                                        <p>
                                            {item.description}
                                        </p>

                                        <div className="role-skills">

                                            {item.skills.map((skill) => (
                                                <span key={skill}>
                                                    {skill}
                                                </span>
                                            ))}

                                        </div>

                                    </div>

                                </button>

                            ))}

                        </div>

                        {errors.role && (
                            <small className="field-error role-error">
                                {errors.role}
                            </small>
                        )}


                        {/* SUBMIT ERROR */}

                        {errors.submit && (
                            <div className="form-submit-error">
                                {errors.submit}
                            </div>
                        )}


                        {/* BOTTOM */}

                        <div className="form-bottom">

                            <p>
                                By submitting, you agree that the
                                information provided is accurate.
                            </p>

                            <button
                                type="submit"
                                className="application-submit"
                                disabled={loading}
                            >

                                {loading ? (
                                    <>
                                        <span className="button-spinner" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit application
                                        <ArrowRight size={18} />
                                    </>
                                )}

                            </button>

                        </div>

                    </form>

                </section>

            </main>

        </div>
    );
}

export default Apply;