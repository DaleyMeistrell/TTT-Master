angular
    .module('tictacApp')
    .controller('TictacController', TictacController);


    TictacController.$inject = ['$firebaseArray'];


    //adding functions to the controller
    function TictacController($firebaseArray){
        var self = this;
        self.getBoard = getBoard();
        self.getTable = getTable();
        self.clickYou = clickYou;
        self.clearGame = clearGame;
        self.clearBoard = clearBoard;
        self.getWinner = getWinner;
        

        // calling firebase objects
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
            if(self.getBoard[i].status !== "null"){
                // self.getTable[0].message = "Space is occupied";
                alert("Sapce is occupied! Please choose another.")
                self.getTable[0].counter++
            }
            else if (self.getTable[0].counter%2 ==0){
                console.log("second if is running")
                self.getBoard[i].status="England";
                self.getBoard[i].status=="O"
                self.getBoard.$save(i);
                self.getTable.$save(self.getTable[0]);
                
            } else {
                console.log("first if is running")
                self.getBoard[i].status="America";
                self.getBoard[i].status=="X"
                self.getBoard.$save(i);
                self.getTable.$save(self.getTable[0]);
            }
            getWinner();
        }

        // determine winner with logic, announce who wins, and
        // increment score
        function getWinner(){
            if((self.getBoard[0].status == self.getBoard[1].status) && 
               (self.getBoard[1].status == self.getBoard[2].status) && 
               (self.getBoard[0].status != "null")) {
                    console.log("Player " + self.getBoard[0].status + " wins");
                    self.getTable[0].message = (self.getBoard[0].status + " wins!");
                self.getTable.$save(self.getTable[0]);    
                if (self.getBoard[0].status == "America"){
                    self.getTable[0].scoreAmerica++;
                    self.getTable.$save(self.getTable[0]);
                } else if(self.getBoard[0].status == "England"){
                    self.getTable[0].scoreEngland++;
                    self.getTable.$save(self.getTable[0]);

                 }
               }
            else if((self.getBoard[3].status == self.getBoard[4].status) && 
               (self.getBoard[4].status == self.getBoard[5].status) && 
               (self.getBoard[3].status != "null")) {
                    console.log("Player " + self.getBoard[3].status + " wins");
                    self.getTable[0].message = (self.getBoard[3].status + " wins!");
                self.getTable.$save(self.getTable[0]);    
                if (self.getBoard[3].status == "America"){
                    self.getTable[0].scoreAmerica++;
                    self.getTable.$save(self.getTable[0]);
                } else if(self.getBoard[3].status == "England"){
                    self.getTable[0].scoreEngland++;
                    self.getTable.$save(self.getTable[0]);

                 }
               }
            else if((self.getBoard[6].status == self.getBoard[7].status) && 
               (self.getBoard[7].status == self.getBoard[8].status) && 
               (self.getBoard[6].status != "null")) {
                    console.log("Player " + self.getBoard[6].status + " wins");
                    self.getTable[0].message = (self.getBoard[6].status + " wins!");
                self.getTable.$save(self.getTable[0]);    
                if (self.getBoard[6].status == "America"){
                    self.getTable[0].scoreAmerica++;
                    self.getTable.$save(self.getTable[0]);
                } else if(self.getBoard[6].status == "England"){
                    self.getTable[0].scoreEngland++;
                    self.getTable.$save(self.getTable[0]);

                 }
               }
            else if((self.getBoard[0].status == self.getBoard[3].status) && 
               (self.getBoard[3].status == self.getBoard[6].status) && 
               (self.getBoard[0].status != "null")) {
                    console.log("Player " + self.getBoard[0].status + " wins");
                    self.getTable[0].message = (self.getBoard[0].status + " wins!");
                self.getTable.$save(self.getTable[0]);    
                if (self.getBoard[0].status == "America"){
                    self.getTable[0].scoreAmerica++;
                    self.getTable.$save(self.getTable[0]);
                } else if(self.getBoard[0].status == "England"){
                    self.getTable[0].scoreEngland++;
                    self.getTable.$save(self.getTable[0]);

                 }
               }
            else if((self.getBoard[1].status == self.getBoard[4].status) && 
               (self.getBoard[4].status == self.getBoard[7].status) && 
               (self.getBoard[1].status != "null")) {
                    console.log("Player " + self.getBoard[1].status + " wins");
                    self.getTable[0].message = (self.getBoard[1].status + " wins!");
                self.getTable.$save(self.getTable[0]);    
                if (self.getBoard[1].status == "America"){
                    self.getTable[0].scoreAmerica++;
                    self.getTable.$save(self.getTable[0]);
                } else if(self.getBoard[1].status == "England"){
                    self.getTable[0].scoreEngland++;
                    self.getTable.$save(self.getTable[0]);
                 }
               }
            else if((self.getBoard[2].status == self.getBoard[5].status) && 
               (self.getBoard[5].status == self.getBoard[8].status) && 
               (self.getBoard[2].status != "null")) {
                    console.log("Player " + self.getBoard[2].status + " wins");
                    self.getTable[0].message = (self.getBoard[2].status + " wins!");
                self.getTable.$save(self.getTable[0]);    
                if (self.getBoard[2].status == "America"){
                    self.getTable[0].scoreAmerica++;
                    self.getTable.$save(self.getTable[0]);
                } else if(self.getBoard[2].status == "England"){
                    self.getTable[0].scoreEngland++;
                    self.getTable.$save(self.getTable[0]);
                 }
               }
            else if((self.getBoard[0].status == self.getBoard[4].status) && 
               (self.getBoard[4].status == self.getBoard[8].status) && 
               (self.getBoard[0].status != "null")) {
                    console.log("Player " + self.getBoard[0].status + " wins");
                    self.getTable[0].message = (self.getBoard[0].status + " wins!");
                self.getTable.$save(self.getTable[0]);    
                if (self.getBoard[0].status == "America"){
                    self.getTable[0].scoreAmerica++;
                    self.getTable.$save(self.getTable[0]);
                } else if(self.getBoard[0].status == "England"){
                    self.getTable[0].scoreEngland++;
                    self.getTable.$save(self.getTable[0]);
                 }
               }
            else if((self.getBoard[2].status == self.getBoard[4].status) && 
               (self.getBoard[4].status == self.getBoard[6].status) && 
               (self.getBoard[2].status != "null")) {
                    console.log("Player " + self.getBoard[2].status + " wins");
                    self.getTable[0].message = (self.getBoard[2].status + " wins!");
                self.getTable.$save(self.getTable[0]);    
                if (self.getBoard[2].status == "America"){
                    self.getTable[0].scoreAmerica++;
                    self.getTable.$save(self.getTable[0]);
                } else if(self.getBoard[2].status == "England"){
                    self.getTable[0].scoreEngland++;
                    self.getTable.$save(self.getTable[0]);
                 }
               }
               // tie logic - if all boxes are null and
               // no one wins
               else if((self.getBoard[0].status != "null") &&
                (self.getBoard[1].status != "null") &&
                (self.getBoard[2].status != "null") &&
                (self.getBoard[3].status != "null") &&
                (self.getBoard[4].status != "null") &&
                (self.getBoard[5].status != "null") &&
                (self.getBoard[6].status != "null") &&
                (self.getBoard[7].status != "null") &&
                (self.getBoard[8].status != "null")){
                self.getTable[0].message = "Tie goes to America!";
                self.getTable[0].scoreAmerica++;
                self.getTable.$save(self.getTable[0]);
                self.getBoard.$save(i);
            }
            if (self.getTable[0].scoreAmerica >= 5) {
                self.getTable[0].message = "Game Over, America Wins! :)";
                self.getTable.$save(self.getTable[0]);
                // ((self.score1 = "") && (self.score2 = ""));
            }
            else if(self.getTable[0].scoreEngland >= 5) {
                self.getTable[0].message = "Game Over, England Wins :(";
                    self.getTable.$save(self.getTable[0]);
                // ((self.score1 = "") && (self.score2 = ""));
            }
        }

        // function noClick() {
        //     if (self.getBoard[0].status == "America"){
        //         alert("Button already selected");
        //         //     self.getTable[0].scoreAmerica++;
        //         //     self.getTable.$save(self.getTable[0]);
        //         // } else if(self.getBoard[0].status == "England"){
        //         //     self.getTable[0].scoreEngland++;
        //         //     self.getTable.$save(self.getTable[0]);

        //          }
        // }
        // clear all icons form the gameboard
        function clearBoard() {
            for (i = 0; i < 9; i++){
                self.getBoard[i].status = "null";
                self.getBoard.$save(i);
                self.getTable[0].message = "";
                self.getTable.$save(self.getTable[0]);
            }    
        }
        // clear all content from the gameboard, scoreboard, and message area
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
