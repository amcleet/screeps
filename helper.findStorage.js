var findSources = require('helper.findSources');

var findStorage = {

    /** @param {Creep} creep **/
    run: function(creep) {


        var storageContainers = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_STORAGE) &&
                    structure.store[RESOURCE_ENERGY] > 350;
            }
        });

        if (storageContainers !== null) {

            if (creep.withdraw(storageContainers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                console.log(creep + " moving to container: " + storageContainers);
                creep.moveTo(storageContainers, { visualizePathStyle: { stroke: '#ffaa00' } });
            } else if (creep.withdraw(storageContainers, RESOURCE_ENERGY) == ERR_NOT_ENOUGH_RESOURCES) {
                console.log(creep + " Waiting");
            }


        } else {
            console.log(creep + " !!No Storage Containers Available!!");
            findSources.run(creep);
        }

    }

};

module.exports = findStorage;