angular
    .module('tictacApp')
    .controller('TictacController', TictacController);


    TictacController.$inject = ['$firebaseObject'];


    function TictacController($firebaseObject, $index){
        var self = this;
        var counter = 1;
        self.changeColor = changeColor();
        self.message = self.getWinner;
        // self.takeTurn = takeTurn();
        //self.clickMe = clickMe;
        self.clickYou = clickYou;
        self.clearBoard = clearBoard;
        self.board = [{active: false, status: "null"},{active: false, status: "null"},{active: false, status: "null"},
        {active: false, status: "null"},{active: false, status: "null"},{active: false, status: "null"},{active: false, status: "null"},
        {active: false, status: "null"},{active: false, status: "null"}];
        

        function changeColor(){
          // counter++;
          // console.log(counter);
          var ref = new Firebase("https://tictacstoneonfire.firebaseio.com/");
          var changeColor = $firebaseObject(ref);
          return changeColor
        }

        //alternates player move with a modular if/else statement. 
        // self.board[$index].status output an X or O, blue or green.
        function clickYou($index){
            counter++;
            if(counter % 2 == 0){
                self.board[$index].status = "X";
            } else {
                self.board[$index].status = "O";
            }
            console.log(self.board);
            getWinner();
         }

         // tic tac toe logic that 
         function getWinner(){
            if((self.board[0].status == self.board[1].status) && 
               (self.board[1].status == self.board[2].status) && 
               (self.board[0].status != "null")) {
                    console.log("Player " + self.board[0].status + " wins");
                    self.message = ("Player " + self.board[0].status + " wins");
               }
            if((self.board[3].status == self.board[4].status) && 
               (self.board[4].status == self.board[5].status) && 
               (self.board[3].status != "null")) {
                    console.log("Player " + self.board[3].status + " wins");
               }
            if((self.board[6].status == self.board[7].status) && 
               (self.board[7].status == self.board[8].status) && 
               (self.board[6].status != "null")) {
                    console.log("Player " + self.board[6].status + " wins");
               }
            if((self.board[0].status == self.board[3].status) && 
               (self.board[3].status == self.board[6].status) && 
               (self.board[0].status != "null")) {
                    console.log("Player " + self.board[0].status + " wins");
               }
            if((self.board[1].status == self.board[4].status) && 
               (self.board[4].status == self.board[7].status) && 
               (self.board[1].status != "null")) {
                    console.log("Player " + self.board[1].status + " wins");
               }
            if((self.board[2].status == self.board[5].status) && 
               (self.board[5].status == self.board[8].status) && 
               (self.board[2].status != "null")) {
                    console.log("Player " + self.board[2].status + " wins");
               }
            if((self.board[0].status == self.board[4].status) && 
               (self.board[4].status == self.board[8].status) && 
               (self.board[0].status != "null")) {
                    console.log("Player " + self.board[0].status + " wins");
               }
            if((self.board[2].status == self.board[4].status) && 
               (self.board[4].status == self.board[6].status) && 
               (self.board[2].status != "null")) {
                    console.log("Player " + self.board[2].status + " wins");
               }
         }

         function clearBoard($index){
            (self.board[0].status == "null");
            (self.board[1].status == "null");
            (self.board[2].status == "null");
            (self.board[3].status == "null");
            (self.board[4].status == "null");
            (self.board[5].status == "null");

         }

    }


     // function clickMe($index){
            //     self.board[$index].active = true;
            //     console.log(self.board[$index].active);
            //     console.log(self.board);
            // }

            // if(self.changeColor.color === 'red'){
            //     self.changeColor.color = 'green';
            //         // 7 - Whenever we change the object in any way, we MUST
            // save it if we want it to change on firebase. 
            //     self.changeColor.$save();
            // } else {
            //     self.changeColor.color = 'red';
            //     self.changeColor.$save();
            // }  
        //}


            // if(self.changeColor.color === 'yellow'){
            //     self.changeColor.color = 'blue';
            //     self.changeColor.$save();
            // } else {
            //     self.changeColor.color = 'yellow';
            //     self.changeColor.$save();
            // }
