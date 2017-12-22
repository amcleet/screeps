//import modules


var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleTrucker = require('role.trucker');
var roleLinkTrucker = require('role.trucker.links');
var roleBuilderExt = require('role.builder.extenstions');
var roleMason = require('role.mason');
var creepFactory = require('factory.creep');
var cremateCreeps = require('factory.crematorium');
var towerDefense = require('defense.tower');
var links = require('helper.links');

/////////////////////
// Set Creep Count //
/////////////////////
var harvesterCount = 3;
var upgraderCount = 2;
var builderCount = 3;
var builderExtCount = 0;
var masonCount = 0;
var truckerCount = 0;
var truckerLinkCount = 0;
module.exports.loop = function() {

    console.log("***********************");
    console.log("*****NEW RUN CYCLE*****");
    console.log("***********************");

    //Cremate dead creeps
    cremateCreeps.run();

    //create creeps
    creepFactory.run(harvesterCount, upgraderCount, builderCount, builderExtCount, masonCount, truckerCount, truckerLinkCount);

    //Defend at all costs
    //towerDefense.run();

    //Transfer Between Links
    //links.run();

    //Run creeps
    for (var name in Game.creeps) {

        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'extBuilder') {
            roleBuilderExt.run(creep);
        }
        if (creep.memory.role == 'mason') {
            roleMason.run(creep);
        }
        if (creep.memory.role == 'trucker') {
            roleTrucker.run(creep);
        }
        if (creep.memory.role == 'linkTrucker') {
            roleLinkTrucker.run(creep);
        }

    }
}