var trucking = require('helper.trucking');
var findSources = require('helper.findSources');
var findStorage = require('helper.findStorage');

var roleExtensionBuilder = {
    

    
  /** @param {Creep} creep  **/
    run: function(creep) {
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        
	    }

	    if(creep.memory.building) {
	       var targets = creep.room.find(FIND_CONSTRUCTION_SITES, {
                filter: (s) => (s.structureType == STRUCTURE_TOWER)
            });
            //console.log(targets);
                    
	        //console.log("Construction sites: " + targets);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                } 
                
            } else {
                    var targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                            }
                    });
                    if(targets !== null) {
                        if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.say('to Tower');
                            creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                        }
                    } else {
                        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#f44242'}});
                        }
                    }
                }
	    }
	    
	    else {
	         findStorage.run(creep)
	    }
	}
};

module.exports = roleExtensionBuilder;