angular
    .module('tictacApp')
    .controller('TictacController', TictacController);


    TictacController.$inject = ['$firebaseObject'];


    function TictacController($firebaseObject, $index){
        var self = this;
        var counter = 1;
        self.changeColor = changeColor();
        //self.clickMe = clickMe;
        self.clickYou = clickYou;
        self.board = [{active: false},{active: false},{active: false},
        {active: false},{active: false},{active: false},{active: false},
        {active: false},{active: false}];

        function changeColor(){
          // counter++;
          // console.log(counter);
          var ref = new Firebase("https://tictacstoneonfire.firebaseio.com/");
          var changeColor = $firebaseObject(ref);
          return changeColor
        }


        function clickYou($index){
            self.board[$index].active = true;
            self.board.$save();
            console.log(self.board[$index].active);
            console.log(self.board);

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
         }

    }
