const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var personnages = {};

var Personnage = {
    healthMax: 100,
    healthBase: 100,
    strengh: 5,
    levelMax: 10,
    levelCurrent: 1,
    name: "",
    faction: ["alliance", "horde"],

    create: function(name, faction) {
        this.name = name;
        var faction = faction.toLowerCase();

        if (faction != "horde" && faction != "alliance") {
            return false;
        } else {
            this.faction = faction;
        }

        return this;

    },

    getName: function() {
        return this;
    }

};

rl.on('line', function(input) {
    command = input.split(" ");
    var nameCommand = command[0];
    var parameter = command[1];
    switch (nameCommand) {
        case "create":
            var p = Personnage.create(parameter, "horde");
            var name = parameter;
            personnages[name] = p;

            console.log("Le personnage " + name + " à bien été crée !");
            break;
        case "delete":
            personnages[parameter] = null;
            console.log("Personnage effacé !");
            break;
        case "info":
            if (personnages[parameter]) {
                var name = personnages[parameter].name;
                var faction = personnages[parameter].faction;
                var level = personnages[parameter].levelCurrent;

                var description = "Nom : " + name + " - level : " + level + " - faction : " + faction;
                console.log(description);
            } else {
                console.log("Ce personnage n'existe pas !");
            }
        default:
            console.log(input);
    }
});