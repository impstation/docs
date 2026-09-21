---
sidebar_position: 1
---
# Design Principles

_this document is inspired by and based on [Funkystation’s design principles](https://docs.funkystation.org/design/design-principles.html). permission has been granted by taydeo to modify their document to match Impstation. ty taydeo!!!!_

***

Riffing off of what the Space Wizards have done with the game, these design principles go over what we should consider when considering modifications to Impstation.

Questions about game design should be discussed in Discord.

## Caveats

- Just like Wizden says, these are living documents and will change over time.
- SS14 is a roleplay game. All development ideas should account for how players will contextually interact with the environment and each other.

## Core Principles

Creating new features for Impstation should not violate these core principles.

### Finding Comedy in Horror
Impstation is an improv theatre, with each round being an individual scenario. The circumstances of that improv scenario revolve around a chartered corporation whose only interest is to keep their shareholders rich. Players are tasked to fulfill objectives assigned to them, whether by that corporation or by its enemies, and in the process develop a story.

Every character on the station is implicitly in danger. The world of the theatre is a hypercapitalist dystopia: the setting encourages characters to be viewed as company assets, a means to make profit, rather than individuals. When creating new features, this tone should remain consistent.

The joy of Impstation comes from the inherent comedy of this dystopia. A core part of the game is antagonists being assigned objectives that draw them into conflict with other characters. When characters are exposed to danger by each other and their environment, it leads to hilarious situations. A scientist might activate an artifact that teleports them into space, ask a cyborg to rescue them, and be denied because "LAW: ONLY VAMPIRES ARE MEMBERS OF THE CREW". Crazy situations like these happen, and should be embraced.

This is a cartoon world, where horror wraps around to being comedy. When designing new features, ensure that this delicate balance is maintained. Think of possible outcomes and other systems your feature might interact with. And also consider how such a feature might be interacted with in a roleplay scenario. If the answer is very funny, it's probably a winner.

Maximize these silly situations whenever you possibly can.

### There is no Winning or Losing

Space Station 14 is a game that can be ruined for someone very easily if they approach it with the wrong mindset. If you approach Space Station 14 in the same way you would approach Among Us or other social deduction games, you WILL become bored VERY quickly. Rather, ask yourself, what would my Thaven-Lizard-Moth abomination be thinking in this exact moment? Would they be thinking about winning? Or rather, thinking about when their next smokebreak is?
When designing a feature, ask yourself that question. Will this encourage players to engage with my feature with this win or lose mindset? Or does it help maintain the story telling and flow of a round?

This is especially true when designing new antagonist objectives. Sometimes, an objective is MEANT to be difficult to do, and is MEANT to be accomplishable by a manner that would be considered violent. Impstation is a Space Opera, and a win or lose mentality only serves to compromise the fun. There is great fun to be had in failure, just like there is with success.

### Maximising Roleplay Potential (Avoid QOL slop)

When developing a new feature that is set to "optimize" a certain aspect of gameplay, think about the feature as a vector for roleplay. Does the previous feature introduce more ways for people to interact with each other? Or does this feature take away a vector for people to interact? If it does take away, is it a positive change in the long run?

Even minute changes to the game can have significant, and often unpredictable effects on game balance. For instance, giving a medical HUD implant to the CMO might be an improvement to QOL. However, this would allow the CMO to free up their glasses slot, which means they can now access flash protection, sechud status, and more without ever losing their ability to see health bars. It's cut-and-dry power creep.

Sometimes, these changes to game balance can be acceptable, provided they make roleplay interactions more interesting. A different spin on the previous example, instead of giving the CMO an implant, adds a MedChem HUD to their locker at the start of the round. While this would ordinarily take away the opportunity for a CMO to grab a pair of chemist goggles from their employees, it also adds an additional thief target to the pool, which provides more potential roleplay and gameplay interactions.

Even menial tasks that may seem like a chore to accomplish have an important place in the gameplay loop of SS14 as a means for players to interact. You cannot just place a cargo order from the console in your department, you have to print out the form and deliver it to cargo for approval. If you do not play engineering, you do not start with tools, you have to go and get them. Chores are a part of the intended roleplay experience, and part of what makes SS14 so unique as a job simulator.

### Accessibility and Intuitive Design

Possible interactions should be easily intuitive at a glance. When you shift-click on something, you get a brief description about it. When you click on a computer, you use it. When you hit the z key holding a drink, you start slurping it down. Players can intuit these interactions easily without any significant mental load.

As the game becomes more and more complex, with additional features being added, there should remain a degree of simplicity with how information is presented to the user.

UI design is a significant part of this. SS14 is an incredibly text heavy game, and the chat log is the most important UI element. Hotbar actions are presented as pictorial icons, reliant on glance value to convey information about what they do, rather than bombarding the player with more text to interpret. Shift-examine text is relegated to four separate menus, spreading out information to be more easily parseable.

Item interaction is also a key factor. When you light a cigarette in a room filled with plasma, the plasma catches fire, because a cigarette is obviously flammable. The game does not at any point tell the player that a cigarette might do this, but in hindsight, it's obvious that it would, it's literally on fire.

Creating the potential for these hilarious situations is vital to maintaining the game's immersion, but to document them is to draw attention to them, thereby framing them as a purposeful feature of the game that players are expected to be aware of. Embrace the possibility for players to discover these features organically in-game, through intentional visual and contextual design.

### Maintaining Authenticity

Interactions should feel authentic, there is a reason why it is around 7 steps to light a cigarette in this game.
Making a feature feel authentic to real life does not always mean realism. Realism is a different goal that some other forks have in mind, but Realism =/= Authenticity.

Take for example reloading in games, there are more steps to reloading a gun in real life than there is in a game. You can get as granular as you want, even going as far as identifying individual muscle fibers to flex or whatever to achieve a reload. But most games, of course, don't do that. Sure, it'd be realistic, but would it be authentic? No. It would be annoying and tedious.

Sometimes tedium can be a feature of a gameplay loop, but care should be taken with features that players will be engaging with regularly. While lighting a cigarette is an occasional indulgence, in the midst of a firefight with a team of Nukies players will need to reload constantly. Realism should stop and start at what feels good.

## Mapping Principles

Maps are a key part of the game. Ideating on, creating, and maintaining them can be an exhausting but rewarding experience. There are several additional principles we ask developers to adhere to for mapping.

- Do not begin creating a station map as your first mapping project. Stations are incredibly complicated, and inform the entirety of how a round is experienced for every department and role. Consider instead creating a salvage wreck, shuttle, or debris to learn the basic do's and don't's of mapping before you jump into the big stuff.
- Do not try and include every feature of every department in your map. Variety in map design and feature availability keeps maps feeling unique and fresh to play on, and prevents an excess of maps with similar themeing and gimmicks. By varying what is included, maps gain unique identity and introduce new gameplay opportunities. This benefits both the maps you may be creating, and the other maps within the game.
- All maps should be made with consideration given to ground level traffic, navigation, and a first-time player experience. How easy is it to get from point A to point B? Can you go there through the main halls, or is there a shortcut through maintenance? Can someone arriving at the station via the arrivals shuttle or cryosleep intuit the route to their workspace? Is there room for cargo to drag crates? Is there room for antagonists to flee from security? There are endless questions here to consider.

Ultimately, maps are the sandbox which a round takes place in, and the quality of that sand is integral to the player experience. Maps are therefore subject to additional and ongoing scrutiny from players and maintainers alike. Before you decide to create or maintain a map, make sure that scrutiny is something you are prepared for.

## Hard Rules

While we accept most contributions that adhere to these core principles, we have some additional rules for contributors regarding specific aspects of the game.

### Pop Culture References
We do not allow references to existing media that do not make a meaningful contribution to gameplay. Examples of this may include clothing inspired by characters from existing media properties, or items that reference existing media properties.
Consider transforming your contribution somehow, making it less of an overt reference. An idea that begins as 'adding the bomber jackets from the game Disco Elysium' may transform into creating uniquely designed departmental bomber jackets.

### Vanity Contributions

We do not allow references to a contributor's original characters with the intent or effect of artificially drawing attention to that specific character. While memorable characters are a staple of Impstation, we don't want to highlight any particular characters. There's nothing that makes one character inherently more important than others.

Exceptions to this rule can be made in the case of parts of the game that intentionally focus on worldbuilding, such as books. In the case of more general contributions like plushies or lobby art, particular characters should be presented in a generic context, where the character themself is secondary to the circumstances and tone of their environment.

All contributions of this nature must be created by a member of the Impstation community. Any material deemed a vanity contribution that contains content created by an individual outside the community may be closed by project maintainers.

### Original Species

**We are currently in a roundstart species freeze. This means that, while contributors are still free to submit prs for new roundstart species, they will not be merged until the end of the freeze. Ghost role species are still fair game!**

Impstation has a number of original species, and we have a moderately strict criteria for what constitutes an acceptable roundstart species. While we don't fully adhere to the Wizden species guidelines, they're a good place to start.

Roundstart species (thaven, decapoids, kodepiiae) should be mechanically unique to each other, and avoid overlap between gameplay identity. This doesn't necessarily mean that each species should be 'hard mode', but they should be distinct in how they are played. Every upside should come with a downside.
The requirements for ghost role species (goblins, apids) are more lax. If a species does not align with Impstation's vision of roundstart species, it can usually find a life as a ghost role species.

## Conclusion

Everyone who contributes to Impstation is a volunteer. The act of putting forward a suggestion or feature inherently demonstrates passion for the server and a desire to see it improved. While these contributions may be transformed, rejected, or debated over (heatedly, at times), every member of the community shares the desire to build on and cultivate a community where they can enjoy playing a game together. We're all here to have a good time, and each and every player's individual experience contributes to that.