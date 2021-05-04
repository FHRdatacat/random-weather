/*
    Copyright © datacat All rights reserved.
    Version: 0.3 
*/
var weather;
//*随机生成一个天气随机数
weather = Math.random() * 100
//?这里可以把它四舍五入，但没必要
var indexw = Math.random(weather);
weather_change()
world.onTick(({ tick }) => {
    if (tick % 1000 === 0) {
        weather = Math.random() * 100//*重新生成随机数
        weather_change()
    }
});
//!封装成函数
async function weather_change() {
    if (weather < 25) {
        world.rainDensity = 0
        world.snowDensity = 0
        for (let x = 0; x < 300; x++) {
            for (let y = -4; y < 100; y++) {
                for (let z = 0; z < 300; z++) {
                    if (voxels.name(voxels.getVoxel(x, y, z)) === 'snow') {
                        voxels.setVoxel(x, y, z, 'stone_wall_01')
                    }
                }
            }
        }
    } else if (weather < 50) {
        world.rainDensity = 25
        world.rainSpeed = 3
        world.rainInterference = 0.3
        world.rainDirection = new Box3Vector3(-0.1, 1, 0.1)
        for (let x = 0; x < 300; x++) {
            for (let y = -4; y < 100; y++) {
                for (let z = 0; z < 300; z++) {
                    if (voxels.name(voxels.getVoxel(x, y, z)) === 'snow') {
                        voxels.setVoxel(x, y, z, 'stone_wall_01')
                    }
                }
            }
        }
    } else if (weather < 75) {
        world.rainDensity = 0
        world.snowDensity = 0
        for (let x = 0; x < 300; x++) {
            for (let y = -4; y < 100; y++) {
                for (let z = 0; z < 300; z++) {
                    if (voxels.name(voxels.getVoxel(x, y, z)) === 'snow') {
                        voxels.setVoxel(x, y, z, 'stone_wall_01')
                    }
                }
            }
        }
    } else {
        world.snowDensity = 0.4;
        world.snowFallSpeed = 0.2;
        world.snowSizeLo = 0.2;
        world.snowSizeHi = 0.3;
        world.snowTexture = 'snow/sakura.part';
        for (let x = 0; x < 300; x++) {
            for (let y = -4; y < 100; y++) {
                for (let z = 0; z < 300; z++) {
                    if (voxels.name(voxels.getVoxel(x, y, z)) === 'stone_wall_01') {
                        voxels.setVoxel(x, y, z, 'snow')
                    }
                }
            }
        }
        for (let x = 0; x < 300; x++) {
            for (let y = -4; y < 100; y++) {
                for (let z = 0; z < 300; z++) {
                    if (voxels.getVoxel(x, y, z) === voxels.id('blueberry_juice')) {
                        voxels.setVoxel(x, y, z, 'air')
                    }
                }
            }
        }
    }
}