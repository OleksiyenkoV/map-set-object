var city1 = {
    name: "Warsawa",
    population: 1200000,
    GetName: function(){console.log(this.name)},
    exportStr: function(){console.log(this.name,this.population)}
};

var city2 = {
    name: "Odessa",
    population: 10**6,
    GetName: function(){console.log(this.name)},
    exportStr: function(){console.log(this.name,this.population)}
};

city1.test=".";