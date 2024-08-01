module.exports = (otp) => {
    const emailTemplate = `
         <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); position: relative;">
            <div style="background-image: url('https://res.cloudinary.com/dijeksdto/image/upload/v1722513712/ctlognotext_rlvm4r.png'); background-repeat: no-repeat; background-position: center; background-size: 30%; opacity: 0.3; position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: 10px;"></div>

            <div style="position: relative; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); padding: 10px; margin-bottom: 1rem;">
                <div style="display: flex; gap: 10px; align-items: center;">
                    <div style="width: 18px; height: 16px;">
                        <img src="https://res.cloudinary.com/dijeksdto/image/upload/v1722513712/ctlognotext_rlvm4r.png" style="width: 100%; height: 100%;">
                    </div>
                    <div style="width: 50%;">
                        <img src="https://res.cloudinary.com/dijeksdto/image/upload/v1722513939/CAR_TRADER_PK_onungg.png" style="width: 100%; height: 100%;">
                    </div>
                </div>
                <div style="width: 16px; height: 16px;">
                    <img src="https://res.cloudinary.com/dijeksdto/image/upload/v1722514123/bluetick_jagdyl.png" style="width: 100%; height: 100%;">
                </div>
            </div>

            <div style="position: relative; text-align: center; margin-bottom: 20px; padding-top: 20px;">
                <h1 style="color: #333;">OTP Car Trader Pk</h1>
            </div>
            <div style="position: relative; text-align: center; font-size: 24px; font-weight: bold; color: #007bff; margin-bottom: 30px;">
                Your OTP: <span id="otp_code" style="font-size: 32px; font-weight: 800;">${otp}</span></div>
            <p style="position: relative; font-size: 14px; color: #666; text-align: center;">Please use the above OTP to authenticate your action.</p>

            <hr style="position: relative; width: 60%; margin: auto;">
            <p style="position: relative; font-size: 12px; text-align: center; margin-top: 20px; font-weight: 100; color: #a1a1a1; padding-top: 10px;">
                <a href="https://cartraderpk.com" style="list-style: none; text-decoration: none; color: rgba(73, 164, 224, 0.8);">cartraderpk.com</a> reserves all rights to the content and software system.
            </p>
        </div>
    </div>
        
        `;
    return emailTemplate;
};