var towerDefense = {
    
    run: function() {
    
    var wallHP = 142000;
    var roadHP = 4600;
    var tower = Game.getObjectById('5a388ca6f3ce87260e00d73a');
    var tower2 = Game.getObjectById('5a2f093825fcbf46cb6fc975');
    var towers = [tower,tower2];
   
        if(towers.length) {
            for(var name in towers) {
                var tower = towers[name];
                
                var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if(closestHostile) {
                    tower.attack(closestHostile);
                } else {
                var walls = tower.room.find(FIND_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_WALL && s.hits < wallHP) ||
                                    (s.structureType == STRUCTURE_ROAD && s.hits < roadHP) ||
                                    (s.structureType == STRUCTURE_RAMPART && s.hits < wallHP) ||
                                    (s.structureType == STRUCTURE_CONTAINER && s.hits < s.hitsMax/2)
                                   
                });
                //sorts walls by building progress
               walls = walls.sort(function(a,b) {return (a.hits > b.hits) ? 1 : ((b.hits > a.hits) ? -1 : 0);} );
               var target = walls[0];
                if(target) {
                    tower.repair(target);
                }
                }
                
            }
        }
     }
    }; 
    
module.exports = towerDefense;
