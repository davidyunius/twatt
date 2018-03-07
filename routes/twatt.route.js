const express = require('express')
const router = express.Router()
const twattController = require('../controllers/twatt.controller')

router
.get('/', twattController.searchTweet)
.get('/timeline', twattController.timelineTweet)
.get('/search', twattController.searchTweetbyKeyword)
.post('/postStatus', twattController.postNewTweet)

module.exports = router