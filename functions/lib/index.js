"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitDemoRequest = exports.submitContactForm = void 0;
const https_1 = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const DATABASE_URL = "https://crownjewels2-contact-forms.firebaseio.com";
admin.initializeApp({
    databaseURL: DATABASE_URL
});
// Email validation helper
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
/**
 * Callable Function to handle Contact form submissions.
 * Validates inputs and pushes records to the Contact tree in Realtime Database.
 */
exports.submitContactForm = (0, https_1.onCall)({ cors: true }, async (request) => {
    const data = request.data;
    const uid = request.auth?.uid;
    if (!uid) {
        throw new https_1.HttpsError("unauthenticated", "Request requires active anonymous authentication.");
    }
    const { name, email, subject, message } = data;
    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
        throw new https_1.HttpsError("invalid-argument", "Valid name is required.");
    }
    if (!email || typeof email !== "string" || !isValidEmail(email)) {
        throw new https_1.HttpsError("invalid-argument", "Valid email address is required.");
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
        throw new https_1.HttpsError("invalid-argument", "Message content is required.");
    }
    try {
        const db = admin.database();
        const newContactRef = db.ref("Contact").push();
        await newContactRef.set({
            name: name.trim(),
            email: email.trim(),
            subject: subject ? String(subject).trim() : "General Inquiry",
            message: message.trim(),
            userId: uid,
            submittedAt: admin.database.ServerValue.TIMESTAMP
        });
        return { success: true, message: "Contact form submitted successfully." };
    }
    catch (error) {
        console.error("Failed to write contact form submission to RTDB", error);
        throw new https_1.HttpsError("internal", "An error occurred while saving your message. Please try again.");
    }
});
/**
 * Callable Function to handle Demo Request form submissions.
 * Validates inputs and pushes records to the Demo-Request tree in Realtime Database.
 */
exports.submitDemoRequest = (0, https_1.onCall)({ cors: true }, async (request) => {
    const data = request.data;
    const uid = request.auth?.uid;
    if (!uid) {
        throw new https_1.HttpsError("unauthenticated", "Request requires active anonymous authentication.");
    }
    const { name, storeName, email, phone, locations, currentSoftware, goals } = data;
    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
        throw new https_1.HttpsError("invalid-argument", "Valid name is required.");
    }
    if (!storeName || typeof storeName !== "string" || storeName.trim().length === 0) {
        throw new https_1.HttpsError("invalid-argument", "Store name is required.");
    }
    if (!email || typeof email !== "string" || !isValidEmail(email)) {
        throw new https_1.HttpsError("invalid-argument", "Valid email address is required.");
    }
    if (!phone || typeof phone !== "string" || phone.trim().length === 0) {
        throw new https_1.HttpsError("invalid-argument", "Phone number is required.");
    }
    if (!locations || typeof locations !== "string") {
        throw new https_1.HttpsError("invalid-argument", "Store location count profile is required.");
    }
    if (!currentSoftware || typeof currentSoftware !== "string") {
        throw new https_1.HttpsError("invalid-argument", "Current POS/Software system detail is required.");
    }
    try {
        const db = admin.database();
        const newDemoRef = db.ref("Demo-Request").push();
        await newDemoRef.set({
            name: name.trim(),
            storeName: storeName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            locations: locations.trim(),
            currentSoftware: currentSoftware.trim(),
            goals: goals || {},
            userId: uid,
            submittedAt: admin.database.ServerValue.TIMESTAMP
        });
        return { success: true, message: "Demo request submitted successfully." };
    }
    catch (error) {
        console.error("Failed to write demo request submission to RTDB", error);
        throw new https_1.HttpsError("internal", "An error occurred while scheduling your demo. Please try again.");
    }
});
//# sourceMappingURL=index.js.map