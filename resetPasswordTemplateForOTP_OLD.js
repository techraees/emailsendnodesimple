module.exports = (otp) => {
        const emailTemplate = `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 20px;">
                <h1 style="color: #333;">OTP Password</h1>
            </div>
            <div style="text-align: center; font-size: 24px; font-weight: bold; color: #007bff; margin-bottom: 30px;">Your OTP: <span id="otp_code">${otp}</span></div>
            <p style="font-size: 14px; color: #666; text-align: center;">Please use the above OTP to authenticate your action.</p>
        </div>
    </div>
        
        `;
        return emailTemplate;
    };