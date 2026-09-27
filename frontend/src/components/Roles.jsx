// import { Code2, Server, BarChart3, ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// // const roles = [
// //     {
// //         icon: Code2,
// //         title: "Frontend Developer",
// //         description:
// //             "Build responsive, accessible and engaging web experiences.",
// //         skills: ["React", "JavaScript", "CSS"]
// //     },
// //     {
// //         icon: Server,
// //         title: "Backend Developer",
// //         description:
// //             "Design APIs, services and systems that power modern products.",
// //         skills: ["Node.js", "Express", "MongoDB"]
// //     },
// //     {
// //         icon: BarChart3,
// //         title: "Data Analyst",
// //         description:
// //             "Turn raw data into meaningful insights and business decisions.",
// //         skills: ["Python", "SQL", "Power BI"]
// //     }
// // ];
// const roles = [
//     {
//         title: "Frontend Developer",
//         description: "Build modern and responsive web experiences.",
//         skills: ["React", "JavaScript", "CSS"]
//     },
//     {
//         title: "Backend Developer",
//         description: "Build APIs and scalable backend systems.",
//         skills: ["Node.js", "Express", "MongoDB"]
//     },
//     {
//         title: "Data Analyst",
//         description: "Transform data into meaningful insights.",
//         skills: ["Python", "SQL", "Power BI"]
//     },
//     {
//         title: "AI / ML Intern",
//         description: "Build intelligent solutions using data and machine learning.",
//         skills: ["Python", "ML", "Pandas"]
//     },
//     {
//         title: "Cloud Engineer",
//         description: "Work with cloud infrastructure and deployments.",
//         skills: ["AWS", "Docker", "Linux"]
//     },
//     {
//         title: "UI / UX Designer",
//         description: "Create intuitive and engaging digital experiences.",
//         skills: ["Figma", "UX", "Prototyping"]
//     }
// ];

// function Roles() {
//     return (
//         <section className="roles-section" id="roles">

//             <div className="section-heading">

//                 <div>
//                     <p className="eyebrow">OPPORTUNITIES</p>

//                     <h2>
//                         Find where you
//                         <span> belong.</span>
//                     </h2>
//                 </div>

//                 <p className="section-description">
//                     Explore our internship opportunities and find a role
//                     where you can learn, contribute and grow.
//                 </p>

//             </div>

//             <div className="roles-grid">

//                 {roles.map((role) => {

//                     const Icon = role.icon;

//                     return (
//                         <div className="role-card" key={role.title}>

//                             <div className="role-card-top">

//                                 <div className="role-icon">
//                                     <Icon size={22} />
//                                 </div>

//                                 <ArrowUpRight size={20} />

//                             </div>

//                             <h3>{role.title}</h3>

//                             <p>{role.description}</p>

//                             <div className="skill-list">

//                                 {role.skills.map((skill) => (
//                                     <span key={skill}>
//                                         {skill}
//                                     </span>
//                                 ))}

//                             </div>

//                             <Link to="/apply" className="role-link">
//                                 Apply for this role
//                                 <ArrowUpRight size={16} />
//                             </Link>

//                         </div>
//                     );
//                 })}

//             </div>

//         </section>
//     );
// }

// export default Roles;
import {
    Code2,
    Server,
    BarChart3,
    BrainCircuit,
    Cloud,
    Palette,
    ArrowUpRight
} from "lucide-react";

import { Link } from "react-router-dom";


const roles = [
    {
        icon: Code2,
        title: "Frontend Developer",
        description:
            "Build responsive, accessible and engaging web experiences.",
        skills: ["React", "JavaScript", "CSS"]
    },

    {
        icon: Server,
        title: "Backend Developer",
        description:
            "Design APIs, services and systems that power modern products.",
        skills: ["Node.js", "Express", "MongoDB"]
    },

    {
        icon: BarChart3,
        title: "Data Analyst",
        description:
            "Turn raw data into meaningful insights and business decisions.",
        skills: ["Python", "SQL", "Power BI"]
    },

    {
        icon: BrainCircuit,
        title: "AI / ML Intern",
        description:
            "Build intelligent solutions using data and machine learning.",
        skills: ["Python", "Machine Learning", "Pandas"]
    },

    {
        icon: Cloud,
        title: "Cloud Engineer",
        description:
            "Work with cloud infrastructure, deployment and scalable systems.",
        skills: ["AWS", "Docker", "Linux"]
    },

    {
        icon: Palette,
        title: "UI / UX Designer",
        description:
            "Create intuitive and engaging digital experiences for users.",
        skills: ["Figma", "UX", "Prototyping"]
    }
];


function Roles() {

    return (

        <section
            className="roles-section"
            id="roles"
        >

            {/* SECTION HEADER */}

            <div className="section-heading">

                <div>

                    <p className="eyebrow">
                        OPPORTUNITIES
                    </p>

                    <h2>
                        Find where you
                        <span> belong.</span>
                    </h2>

                </div>


                <p className="section-description">
                    Explore our internship opportunities and find
                    a role where you can learn, contribute and grow.
                </p>

            </div>


            {/* ROLES GRID */}

            <div className="roles-grid">

                {roles.map((role) => {

                    const Icon = role.icon;

                    return (

                        <div
                            className="role-card"
                            key={role.title}
                        >

                            {/* CARD TOP */}

                            <div className="role-card-top">

                                <div className="role-icon">

                                    <Icon size={22} />

                                </div>


                                <ArrowUpRight
                                    size={20}
                                />

                            </div>


                            {/* ROLE TITLE */}

                            <h3>
                                {role.title}
                            </h3>


                            {/* DESCRIPTION */}

                            <p>
                                {role.description}
                            </p>


                            {/* SKILLS */}

                            <div className="skill-list">

                                {role.skills.map((skill) => (

                                    <span
                                        key={skill}
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>


                            {/* APPLY LINK */}

                            <Link
                                to="/apply"
                                className="role-link"
                            >

                                Apply for this role

                                <ArrowUpRight
                                    size={16}
                                />

                            </Link>

                        </div>

                    );

                })}

            </div>

        </section>

    );

}


export default Roles;