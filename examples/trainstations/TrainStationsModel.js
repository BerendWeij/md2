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
