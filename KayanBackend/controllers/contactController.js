const handleContactForm = (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('Incomplete data');
    }
    console.log('Data received:', { name, email, message });

    res.json({ message: "Data received successfully", data: req.body });
};

module.exports = { handleContactForm };