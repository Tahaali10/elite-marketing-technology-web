// Get references to the HTML elements
const openChatBtn = document.getElementById("open-chat-button");
const closeChatBtn = document.getElementById("close-chat-button");
const chatContainer = document.getElementById("chat-container");
const chatWindow = document.getElementById("chat-window");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

// --- Event Listeners for Opening and Closing the Chat ---
openChatBtn.addEventListener("click", () => {
  chatContainer.classList.remove("hidden");
});

closeChatBtn.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
});

// --- Enhanced Chatbot Logic ---
function appendMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.classList.add(
    sender === "user" ? "user-message" : "bot-message"
  );

  // Check if message contains a URL to make it clickable
  if (message.includes("https://")) {
    const urlParts = message.split("https://");
    const beforeUrl = urlParts[0];
    const url = "https://" + urlParts[1];
    messageElement.innerHTML = `${beforeUrl}<a href="${url}" target="_blank" style="color: #007bff; text-decoration: underline;">${url}</a>`;
  } else {
    messageElement.textContent = message;
  }

  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (userMessage === "") {
    return;
  }

  appendMessage(userMessage, "user");
  chatInput.value = "";

  // Show typing indicator
  const typingIndicator = document.createElement("div");
  typingIndicator.classList.add("message", "bot-message", "typing");
  typingIndicator.textContent = "Typing...";
  chatWindow.appendChild(typingIndicator);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  setTimeout(() => {
    chatWindow.removeChild(typingIndicator);
    const botResponse = getBotResponse(userMessage);
    appendMessage(botResponse, "bot");
  }, 1000);
}

function getBotResponse(input) {
  const lowerInput = input.toLowerCase();

  // === GREETINGS & BASIC INFO ===
  if (
    lowerInput.includes("hello") ||
    lowerInput.includes("hi") ||
    lowerInput.includes("hey")
  ) {
    return "Hello! Welcome to Elite Marketing Technology. How can I assist you today? You can ask about our services, pricing, company info, careers, or book a free consultation!";
  } else if (lowerInput.includes("how are you")) {
    return "I'm doing great! Ready to help you with all your digital marketing and IT needs. What would you like to know about our services?";
  } else if (lowerInput.includes("thank")) {
    return "You're welcome! Is there anything else I can help you with regarding our digital marketing services?";
  } else if (lowerInput.includes("bye") || lowerInput.includes("goodbye")) {
    return "Thank you for chatting with Elite Marketing! Have a great day and feel free to reach out anytime for your digital marketing needs.";

    // === COMPANY INFORMATION ===
  } else if (
    lowerInput.includes("about") ||
    lowerInput.includes("company") ||
    lowerInput.includes("elite marketing")
  ) {
    return "Elite Marketing Technology is a full-service digital marketing and development agency based in Bahria Town Phase 4, Rawalpindi. We specialize in Digital Marketing, SEO, Website Development, and Branding Solutions for local and international clients. We have 110+ happy clients and 300+ successful projects completed by our team of 20+ creative professionals!";
  } else if (lowerInput.includes("mission") || lowerInput.includes("vision")) {
    return "Our mission is to empower businesses with smart, innovative, and performance-driven marketing and technology solutions that transform ideas into impact and growth into success. Our vision is to create a future where every brand has the tools needed to thrive in the digital landscape.";
  } else if (
    lowerInput.includes("location") ||
    lowerInput.includes("address") ||
    lowerInput.includes("where") ||
    lowerInput.includes("map") ||
    lowerInput.includes("google map")
  ) {
    return "📍 We are located at: Plot 26,27 Second floor, 4 Corniche Road, Phase 4 Bahria Town, Rawalpindi, 46220\n\n📱 Phone: +92 320 5019342\n📧 Email: info@elitemarketingtechnology.com\n\n🗺️ Google Maps Location: https://maps.app.goo.gl/nTzo8p9pgLwPS1Cv9\n\nClick the link above to open our location in Google Maps!";
  } else if (
    lowerInput.includes("experience") ||
    lowerInput.includes("years") ||
    lowerInput.includes("established")
  ) {
    return "We have 3+ years of experience serving 110+ happy clients with 300+ successful projects completed by our team of 20+ creative professionals. Our track record speaks for itself!";
  } else if (
    lowerInput.includes("team") ||
    lowerInput.includes("staff") ||
    lowerInput.includes("people")
  ) {
    return "We have a talented team of 20+ creative minds including digital strategists, web developers, SEO experts, graphic designers, and social media specialists working together to deliver exceptional results.";

    // === SERVICES - GENERAL ===
  } else if (
    lowerInput.includes("service") ||
    lowerInput.includes("what do you offer") ||
    lowerInput.includes("what can you do") ||
    lowerInput.includes("offer")
  ) {
    return "We offer comprehensive digital solutions:\n\n• 🌐 Website Development & Design\n• 📱 Social Media Marketing\n• 🔍 Search Engine Optimization (SEO)\n• 📲 Application Development\n• ⚖️ Business Setup & Legal Compliance\n• 🎯 All-in-One Business Solutions\n• 🛡️ IT Consulting & Cybersecurity\n\nWhich service would you like more details about?";

    // === WEBSITE DEVELOPMENT ===
  } else if (
    lowerInput.includes("website") ||
    lowerInput.includes("web development") ||
    lowerInput.includes("web design")
  ) {
    if (
      lowerInput.includes("price") ||
      lowerInput.includes("cost") ||
      lowerInput.includes("package")
    ) {
      return "💻 Website Development Packages:\n\n• Static Basic: CAD 700 (5 pages, responsive design)\n• Static Advanced: CAD 1300 (10 pages, advanced features)\n• WordPress Basic: CAD 1000 (5 pages, theme customization)\n• WordPress Advanced: CAD 2500 (15 pages, premium features)\n• E-commerce: CAD 3000 (up to 50 products)\n\n🛠️ Website Care Packages:\n• Basic: CAD 100/month\n• Standard: CAD 200/month  \n• Premium: CAD 400/month\n\nAll packages include responsive design and basic SEO!";
    } else if (
      lowerInput.includes("how long") ||
      lowerInput.includes("time") ||
      lowerInput.includes("duration")
    ) {
      return "⏱️ Website Development Timelines:\n• Static websites: 2-3 weeks\n• WordPress sites: 2-4 weeks\n• E-commerce sites: 5 weeks\n\nExact timing depends on project complexity. We provide detailed timelines during our free consultation!";
    } else if (
      lowerInput.includes("portfolio") ||
      lowerInput.includes("example") ||
      lowerInput.includes("work")
    ) {
      return "We have completed 50+ web projects for various industries! Our portfolio includes business websites, e-commerce stores, web applications, and custom portals. Would you like to see some examples during a consultation?";
    } else {
      return "🌐 We provide complete website development services:\n• Custom Website Development\n• Responsive Design (mobile-friendly)\n• E-commerce Solutions\n• WordPress Development\n• Website Maintenance & Support\n• Website Optimization\n\nAll our websites are SEO-optimized and designed to convert visitors into customers!";
    }

    // === SOCIAL MEDIA MARKETING ===
  } else if (
    lowerInput.includes("social media") ||
    lowerInput.includes("smm") ||
    lowerInput.includes("facebook") ||
    lowerInput.includes("instagram") ||
    lowerInput.includes("tiktok") ||
    lowerInput.includes("linkedin")
  ) {
    if (
      lowerInput.includes("price") ||
      lowerInput.includes("cost") ||
      lowerInput.includes("package")
    ) {
      return "📱 Social Media Marketing Packages:\n\n• STARTER: CAD 450/month (15 posts, 2 reels/week)\n• GROWTH: CAD 650/month (25 posts, 3 reels/week)  \n• SCALE: CAD 950/month (30 posts, 5 reels/week)\n\n🎯 Advertising Packages:\n• Google Ads: CAD 500-2000/month\n• Meta Ads: CAD 500-2000/month\n\nAll packages include custom graphics and performance reporting!";
    } else if (
      lowerInput.includes("result") ||
      lowerInput.includes("success") ||
      lowerInput.includes("roi")
    ) {
      return "We have managed 50+ successful SMM projects! Our clients typically see increased engagement, higher brand awareness, and qualified lead generation. We provide monthly analytics reports to track your ROI.";
    } else {
      return "📱 Our Social Media Marketing services include:\n• Content Creation & Branding\n• Social Media Strategy Development\n• Paid Advertising (Facebook, Instagram, LinkedIn, TikTok)\n• Page & Profile Optimization\n• Analytics & Performance Reporting\n• Community Management\n\nWe help you engage, influence, and convert your audience!";
    }

    // === SEO SERVICES ===
  } else if (
    lowerInput.includes("seo") ||
    lowerInput.includes("search engine") ||
    lowerInput.includes("google ranking") ||
    lowerInput.includes("organic")
  ) {
    if (lowerInput.includes("price") || lowerInput.includes("cost")) {
      return "🔍 SEO services are customized based on your industry and competition level. We offer monthly SEO packages starting from CAD 500. During our free consultation, we analyze your needs and provide a tailored quote.";
    } else {
      return "🔍 We provide comprehensive SEO services:\n• On-page SEO Optimization\n• Technical SEO Audits\n• Content Marketing Strategy\n• Link Building Campaigns\n• Local SEO Optimization\n• Monthly Performance Reports\n\nWe help you climb Google rankings and reach the right audience!";
    }

    // === APP DEVELOPMENT ===
  } else if (
    lowerInput.includes("app") ||
    lowerInput.includes("application") ||
    lowerInput.includes("mobile") ||
    lowerInput.includes("ios") ||
    lowerInput.includes("android")
  ) {
    return "📱 We develop powerful mobile applications for both Android and iOS platforms. Our app development services include:\n• Custom Mobile App Development\n• UI/UX Design\n• App Store Optimization\n• Ongoing Maintenance & Updates\n• Cross-platform Development\n\nWe build secure, scalable, and user-friendly apps that grow with your business!";

    // === BUSINESS SETUP ===
  } else if (
    lowerInput.includes("business setup") ||
    lowerInput.includes("legal") ||
    lowerInput.includes("compliance") ||
    lowerInput.includes("registration") ||
    lowerInput.includes("incorporation")
  ) {
    return "⚖️ We provide complete business setup services in Pakistan:\n• Company Registration & Incorporation\n• Tax Registration & Compliance\n• Legal Structure Setup\n• Business License Assistance\n• Ongoing Compliance Support\n\nSmart business starts with the right foundation!";

    // === ALL-IN-ONE SOLUTIONS ===
  } else if (
    lowerInput.includes("all in one") ||
    lowerInput.includes("complete") ||
    lowerInput.includes("package") ||
    lowerInput.includes("comprehensive")
  ) {
    return "🎯 Our All-in-One Business Solutions cover everything you need:\n• Website Development\n• Mobile App Creation\n• Digital Marketing\n• SEO Services\n• Business Setup\n• Ongoing Support\n\nPerfect for businesses that want everything under one roof for seamless growth!";

    // === CONTACT & CONSULTATION ===
  } else if (
    lowerInput.includes("contact") ||
    lowerInput.includes("call") ||
    lowerInput.includes("email") ||
    lowerInput.includes("number") ||
    lowerInput.includes("phone")
  ) {
    return "📞 Contact Elite Marketing:\n\n• Phone: +92 320 5019342\n• Email: info@elitemarketingtechnology.com\n• Address: Plot 26,27 Second floor, 4 Corniche Road, Phase 4 Bahria Town, Rawalpindi\n• Google Maps: https://maps.app.goo.gl/nTzo8p9pgLwPS1Cv9\n\nWe're available Monday to Friday, 9AM to 6PM!";
  } else if (
    lowerInput.includes("consultation") ||
    lowerInput.includes("free") ||
    lowerInput.includes("meeting") ||
    lowerInput.includes("discuss") ||
    lowerInput.includes("talk")
  ) {
    return "🎯 We offer FREE initial consultations! During our meeting, we'll:\n• Understand your business goals\n• Analyze your current digital presence\n• Provide strategic recommendations\n• Discuss pricing and timelines\n• Answer all your questions\n\nShall I connect you with our team to schedule your free consultation?";
  } else if (
    lowerInput.includes("quote") ||
    lowerInput.includes("pricing") ||
    lowerInput.includes("get started")
  ) {
    return "💼 To get a detailed quote, we recommend booking a free consultation. This allows us to understand your specific needs and provide accurate pricing. Would you like me to explain our general pricing structure or connect you with our sales team?";

    // === CAREERS ===
  } else if (
    lowerInput.includes("career") ||
    lowerInput.includes("job") ||
    lowerInput.includes("hire") ||
    lowerInput.includes("work") ||
    lowerInput.includes("vacancy") ||
    lowerInput.includes("position")
  ) {
    return "💼 We're always looking for talented individuals! Current opportunities may include:\n• Web Developers (HTML, CSS, JavaScript)\n• Graphic Designers (Figma, Adobe Suite)\n• Digital Marketing Specialists\n• SEO Experts\n\nPlease check our Careers page for current openings or send your resume to info@elitemarketingtechnology.com";

    // === PROCESS & WORKFLOW ===
  } else if (
    lowerInput.includes("process") ||
    lowerInput.includes("work") ||
    lowerInput.includes("how do you work") ||
    lowerInput.includes("workflow")
  ) {
    return "🔄 Our 8-step work process:\n\n1. Customer Query - We understand your needs\n2. Initial Meeting - Discuss project details\n3. Quotation - Transparent pricing\n4. Detailed Analysis - In-depth requirement study\n5. Invoices - Clear financial documentation\n6. Strategy & Roadmap - Actionable plan\n7. Onboarding Call - Smooth project kickoff\n8. Let's Work Together - Collaborative execution\n\nWe ensure clear communication at every step!";

    // === SUCCESS METRICS ===
  } else if (
    lowerInput.includes("client") ||
    lowerInput.includes("success") ||
    lowerInput.includes("project") ||
    lowerInput.includes("portfolio")
  ) {
    return "📊 Our Success Metrics:\n• 110+ Happy Clients\n• 300+ Successful Projects\n• 50+ Web Development Projects\n• 50+ Social Media Projects\n• 20+ Creative Team Members\n• 3+ Years of Experience\n\nWe have a proven track record of delivering results!";

    // === INDUSTRY SPECIFIC ===
  } else if (
    lowerInput.includes("industry") ||
    lowerInput.includes("sector") ||
    lowerInput.includes("niche")
  ) {
    return "We serve clients across various industries including:\n• E-commerce & Retail\n• Healthcare & Medical\n• Real Estate\n• Education\n• Technology\n• Hospitality\n• Professional Services\n\nOur strategies are tailored to your specific industry needs!";

    // === URGENT REQUESTS ===
  } else if (
    lowerInput.includes("urgent") ||
    lowerInput.includes("emergency") ||
    lowerInput.includes("asap") ||
    lowerInput.includes("immediately")
  ) {
    return '🚨 For urgent inquiries, please call us directly at +92 320 5019342 or email info@elitemarketingtechnology.com with "URGENT" in the subject line. Our team will prioritize your request!';

    // === TECHNICAL SUPPORT ===
  } else if (
    lowerInput.includes("support") ||
    lowerInput.includes("help") ||
    lowerInput.includes("problem") ||
    lowerInput.includes("issue")
  ) {
    return "🔧 For technical support or existing client inquiries, please contact our support team at info@elitemarketingtechnology.com or call +92 320 5019342. We offer various support packages to meet your needs.";

    // === PRICING & COST ===
  } else if (
    lowerInput.includes("price") ||
    lowerInput.includes("cost") ||
    lowerInput.includes("how much") ||
    lowerInput.includes("budget")
  ) {
    return "💰 Our pricing varies by service:\n\n• Website Development: CAD 700-3000\n• Social Media Marketing: CAD 450-950/month\n• SEO: Starting from CAD 500/month\n• App Development: Custom quotes\n• Business Setup: Custom packages\n\nAll services can be customized to fit your budget!";

    // === HELP & SUPPORT ===
  } else if (lowerInput.includes("help")) {
    return "🆘 I can help you with information about:\n\n• Our Services & Pricing\n• Company Information & Location\n• Contact Details & Free Consultations\n• Career Opportunities\n• Our Work Process & Portfolio\n• Industry-specific Solutions\n\nWhat would you like to know more about?";

    // === DEFAULT RESPONSE ===
  } else {
    return "I'm not sure I understand. At Elite Marketing Technology, we specialize in digital marketing, website development, SEO, app development, and business solutions. You can ask about:\n\n• Our services and pricing\n• Company information\n• Booking a free consultation\n• Career opportunities\n• Or type 'help' for more options!";
  }
}

// Event listeners for sending messages
sendButton.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Add initial welcome message when chat opens
openChatBtn.addEventListener("click", () => {
  // Only add welcome message if chat is empty
  if (chatWindow.children.length === 0) {
    setTimeout(() => {
      appendMessage(
        "Hello! I'm your Elite Marketing Technology assistant. I can help you with information about our services, pricing, company details, careers, and more. How can I assist you today?",
        "bot"
      );
    }, 500);
  }
});

// Add touch support for mobile devices
document.addEventListener("touchstart", function () {}, { passive: true });
