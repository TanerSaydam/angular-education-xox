import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  next: string = "X";
  isFinish: boolean = false;
  isDraw: boolean = false;

  resultMessage: string = "";
  games: { id: number, value: string }[] = [
    {
      id: 0,
      value: ""
    },
    {
      id: 1,
      value: ""
    },
    {
      id: 2,
      value: ""
    },
    {
      id: 3,
      value: ""
    },
    {
      id: 4,
      value: ""
    },
    {
      id: 5,
      value: ""
    },
    {
      id: 6,
      value: ""
    },
    {
      id: 7,
      value: ""
    },
    {
      id: 8,
      value: ""
    }
  ]

  gameMoves: any[] = [];

  setMark(index: number) {
    if(this.isFinish)
      return;
    if (this.games[index].value == "") {
      this.games[index].value = this.next;
     
      this.setMoves();
      this.changeMark();
      this.checkGameIsFinish();
    }
  }

  changeMark() {
    this.next == "X" ? this.next = "O" : this.next = "X";
  }

  newGame() {
    this.games = [];
    this.gameMoves = [];
    for (let i = 0; i < 9; i++) {
      this.games.push({ id: i, value: "" });
    }

    this.next = "X";
    this.isFinish = false;
    this.isDraw = false;
  }

  checkGameIsFinish() {
    if (this.games[0].value != "" &&
      this.games[0].value === this.games[1].value &&
      this.games[1].value === this.games[2].value
    ) {
      this.isFinish = true;
    } else if (this.games[3].value != "" &&
      this.games[3].value === this.games[4].value &&
      this.games[4].value === this.games[5].value
    ) {
      this.isFinish = true;
    } else if (this.games[6].value != "" &&
      this.games[6].value === this.games[7].value &&
      this.games[7].value === this.games[8].value
    ) {
      this.isFinish = true;
    } else if (this.games[0].value != "" &&
      this.games[0].value === this.games[3].value &&
      this.games[3].value === this.games[6].value
    ) {
      this.isFinish = true;
    } else if (this.games[1].value != "" &&
      this.games[1].value === this.games[4].value &&
      this.games[4].value === this.games[7].value
    ) {
      this.isFinish = true;
    } else if (this.games[2].value != "" &&
      this.games[2].value === this.games[5].value &&
      this.games[5].value === this.games[8].value
    ) {
      this.isFinish = true;
    } else if (this.games[0].value != "" &&
      this.games[0].value === this.games[4].value &&
      this.games[4].value === this.games[8].value
    ) {
      this.isFinish = true;
    } else if (this.games[2].value != "" &&
      this.games[2].value === this.games[4].value &&
      this.games[4].value === this.games[6].value
    ) {
      this.isFinish = true;
    } else {
      for (let i = 0; i < this.games.length; i++) {
        const element = this.games[i];
        if(element.value == ""){
          return;
        }
      }

      this.isFinish = true;
      this.isDraw = true;
    }


    if(this.isFinish == true){
      if(this.isDraw){
        this.resultMessage = "Oyun berabere!";
      }else{
        this.changeMark();
        this.resultMessage = "Oyunu " + this.next + " kazandı!";
      }
    }
  }

  setMoves(){
    let newGames: { id: number, value: string }[] = [
      {
        id: 0,
        value: ""
      },
      {
        id: 1,
        value: ""
      },
      {
        id: 2,
        value: ""
      },
      {
        id: 3,
        value: ""
      },
      {
        id: 4,
        value: ""
      },
      {
        id: 5,
        value: ""
      },
      {
        id: 6,
        value: ""
      },
      {
        id: 7,
        value: ""
      },
      {
        id: 8,
        value: ""
      }
    ]

    for (let x = 0; x < this.games.length; x++) {
      const element = this.games[x];
      newGames[x] = {...element};
    } 

    this.gameMoves.push(newGames);
  }

  goThatMove(move:any){
    this.games = move;
  }
}
