// constructor
console.log("-->TrainStationsModel.js dit bestand zou in een folder 'model' mogen");
var TrainStationsModel = function(HTTPService) {
    this.httpService = new HTTPService();
};

// dit zorgt ervoor dat we als prototype ook de functies hebben van EventEmitter
TrainStationsModel.prototype = Object.create(EventEmitter.prototype);

TrainStationsModel.prototype.fetch = function(url){
    // we laden de data via httpService (onze JSONLoader)
    this.httpService.get(url, this.setData.bind(this));
}

TrainStationsModel.prototype.setData = function(data){
    // als de data verandert dan roepen we dat ook rond voor de rest van de app
    this.stations = data;
    this.emit("changed");
}

// deze functionaliteit zou naar een Model.prototype mogen (handig voor meer models)
TrainStationsModel.prototype.getAll = function() {
    var allStations = [];

    // met forEach loop je over alle elementen van een Array
    this.stations.forEach(function(station, index, array) {
        allStations.push({name:station.name, uic:station.uic});
    });
    return allStations;
};


// deze functionaliteit zou naar een Model.prototype.getByName mogen (handig voor meer models)
TrainStationsModel.prototype.getStationsByName = function(qry) {
    var filtered = this.stations.filter(function(station){
        return station.name.indexOf(qry) !== -1;
    });
    return filtered;
};

TrainStationsModel.prototype.getStationsByType = function(type) {
    var filtered = this.stations.filter(function(station){
        return station.type === type;
    });
    return filtered;
};

// deze functionaliteit zou naar een Model.prototype.getType mogen (handig voor meer models)
TrainStationsModel.prototype.getTypes = function() {
    var types = [];

    this.stations.forEach(function(station, index, array) {
        if(types.indexOf(station.type) === -1){
            types.push(station.type);
        }
    });
    return types;
};

TrainStationsModel.prototype.getGPSLocation = function(stationID){
    var gps,
        station;
    if(this.stations[stationID])
    {
        station = this.stations[stationID];
        gps = {geoLong: station.geoLong, geoLat: station.geoLat};
    }
    return gps;
}