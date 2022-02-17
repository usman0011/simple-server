const expres = require("express");

const app = expres();

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    return res.json({
        message: "Weclome to simple server",
        version: "V1",
    });
});
