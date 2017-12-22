/*Transfer energy from sources to containers and picks up dropped resources*/
var trucking = require('helper.trucking');
var findSources = require('helper.findSources');
var roleTrucker = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.memory.trucking && creep.carry.energy == 0) {
            creep.memory.trucking = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.trucking && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.trucking = true;
	    }

        if(creep.memory.trucking) {
             
           var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            //console.log(targets);
                    
	        //console.log("Construction sites: " + targets);
            if(false) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                } 
                
            } else {
                  trucking.run(creep);
             }
                

        }
        else {
            findSources.run(creep);
        }
	}
};

module.exports = roleTrucker;