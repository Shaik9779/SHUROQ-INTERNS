// const Application = require("../models/Application");

// const createApplication = async (req, res) => {
//     try {
//         const {
//             name,
//             email,
//             phone,
//             education,
//             role
//         } = req.body;

//         // Basic validation
//         if (!name || !email || !phone || !education || !role) {
//             return res.status(400).json({
//                 success: false,
//                 message: "All fields are required"
//             });
//         }

//         const application = await Application.create({
//             name,
//             email,
//             phone,
//             education,
//             role
//         });

//         res.status(201).json({
//             success: true,
//             message: "Application submitted successfully",
//             application
//         });

//     } catch (error) {
//         console.error(error);

//         res.status(500).json({
//             success: false,
//             message: "Something went wrong"
//         });
//     }
// };

// module.exports = {
//     createApplication
// };
const Application = require("../models/Application");

const createApplication = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            education,
            role
        } = req.body || {};

        // Basic validation
        if (!name || !email || !phone || !education || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const application = await Application.create({
            name,
            email,
            phone,
            education,
            role
        });

        res.status(201).json({
            success: true,
            message: "Application submitted successfully",
            application
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

module.exports = {
    createApplication
};