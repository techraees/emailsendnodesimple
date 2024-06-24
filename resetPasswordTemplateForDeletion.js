module.exports = (otp) => {
        const emailTemplate = `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #333;">Account Deletion Request</h1>
        </div>
        <div style="text-align: center; font-size: 24px; font-weight: bold; color: #007bff; margin-bottom: 30px;"><span id="otp_code">${'Recieved'}</span></div>
        <br/>
        <br/>

        <p style="font-size: 14px; color: #666; text-align: left;">Dear ${otp}!,
        <br/>
        <br/>


We have received your request to delete your account. Please note that this process will be completed within 30 days.
        <br/>
        <br/>

If you did not initiate this request, please log back into your account as soon as possible to cancel the deletion.
        <br/>
        <br/>

Thank you for your attention to this matter.
        <br/>
        <br/>
        <br/>

Best regards,
        <br/>
        <br/>

Car Trader Pk
        <br/>
cartraderpk.com
        <br/>
</p>
    </div>
</div>
    
    `;
        return emailTemplate;
};