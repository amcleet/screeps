var findStorage = require('helper.findStorage');
var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.memory.harvesting && creep.carry.energy == 0) {
            creep.memory.harvesting = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.harvesting = true;
	        creep.say('⚡   transfering');
	    }

    if(creep.memory.harvesting) {
            var storageContainer = Game.getObjectById('5a238b3f9ae8b65b011e0ebc');
            
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION  && structure.energy < structure.energyCapacity) ||
                                (structure.structureType == STRUCTURE_SPAWN && structure.energy < structure.energyCapacity);
                    }
            });
            
            var sources = creep.pos.findClosestByRange(targets);
            
            if(targets.length) {
                if(creep.transfer(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else {
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                //console.log(targets);
                        
    	        //console.log("Construction sites: " + targets);
                if(targets.length) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    } 
                    
                }
            }
        }
        
        else {
            findStorage.run(creep)
        }
	}
};

module.exports = roleHarvester;