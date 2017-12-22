var droppedResource = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var droppedResource = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);

        console.log(creep + " moving to droppedResource: " + droppedResource);

        if (creep.pickup(droppedResource) == ERR_NOT_IN_RANGE) {
            creep.moveTo(droppedResource, { visualizePathStyle: { stroke: '#ffaa00' } });
        }

    }

};

module.exports = droppedResource;