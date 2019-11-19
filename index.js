var Twit = require('twit')
var T = new Twit({
 consumer_key: 'nwFKvDy1DMKBVucjghOlWJNww',
 consumer_secret: 'hCZk6eqzsgazVIsR9ntoROuKJRiG2CbkiAyr0VdO9yKRMBB676',
 access_token: '1196469941966450688-UwN83XOEstkBbv9USmfNrCPhxiNqZD',
 access_token_secret: 'MpFz8W6pJ7mISQgTpUkKZYBLiwpPGQ5NG7iOD2SGv3SAd',
})

TAG = 'NFL'
TOP = 1
var stream = T.stream('statuses/filter', { track: TAG, language: 'en'})
stream.on('tweet', function (tweet) {
   console.log(tweet)
})

//HTTP GET Ocp-Apim-Subscription-Key: {d2f8d0e21502478ea5896060ae51994a}

//  search twitter for all tweets containing the word 'banana' since July 11, 2011


// T.get('search/tweets', { q: TAG, count: TOP , lang: 'en'}, function(err, data, response) {
//     console.log(data)
//   })


// <a href="https://twitter.com/intent/tweet?button_hashtag=NFL&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #NFL</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>