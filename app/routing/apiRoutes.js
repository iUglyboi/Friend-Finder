var friends = require('../data/friends.js')
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends)
})
app.post('/api/friends', function(req, res){
var totalBetween;
var lowestTotal= 25;
var match;
var currentInput = req.body
for (var i in friends){
    totalBetween = 0;
    for (var i = 0; i < friends.length - 1; i++) {
        console.log(friends[i].name);
        totalDifference = 0;

        for (var j = 0; j < 15; j++) {
            totalBetween += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if(totalBetween < lowestTotalDifference){
                lowestTotalDifference = totalDifference;
                match = friends[i]
            }
        }}
        friends.push(currentInput)
        res.send([match, lowestTotalDifference])
    }})
}