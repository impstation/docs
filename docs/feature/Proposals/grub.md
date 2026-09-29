
# *Monarch rays* (Placeholder name)

<FeatureHeader authors='StarlightHowls' status='In Development'/>

## Concept

![dancefuckerdance](https://64.media.tumblr.com/35cae7f2ccc0cab0c1598961faf2371b/20e07d3504b97450-e0/s540x810/c9cd1486c080981186e6745ec1d7e81c242b5e07.gifv)


Xenomorph style conversion antag.
Originally a project to make a monarch ray mob based on the station mural that i got carried away with, i plan to redesign them visually and come up with a new name now though.

## Associated PR(s)
https://github.com/impstation/imp-station-14/pull/4468

## About The Feature

> Queen

The queen builds her nest and hatches little grubs which then need a food source, that's the station's crew! So the queen uses her ranged attack to ensnare a crew member and drag them back to the nest.
The win condition would be to have a certain amount of baby monarchs finish growing.

- Midround spawn, either in space with a pinpointer or on station.
- Thermal vision.
- Invisibility like the stealth box (based on being still).
- Has an Egg spawn action.
- Has a recharging action to create what are basically airlocks with built in fans, locked to their species access. Used to build a nest. (the fans are for keeping atmos in and prey alive)
- Has a cooldown based ranged attack that works like a bola/ weak cuffs.
- Strong for dragging victims away quickly once bound.

> Grub

Newly hatched grubs look for a host.

- A helpless ai mob that stays around the area where they hatched.
- If an ensnared crew member gets too close to the nest they will try to attach themself as a hat, destroying or force removing any headgear in the way. (Hat slot may have issues with spacing/ airloss so maybe mask slot?)
- The grub slowly grows when attached to the player's head.

> Converted Crew
<img width="417" height="256" alt="image" src="https://github.com/user-attachments/assets/f5c83953-2c1a-4902-87ee-34e759cb6527" />

- When a grub is on a players head they are converted to antag.
- Their new goal is to protect their grub at all costs.
- If the player has the grub removed they will return to being a nonantag.
- But if the grub is allowed to grow it will kill the player and move the playermind to the now adult monarch ray which can now leave its dead host.

> Adult

- Slightly smaller than the queen.
- Has no stealth or egg spawn action.
- Is able to repair damaged nest walls.
- Has a slowing ranged attack.

## Technical Implementation
> C# and HTN Things i can't do.
- Antag goal system that tracks how many grubs have grown into baby monarch rays.
- Component that makes someone an antag but only when a specific item is equipped.
- Way of making a timer trigger pause or reset when its conditions are no longer met.
- A way for a mob to detect an ensnared player with a hat slot, remove a hat if it exists and equip itself. (Specifically a player not just humanoid)
- Something that means if a player dies with this specific entity equipped their consciousness is moved to that entity.

WIP by Lightning!
  
https://github.com/user-attachments/assets/695ef425-0b99-4c5c-a007-d1034134fa80
