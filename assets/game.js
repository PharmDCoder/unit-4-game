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

    //function to assign object as character and play audio/visual associated with selection
    function selectCharacter(selectImgId, selectImgSrc, selectAudioId, characterId, delayTime, object) {
        //setting up if statement to run if character has not been picked yet and user clicks on a character
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

    function selectOpponent(selectImgId, selectImgSrc, selectAudioId, characterId, delayTime, object) {
        if (characterSelected != undefined) {
            opponentSelected = object;
            $('audio'+selectAudioId)[0].play();  
            $(selectImgId).attr("src", selectImgSrc);
            setTimeout(function() {
                $(characterId).hide();
                $("#selectScreen").hide();
                $("#opponent,#attackBtn").show();
                $("#battleScreen").show();
                $("body").css("background-image","url(assets/images/battlegroundbackground.jpg)");
                console.log("character selected inside select opponent screen is " + characterSelected);
                battle();
            }, delayTime);
        }
    }

    // This will be a battlemode function
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


    $("#attackBtn").on("click", function() {
        $("#characterImg").attr("src", characterSelected.battleImgGif); 
        $('audio'+ "#lightSaber")[0].play(); 
        setTimeout(function() {
            $("#characterImg").attr("src", characterSelected.battleImgSrc);
            opponentSelected.hp = opponentSelected.hp - characterSelected.attack;
            characterSelected.attack = characterSelected.attackOriginal + characterSelected.attack;        
            if (opponentSelected.hp <= 0) {
                // $("#opponent,#attackBtn").hide();
                $("#attackBtn").hide();
                $("#opponent").fadeOut(3000);
                $("#opponent").css({"background-color": "red", "color": "white"});
                $("#characterImg").attr("src", characterSelected.victoryGif);
                $('audio'+ characterSelected.victoryAudioId)[0].play();
                setTimeout(function() {
                    $("#battleScreen").hide();
                    $("body").css("background-image","url(assets/images/mainbackground.png)");
                    $("#selectScreen").show();
                    $("#opponent").css({"background-color": "#fff", "color": "#212529"});
                    enemiesDefeated++;
                    if (enemiesDefeated === 3) {
                        $("#selectScreen").hide(); 
                        $("#battleScreen").hide();
                        $('audio'+ "#winningSoundtrack")[0].play();   
                        //want to make a reset button with onclick here
                        $("#reset").show();
                        $("#titleReset").attr("src", "assets/images/theEndTitle.png"); 
                        $("#gifReset").attr("src", "assets/images/theEnd.gif"); 
                        $("#resetBtn").on("click", resetGame);
                    }
                }, characterSelected.victoryTime);
            } else {
                $('audio'+ "#lightSaber2")[0].play();
                $("#opponentHp").html("HP: " + opponentSelected.hp);
                $("#opponentImg").attr("src", opponentSelected.battleImgGif);
            }
        }, 3000); 
        setTimeout(() => {
            if (opponentSelected.hp > 0) {
                $("#opponentImg").attr("src", opponentSelected.battleImgSrc);
                characterSelected.hp = characterSelected.hp - opponentSelected.counterAttack;
                $("#characterHp").html("HP: " + characterSelected.hp);
                if (characterSelected.hp <= 0) {
                    $("#selectScreen").hide(); 
                    $("#battleScreen").hide();
                    $('audio'+ characterSelected.losesAudioId)[0].play();
                    // resetGame();
                    $("#reset").show();
                    $("#titleReset").attr("src", "assets/images/gameOverTitle.png"); 
                    $("#gifReset").attr("src", characterSelected.losesGif); 
                    $("#resetBtn").hide();
                    setTimeout(() => {
                        resetGame();
                    }, characterSelected.losesTime); 
                }
            }
        }, 6000);
    });
    
  });