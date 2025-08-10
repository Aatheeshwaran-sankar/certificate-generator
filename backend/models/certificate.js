import db from "./db.js";

export const createCertificate = (name, course, duration, callback) => {
  const sql = "INSERT INTO certificates (name, course, duration) VALUES (?, ?, ?)";
  db.query(sql, [name, course, duration], callback);
};

export const getCertificates = callback => {
  const sql = "SELECT * FROM certificates";
  db.query(sql, callback);
};
