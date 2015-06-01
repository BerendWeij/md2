var trainStations = new TrainStationsModel(HTTPService);
trainStations.fetch("http://localhost/js-training/data/trainstations.json");

trainStations.addListener("changed", function(){
    console.log('data loaded');
});

/*

// Dit is voor later ;)

console.log(trainStations.getAll());

console.log(trainStations.getStationsByName("Am"));

console.log(trainStations.getTypes());

console.log(trainStations.getStationType(0));

console.log(trainStations.getGPSLocation(0));

console.log(trainStations.getStationsByType("middel"));
 */