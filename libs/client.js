import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "wakaki",
    apiKey: process.env.API_KEY,
})