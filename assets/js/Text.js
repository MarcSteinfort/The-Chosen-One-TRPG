/*Arrays for Choices*/
const choiceTexts = [
    /*0*/ [{text: "Ask the fishermen.", nextStep: 0, }, { text: "Approach the shady figure.", nextStep: 1}, { text: "Talk to the merchants.", nextStep: 2 }],
    /*1*/ [{text: "Talk to the merchants", nextStep: 2 }, { text: "Go to the warehouse", nextStep: 3 }, { text: "Look for the shady figure", nextStep: 4 }],
    /*2*/ [{text: "Introduce yourself and ask if he knows about the stolen portrait.", nextStep: 5 }, { text: "Grab his arm and demand information.", nextStep: 6, strength: 1 }, { text: "Threaten him with legal consequences if he doesn't cooperate.", nextStep: 7 }],
    /*3*/ [{text: "Ask the fishermen", nextStep: 0 }, { text: "Look for the shady figure", nextStep: 4 }, { text: "Search for the local artist", nextStep: 9 }],
    /*4*/ [{text: "Try to break open the door", nextStep: 10, strength: 1 }, { text: "Try to find a open window or a way inside.", nextStep: 11, dexterity: 1 }, { text: "Lockpick the closed door", nextStep: 13, intelligence: 1 }],
    /*5*/ [{text: "Offer him a reward for information.", nextStep: 14, intelligence: 1 }, { text: "Mention the Queen's wrath if he withholds information.", nextStep: 15 }, { text: "Ask about any suspicious activities he might have witnessed", nextStep: 16 }],
    /*6*/ [{text: "Run from the guards", nextStep: 17 }, { text: "Explain everything to the Guards", nextStep: 18 }, { text: "Calm the Shady person and offer him payment for information.", nextStep: 19 }],
    /*7*/ [{text: "Introduce yourself and explain the situation.", nextStep: 20, intelligence: 2 }, { text: "Throw something at him to stop him from potentially running ask him about the portrait.", nextStep: 21, strength: 2 }, { text: "Try to catch him and ask him about the portrait", nextStep: 22, dexterity: 2 }],
    /*8*/ [{text: "Continue", nextStep: 24,}, { text: "Continue", nextStep: 24 }, { text: "Continue", nextStep: 24 }],
    /*9*/ [{text: "Gameover (Restart)", nextStep: 25}, { text: "Gameover (Restart)", nextStep: 25}, { text: "Gameover (Restart)", nextStep: 25}],
    /*10*/[{text: "Head to the barkeeper", nextStep: 23 }, {text:"Ask tavern if they seen the man the artist described", nextStep: 26}, {text:"Sit down at a empty desk and observe the tavern.",nextStep: 27}],
    /*11*/[{text: "Force the barkeeper to give you the desired Information", nextStep: 28, condition: {strength: 5}, strength: 1}, {text: "Tell the barkeeper who you are and demand the Information", nextStep: 28, condition: {intelligence: 6}}, {text: "Offer the whole tavern a free drink for information.", nextStep: 30}],
    /*12*/[{text: "Gameover (Restart)", nextStep: 25}, { text: "Gameover (Restart)", nextStep: 25}, { text: "Gameover (Restart)", nextStep: 25}],
    /*13*/[{text: "Decide to face them head on, and force them to give you more informations.",nextStep: 29, condition: {strength: 6}, strength: 2}, {text: "try to bribe them to give you the informations.", nextStep: 31, intelligence: 1}, {text:"follow them once they leave the tavern.", nextStep: 32, condition: {dexterity: 8}, dexterity: 2}],
    /*14*/[{text: "Continue", nextStep: 31 }, { text: "Continue", nextStep: 31 }, { text: "Continue", nextStep: 31 }],
    /*15*/[{text: "Tell them to go to the meeting while you are following them from behind.", nextStep: 33, intelligence: 1}, {text: "Force them to take you with them and face the Thief head on.", nextStep: 34, strength: 1}, {text: "Decide to got to the meeting point on your own.", nextStep: 43}],
    /*16*/[{text: "Try to sneak closer to hear what they are talking about.", nextStep: 35, condition: {dexterity: 6}, dexterity: 2}, {text: "Confront the whole group head-on", nextStep: 36, condition: {strength: 10}, strength: 2}, {text: "Watch them from a safe distance and wait what their next action is.", nextStep: 37}],
    /*17*/[{text: "Watch them from a safe distance and wait what their next action is.", nextStep: 37}, {text: "Interrupt the conversation while stepping in.", nextStep: 38, condition: {intelligence: 6}, intelligence: 2}, {text: "Reveal yourself and tell the mercenaries to catch the thief", nextStep: 39, condition: {intelligence: 8}, intelligence: 2}],
    /*18*/[{text: "Offer the mercenaries a hefty sum of gold to catch the thief right now", nextStep: 40, condition: {intelligence: 7}, intelligence: 1}, {text: "Run to the thief and try to catch him", nextStep: 41, condition: {dexterity: 9}, dexterity: 2}, {text: "Introduce yourself and tell the thief, that this is his last chance to avoid severe punishment", nextStep: 42}],
    /*19*/[{text: "Confront the person head on.", nextStep: 44, strength: 1}, {text: "Run to the supposed thief and try to catch him.", nextStep: 41, condition: {dexterity: 9}, dexterity: 2}, {text: "Observe the situation a bit more.", nextStep: 45, intelligence: 1}],
    /*20*/[{text: "Jump out of your hiding place and try to catch the thief.", nextStep: 41, condition: {dexterity: 7}, dexterity: 2}, {text: "Offer the mercenaries a hefty sum of gold to catch the thief right now", nextStep: 40, condition: {intelligence: 7}, intelligence: 1}, {text: "Interrupt the conversation while stepping in.", nextStep: 38, condition: {intelligence: 6}, intelligence: 2}],
    /*21*/[{text: "Continue", nextStep: 46}, { text: "Continue", nextStep: 46}, { text: "Continue", nextStep: 46}],
    /*22*/[{text: "Follow them silently", nextStep: 47, condition: {dexterity: 7}, dexterity: 1}, {text: "Step in and take the whole group head-on", nextStep: 36, condition: {strength: 9}, strength: 2}, {text: "Step out and force the group to give up and hand out the painting", nextStep: 48, condition: {intelligence: 8}, intelligence: 1}],
    /*23*/[{text: "Offer the mercenaries a good amount of gold for catching the Thief.", nextStep: 40, condition: {intelligence: 7}, intelligence: 1}, {text: "Run to the supposed thief and try to catch him.", nextStep: 41, condition: {dexterity: 8}, dexterity: 2}, {text: "Try to convince the thief to give you the painting.", nextStep: 49, condition: {intelligence: 15}}],
    /*24*/[{text: "Follow the thief as fast as you can.", nextStep: 50, condition: {dexterity: 7}, dexterity: 2}, {text: "Order the mercenaries to follow him and run towards the southern gate.", nextStep: 51, condition: {intelligence: 8}, intelligence: 1}, {text: "Order the mercenaries to run to the southern gate to cut his way off and follow the thief.", nextStep: 52, condition: {intelligence: 8}, intelligence: 1}],
    /*25*/[{text: "Follow him in the left alleyway.", nextStep: 53, condition: {dexterity: 7}, dexterity: 1}, {text: "Go the way straight to the mainstreet to take a possible shortcut.", nextStep: 54, condition: {intelligence: 8}, intelligence: 1}, {text: "Take the way to the right to run to the southern gate and try to cut is planned escape route off.", nextStep: 55}],
    /*26*/[{text: "Run after him and try to catch him.", nextStep: 56, condition: {dexterity: 7}, dexterity: 1}, {text: "Look for other people to help you catch him.", nextStep: 57, condition: {intelligence: 6}, intelligence: 1}, {text:"Look for something you can throw at him.", nextStep: 58, condition: {strength: 8}, strength: 1}],
    /*27*/[{text: "Try to rush to the guy without a shield and take him down fast.", nextStep: 59, condition: {dexterity: 12}, dexterity: 2}, {text: "Wait for the enemies to attack and look for an opening to attack them.", nextStep: 60, condition: {intelligence: 9}, intelligence: 1}, {text: "Attack the man with the shield and overpower him", nextStep: 61, condition: {strength: 12}, strength: 1}],
    /*28*/[{text: "Continue", nextStep: 62}, { text: "Continue", nextStep: 62}, { text: "Continue", nextStep: 62}],
    /*29*/[{text: "Try to dodge the surprise attack", nextStep: 63, condition: {dexterity: 7}, dexterity: 1}, {text: "Rush towards him and push him down.", nextStep: 64, condition: {strength: 7}, strength: 1}, {text: "Draw your own weapon and try to parry his attack.", nextStep: 65, condition: {dexterity: 10}, dexterity: 2}],
    /*30*/[{text: "Follow him", nextStep: 66, condition: {strength: 6}, strength: 2}, {text: "Tell the people around you that there is a thief running.", nextStep: 67, condition: {intelligence: 8}, intelligence: 1}, {text: "Reveal yourself and order the guard to catch the thief in the name of the queen.", nextStep: 68}],
    /*31*/[{text: "Run after him", nextStep: 69, condition: {dexterity: 8}, dexterity: 1}, {text: "Run on the mainstreet and look there for help.", nextStep: 70}, {text:"Look for something you can throw at him.", nextStep: 58, condition: {strength: 8}, strength: 1}],
    /*32*/[{text: "Finish the unfortunate soul quickly", nextStep: 72, dexterity: 1}, {text: "Dash towards the other man to strike him down aswell.", nextStep: 73, condition: {strength: 8}, strength: 2}, {text: "Wait for the last mercenary to attack.", nextStep: 71, condition: {intelligence: 8}, intelligence: 1}],
    /*33*/[{text: "Finish the unfortunate soul on the ground", nextStep: 72, dexterity: 1}, {text: "Dash towards the last man to strike him down aswell.", nextStep: 73, condition: {strength: 8}, strength: 2}, {text: "Wait for the last mercenary to attack.", nextStep: 71, condition: {intelligence: 8}, intelligence: 1}],
    /*34*/[{text: "Finish the unfortunate soul on the ground", nextStep: 75, dexterity: 1}, {text: "Dash towards the second mercenary and strike him down aswell", nextStep: 76, condition: {dexterity: 8}, dexterity: 2}, {text: "Wait for the last mercenary to attack.", nextStep: 74, condition: {intelligence: 8}, intelligence: 1}],
    /*35*/[{text: "Congratulations(Click to restart)", nextStep: 25}, {text: "Congratulations(Click to restart)", nextStep: 25}, {text: "Congratulations(Click to restart)", nextStep: 25}],
    /*36*/[{text: "Rush towards the thief to strike him down.", nextStep: 77, condition: {dexterity: 9}, dexterity: 1}, {text: "Wait for the Thief to attack once more.", nextStep: 78, condition: {intelligence: 9}, intelligence: 1}, {text: "Try to run him down.", nextStep: 79, condition: {strength: 9}, strength: 1}],
    /*37*/[{text: "Continue", nextStep: 80}, { text: "Continue", nextStep: 80}, { text: "Continue", nextStep: 80}],
    /*38*/[{text: "Continue", nextStep: 67}, { text: "Continue", nextStep: 67}, { text: "Continue", nextStep: 67}],
    /*39*/[{text: "Run after the thief.", nextStep: 69, condition: {dexterity: 10}, dexterity: 1}, {text: "Go the way straight to the mainstreet to take a possible shortcut.", nextStep: 54, condition: {intelligence: 8}, intelligence: 1}, {text: "Take the way to the right to run to the southern gate and try to cut is planned escape route off.", nextStep: 55}],
    /*40*/[{text: "Rush towards him", nextStep: 76, condition: {dexterity: 8}, dexterity: 1}, {text: "Wait for him to attack again.", nextStep: 74, condition: {intelligence: 9}, intelligence: 1}, {text: "Ignore him and go after the thief.", nextStep: 81}],
    /*41*/[{text: "Dodge him.", nextStep: 82, condition: {dexterity: 8}, dexterity: 1}, {text: "Try to parry him.", nextStep: 83, condition: {strength: 9}, strength: 1}, {text: "Ignore the attack and attack aswell.", nextStep: 84}],
    /*42*/[{text: "Attack him.", nextStep: 85, condition: {strength: 8}, strength: 1}, {text: "Wait once again for his attack.", nextStep: 86, condition: {intelligence: 8}, intelligence: 1}, {text: "Try to disarm him.", nextStep: 87, condition: {dexterity: 9}, dexterity: 1}],
    /*43*/[{text: "Continue", nextStep: 88}, { text: "Continue", nextStep: 88}, { text: "Continue", nextStep: 88}],
    /*44*/[{text: "End his life.", nextStep: 89}, {text: "try to help him and treat his wound.", nextStep: 90, condition: {intelligence: 13}, intelligence: 3}, {text: "ignore him and take the painting.", nextStep: 91}],
    /*45*/[{text: "Continue", nextStep: 92}, { text: "Continue", nextStep: 92}, { text: "Continue", nextStep: 92}],
    /*46*/[{text: "throw his weapon away and take him into custody.", nextStep: 93}, {text: "End his life.", nextStep: 94}, {text: "ignore him and take the painting.", nextStep: 95}],
    /*47*/[{text: "Continue", nextStep: 96}, { text: "Continue", nextStep: 96}, { text: "Continue", nextStep: 96}],
    /*48*/[{text: "Continue", nextStep: 97}, { text: "Continue", nextStep: 97}, { text: "Continue", nextStep: 97}],
    /*49*/[{text: "Continue", nextStep: 98}, { text: "Continue", nextStep: 98}, { text: "Continue", nextStep: 98}]
    ];
/*Arrays for descriptions*/
const descriptionTexts = [
/*0*/     {text: "The fishermen mention seeing a suspicious person sneaking around the warehouses.", buttons: 1 },
/*1*/     {text: "As you approach, the figure notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2, image: "assets/image/shadyperson.png", alt: "A shady informant"},
/*2*/     {text: "A merchant recognizes the portrait and points you to a local artist living in a warehouse who might have more information.", buttons: 3 },
/*3*/     {text: "You arrived at the warehouse as described by the merchant. It seems to be closed", buttons: 4 },
/*4*/     {text: "After looking out for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2, image: "assets/image/shadyperson.png", alt: "A shady informant" },
/*5*/     {text: "You decide to take a diplomatic approach. 'I am a detective of the crown, and I heard you might have information about a stolen portrait. Care to share?'", buttons: 5 },
/*6*/     {text: "The man reacts defensively, attracting attention from nearby guards.", buttons: 6, image: "assets/image/Cityguard.jpg", alt: "A medieval Cityguard" },
/*7*/     {text: "The man, fearing legal repercussions, spills the rumors he heard. About an artist living in a warehouse who might have more information. Following this description you arrive at a closed Warehouse.", buttons: 4 },
/*8*/     {text: "After looking for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It is a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2, image: "assets/image/shadyperson.png", alt: "A shady informant" },
/*9*/     {text: "You follow the tracks of the artist to a closed warehouse", buttons: 4 },
/*10*/    {text: "You break open the door and see inside an atelier with a young man painting.", buttons: 7 },
/*11*/    {text: "You find a open window on the level above you. It appears you can climb up there and get in. Inside, you see an atelier with a young man painting.", buttons: 7 },
/*12*/    {text: "Inside, you see an atelier with a young man painting.", buttons: 7 },
/*13*/    {text: "You manage to lockpick the door and inside you see an Atelier with a young man painting.", buttons: 7},
/*14*/    {text: "He gladly accepts the reward and shares information about an artist living in a warehouse who might know more about this painting.", buttons: 4},
/*15*/    {text: "The man, fearing legal repercussions, spills the rumours he heard. About an artist living in a warehouse who might have more information. Following this description you arrive at a closed warehouse.", buttons: 4 },
/*16*/    {text: "He can not recall any suspicious activity.", buttons: 5},
/*17*/    {text: "You did not manage to escape the guards and will be taken into custody. At the time you explain everything and are allowed to set your foot free. The thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe.", buttons: 9, image: "assets/image/Cityguard.jpg", alt: "A medieval Cityguard"},
/*18*/    {text: "They do not believe you and you will be taken into custody. At the time you explain everything and are allowed to set your foot free. The thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe.", buttons: 9, image: "assets/image/Cityguard.jpg", alt: "A medieval Cityguard" },
/*19*/    {text: "He accepts your offer an tells you about an artist living in the warehouse down the street, who might have more information.", buttons: 4 },
/*20*/    {text: "He listens to you, and tells you about a meeting point in the near tavern, the thief wants to sell the portrait", buttons: 8 },
/*21*/    {text: "You hit him in the back, under pain and scared for his wellbeing he tells you about a meeting in the near tavern, where the thief wants to sell the portrait.", buttons: 8 },
/*22*/    {text: "You caught him, under intense pressure, he tells you about a meeting point in the near tavern, the thief wants to sell the portrait", buttons: 8 },
/*23*/    {text: "The barkeeper looks at you with a grim face", buttons: 11, image: "assets/image/barkeeper.png", alt: "A barkeeper making a beer"},
/*24*/    {text: "You head to the tavern, it is lively, filled with sailors and locals enjoying their drinks. As you enter, everybody is looking at you. The air is suddenly thick with tension.", buttons: 10, image: "assets/image/barkeeper.png", alt: "A barkeeper making a beer" },
/*25*/    {text: "You find yourself standing at the bustling docks of Eldoria, a medieval city bathed in the warm glow of the setting sun. Your mission is clear - to hunt down a thief who stole a precious portrait of the Queen.", buttons: 0},
/*26*/    {text: "The whole tavern ignores you, you don't think you'll be get informations this way.", buttons: 10, image: "assets/image/barkeeper.png", alt: "A barkeeper making a beer"},
/*27*/    {text: "You can hear a group of well armed people whispering about their last contract to protect a Thief who was eager to escape the City with a boat.", buttons: 13, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*28*/    {text: "He tells you about the Thief and his arrangement with a group of mercenenaries and aims towards a group of two men and a women well armed.", buttons: 13, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*29*/    {text: "When the supposed leader stands up to push you away you easily disarm him and put him in a pinch. He shouts he gives up and offers you the desired information.", buttons: 14, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*30*/    {text: "The people in the tavern are still reserved to give you the wanted Information, maybe you should look for other ways.", buttons: 10,image: "assets/image/barkeeper.png", alt: "A barkeeper making a beer"},
/*31*/    {text: "He tells you, that they have a meeting in about 1 hour to escort him out of town, The escape via. ship is a misdirection.", buttons: 15, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*32*/    {text: "You wait for about 30 minutes until they leave. Once they do you follow them in secret through the alleyways of Eldoria until they meet up with a person who fits very well the description of the Thief", buttons: 16, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*33*/    {text: "You follow the group of mercenaries through various alleyways of Eldoria until they meet up with a person who fits very well the description of the Thief", buttons: 17, image: "assets/image/thief.png", alt: "A thief in a town."},
/*34*/    {text: "You leave the Tavern with the group of mercenaries and walk through various alleyways of Eldoria to get to the meeting point. The person who stands on the other side of the street fits very well the description of the Thief. He looks very surprised when he sees you.", buttons: 18},
/*35*/    {text: "You manage to get closer to the conversation. You can hear, that the misdirection, him getting out of the town with a ship was a success and that they need to hurry to get out of the town now.", buttons: 20},
/*36*/    {text: "You step into the conversation and order the group to surrender and hand over the painting. The group grabs their weapons.", buttons: 21, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*37*/    {text: "You hide between two houses and watch them talk after a few minutes they go together in the direction of the southern town gates not the direction of the Docks.", buttons: 22},
/*38*/    {text: "You step into the conversation the whole group seems surprised but for different reasons. You tell them that defiance is useless and to surrender the painting before everything goes south.", buttons: 23, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*39*/    {text: "You run towards the conversation and tell the mercenaries to catch the thief in the name of the Queen. They look at you for a moment rather surprised when they turn to the thief again he is running away already.", buttons: 24, image: "assets/image/thief.png", alt: "A thief in a town."},
/*40*/    {text: "You run towards the conversation and tell the mercenaries to catch the thief in the name of the Queen. 'She will offer you a hefty sum for catching the thief.' They look at you for a moment rather surprised when they turn to the thief again he is running away already.", buttons: 24, image: "assets/image/thief.png", alt: "A thief in a town."},
/*41*/    {text: "You sprint towards the thief he immediately turns around and runs away. He is pretty fast. He runs for a while but turns to the left in a small alleyway.", buttons: 25, image: "assets/image/thief.png", alt: "A thief in a town."},
/*42*/    {text: "He ignores you and starts to run away.", buttons: 26, image: "assets/image/thief.png", alt: "A thief in a town."},
/*43*/    {text: "You manage to find the meeting point there is standing a person who fits the description of the thief, he is looking around rather nervous.", buttons: 19, image: "assets/image/thief.png", alt: "A thief in a town."},
/*44*/    {text: "You force the person to hand over the stolen painting. The supposed thief turns around and tries to run away.", buttons: 25, image: "assets/image/thief.png", alt: "A thief in a town."},
/*45*/    {text: "After obeserving the thief a bit more you see the mercenaries coming and joining the supposed thief.", buttons: 16, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*46*/    {text: "You manage to fight of one of the mercenaries and push him down. The other two have drawn their weapons already, both are equipped with Longsword the 'Leader' has a shield in the other hand.", buttons: 27, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*47*/    {text: "You follow them through the streets to the southern gate. You did not find any opportunity to engage with them. He leaves the town with the painting. The Queen won't like to hear this news", buttons: 12},
/*48*/    {text: "You tell the Thief to hand out the painting and the punishment will be reduced to a minimum. He starts running away though.", buttons: 24, image: "assets/image/thief.png", alt: "A thief in a town."},
/*49*/    {text: "You convinced the Thief to give you the Painting but he wants to leave with just a beating, you agree to this your primary mission was to retrieve the Painting for your queen.", buttons: 28, image: "assets/image/thief.png", alt: "A thief in a town."},
/*50*/    {text: "You run after the thief the mercenaries are standing there quite perplexed. You follow the Thief until he turns into another alleyway to the left.", buttons: 25, image: "assets/image/thief.png", alt: "A thief in a town."},
/*51*/    {text: "You run towards the southern gate in order to cut his way off, out of the town. He never arrived there though. You missed the oppurtunity to catch the thief. The time you need to get to him again, will be to long he will escape the town before you manage to do anything. The Queen's punishment will be severe.", buttons: 12},
/*52*/    {text: "You follow the thief while you yell at the mercenaries to cut of his escape route. The thief suddenly turns left in another alleyway.", buttons: 25, image: "assets/image/thief.png", alt: "A thief in a town."},
/*53*/    {text: "You follow the thief and you manage to catch up a little bit, when he suddenly turns around and jumps at you with a dagger.", buttons: 29, image: "assets/image/thief.png", alt: "A thief in a town."},
/*54*/    {text: "You run on the mainstreet to cut his way off. A few seconds later you see him running out of another alley and starts running away from the southern gate.", buttons: 30, image: "assets/image/thief.png", alt: "A thief in a town."},
/*55*/    {text: "You decide to run to the southern gate to keep him from leaving the city but he never gets there. You missed the oppurtunity to catch the thief. The time you need to get to him again, will be to long he will escape the town before you manage to do anything. The Queen's punishment will be severe.", buttons: 12},
/*56*/    {text: "You start running after him and try to catch up to him. He starts turning left in another alley.", buttons: 25, image: "assets/image/thief.png", alt: "A thief in a town."},
/*57*/    {text: "You look for other people to help you but unfortunately there are no people around.", buttons: 31, image: "assets/image/thief.png", alt: "A thief in a town."},
/*58*/    {text: "You find a stonebrick lying around and throw it at him you hit the target and he slips, but can get up immediately you manage to catch up to him but he turns left in another alley.", buttons: 25, image: "assets/image/thief.png", alt: "A thief in a town."},
/*59*/    {text: "You dash ahead and strike down the mercenary, two precise stabs and the man drops to the ground and his sword is falling out of his hand.", buttons: 32, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*60*/    {text: "You get in a defensive stance and wait until you see an opening, which happens very soon. the mercenaries do not seem to be very trained. You manage to stab down one of the mercenaries and fight them back.", buttons: 33, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*61*/    {text: "You focus on the supposed leader of the group. You overwhelm him with multiple hits. he manages to block the first and second hit but after the third and fourth hit breaks through his defense and you break his ribs with two mercyless hits and he drops unconscious.", buttons: 34, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*62*/    {text: "You take the Painting to your Queen. She acknowledged your accomplishment. She asks you about the thief. You tell her the story. She is not amused but accepts your judgement and honors you with a small fief.", buttons: 35},
/*63*/    {text: "You manage to dodge the attack, while you jump back from the attacking thief, you draw your sword and you are ready to fight, the thief.", buttons: 36, image: "assets/image/thief.png", alt: "A thief in a town."},
/*64*/    {text: "You decide to take him down and ignore your defense. You manage to do this but the thief stabs you in the stomach. A stinging pain runs through your body while you try to keep your blood in your body. The thief stands up and runs away. You lie there without the possibility to do anything. After a few painful minutes, you start to losing your consciousness. You feel very cold and everything is turning black.", buttons: 12, image: "assets/image/thief.png", alt: "A thief in a town."},
/*65*/    {text: "You are able to draw your weapon in time and you barely manage to parry his attack. Now you are facing each other both have their weapons drawn.", buttons: 36, image: "assets/image/thief.png", alt: "A thief in a town."},
/*66*/    {text: "You rush through the people walking on the streets, but soon he manages to vanish in the masses and you lose sight of him. You try to find him again but you can't locate him once more. He escaped you and you lost your chance to catch him. The punishment of the Queen will be severe.", buttons: 12},
/*67*/    {text: "A few people are reacting rather fast and chase after the Thief. They manage to catch him and ring him down. You are able to retrieve the Painting and the thief. You put him in handcuffs and you are returning to your Queen to present your prize for her.", buttons: 37},
/*68*/    {text: "After a short confusion starts the guard chasing after the thief. They manage to catch him and ring him down. You are able to retrieve the Painting and the thief. You put him in handcuffs and you are returning to your Queen to present your prize for her.", buttons: 37},
/*69*/    {text: "You run after the thief. You follow him until he turns into another alleyway to the left.", buttons: 25, image: "assets/image/thief.png", alt: "A thief in a town."},
/*70*/    {text: "While you are running on the mainstreet, you reveal yourself and demand help from the citizens around you to help their queen. Most of them help you to try and catch him.", buttons: 38, image: "assets/image/thief.png", alt: "A thief in a town."},
/*71*/    {text: "You wait for an opening against the supposed leader. You block his first hit and after this you manage to stab into an open side he presents to you and destroy his kidney and most of his innards. You see the thief running away.", buttons: 39, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*72*/    {text: "While you finish the unconcious man, the other mercenary sees his chance and tries to strike you down. You manange to parry the hit barely a small chip results in a cut right beneath your left eye.", buttons: 40, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*73*/    {text: "You dash towards the enemy and manage to strike him down with multiple strikes. One of the strikes cuts through his defenses and you slice his chest open and he falls to the ground, letting his wepaon fall down.", buttons: 39, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*74*/    {text: "You wait for the last mercenary to attack you. In panic or rage he immediately does this. You easily parry his strike and with a swift and precise slash you slit his throat and he goes down.", buttons: 39, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*75*/    {text: "While you finish the unconcious man, the other mercenary sees his chance and tries to strike you down. You manange to parry the hit barely a small chip results in a cut right beneath your left eye.", buttons: 40, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*76*/    {text: "You dash to the last mercenary and strike him down with two precise stabs and a slash as a feint. He drops dead immediately.", buttons: 39, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*77*/    {text: "You rush towards the thief and try to strike him down, he jumps back intime. Even though you manage to inflict a shallow cut in his stomach. but nothing major. The thief jumps at you.", buttons: 41, image: "assets/image/thief.png", alt: "A thief in a town."},
/*78*/    {text: "You wait until he attacks once more. After a few seconds which feel like an eternity where you two look in each other eyes he dashes towards you and tries to stab you. you manage to dodge the attack and give him a slight cut on his arm.", buttons: 42, image: "assets/image/thief.png", alt: "A thief in a town."},
/*79*/    {text: "You try to run him down and you jump at him even though you manage to push him to the ground and your weapon hits the target, his weapon does the same. Both of you lie down in the muddy street trying to keep his wound close.", buttons: 43, image: "assets/image/thief.png", alt: "A thief in a town."},
/*80*/    {text: "Your Queen is pleased, as you return with the picture and even the thief. She honors and thanks you a lot. As a reward she gives you the title of a duke and a small fief. The thief will be executed publicly as a example for others.", buttons: 35},
/*81*/    {text: "You decide to dash ahead and ignore the last mercenary. He does not accept this and even manages to stab you into your side. You struggle to keep going and even fall down. You hold your wound and grunt with pain. The mercenary hurries to your side and while you try to dodge the attack somehow, you just feel the stinging pain of a sword stabbing in your chest. You fall unconsciouss and a cold and dark embrace takes you.", buttons: 12, image: "assets/image/mercenaries.png", alt: "A group of mercenaries"},
/*82*/    {text: "You manage to dodge his attack. You see an opening and attacks him. A quick stab in his kidney brings him down to the ground.", buttons: 44, image: "assets/image/thief.png", alt: "A thief in a town."},
/*83*/    {text: "You parry his attack and push him away. In the same move you slit his throat and he drops down holding is deadly wound.", buttons: 45, image: "assets/image/thief.png", alt: "A thief in a town."},
/*84*/    {text: "You ignore his attack and attack him aswell, even though you manage to push him to the ground and your weapon hits the target, his weapon does the same. Both of you lie down in the muddy street trying to keep his wound close.", buttons: 43},
/*85*/    {text: "You attack him first with a feint, which he tries to parry then with the real strike which hits him in the chest. He trips and falls down while holding his wound.", buttons: 45, image: "assets/image/thief.png", alt: "A thief in a town."},
/*86*/    {text: "You wait patiently for his next attack. A starts with a feint and attacks you right after this you looked right through his plan and you manage to parry his attack and slit his throat with a swift counterattack. He falls to the ground trying to hold is deadly wound.", buttons: 45, image: "assets/image/thief.png", alt: "A thief in a town."},
/*87*/    {text: "After a attack from the thief you manage to disarm him, with a swift hit with your shaft against his hand holding the dagger.", buttons: 46, image: "assets/image/thief.png", alt: "A thief in a town."},
/*88*/    {text: "While lying on the ground you both feel weaker every second. After a painful seemingly endless minute you start to feel cold and stop breathing.", buttons: 12},
/*89*/    {text: "With a swift stab you end the thief's life and take the painting bringing it to your Queen. With the information of the dead thief.", buttons: 47},
/*90*/    {text: "You manage to give first aid and carry him to a hospital. He is in custody and the doctor watches over him, to stop him from dying and trying to run away. With this information and the painting you return to your Queen.", buttons: 37, image: "assets/image/thief.png", alt: "A thief in a town."},
/*91*/    {text: "While he is holding his wound and begs for your help you leave him in the alleyway to die. You take the painting and report to your Queen.", buttons: 48},
/*92*/    {text: "While the thief is taking his last breath, you take the painting and report back to your Queen", buttons: 47, image: "assets/image/thief.png", alt: "A thief in a town."},
/*93*/    {text: "You take the perplexed thief into custody and with the Painting in your other hand you report to your Queen.", buttons: 37, image: "assets/image/thief.png", alt: "A thief in a town."},
/*94*/    {text: "After disarming him, you quickle slit his throat and with a stab in the chest the thief drops dead immediately. You take the painting and report back to your Queen.", buttons: 47, image: "assets/image/thief.png", alt: "A thief in a town."},
/*95*/    {text: "You just take the painting while pointing your sword at the thief he does not intend to disrupt you. As you leave he just stands in the alleyway rather confused.", buttons: 49, image: "assets/image/thief.png", alt: "A thief in a town."},
/*96*/    {text: "The Queen is pleased with your work. She wished to execute the thief herself but thanks you for your help in this matter. She rewards you with a small fief outside of the city.", buttons: 35},
/*97*/    {text: "The Queen is pleased with your work. She would have hoped to execute the thief herself or atleast to having it ended in the alleyway by your hand. Nonetheless She rewards you with a small fief outside of the city.", buttons: 35},
/*98*/    {text: "The Queen is pleased with your work. She expected you to bring the thief with you. She accepts your judgement of the thief and thanks you for bringing the painting back. She rewards you with a small fief outside of the city.", buttons: 35}
];