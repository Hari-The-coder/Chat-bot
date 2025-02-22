// /* script.js */

// document.addEventListener("DOMContentLoaded", () => {
//     const chatBox = document.getElementById("chatBox");
//     const userInput = document.getElementById("userInput");

//     const responses = {
//         "hello": "Hello! How can I assist you today?",
//         "fever": "For fever, drink plenty of fluids and take rest. If it persists, consult a doctor.",
//         "headache": "Try drinking water, resting, or taking a mild pain reliever if necessary.",
//         "cold": "Stay hydrated, get enough rest, and consider warm soups or herbal tea.",
//         "default": "I'm not sure about that. Please consult a medical professional."
//     };

//     function appendMessage(content, className) {
//         const messageDiv = document.createElement("div");
//         messageDiv.className = `chat-message ${className}`;
//         messageDiv.textContent = content;
//         chatBox.appendChild(messageDiv);
//         chatBox.scrollTop = chatBox.scrollHeight;
//     }

//     function sendMessage() {
//         const userText = userInput.value.trim().toLowerCase();
//         if (!userText) return;

//         appendMessage(userText, "user");
//         userInput.value = "";

//         setTimeout(() => {
//             const botResponse = responses[userText] || responses["default"];
//             appendMessage(botResponse, "bot");
//         }, 1000);
//     }

//     document.querySelector("button").addEventListener("click", sendMessage);
//     userInput.addEventListener("keypress", (event) => {
//         if (event.key === "Enter") {
//             sendMessage();
//         }
//     });
// });
