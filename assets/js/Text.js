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
    /*8*/ [{text: "Continue", nextStep: 24 }, { text: "Continue", nextStep: 24 }, { text: "Continue", nextStep: 24 }],
    /*9*/ [{text: "Gameover"}, { text: "Gameover"}, { text: "Gameover"}],
    /*10*/[{text: "Head to the barkeeper", nextStep: 23 }, {text:"Ask tavern if they seen the man the artist described", nextStep: 26}, {text:"Sit down at a empty desk and observe the tavern.",nextStep: 27}],
    /*11*/[{text: "Force the barkeeper to give you the desired Information", nextStep: 28,condition: {strength: 6}, strength: 1}, {text: "Tell the barkeeper who you are and demand the Information", nextStep: 28, condition: {intelligence: 6}}, {text: "Offer the whole tavern a free drink for information.", nextStep: 30}],
    /*12*/[{text: "Restart", nextStep: 25}, {text: "Restart", nextStep: 25}, {text: "Restart", nextStep: 25}],
    /*13*/[{text: "Decide to face them head on, and force them to give you more informations.",nextStep: 29, condition: {strength: 8}, strength: 2}, {text: "try to bribe them to give you the informations.", nextStep: 31, intelligence: 1}, {text:"follow them once they leave the tavern.", nextStep: 32, condition: {dexterity: 8}, dexterity: 2}],
    /*14*/[{text: "Continue", nextStep: 31 }, { text: "Continue", nextStep: 31 }, { text: "Continue", nextStep: 31 }],
    ];
/*Arrays for descriptions*/
const descriptionTexts = [
/*0*/     {text: "The fishermen mention seeing a suspicious person sneaking around the warehouses.", buttons: 1 },
/*1*/     {text: "As you approach, the figure notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2 },
/*2*/     {text: "A merchant recognizes the portrait and points you to a local artist living in a warehouse who might have more information.", buttons: 3 },
/*3*/     {text: "You arrived at the warehouse as described by the merchant. It seems to be closed", buttons: 4 },
/*4*/     {text: "After looking out for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2 },
/*5*/     {text: "You decide to take a diplomatic approach. 'I am a detective of the crown, and I heard you might have information about a stolen portrait. Care to share?'", buttons: 5 },
/*6*/     {text: "The man reacts defensively, attracting attention from nearby guards.", buttons: 6 },
/*7*/     {text: "The man, fearing legal repercussions, spills the rumors he heard. About an artist living in a warehouse who might have more information. Following this description you arrive at a closed Warehouse.", buttons: 4 },
/*8*/     {text: "After looking for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It is a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2 },
/*9*/     {text: "You follow the tracks of the artist to a closed warehouse", buttons: 4 },
/*10*/    {text: "You break open the door and see inside an atelier with a young man painting.", buttons: 7 },
/*11*/    {text: "You find a open window on the level above you. It appears you can climb up there and get in. Inside, you see an atelier with a young man painting.", buttons: 7 },
/*12*/    {text: "Inside, you see an atelier with a young man painting.", buttons: 7 },
/*13*/    {text: "You manage to lockpick the door and inside you see an Atelier with a young man painting.", buttons: 7 },
/*14*/    {text: "He gladly accepts the reward and shares information about an artist living in a warehouse who might know more about this painting.", buttons: 4 },
/*15*/    {text: "The man, fearing legal repercussions, spills the rumours he heard. About an artist living in a warehouse who might have more information. Following this description you arrive at a closed warehouse.", buttons: 4 },
/*16*/    {text: "He can not recall any suspicious activity.", buttons: 5 },
/*17*/    {text: "You did not manage to escape the guards and will be taken into custody. At the time you explain everything and are allowed to set your foot free. The thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe.", buttons: 9 },
/*18*/    {text: "They do not believe you and you will be taken into custody. At the time you explain everything and are allowed to set your foot free. The thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe.", buttons: 9 },
/*19*/    {text: "He accepts your offer an tells you about an artist living in the warehouse down the street, who might have more information.", buttons: 4 },
/*20*/    {text: "He listens to you, and tells you about a meeting point in the near tavern, the thief wants to sell the portrait", buttons: 8 },
/*21*/    {text: "You hit him in the back, under pain and scared for his wellbeing he tells you about a meeting in the near tavern, where the thief wants to sell the portrait.", buttons: 8 },
/*22*/    {text: "You caught him, under intense pressure, he tells you about a meeting point in the near tavern, the thief wants to sell the portrait", buttons: 8 },
/*23*/    {text: "The barkeeper looks at you with a grim face", buttons: 11},
/*24*/    {text: "You head to the tavern, it is lively, filled with sailors and locals enjoying their drinks. As you enter, everybody is looking at you. The air is suddenly thick with tension.", buttons: 10 },
/*25*/    {text: "You find yourself standing at the bustling docks of Eldoria, a medieval city bathed in the warm glow of the setting sun. Your mission is clear - to hunt down a thief who stole a precious portrait of the Queen.", buttons: 0},
/*26*/    {text: "The whole tavern ignores you, you don't think you'll be get informations this way.", buttons: 10},
/*27*/    {text: "You can hear a group of well armed people whispering about their last contract to protect a Thief who was eager to escape the City with a boat.", buttons: 13},
/*28*/    {text: "He tells you about the Thief and his arrangement with a group of mercenenaries and aims towards a group of two men and a women well armed.", buttons: 13},
/*29*/    {text: "When the supposed leader stands up to push you away you easily disarm him and put him in a pinch. He shouts he gives up and offers you the desired information", button: 14},
/*30*/    {text: "The people in the tavern are still reserved to give you the wanted Information, maybe you should look for other ways.", buttons: 10},
/*31*/    {text: "He tells you, that they have a meeting in about 1 hour to escort him out of town, The escape via. ship is a misdirection.", buttons: 15},
/*32*/    {text: "You wait for about 30 minutes until they leave. Once they do you follow them in secret through the alleyways of Eldoria until they meet up with a person who fits very well the description of the Thief", buttons: 15},
];