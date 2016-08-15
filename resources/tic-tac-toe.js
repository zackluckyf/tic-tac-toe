$(document).ready(function(){
    "use strict";
    var playerPiece;
    var computerPiece;
    var randomMove;
    var winner = false;
    var position1 = $(".position1");
    var position2 = $(".position2");
    var position3 = $(".position3");
    var position4 = $(".position4");
    var position5 = $(".position5");
    var position6 = $(".position6");
    var position7 = $(".position7");
    var position8 = $(".position8");
    var position9 = $(".position9");
    var pos1 = "position1";
    var pos2 = "position2";
    var pos3 = "position3";
    var pos4 = "position4";
    var pos5 = "position5";
    var pos6 = "position6";
    var pos7 = "position7";
    var pos8 = "position8";
    var pos9 = "position9";
    
    var labelArray = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9];
    
    var classArray = ['.position1', '.position2', '.position3', '.position4', '.position5', '.position6', '.position7', '.position8', '.position9']
    
    var selectorsArray = [position1, position2, position3, position4, position5, position6, position7, position8, position9];
    
    var selectorsArray2 = [position1, position2, position3, position4, position5, position6, position7, position8, position9];
    
    var movesArray = ["position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8", "position9"];
    
    var firstMoves = [position1, position3, position5, position7, position9];
    
    function reset(){
        $(".piece").empty();
        $(".piece").css("transform", "translateY(0%)");
        movesArray = ["position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8", "position9"];
        selectorsArray = [position1, position2, position3, position4, position5, position6, position7, position8, position9];
        $(".piece").css("cursor", "pointer");
        $(".piece").css("pointer-events", "auto");
        winner = false;
        firstMove();
    }

    // player can select for piece x
    $(".squaredOne label").click(function(){
        $(".squaredOne label").css("cursor", "default");
        $(".squaredTwo label").css("cursor", "default");
        $(".squaredOne label").css("pointer-events", "none");
        $(".squaredTwo label").css("pointer-events", "none");
        playerPiece = "X";
        computerPiece = "O";
        firstMove();
    });
    
    // player can select for piece o
    $(".squaredTwo label").click(function(){
        $(".squaredOne label").css("cursor", "default");
        $(".squaredTwo label").css("cursor", "default");
        $(".squaredOne label").css("pointer-events", "none");
        $(".squaredTwo label").css("pointer-events", "none");
        playerPiece = "O";
        computerPiece = "X";
        firstMove();
    });
    
    // computer makes the first move
    function firstMove(){
        var move = Math.floor(Math.random()*5);
        setTimeout(function(){
            firstMoves[move].text(computerPiece);    
            firstMoves[move].css("transform", "translateY(-14%)");
            if(move > 0)
                {
                    move *= 2;
                }
            movesArray.splice(move, 1);
            selectorsArray.splice(move, 1);
            playerInput();
        }, 250); 
    }
    
    function arrayModify(index){
            for(var i = 0; i < movesArray.length; i++)
                {
                    if(index === movesArray[i])
                        {
                            movesArray.splice(i, 1);
                            selectorsArray.splice(i, 1);
                        }
                }
    }
    
    //$(this).parent().is('body')
    
    function playerInput(){
        for(var i = 0; i < selectorsArray2.length; i++)
            {
               if(selectorsArray2[i].text().length === 1)
                {
                    selectorsArray2[i].css("cursor", "default");
                    selectorsArray2[i].css("pointer-events", "none");
                } 
            }
        $(".piece").off;
        $(".piece").click(function(){
            if($(this).text().length === 0)
            {
                $(this).text(playerPiece);
                $(this).css("transform", "translateY(-14%)");
                fixRows();
                for(var j = 0; j < classArray.length; j++)
                {
                       if($(this).is(classArray[j]))
                       {
                           arrayModify(labelArray[j]);
                           console.log("player " + labelArray[j]);
                       } 
                }
                winnerCheck();
                if(winner === false){
                    computerMove();
                }
            }
            else
                {
                    playerInput();
                }
        });
    }
    
    function computerMove(){
        setTimeout(function(){
            randomMove = Math.floor(Math.random()*selectorsArray.length);
            console.log("comp " + randomMove);
            selectorsArray[randomMove].text(computerPiece);
            selectorsArray[randomMove].css("transform", "translateY(-14%)");
            fixRows();
            arrayModify(movesArray[randomMove]);
            winnerCheck();
            if(winner === true){
                playerInput();
            }
        }, 500); 
    }
    
    function winnerCheck(){
        if(position1.text() === position2.text() && position1.text() === position3.text() && position1.text() !== "")
        {
            alert(position1.text() + " is the winner!");
            winner = true;
            reset();
            return;
        }
        else if(position4.text() === position5.text() && position4.text() === position6.text() && position4.text() !== "")
        {
            alert(position4.text() + " is the winner!");
            winner = true;
            reset();
            return;
        }
        else if(position7.text() === position8.text() && position7.text() === position9.text() && position7.text() !== "")
        {
            alert(position7.text() + " is the winner!");
            winner = true;
            reset();
            return;
        }
        else if(position1.text() === position4.text() && position1.text() === position7.text() && position1.text() !== "")
        {
            alert(position1.text() + " is the winner!");
            winner = true;
            reset();
            return;
        }
        else if(position2.text() === position5.text() && position2.text() === position8.text() && position2.text() !== "")
        {
            alert(position2.text() + " is the winner!");
            winner = true;
            reset();
            return;
        }
        else if(position3.text() === position6.text() && position3.text() === position9.text() && position3.text() !== "")
        {
            alert(position3.text() + " is the winner!");
            winner = true;
            reset();
            return;
        }
        else if(position1.text() === position5.text() && position1.text() === position9.text() && position1.text() !== "")
        {
            alert(position1.text() + " is the winner!");
            winner = true;
            reset();
            return;
        }
        else if(position3.text() === position5.text() && position3.text() === position7.text() && position3.text() !== "")
        {
            alert(position3.text() + " is the winner!");
            winner = true;
            reset();
            return;
        }
        else if(movesArray.length === 0)
            {
                alert("Tie!");
                winner = true;
                reset();
                return;
            }
    }
    
    function fixRows(){
        if(position1.text().length > 0 && position2.text().length > 0 && position3.text().length > 0)
            {
                position1.css("transform", "translateY(0%)");
                position2.css("transform", "translateY(0%)");
                position3.css("transform", "translateY(0%)");
            }
        if(position4.text().length > 0 && position5.text().length > 0 && position6.text().length > 0)
            {
                position4.css("transform", "translateY(0%)");
                position5.css("transform", "translateY(0%)");
                position6.css("transform", "translateY(0%)");
            }
        if(position7.text().length > 0 && position8.text().length > 0 && position9.text().length > 0)
            {
                position7.css("transform", "translateY(0%)");
                position8.css("transform", "translateY(0%)");
                position9.css("transform", "translateY(0%)");
            }
    }
});