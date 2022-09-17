const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const body = JSON.parse(req.body);

    const data = {
        to: "brentnewman917@gmail.com",
        from: "brentnewman917@gmail.com",
        name: `${body.fullName}`,
        subject: `${body.email} sent you a message from your portfolio!`,
        text: `${body.message}`,
    };

    await mail
        .send(data)
        .then(() => {
            console.log("Email sent");
        })
        .catch((error) => {
            console.error(error);
        });

    res.status(200).json({ status: "OK" });
};
