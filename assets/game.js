$(document).ready(function() {

    // Make our variables global to the runtime of our application
    $("#scrollingText").text(". . . . . . .Select Your Character. . . . . . .");  

    var yoda = {
        name: "Yoda",
        hp: 100,
        attackOriginal: 6,
        attack: 6,
        counterAttack: 20,
        onSelectID: "#yodaSelectImg",
        onSelectGifSrc: "assets/images/yodaSelect-crop.gif",
        onSelectAudioId: "#yodaSelectSound",
        characterId: "#yoda",
        delayTime: 1760,
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
        hp: 4,
        attackOriginal: 6,
        attack: 6,
        counterAttack: 20,
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
        hp: 3,
        attackOriginal: 6,
        attack: 6,
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
        hp: 4,
        attackOriginal: 30,
        attack: 30,
        counterAttack: 20,
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
        losesTime: 38400
    }

    var characterSelected;
    var opponentSelected;
    var enemiesDefeated = 0;

    $("#battleScreen").hide();
    $("#reset").hide();

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

    function selectCharacter(selectImgId, selectImgSrc, selectAudioId, characterId, delayTime, object) {
        if (characterSelected === undefined) {
            characterSelected = object;
            $('audio'+selectAudioId)[0].play()  
            $(selectImgId).attr("src", selectImgSrc);
            setTimeout(function() {
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
                    if (enemiesDefeated === 2) {
                        $("#selectScreen").hide(); 
                        $("#battleScreen").hide(); 
                        $('audio'+ "#winningSound")[0].play();   
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
        }, 6000);
    });
    
  });