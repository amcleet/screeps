var findStorage = require('helper.findStorage');
var trucking = require('helper.trucking');


var roleMason = {

      
  /** @param {Creep} creep  **/
    run: function(creep) {
        var extBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'extBuilder');
        
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	       var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            //console.log(targets);
                    
	        //console.log("Construction sites: " + targets);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('🚧 build');
                } 
                
            } else {
               if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.say('Upgrading');
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#f44242'}});
            }
	        }   
	        
	    } else {
	         findStorage.run(creep);
	    }
	}
};

module.exports = roleMason;