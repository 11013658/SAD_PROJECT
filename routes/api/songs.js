const router = require("express").Router();
let Song= require('../../models/Songs');

//Get list of songs in library
router.route('/list').get((req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Add song to library
router.route('/add').post((req, res) => {
    const newSong = new Song({
        name: req.body.name,
        song_name: req.body.song_name,
        artist: req.body.artist
    });
  
    newSong.save()
    .then(() => res.json('Song added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  //Delete song from library
  router.route('/:id').get((req, res) => {
    Song.findById(req.params.id)
      .then(song => res.json(song))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Song.findByIdAndDelete(req.params.id)
      .then(() => res.json('Song deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;