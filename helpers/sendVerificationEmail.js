const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email, token ) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const url = `${process.env.BASE_URL}/verify-email?token=${token}`;

    await transporter.sendMail({
        from: `"No-Reply" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Verify Your Email',
        html: `<p>Click <a href="${url}">here</a> to verify your email address.</p>`
    });
};

module.exports = sendVerificationEmail;