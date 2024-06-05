const prompt = require('prompt');

var victories = 0;
var defeats = 0;
let rankBalance;
let rankLevel;

prompt.start();
prompt.get([
    {
        name: 'victories',
        required: true,
        message: "How many victories does the player have?\n"
    },
    {
        name: 'defeats',
        required: true,
        message: "How many defeats does the player have?\n"
    }], function(err, result) {

        const victoriesCount = Number(result.victories);
        const defeatsCount = Number(result.defeats);
        rankBalance = victoriesCount - defeatsCount;

        switch (true) {
            case (victoriesCount < 10):
                rankLevel = "Iron";
                break;
            case (victoriesCount >= 11 && victoriesCount <= 20):
                rankLevel = "Bronze";
                break;
            case (victoriesCount >= 21 && victoriesCount <= 50):
                rankLevel = "Silver";
                break;
            case (victoriesCount >= 51 && victoriesCount <= 80):
                rankLevel = "Gold";
                break;
            case (victoriesCount >= 81 && victoriesCount <= 90):
                rankLevel = "Diamond";
                break;
            case (victoriesCount >= 91 && victoriesCount <= 100):
                rankLevel = "Legendary";
                break;
            case (victoriesCount >= 101):
                rankLevel = "Immortal";
                break;
            default:
                console.log("The player does not have enough victories for a level.");
        }
        
        if (victoriesCount !== 0)
            console.log(`The Hero has a balance of ${rankBalance} and is at the ${rankLevel} level!`);
    }
);
