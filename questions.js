let questions = [
   {
      question:"What planet is called the red planet",
      options:["Mars", "Mercury", "Venus"],
      answer:"Mars"
   },
   {
      question:"If two babies are called twins, three babies are called",
      options:["Triplets", "Thrice", "Triple"],
      answer:"Triplets"
   },
   
   {
      question:"How may squares are in a chess board",
      options:["64 squares", "100 squares", "32 squares"],
      answer:"64 squares"
   },
   
   {
      question:"What chess piece moves diagonal in a chess board",
      options:["Bishop", "Rook", "Pawn"],
      answer:"Bishop"
   },
   
   {
      question:"Paris is the capital city of which country",
      options:["France", "Dubia", "Spain"],
      answer:"France"
   }
];


function shuffle(arr) {
   for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }
   return arr;
}


export {questions, shuffle};
        
