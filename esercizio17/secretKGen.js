import crypto from "crypto";

// Generate a random string of a specific length
const generateRandomString = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
};

// Usage
const secretKey = generateRandomString(32); // You can adjust the length as needed

export { secretKey };
console.log("Generated Secret Key:", secretKey);