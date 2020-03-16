let map1 = new Map();
let map2 = new Map();
let map3 = new Map();

map1.set("z1", "iPhone");
map1.set("z2", "Huawei");
map1.set("z3", "Samsung");

// Price
map2.set(100, "z1");
map2.set(200, "z2");
map2.set(300, "z3");

// Time
map3.set(1, "z1");
map3.set(2, "z2");
map3.set(3, "z3");

function mapFunc() {
    const price = [];
    const time = [];
    for(key of map2.keys()){
        price.push(key)
        
    }
    const maxPrice = (Math.max(...price));
    const minPrice = (Math.min(...price));

    for(key of map3.keys()){
        time.push(key)
        
    }
    const maxTime = (Math.max(...time));
    const minTime = (Math.min(...time));

    console.log('> Price', map1.get(map2.get(minPrice)), minPrice, map2.get(minPrice), getKeyByValue(map3, map2.get(minPrice)))

    console.log('< Price', map1.get(map2.get(maxPrice)), maxPrice, map2.get(maxPrice), getKeyByValue(map3, map2.get(maxPrice)))

    console.log("> Time", map1.get(map3.get(minTime)), getKeyByValue(map2, map3.get(minTime)), map3.get(minTime), minTime)

    console.log("< Time", map1.get(map3.get(maxTime)), getKeyByValue(map2, map3.get(maxTime)), map3.get(maxTime), maxTime)

}

mapFunc()

function getKeyByValue(ob, str){
    for(key of ob.keys()){
        if(ob.get(key) === str)
            return key
    }
}
