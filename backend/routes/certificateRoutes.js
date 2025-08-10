import express from "express";
import { addCertificate, listCertificates } from "../controllers/certificateController.js";

const router = express.Router();

router.post("/", addCertificate);
router.get("/", listCertificates);

export default router;
