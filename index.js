const express = require("express");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
    let a = 0;
    for (let i = 0; i < 1000000000; i++)  a = a + i;
    
    res.send({
        message: "Looping done!",
        result: a
    })
    
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});