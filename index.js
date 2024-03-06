
const express = require("express")
const { todos_data } = require("./data");
const app = express()
app.use(express.json())

app.get("/task", (req, res) => {

    return res.json({ messgae: "Get is Runing" })
})

app.post("/task", (req, res) => {
    const requsest = req.body
    console.log(requsest);

    return res.json({ messgae: "post is Runing" })
})

app.put("/task/:id", (req, res) => {

    const id = req.params.id;
    const data = req.body;

    const finding = todos_data.find((e) => {
        return e.id == id;
    });


    const update = { ...finding, ...data };
    return res.json({ data: update });
});

app.delete("/task", (req, res) => {


    return res.json({ messgae: "delete is Runing" })
})


app.listen(5000, () => {
    console.log(`Server is running`)
})