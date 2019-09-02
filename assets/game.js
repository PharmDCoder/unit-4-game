$(document).ready(function() {

    // Make our variables global to the runtime of our application
    $("#scrollingText").text("........Select Your Character........");  

    var yoda = {
        name: "Yoda",
        hp: 100,
        attack: 6,
        onSelectID: "#yodaSelectImg",
        onSelectGifSrc: "assets/images/yodaSelect-crop.gif",
        onSelectAudioId: "#yodaSelectSound",
        characterId: "#yoda",
        delayTime: 3500,
        yodaSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        }
    }

    var obiwan = {
        name: "Obiwan",
        hp: 100,
        attack: 6,
        onSelectID: "#obiwanSelectImg",
        onSelectGifSrc: "assets/images/obiwanSelect-crop.gif",
        onSelectAudioId: "#obiwanSelectSound",
        characterId: "#obiwan",
        delayTime: 3000,
        obiwanSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        }
    }

    var darthVader = {
        name: "Darth Vader",
        hp: 100,
        attack: 6,
        onSelectID: "#darthVaderSelectImg",
        onSelectGifSrc: "assets/images/darthVaderSelect2-crop.gif",
        onSelectAudioId: "#darthVaderSelectSound",
        characterId: "#darthVader",
        delayTime: 4500,
        darthVaderSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        }
    }

    var darthMaul = {
        name: "Darth Maul",
        hp: 100,
        attack: 6,
        onSelectID: "#darthMaulSelectImg",
        onSelectGifSrc: "assets/images/darthMaulSelect-crop.gif",
        onSelectAudioId: "#darthMaulSelectSound",
        characterId: "#darthMaul",
        delayTime: 4500,
        darthMaulSelect: function() {
            selectOpponent(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
            selectCharacter(this.onSelectID, this.onSelectGifSrc, this.onSelectAudioId, this.characterId, this.delayTime, this);
        }
    }

    var characterSelected;
    var opponentSelected;
    $("#battleScreen").hide();

    $("#yoda").on("click", function() {
        yoda.yodaSelect();
    });

    $("#obiwan").on("click", function() {
        obiwan.obiwanSelect();
        console.log("character is " +characterSelected); 
        console.log("characterSelected type is " +typeof characterSelected);
        console.log("Obiwan!!!!!");
        console.log("this is " +this);
    });

    $("#darthVader").on("click", function() {
        darthVader.darthVaderSelect();
        console.log("character is " +characterSelected); 
        console.log("characterSelected type is " +typeof characterSelected);
        console.log("Darth Vader!!!!!");
        console.log("this is " +this);
    });

    $("#darthMaul").on("click", function() {
        darthMaul.darthMaulSelect();
        console.log("character is " +characterSelected); 
        console.log("characterSelected type is " +typeof characterSelected);
        console.log("Darth Maul!!!!!");
        console.log("this is " +this);
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
            $('audio'+selectAudioId)[0].play()  
            $(selectImgId).attr("src", selectImgSrc);
            setTimeout(function() {
                $(characterId).hide();
                $("#selectScreen").hide();
                $("#battleScreen").show();
                $("body").css("background-image","url(assets/images/battlegroundbackground.jpg)")
            }, delayTime);
        }
    }
    
  });