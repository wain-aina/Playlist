const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect("mongodb://0.0.0.0:27017/songsDB", {useNewUrlParser: true});

const songSchema = ({
    name:String,
    artist:String
});

const chillModel = new mongoose.model('model1', songSchema);
const jamaicaModel = new mongoose.model('model2', songSchema);
const loveModel = new mongoose.model('model3', songSchema);
const religiousModel = new mongoose.model('model4', songSchema);
const sadHoursModel = new mongoose.model('model5', songSchema);
const shereheModel = new mongoose.model('model6', songSchema);
const trapModel = new mongoose.model('model7', songSchema);

app.get("/", (req, res) =>{
    res.render("landing");
});

app.route("/:section")
    .get((req, res)=>{
        switch(req.params.section){
            case "chill":
                res.render('chill', {newItems:chillSongs});
                break
            case "jamaica":
                res.render('jamaica', {newItems:jamaicaSongs});
                break
            case "love":
                res.render('love', {newItems:loveSongs});
                break
            case "religious":
                res.render('religious', {newItems:religiousSongs});
                break
            case "sadHours":
                res.render('sadHours', {newItems:sadHoursSongs});
                break
            case "sherehe":
                res.render('sherehe', {newItems:shereheSongs});
                break
            case "trap":
                res.render('trap', {newItems:trapSongs});
                break
        }
    })
    .post((req, res)=>{
        let newTitle = new Song({
        name: req.body.newSong,
        artist: req.body.newArtist
    });
        switch(req.params.section){
            case "chill":
            chillSongs.push(newTitle);
            break;
        case "jamaica":
            jamaicaSongs.push(newTitle);
            break;
        case "love":
            loveSongs.push(newTitle);
            break;
        case "religious":
            religiousSongs.push(newTitle);
            break;
        case "sadHours":
            sadHoursSongs.push(newTitle);
            break;
        case "trap":
            trapSongs.push(newTitle);
            break;
        case "sherehe":
            shereheSongs.push(newTitle);
            break;
        }
        res.redirect('/' + req.params.section)
    });

// const chillSongs = []
// const jamaicaSongs = []
// const loveSongs = []
// const religiousSongs = []
// const sadHoursSongs = []
// const shereheSongs = []
// const trapSongs = []

// app.get("/", (req, res) =>{
//     res.render('landing');
// });
// app.get("/socials", (req, res) =>{
//     res.render('socials');
// });
//
// app.get("/chill", (req, res) =>{
//     res.render('chill', {newItems:chillSongs});
// });
//
// app.get("/jamaica", (req, res) =>{
//     res.render('jamaica', {newItems:jamaicaSongs});
// });
//
// app.get("/love", (req, res) =>{
//     res.render('love', {newItems:loveSongs});
// });
//
// app.get("/religious", (req, res) =>{
//     res.render('religious', {newItems:religiousSongs});
// });
//
// app.get("/sadHours", (req, res) =>{
//     res.render('sadHours', {newItems:sadHoursSongs});
// });
//
// app.get("/sherehe", (req, res) =>{
//     res.render('sherehe', {newItems:shereheSongs});
// });
//
// app.get("/trap", (req, res) =>{
//     res.render('trap', {newItems:trapSongs});
// });

// app.post("/chill", function(req, res){
//     let newTitle = {
//         name: req.body.newSong,
//         artist: req.body.newArtist
//     };
//     chillSongs.push(newTitle);
//     res.redirect('/chill');
// });
//
// app.post("/jamaica", function(req, res){
//     let newTitle = {
//         name: req.body.newSong,
//         artist: req.body.newArtist
//     };
//     jamaicaSongs.push(newTitle);
//     res.redirect('/jamaica');
// });
//
// app.post("/love", function(req, res){
//     let newTitle = {
//         name: req.body.newSong,
//         artist: req.body.newArtist
//     };
//     loveSongs.push(newTitle);
//     res.redirect('/love');
// });
//
// app.post("/religious", function(req, res){
//     let newTitle = {
//         name: req.body.newSong,
//         artist: req.body.newArtist
//     };
//     religiousSongs.push(newTitle);
//     res.redirect('/religious');
// });
//
// app.post("/sadHours", function(req, res){
//     let newTitle = {
//         name: req.body.newSong,
//         artist: req.body.newArtist
//     };
//     sadHoursSongs.push(newTitle);
//     res.redirect('/sadHours');
// });
//
// app.post("/sherehe", function(req, res){
//     let newTitle = {
//         name: req.body.newSong,
//         artist: req.body.newArtist
//     };
//     shereheSongs.push(newTitle);
//     res.redirect('/sherehe');
// });
//
// app.post("/trap", function(req, res){
//     let newTitle = {
//         name: req.body.newSong,
//         artist: req.body.newArtist
//     };
//     trapSongs.push(newTitle);
//     res.redirect('/trap');
// });

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

