angular
    .module('tictacApp')
    .controller('TictacController', TictacController);


    TictacController.$inject = ['$firebaseObject'];


    function TictacController($firebaseObject, $index){
        var self = this;
        var counter = 1;
        self.changeColor = changeColor();
        // self.takeTurn = takeTurn();
        //self.clickMe = clickMe;
        self.clickYou = clickYou;
        self.board = [{active: false, status: "null"},{active: false, status: "null"},{active: false, status: "null"},
        {active: false, status: "null"},{active: false, status: "null"},{active: false, status: "null"},{active: false, status: "null"},
        {active: false, status: "null"},{active: false, status: "null"}];


        //alternates player move with modular if else statement. The return output detrmines which symbol will be outputted
        // function takeTurn() {
        //     var counter = 1;
        //     if (counter % 2 == 0) {
                
        //         self.board[$index].status = "X"
        //         // console.log(self.board[$index])
        //     } else {
        //         return "O"
        //         // self.board[$index].status = "O"
        //     }
        // }

        function changeColor(){
          // counter++;
          // console.log(counter);
          var ref = new Firebase("https://tictacstoneonfire.firebaseio.com/");
          var changeColor = $firebaseObject(ref);
          return changeColor
        }


        function clickYou($index){
            counter++;
            if(counter % 2 == 0){
                self.board[$index].status = "X";
            } else {

            self.board[$index].status = "O";
        }
            // self.board.$save();
            console.log(self.board[$index].active);
            console.log(self.board);
            getWinner();
         }

         function getWinner(){
            console.log("get winner working");
            if((self.board[0].status == self.board[1].status) && 
               (self.board[1].status == self.board[2].status) && 
               (self.board[0].status != "null")) {
                console.log("You win");
               }
            if((self.board[3].status == self.board[4].status) && 
               (self.board[4].status == self.board[5].status) && 
               (self.board[3].status != "null")) {
                console.log("You win");
               }
            if((self.board[6].status == self.board[7].status) && 
               (self.board[7].status == self.board[8].status) && 
               (self.board[6].status != "null")) {
                console.log("You win");
               }
            if((self.board[0].status == self.board[3].status) && 
               (self.board[3].status == self.board[6].status) && 
               (self.board[0].status != "null")) {
                console.log("You win");
               }
            if((self.board[1].status == self.board[4].status) && 
               (self.board[4].status == self.board[7].status) && 
               (self.board[1].status != "null")) {
                console.log("You win");
               }
            if((self.board[2].status == self.board[5].status) && 
               (self.board[5].status == self.board[8].status) && 
               (self.board[2].status != "null")) {
                console.log("You win");
               }
            if((self.board[0].status == self.board[4].status) && 
               (self.board[4].status == self.board[8].status) && 
               (self.board[0].status != "null")) {
                console.log("You win");
               }
            if((self.board[2].status == self.board[4].status) && 
               (self.board[4].status == self.board[6].status) && 
               (self.board[2].status != "null")) {
                console.log("You win");
               }

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
