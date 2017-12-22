var roleLinkTrucker = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        var link = Game.getObjectById('5a313feb5de4ad747b55457e');
        
        var theStorage = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_STORAGE);
                    }
            });
        

        if(creep.carry.energy == 0) {
            console.log(creep + " withdraw from link: " + link)
            if (creep.withdraw(link, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo( link, {visualizePathStyle: {stroke: '#ffffff'}});
            }            
         
        }
        else { 
            console.log(creep + " moving to container: " + theStorage);
             console.log(creep + " transfer to container: " + theStorage)
            if (creep.transfer(theStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo( theStorage, {visualizePathStyle: {stroke: '#ffffff'}});
            }
            
        }
	}
};

module.exports = roleLinkTrucker;