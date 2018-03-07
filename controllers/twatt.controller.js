const OAuth = require('oauth');

module.exports = {
    searchTweet (req, res) {
        let oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            'iXJGJBdyEyFjxtdYBAcAbeoTY',
            'BkhZXiuWw29HvjtJvFc99SF6C4LGoywgVLgzUqHIeUSywD3g6l',
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        oauth.get(
            'https://api.twitter.com/1.1/trends/place.json?id=23424977',
            '63960633-TwyHk2Dav1F1g4VmkEOkeZ7Dj613ihjHF03Oi2c4a', //test user token 
            'bcVE0et6LVyYjdxk8fAMT8ezPFDABzrWuvUGvlFtqbaU4', //test user secret             
            function (e, data) {
                if (e) console.error(e);
                res.status(200).json({
                    data:JSON.parse(data)
                })
            });
    },
    timelineTweet (req, res) {
        let oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            'iXJGJBdyEyFjxtdYBAcAbeoTY',
            'BkhZXiuWw29HvjtJvFc99SF6C4LGoywgVLgzUqHIeUSywD3g6l',
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            '63960633-TwyHk2Dav1F1g4VmkEOkeZ7Dj613ihjHF03Oi2c4a', //test user token 
            'bcVE0et6LVyYjdxk8fAMT8ezPFDABzrWuvUGvlFtqbaU4', //test user secret             
            function (e, data) {
                if (e) console.error(e);
                res.status(200).json({
                    data: JSON.parse(data)
                })
            });
    },
    searchTweetbyKeyword (req, res) {
        let oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            'iXJGJBdyEyFjxtdYBAcAbeoTY',
            'BkhZXiuWw29HvjtJvFc99SF6C4LGoywgVLgzUqHIeUSywD3g6l',
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.keyword}`,
            '63960633-TwyHk2Dav1F1g4VmkEOkeZ7Dj613ihjHF03Oi2c4a', //test user token 
            'bcVE0et6LVyYjdxk8fAMT8ezPFDABzrWuvUGvlFtqbaU4', //test user secret             
            function (e, data) {
                if (e) console.error(e);
                res.status(200).json({
                    data: JSON.parse(data)
                })
            });
    },
    postNewTweet (req, res) {
        let oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            'iXJGJBdyEyFjxtdYBAcAbeoTY',
            'BkhZXiuWw29HvjtJvFc99SF6C4LGoywgVLgzUqHIeUSywD3g6l',
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json?status=${req.query.status}`,
            '63960633-TwyHk2Dav1F1g4VmkEOkeZ7Dj613ihjHF03Oi2c4a', //test user token 
            'bcVE0et6LVyYjdxk8fAMT8ezPFDABzrWuvUGvlFtqbaU4', //test user secret
            req.query.status,
            'hey',
            function (e, data) {
                if (e) console.error(e);
                res.status(200).json({
                    data: JSON.parse(data)
                })
            });
    }
}