var pre = "/assets/mods/dialogue-sounds/media/sound/";
var cc_dialogue_sounds_default = new ig.Sound("media/sound/hud/dialog-beep-2.ogg", 0.9, 0.06);
var cc_dialogue_sounds_sans = new ig.Sound(pre + "voice_sans.ogg", 0.9, 0.02);
var cc_dialogue_sounds_dialogue2x = new ig.Sound(pre + "dialoguex2.ogg", 0.9, 0.06);
var cc_dialogue_sounds_emilie = new ig.Sound(pre + "emilie_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_grumpy = new ig.Sound(pre + "grumpy_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_investor = new ig.Sound(pre + "investor_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_sergey = new ig.Sound(pre + "sergey_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_hlin = new ig.Sound(pre + "hlin_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_schneider = new ig.Sound(pre + "schneider_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_lea = new ig.Sound(pre + "lea_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_joern = new ig.Sound(pre + "joern_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_apollo = new ig.Sound(pre + "apollo_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_shizuka = new ig.Sound(pre + "shizuka_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_buggy = new ig.Sound(pre + "buggy_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_tronny = new ig.Sound(pre + "tronny_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_designer = new ig.Sound(pre + "designer_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_captain = new ig.Sound(pre + "captain_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_carla = new ig.Sound(pre + "carla_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_satoshi = new ig.Sound(pre + "satoshi_beep.ogg", 0.9, 0.06);
var cc_dialogue_sounds_gautham = new ig.Sound(pre + "gautham_beep.ogg", 0.9, 0.06);

var cc_dialogue_sounds_generic_f = new ig.Sound(pre + "female.ogg", 0.9, 0.06);
var cc_dialogue_sounds_generic_m = new ig.Sound(pre + "male.ogg", 0.9, 0.06);

function getSoundForChar(char) {
    switch (char) {
        case "main.sergey":
            return cc_dialogue_sounds_sergey;
        case "main.lea":
            return cc_dialogue_sounds_lea;
        case "main.emilie":
            return cc_dialogue_sounds_emilie;
        case "main.grumpy":
            return cc_dialogue_sounds_grumpy;
        case "main.investor":
            return cc_dialogue_sounds_investor;
        case "main.guild-leader":
            return cc_dialogue_sounds_hlin;
        case "main.luke":
        case "main.schneider":
            return cc_dialogue_sounds_schneider;
        case "antagonists.sidekick":
            return cc_dialogue_sounds_joern;
        case "antagonists.fancyguy":
            return cc_dialogue_sounds_apollo;
        case "main.shizuka":
            return cc_dialogue_sounds_shizuka;
        case "main.buggy":
            return cc_dialogue_sounds_buggy;
        case "main.glasses":
            return cc_dialogue_sounds_tronny;
        case "antagonists.designer":
            return cc_dialogue_sounds_designer;
        case "main.captain":
            return cc_dialogue_sounds_captain;
        case "main.carla":
            return cc_dialogue_sounds_carla;
        case "antagonists.gautham":
        case "antagonists.gautham-rl":
            return cc_dialogue_sounds_gautham;
        case "main.genius":
            return cc_dialogue_sounds_satoshi;
        // Extra
        case "cargo-crew.colleague":
        case "guests.puella-docta":
            return cc_dialogue_sounds_generic_f;
        case "guests.wervyn":
            return cc_dialogue_sounds_generic_m;
        case "forest.family-son-rebel":
            return cc_dialogue_sounds_sans;
    }
    if (char.includes("girl") || char.includes("female")) {
        return cc_dialogue_sounds_generic_f;
    }
    if (char.includes("man") || char.includes("male") || char.includes("boy")) {
        return cc_dialogue_sounds_generic_m;
    }

    return cc_dialogue_sounds_default;
}

ig.MessageOverlayGui.Entry.inject({
    init(...arg) {
        this.parent(...arg);
        this.beepSound = getSoundForChar(arg[1]);
    }
});

sc.SideMessageBoxGui.inject({
    setContent(...arg) {
        this.parent(...arg);
        // Skip so we don't blast ears on pause, etc
        if (arg[2])
            return;
        this.text.setBeepSound(getSoundForChar(arg[0].character.name));
    }
});
