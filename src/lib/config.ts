import axios from "axios";
import Medusa from "@medusajs/medusa-js"
import { MEDUSA_BACKEND_URL } from "./constants";

export const client = axios.create({
	baseURL: "http://localhost:8000",
});


export const medusaClient = new Medusa({
	baseUrl: MEDUSA_BACKEND_URL || "http://localhost:9000",
	maxRetries: 3,
})