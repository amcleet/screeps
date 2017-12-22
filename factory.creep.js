var createCreeps = {

    run: function(harvesterCount, upgraderCount, builderCount, builderExtCount, masonCount, truckerCount, truckerLinkCount) {

        /**SET CREEP STRENGTHS**/
        var lowStrength = [WORK, CARRY, MOVE];
        var truckerStrength = [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE];
        var medStrength = [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE];
        var upgraderStrength = [WORK, WORK, WORK, WORK, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE];
        var harvesterStrength = [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE];
        var extStrength = [WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE];
        /**SET CREEP STRENGTHS**/

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var extBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'extBuilder');
        var masons = _.filter(Game.creeps, (creep) => creep.memory.role == 'mason');
        var truckers = _.filter(Game.creeps, (creep) => creep.memory.role == 'trucker');
        var linkTruckers = _.filter(Game.creeps, (creep) => creep.memory.role == 'linkTrucker');
        var creepCount = harvesterCount + upgraderCount + builderCount + builderExtCount + masonCount + truckerCount + truckerLinkCount;
        var creepTotal = _.filter(Game.creeps);

        console.log('Harvesters: ' + harvesters.length + '/' + harvesterCount);
        console.log('Upgraders: ' + upgraders.length + '/' + upgraderCount);
        console.log('Builders: ' + builders.length + '/' + builderCount);
        console.log('Extension Builders: ' + extBuilders.length + '/' + builderExtCount);
        console.log('Masons: ' + masons.length + '/' + masonCount);
        console.log('Truckers: ' + truckers.length + '/' + truckerCount);
        console.log('Link Truckers: ' + linkTruckers.length + '/' + truckerLinkCount);
        console.log('Total Pop: ' + creepTotal.length + '/' + creepCount);
        console.log('--------------------------------------------------------');

        if (linkTruckers.length < truckerLinkCount) {

            if (harvesters.length == 0) {
                var harverstername = 'Harvester' + Game.time;
                console.log('Attempt: Spawning new harvester: ' + harverstername);
                Game.spawns['Spawn1'].spawnCreep(lowStrength, harverstername, { memory: { role: 'harvester' } });

            } else {

                var builderName = 'LinkTrucker' + Game.time;
                console.log('Attempt: Spawning new linkTrucker: ' + builderName);
                Game.spawns['Spawn1'].spawnCreep(lowStrength, builderName, { memory: { role: 'linkTrucker' } });
            }
        } else if (harvesters.length < harvesterCount) {

            if (harvesters.length == 0) {
                var harverstername = 'Harvester' + Game.time;
                console.log('Attempt: Spawning new harvester: ' + harverstername);
                Game.spawns['Spawn1'].spawnCreep(lowStrength, harverstername, { memory: { role: 'harvester' } });

            } else {

                var harverstername = 'Harvester Full' + Game.time;
                console.log('Attempt: Spawning new harvester: ' + harverstername);
                Game.spawns['Spawn1'].spawnCreep(lowStrength, harverstername, { memory: { role: 'harvester' } });
            }

        } else if (truckers.length < truckerCount) {

            var builderName = 'Trucker' + Game.time;
            console.log('Attempt: Spawning new trucker: ' + builderName);
            Game.spawns['Spawn1'].spawnCreep(lowStrength, builderName, { memory: { role: 'trucker' } });

        } else if (masons.length < masonCount) {

            var builderName = 'Mason' + Game.time;
            console.log('Attempt: Spawning new Mason: ' + builderName);
            Game.spawns['Spawn1'].spawnCreep(lowStrength, builderName, { memory: { role: 'mason' } });

        } else if (extBuilders.length < builderExtCount) {

            var builderName = 'extBuilder' + Game.time;
            console.log('Attempt: Spawning new extBuilder: ' + builderName);
            Game.spawns['Spawn1'].spawnCreep(lowStrength, builderName, { memory: { role: 'extBuilder' } });

        } else if (upgraders.length < upgraderCount) {

            var upgraderName = 'Upgrader' + Game.time;
            console.log('Attempt: Spawning new upgrader: ' + upgraderName);
            Game.spawns['Spawn1'].spawnCreep(lowStrength, upgraderName, { memory: { role: 'upgrader' } });

        } else if (builders.length < builderCount) {

            var builderName = 'Builder' + Game.time;
            console.log('Attempt: Spawning new builder: ' + builderName);
            Game.spawns['Spawn1'].spawnCreep(lowStrength, builderName, { memory: { role: 'builder' } });

        }

    }
};

module.exports = createCreeps;