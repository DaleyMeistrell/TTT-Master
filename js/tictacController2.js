angular
    .module('tictacApp')
    .controller('TictacController', TictacController);


    TictacController.$inject = ['$firebaseArray'];


    function TictacController($firebaseArray){
        var self = this;
        self.getBoard = getBoard();
        self.getTable = getTable();
        self.clickYou = clickYou;
        self.clearGame = clearGame;
        self.clearBoard = clearBoard;
        self.getWinner = getWinner;
        

        function getBoard(){
            var ref = new Firebase("https://daleytictactoe.firebaseio.com/Board")
            var board = $firebaseArray(ref);
            return board;
        }
        function getTable(){
            var ref = new Firebase("https://daleytictactoe.firebaseio.com/Table")
            var table = $firebaseArray(ref);
            return table;
        }
        //alternates player move with a modular if/else statement. 
        // self.board[$index].status output an X or O, blue or green.
        function clickYou(i){
            self.getTable[0].counter++
            if (self.getTable[0].counter%2 ==0){
                console.log("second if is running")
                self.getBoard[i].status="America";
                self.getBoard[i].status=="X"
                self.getBoard.$save(i);
                self.getTable.$save(self.getTable[0]);
            } else {
                console.log("first if is running")
                self.getBoard[i].status="England";
                self.getBoard[i].status=="O"
                self.getBoard.$save(i);
                self.getTable.$save(self.getTable[0]);
            }
            getWinner();
        }
        function getWinner(){
            if((self.getBoard[0].status == self.getBoard[1].status) && 
               (self.getBoard[1].status == self.getBoard[2].status) && 
               (self.getBoard[0].status != "null")) {
                    console.log("Player " + self.getBoard[0].status + " wins");
                    self.getTable[0].message = (self.getBoard[0].status + " wins!");
                self.getTable.$save(self.getTable[0]);    
                if (self.getBoard[0].status == "America"){
                    self.getTable[0].scoreAmerica++;
                    // self.score1 = self.scoreAmerica;
                    self.getTable.$save(self.getTable[0]);
                } else if(self.getBoard[0].status == "England"){
                    self.getTable[0].scoreEngland++;
                    // self.score2 = self.scoreEngland;
                    self.getTable.$save(self.getTable[0]);

                 }
               }


        }

        function clearBoard() {
            for (i = 0; i < 9; i++)
                self.getBoard[i].status = "null";
                self.getBoard.$save(i);
        }

        function clearGame() {
            for(i = 0; i < 9; i++){
                self.getBoard[i].status = "null";
                self.getBoard.$save(i);
                self.getTable[0].counter = 0;
                self.getTable[0].message = "";
                self.getTable[0].scoreAmerica = 0;
                self.getTable[0].scoreEngland = 0;
                self.getTable[0].score1 = "";
                self.getTable[0].score2 = "";
                self.getTable.$save(self.getTable[0]);
                console.log(self.getBoard);
            }
        }


    }