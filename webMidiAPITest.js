var app = angular
    .module('WebMIDI', []);
    
app.factory('Devices', ['$window', 'Connected', function($window, connected) {
        function _connect() {
            console.log('inside connec O.O');

            $window.navigator.requestMIDIAccess()
                .then(function(midiAccess){
                    console.log("Acess Granted");
                    connected.getMidi(midiAccess);
                
                }, function(){
                    console.log("Access DENIED");   
                });

        }

        return {
            connect: _connect
        };
    }]);

app.factory('Connected', [function(){
    function getMidi(midi){
    for(var entry of midi.inputs){
        var input = entry[1];
        console.log("Name " + input.name + " type " + input.type);
    }
            midi.inputs.forEach(function(entry){entry.onmidimessage = function(event){
                  var str = "MIDI message received at timestamp " + event.timestamp + "[" + event.data.length + " bytes]: ";
                  for (var i=0; i<event.data.length; i++) {
                    str += "0x" + event.data[i].toString(16) + " ";
                  }
                  console.log( str );
            }})

}
    return{
        getMidi: getMidi  
    };
}]);


app.controller('MidiController', ['Devices', '$scope', function(devices, $scope){
    $scope.funky = "angularJS is working";
    var midi = devices.connect();


    console.log("Inside the controller");
}]);