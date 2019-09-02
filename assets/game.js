$(document).ready(function() {

    // Make our variables global to the runtime of our application
    $("#scrollingText").text("........Select Your Character........");  

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
        delayTime: 3500,
        yodaSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        },
        battleImgSrc: "assets/images/yodaBattle.png",
        battleImgGif: "assets/images/yodaBattle.gif"

    }

    var obiwan = {
        name: "Obiwan Kenobi",
        hp: 100,
        attackOriginal: 6,
        attack: 6,
        counterAttack: 20,
        onSelectID: "#obiwanSelectImg",
        onSelectGifSrc: "assets/images/obiwanSelect-crop.gif",
        onSelectAudioId: "#obiwanSelectSound",
        characterId: "#obiwan",
        delayTime: 3000,
        obiwanSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        },
        battleImgSrc: "assets/images/obiwanBattle.png",
        battleImgGif: "assets/images/obiwanBattle.gif"
    }

    var darthVader = {
        name: "Darth Vader",
        hp: 100,
        attackOriginal: 6,
        attack: 6,
        counterAttack: 20,
        onSelectID: "#darthVaderSelectImg",
        onSelectGifSrc: "assets/images/darthVaderSelect2-crop.gif",
        onSelectAudioId: "#darthVaderSelectSound",
        characterId: "#darthVader",
        delayTime: 4500,
        darthVaderSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        },
        battleImgSrc: "assets/images/darthVaderBattle.png",
        battleImgGif: "assets/images/darthVaderBattle.gif"
    }

    var darthMaul = {
        name: "Darth Maul",
        hp: 100,
        attackOriginal: 6,
        attack: 6,
        counterAttack: 20,
        onSelectID: "#darthMaulSelectImg",
        onSelectGifSrc: "assets/images/darthMaulSelect-crop.gif",
        onSelectAudioId: "#darthMaulSelectSound",
        characterId: "#darthMaul",
        delayTime: 4500,
        darthMaulSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        },
        battleImgSrc: "assets/images/darthMaulBattle.png",
        battleImgGif: "assets/images/darthMaulBattle.gif"
    }

    var characterSelected;
    var opponentSelected;

    $("#battleScreen").hide();

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
            }, delayTime);
            $("#scrollingText").text(". . . . . . .Select Your Opponent. . . . . . . .");
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

    $("#attackBtn").on("click", function() {
        $("#characterImg").attr("src", characterSelected.battleImgGif); 
        $('audio'+ "#lightSaber")[0].play(); 
        setTimeout(function() {
            $("#characterImg").attr("src", characterSelected.battleImgSrc);
            $("#opponentImg").attr("src", opponentSelected.battleImgGif);
            $('audio'+ "#lightSaber2")[0].play();
            opponentSelected.hp = opponentSelected.hp - characterSelected.attack;
            $("#opponentHp").html("HP: " + opponentSelected.hp);
            characterSelected.attack = characterSelected.attackOriginal + characterSelected.attack;
        }, 3000); 
        setTimeout(() => {
            $("#opponentImg").attr("src", opponentSelected.battleImgSrc);
            characterSelected.hp = characterSelected.hp - opponentSelected.counterAttack;
            $("#characterHp").html("HP: " + characterSelected.hp);
        }, 6000);
    });
    
  });