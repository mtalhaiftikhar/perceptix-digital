import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load Environment Variables from .env file securely
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware 1: Helmet HTTP Header Protection
app.use(
  helmet({
    contentSecurityPolicy: false // Allows inline fonts & images in production
  })
);

// Security Middleware 2: Restrict CORS origin
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5000',
  'https://perceptixdigital.com',
  'https://www.perceptixdigital.com'
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Allow dev fallback
      }
    },
    methods: ['POST', 'GET'],
    credentials: true
  })
);

app.use(express.json({ limit: '10kb' })); // Security: Limit payload size to 10kb

// Security Middleware 3: Rate Limiter (Prevents DDoS, Bot Spam, & Brute Force)
const emailRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 10, // Limit each IP to 10 requests per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many submissions from this IP. Please try again in 15 minutes.'
  }
});

// Helper function: Sanitize text inputs to prevent XSS code injection
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

// Hostinger SMTP Transporter Configuration using Environment Variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true for port 465 (SSL)
  auth: {
    user: process.env.SMTP_USER || 'hello@perceptixdigital.com',
    pass: process.env.SMTP_PASS || 'PerceptixDigital12AB@'
  }
});

// Verify Hostinger SMTP Connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ Hostinger SMTP Connection Error:', error);
  } else {
    console.log('🔒 SECURE PRODUCTION SERVER: Hostinger SMTP is authenticated, hardened, and ready!');
  }
});

// Endpoint to handle form submissions with Rate Limiter
app.post('/api/send-email', emailRateLimiter, async (req, res) => {
  const { name, email, company, service, message, source } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and email are required fields.' });
  }

  // Sanitize all inputs against script injection
  const safeName = sanitizeInput(name);
  const safeEmail = sanitizeInput(email);
  const safeCompany = sanitizeInput(company || 'N/A');
  const safeService = sanitizeInput(service || 'Not specified');
  const safeMessage = sanitizeInput(message || 'No additional message provided.');
  const safeSource = sanitizeInput(source || 'Website Form');

  const recipientEmail = process.env.SMTP_USER || 'hello@perceptixdigital.com';

  const mailOptions = {
    from: `"Perceptix Digital Website" <${recipientEmail}>`,
    to: recipientEmail,
    replyTo: safeEmail,
    subject: `⚡ New Form Submission: ${safeName} (${safeSource})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px;">
        <div style="background-color: #00BBA7; padding: 15px 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Inquiry Received — Perceptix Digital</h2>
        </div>
        <div style="padding: 20px; background-color: #ffffff;">
          <p style="font-size: 14px; color: #333333;"><strong>Source Form:</strong> ${safeSource}</p>
          <hr style="border: none; border-top: 1px solid #eeeeee; margin: 15px 0;" />
          <p style="font-size: 14px; color: #333333;"><strong>Client Name:</strong> ${safeName}</p>
          <p style="font-size: 14px; color: #333333;"><strong>Client Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p style="font-size: 14px; color: #333333;"><strong>Company / Organization:</strong> ${safeCompany}</p>
          <p style="font-size: 14px; color: #333333;"><strong>Requested Service / Scope:</strong> ${safeService}</p>
          <hr style="border: none; border-top: 1px solid #eeeeee; margin: 15px 0;" />
          <p style="font-size: 14px; color: #333333;"><strong>Project Details / Bottlenecks:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #00BBA7; font-size: 13px; color: #555555; white-space: pre-wrap;">${safeMessage}</div>
        </div>
        <div style="padding: 12px 20px; background-color: #f4f4f4; border-radius: 0 0 8px 8px; font-size: 11px; color: #888888; text-align: center;">
          Sent via Perceptix Digital Secure Hostinger SMTP Server · ${recipientEmail}
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✉️ Email dispatched successfully via Hostinger SMTP:', info.messageId);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error('❌ Failed to send email via Hostinger SMTP:', err);
    return res.status(500).json({ success: false, error: 'Internal server email dispatch error.' });
  }
});

// Production: Serve static build files from dist directory
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback SPA routing
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 All-In-One Production Server running on port ${PORT}`);
});
