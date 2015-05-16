angular
    .module('tictacApp')
    .controller('TictacController', TictacController);


    TictacController.$inject = ['$firebaseObject'];


    function TictacController($firebaseObject, $index){
        var self = this;
        
        self.info = info(); 
        self.board = board();
        
        function board() {
            var ref = new Firebase("https://daleytictactoe.firebaseio.com/Board");
            var gameBoard = $firebaseObject(ref);
            return gameBoard;
        }

        function info(){
          var ref = new Firebase("https://daleytictactoe.firebaseio.com/Table");
          var fire = $firebaseObject(ref);
          return fire;
        }
