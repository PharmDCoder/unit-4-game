$(document).ready(function() {

    //Adds text to bottom of DOM to have user select character
    $("#scrollingText").text(". . . . . . .Select Your Character. . . . . . .");  

    //The following several lines of code are set up as objects for each of the 4 characters to decrease hard coding in game functions
    var yoda = {
        name: "Yoda",
        hp: 160,
        attackOriginal: 5,
        attack: 5,
        counterAttack: 5,
        onSelectID: "#yodaSelectImg",
        onSelectGifSrc: "assets/images/yodaSelect-crop.gif",
        onSelectAudioId: "#yodaSelectSound",
        characterId: "#yoda",
        delayTime: 1760,
        //object property that calls function inside each of the 4 objects allows global variable to be assigned to character object either as character or opponent to use this.property in global functions outside of object
        yodaSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        },
        battleImgSrc: "assets/images/yodaBattle.png",
        battleImgGif: "assets/images/yodaBattle.gif",
        victoryGif: "assets/images/yodaVictory.gif",
        victoryAudioId: "#yodaVictorySound",
        losesGif: "assets/images/yodaLoses.gif",
        losesAudioId: "#yodaLosesSound",
        victoryTime: 2299,
        losesTime: 1500
    }

    var obiwan = {
        name: "Obiwan Kenobi",
        hp: 140,
        attackOriginal: 6,
        attack: 6,
        counterAttack: 10,
        onSelectID: "#obiwanSelectImg",
        onSelectGifSrc: "assets/images/obiwanSelect-crop.gif",
        onSelectAudioId: "#obiwanSelectSound",
        characterId: "#obiwan",
        delayTime: 2064,
        obiwanSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        },
        battleImgSrc: "assets/images/obiwanBattle.png",
        battleImgGif: "assets/images/obiwanBattle.gif",
        victoryGif: "assets/images/obiwanVictory.gif",
        victoryAudioId: "#obiwanVictorySound",
        losesGif: "assets/images/obiwanLoses.gif",
        losesAudioId: "#obiwanLosesSound",
        victoryTime: 1437,
        losesTime: 2271
    }

    var darthVader = {
        name: "Darth Vader",
        hp: 120,
        attackOriginal: 7,
        attack: 7,
        counterAttack: 20,
        onSelectID: "#darthVaderSelectImg",
        onSelectGifSrc: "assets/images/darthVaderSelect2-crop.gif",
        onSelectAudioId: "#darthVaderSelectSound",
        characterId: "#darthVader",
        delayTime: 2329,
        darthVaderSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        },
        battleImgSrc: "assets/images/darthVaderBattle.png",
        battleImgGif: "assets/images/darthVaderBattle.gif",
        victoryGif: "assets/images/darthVaderVictory.gif",
        victoryAudioId: "#darthVaderVictorySound",
        losesGif: "assets/images/darthVaderLoses.gif",
        losesAudioId: "#darthVaderLosesSound",
        victoryTime: 4337,
        losesTime: 3919
    }

    var darthMaul = {
        name: "Darth Maul",
        hp: 100,
        attackOriginal: 8,
        attack: 8,
        counterAttack: 25,
        onSelectID: "#darthMaulSelectImg",
        onSelectGifSrc: "assets/images/darthMaulSelect-crop.gif",
        onSelectAudioId: "#darthMaulSelectSound",
        characterId: "#darthMaul",
        delayTime: 1750,
        darthMaulSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        },
        battleImgSrc: "assets/images/darthMaulBattle.png",
        battleImgGif: "assets/images/darthMaulBattle.gif",
        victoryGif: "assets/images/darthMaulVictory.gif",
        victoryAudioId: "#darthMaulVictorySound",
        losesGif: "assets/images/darthMaulLoses.gif",
        losesAudioId: "#darthMaulLosesSound",
        victoryTime: 4389,
        losesTime: 3840
    }

    //establishing global variables
    var characterSelected;
    var opponentSelected;
    var enemiesDefeated = 0;

    //Game has three screen modes so this hides the two not in use
    $("#battleScreen").hide();
    $("#reset").hide();

    //On click event that goes into respective object to assign object as either character or opponent
    $("#yoda").on("click", function() {
        yoda.yodaSelect();
    });

    $("#obiwan").on("click", function() {
        obiwan.obiwanSelect();
    });

    $("#darthVader").on("click", function() {
        darthVader.darthVaderSelect();
    });

    $("#darthMaul").on("click", function() {
        darthMaul.darthMaulSelect();
    });

    //function to assign object as character
    function selectCharacter(selectImgId, selectImgSrc, selectAudioId, characterId, delayTime, object) {
        //setting up if statement to run if character has not been picked yet and user clicks on a character; delays time to allow gif and audio to run
        if (characterSelected === undefined) {
            //assigns object to characterSelected variable
            characterSelected = object;
            //plays audio associated with object's specific select sound
            $('audio'+selectAudioId)[0].play()  
            //turns still image into gif on selection
            $(selectImgId).attr("src", selectImgSrc);
            //while select character audio is running we will time this function out 
            setTimeout(function() {
                //removes selected character from opponent options
                $(characterId).hide();
                $("#scrollingText").text(". . . . . . .Select Your Opponent. . . . . . . .");
            }, delayTime);
        }
    }

    //function to assign object as oponent
    function selectOpponent(selectImgId, selectImgSrc, selectAudioId, characterId, delayTime, object) {
        //want to select opponent 2nd so need this if statement to satisfy that condition and allows gif and audio to run w/ time delay
        if (characterSelected != undefined) {
            //assigns object to opponentSelected variable
            opponentSelected = object;
            //plays object's "select character audio"
            $('audio'+selectAudioId)[0].play();  
            //plays select gif
            $(selectImgId).attr("src", selectImgSrc);
            //this function delays the time to allow select character audio/visuals to run before sending user to battle mode
            setTimeout(function() {
                //hides opponent from select screen once selcted
                $(characterId).hide();
                //hides select screen
                $("#selectScreen").hide();
                //shows opponent and attack button
                $("#opponent,#attackBtn").show();
                //shows battle screen
                $("#battleScreen").show();
                //changes the background to battle screen mode
                $("body").css("background-image","url(assets/images/battlegroundbackground.jpg)");
                //calls battle function to set up DOM for battle
                battle();
            }, delayTime);
        }
    }

    // This function sets up the battle scene on the DOM by using JQuery to grab all of the info from character and opponent objects
    function battle() {
        $("#characterImg").attr("src", characterSelected.battleImgSrc);
        $("#opponentImg").attr("src", opponentSelected.battleImgSrc);
        $("#characterName").html(characterSelected.name);
        $("#opponentName").html(opponentSelected.name);
        $("#characterHp").html("HP: " + characterSelected.hp);
        $("#opponentHp").html("HP: " + opponentSelected.hp);
        
    }

    //reset game function
    function resetGame() {
        location.reload();
    }

    //on click event that runs the battle mode when user hits "attack button", 
    $("#attackBtn").on("click", function() {
        //plays character battle gif
        $("#characterImg").attr("src", characterSelected.battleImgGif); 
        //plays lightsaber gif
        $('audio'+ "#lightSaber")[0].play(); 
        //sets time out for opponent to counter attack and run opponent attack gif and light saber audio
        setTimeout(function() {
            //turns character gif back to still
            $("#characterImg").attr("src", characterSelected.battleImgSrc);
            //sets new value for opponent HP to reflect character attack
            opponentSelected.hp = opponentSelected.hp - characterSelected.attack;
            //sets new value for character attack since it improves every time
            characterSelected.attack = characterSelected.attackOriginal + characterSelected.attack;        
            //this checks to see if the opponent died before running counter attack
            if (opponentSelected.hp <= 0) {
                // hide attack button
                $("#attackBtn").hide();
                //opponent image fades
                $("#opponent").fadeOut(3000);
                //turns opponent card background red
                $("#opponent").css({"background-color": "red", "color": "white"});
                //plays character victory gif
                $("#characterImg").attr("src", characterSelected.victoryGif);
                //plays character victory audio
                $('audio'+ characterSelected.victoryAudioId)[0].play();
                //time out functionn to allow for victory audio/visuals to play before progressing game
                setTimeout(function() {
                    //hides battle screen
                    $("#battleScreen").hide();
                    //changes background to character select background
                    $("body").css("background-image","url(assets/images/mainbackground.png)");
                    //shows character select screen
                    $("#selectScreen").show();
                    //resets opponent character card background to white
                    $("#opponent").css({"background-color": "#fff", "color": "#212529"});
                    //adds an enemy defeated which matters in the next loop to signal end of game due to winning
                    enemiesDefeated++;
                    //if loop to check to see if all enemies have been defeated
                    if (enemiesDefeated === 3) {
                        //hide select screen
                        $("#selectScreen").hide(); 
                        //hide battle screen
                        $("#battleScreen").hide();
                        //play winning music
                        $('audio'+ "#winningSoundtrack")[0].play();   
                        //shows reset screen
                        $("#reset").show();
                        //add the end title
                        $("#titleReset").attr("src", "assets/images/theEndTitle.png"); 
                        //add win gif
                        $("#gifReset").attr("src", "assets/images/theEnd.gif"); 
                        //add reset button
                        $("#resetBtn").on("click", resetGame);
                    }
                }, characterSelected.victoryTime);
            //if you don't kill the opponent this happens before looping back
            } else {
                //light saber plays again -- had to make a duplicate sound w/ different name
                $('audio'+ "#lightSaber2")[0].play();
                //changes the opponent's HP after character attack
                $("#opponentHp").html("HP: " + opponentSelected.hp);
                //starts opponent battle gif
                $("#opponentImg").attr("src", opponentSelected.battleImgGif);
            }
        }, 3000); 
        //allows a delay if opponent conterattacks
        setTimeout(() => {
            //if opponent is still alive
            if (opponentSelected.hp > 0) {
                //play opponent battle gif
                $("#opponentImg").attr("src", opponentSelected.battleImgSrc);
                //adjust character hp value from opponent counterattack
                characterSelected.hp = characterSelected.hp - opponentSelected.counterAttack;
                //send new character hp value to DOM
                $("#characterHp").html("HP: " + characterSelected.hp);
                //if statement to determine if character dies
                if (characterSelected.hp <= 0) {
                    //hide select screen
                    $("#selectScreen").hide(); 
                    //hide battle screen
                    $("#battleScreen").hide();
                    //play loss audio for character
                    $('audio'+ characterSelected.losesAudioId)[0].play();
                    // resetGame displaus and picks loss screen for character
                    $("#reset").show();
                    //displays "game over"
                    $("#titleReset").attr("src", "assets/images/gameOverTitle.png"); 
                    //displays character loses gif
                    $("#gifReset").attr("src", characterSelected.losesGif); 
                    //hides reset button
                    $("#resetBtn").hide();
                    //times auto reset to play loser audio and visual
                    setTimeout(() => {
                        //resets game
                        resetGame();
                    }, characterSelected.losesTime); 
                }
            }
        }, 6000);
    });
    
  });