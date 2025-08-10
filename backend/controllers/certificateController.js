// import { createCertificate, getCertificates } from "../models/certificateModel.js";

// export const addCertificate = (req, res) => {
//   const { name, course, duration } = req.body;
//   if (!name || !course || !duration) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   createCertificate(name, course, duration, (err, result) => {
//     if (err) {
//       console.error("❌ Error inserting certificate:", err);
//       return res.status(500).json({ error: "Database error" });
//     }
//     res.status(201).json({ message: "Certificate created successfully" });
//   });
// };

// export const listCertificates = (req, res) => {
//   getCertificates((err, results) => {
//     if (err) {
//       console.error("❌ Error fetching certificates:", err);
//       return res.status(500).json({ error: "Database error" });
//     }
//     res.json(results);
//   });
// };

import db from "../models/db.js";

// Add certificate
export const addCertificate = (req, res) => {
    const { full_name, qualification, institution, course_name, domain, course_duration } = req.body;

    if (!full_name || !qualification || !institution || !course_name || !course_duration) {
        return res.status(400).json({ error: "All required fields must be provided" });
    }

    const sql = `
        INSERT INTO certificates (full_name, qualification, institution, course_name, domain, course_duration)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [full_name, qualification, institution, course_name, domain || "Web Development", course_duration], 
        (err, result) => {
            if (err) {
                console.error("Error inserting data:", err);
                return res.status(500).json({ error: "Database insert failed" });
            }
            res.status(201).json({ message: "Certificate added successfully", id: result.insertId });
        }
    );
};

// List certificates
export const listCertificates = (req, res) => {
    db.query("SELECT * FROM certificates", (err, results) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Database fetch failed" });
        }
        res.json(results);
    });
};
