var findSources = {

    /** @param {Creep} creep **/
    run: function(creep) {
            
            
            var sources = creep.pos.findClosestByRange(FIND_SOURCES, {
                    filter: (structure) => {
                        return structure.energy != 0;
                    }
            });
            var droppedResource = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            
            if(false) {
                creep.say('Cleaning');
                console.log(creep +" moving to droppedResource: " + droppedResource);
                if(creep.pickup(droppedResource) == ERR_NOT_IN_RANGE) {
                    
                    creep.moveTo(droppedResource, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            } else {
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.say('to Source');
                    console.log(creep + " moving to source: " + sources);
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
                }  
            }
    }
                    
};

module.exports = findSources;