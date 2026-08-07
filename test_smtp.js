import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hello@perceptixdigital.com',
    pass: 'PerceptixDigital12AB@'
  }
});

async function sendTest() {
  console.log('🔄 Attempting to send test email via Hostinger SMTP (smtp.hostinger.com:465)...');
  try {
    const info = await transporter.sendMail({
      from: '"Perceptix Digital Test" <hello@perceptixdigital.com>',
      to: 'hello@perceptixdigital.com',
      subject: '⚡ Test Email — Hostinger SMTP Verification',
      text: 'This is a test email sent to verify Hostinger SMTP delivery for hello@perceptixdigital.com.',
      html: '<h3>⚡ Hostinger SMTP Connection Test</h3><p>If you are reading this email, Hostinger SMTP delivery to <strong>hello@perceptixdigital.com</strong> is working 100% successfully!</p>'
    });
    console.log('✅ TEST EMAIL SENT SUCCESSFULLY!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  } catch (err) {
    console.error('❌ FAILED TO SEND TEST EMAIL:', err);
  }
}

sendTest();
