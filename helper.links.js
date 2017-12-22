var links = {
    
    run: function() {
    
    var sourceLink1 = Game.getObjectById('5a34753b2245486dc297de6e');
    var sourceLink2 = Game.getObjectById('5a383a87e8c1691d8cef2989');
    var targetLink = Game.getObjectById('5a313feb5de4ad747b55457e');
    
    sourceLinks = [sourceLink1,sourceLink2];
    
    
    for(var i in sourceLinks) {
            if (sourceLinks[i].energy > 0) {
            sourceLinks[i].transferEnergy(targetLink);
            }
        }

    }


}; 

    
module.exports = links;
