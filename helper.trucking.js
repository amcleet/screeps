var trucking = {

    /** @param {Creep} creep **/
    run: function(creep) {
            // creep.say('Trucking');
           // Bring the ressources to the storage.
            var theStorage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ((structure.structureType == STRUCTURE_LINK || structure.structureType == STRUCTURE_CONTAINER) && structure.energy < structure.energyCapacity);
                }
            });
            var link = Game.getObjectById('5a34753b2245486dc297de6e')
            console.log(creep + " moving to container: " + theStorage);
            if (creep.transfer(theStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo( theStorage, {visualizePathStyle: {stroke: '#ffffff'}});
            }
            
        }
            
            
};

module.exports = trucking;