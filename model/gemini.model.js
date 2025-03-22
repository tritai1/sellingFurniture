const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI("AIzaSyB9RVCrViH-46QwOjmq_EThy7HdC1XLpEI"); // Thay YOUR_API_KEY = API key của bạn

module.exports = genAI;
