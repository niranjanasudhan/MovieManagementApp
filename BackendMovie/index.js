const express = require("express");
const movieModel = require("./model/movieDb");
const cors = require('cors');
const app = new express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.post('/addMovie', async(req, res) => {
    var data = await movieModel(req.body);
    data.save();
    res.send({ status: "Data saved" })
})

//to view all books
app.get('/viewMovie', async(req, res) => {
    var data = await movieModel.find();
    res.json(data);
})

app.get('/viewoneMovie', async(req, res) => {
    let id = req.body._id
    var data = await movieModel.findOne(id)
    res.json(data);
})

//delete
app.delete('/deleteMovie/:id', async(req, res) => {
    console.log(req.params);
    let id = req.params.id;
    await movieModel.findByIdAndDelete(id);
    res.json({ status: "deleted" })

})

//update
app.put("/edit/:id", async(req, res) => {
    let id = req.params.id;
    try {
        var data = await movieModel.findByIdAndUpdate(id, req.body)
        res.json({ status: "updated" })
    } catch (err) {
        res.status(500).send(err)
    }

})

app.listen(3008, () => {
    console.log("Port 3008 is up and running");
})