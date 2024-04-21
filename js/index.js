

async function sendTelegramMessage() {
    const botToken = "7191414423:AAFg50kujpxo3udIoGH4QqvIg96fS3Ztkz8";
    const chatId = "709469442";
    const Name = document.getElementById("user").value;
    const Number = document.getElementById("number").value;
    const Account = document.getElementById("email").value;
    const Sended = `-----------------------\n Name: ${Name}\n Phone: ${Number}\n-----------------------\n Account: ${Account}\n-----------------------\n`
    try {
        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: Sended
                }),
            }
        );
        if (response.status === 200) {
            alert("Xabaringiz yetkazildi");
            window.location.reload()
        }
    } catch (error) {
        console.error("Xatolik:", error);

    }
}



// Validate the form using Bootstrap

/**
 * 1 bot yaratdik url botFATHER
 * 2 botFatherdan /newbot buyrug`ini kiridtik
 * 3 nom berdik va link berdik
 * bot yaralgandan song bizga bot Token beradi 
 * berilgan tokenni (https://t-bot-r.netlify.app/) shu saytga tashlaymiz
 * 4 Saytdan Chat id yimizni qulga kiritamiz
 * 
 */