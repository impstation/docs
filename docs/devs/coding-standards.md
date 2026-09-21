---
sidebar_position: 2
---
# Coding Standards

## Upstreams Coding Standards
Our own Coding Standards also inherit from Upstreams somewhat, so please be sure to read those as well!

https://docs.spacestation14.com/en/general-development/codebase-info/conventions.html

## Coding Resources

* [Slarti's SS14 Guide](https://hackmd.io/@Slart/S1hsoGFm1l)
* [SS14 Documentation](https://docs.spacestation14.com)

## General notes
* Any additions you make to a non-Impstation file should include comments in the code denoting it as an Impstation change. Doing so prevents these changes from being lost in upstream merge conflicts. The two ways it can be done depend on how much is changed;

If it's a single line change
```YAML
  - type: Speech
    speechSounds: Monkey
    speechVerb: Monkey
    allowedEmotes: ['Scream', 'Laugh'] # Imp Edit
```

If it's a multi line change
```YAML
# Imp Edit Start
  - type: Speech
    speechSounds: Monkey
    speechVerb: Monkey
    allowedEmotes: ['Scream', 'Laugh'] 
# Imp Edit End
```

* Ensure that your changelog is formatted as provided in the PR template. Only player-facing changes need a changelog. Ask for help if you need it!
* If you're porting something from an existing author, make sure they're included as a co-author. The easiest way to do this is by cherry-picking.
* **Make sure to test your PR in game!!!**

## YAML
* Avoid obsolete components where possible to ensure code readability.
* Make use of parenting and component inheritance for complex entities.
* Avoid making duplicate prototypes where possible. If making changes to a prototype that already exists then you should edit the original YAML instead of cloning it.
* All entity names must be lowercase for consistency. There may be exceptions where being uppercase is the point. 

An example of YAML that uses good inheritance and imp comments from `animals.yml`
```YAML
- type: entity
  name: monkey
  id: MobBaseSyndicateMonkey
  parent: MobBaseAncestor
  description: New church of neo-darwinists actually believe that EVERY animal evolved from a monkey. Tastes like pork, and killing them is both fun and relaxing.
  suffix: syndicate base
  components:
  - type: NameIdentifier
    group: Monkey
  - type: SentienceTarget
    flavorKind: station-event-random-sentience-flavor-primate
  - type: Speech
    speechSounds: Monkey
    speechVerb: Monkey
    allowedEmotes: ['Scream', 'Laugh'] #imp
  - type: MonkeyAccent
  - type: NpcFactionMember
    factions:
    - Syndicate
  - type: GhostRole
    prob: 0.05
    makeSentient: true
    name: ghost-role-information-monkey-name
    description: ghost-role-information-monkey-description
    rules: ghost-role-information-syndicate-reinforcement-rules
    mindRoles:
    # This is for syndicate monkeys that randomly gain sentience, thus have no summoner to team with
    - MindRoleGhostRoleSoloAntagonist
    raffle:
      settings: default
  - type: GhostTakeoverAvailable
  - type: Loadout
    prototypes: [SyndicateOperativeGearMonkey]
  # imp edit start
  - type: Vocal
    sounds:
      Male: Monkey
      Female: Monkey
      Unsexed: Monkey
  - type: Emoting
  - type: BodyEmotes
    soundsId: GeneralBodyEmotes
  # imp edit end

- type: entity
  id: MobMonkeySyndicateAgent
  parent: MobBaseSyndicateMonkey
  suffix: syndicate agent
  components:
    # make the player a traitor once its taken
  - type: AutoTraitor
    profile: TraitorReinforcement
  # imp edit start
  - type: VentCrawler
  # imp edit end
```

## CS
* Organise your usings alphabetically. Any upstream usings should be at the top, and our ported usings should be commented underneath. Same goes for dependencies.
* Use `// imp` to comment on _any non-Impstation file_ where you make edits. This includes changes to files we port from other downstreams.
* Similarly, if you're porting from somewhere else, leave a comment indicating where that section of code is from.
* If something CAN go in an `_Impstation` directory, it SHOULD go in an `_Impstation` directory, for ease of upkeep.

Example of organised usings from `AnimalHusbandrySystemImp.cs`. Some IDE's will auto-sort these for you alphabetically.
```c#
using System.Linq;
using Content.Server.Administration.Logs;
using Content.Shared.Damage.Components;
using Content.Server.Cloning;
using Content.Server.Ghost.Roles.Components;
using Content.Shared.Database;
using Content.Shared.EntityTable;
using Content.Shared.Interaction.Components;
using Content.Shared.Mind;
using Content.Shared.Mobs.Components;
using Content.Shared.Nutrition.AnimalHusbandry;
using Content.Shared.Nutrition.Components;
using Content.Shared.Nutrition.EntitySystems;
using Robust.Shared.Audio.Systems;
using Robust.Shared.Prototypes;
using Robust.Shared.Random;
using Robust.Shared.Timing;

using Content.Shared._Impstation.AnimalHusbandry.Components;
using Content.Shared._Impstation.EntityTable.Conditions;

namespace Content.Server._Impstation.AnimalHusbandry.EntitySystems;
```

### Commenting
Code *MUST* come with comments where applicable, this applies most heavily to:
* Datafield Variables
* Classes
* Functions

Each of these should come with summary comments giving a brief explanation of what the applicable codes purpose is and what it does. This is highly important as it allows people needing to work on your code in the future to understand exactly what is going on. It can also help those who largely work with just YAML.

It is important to remember that people working on this project are of totally varying skill levels. *Do not assume that because code is readable to YOU that it will be readable to EVERYONE.* Always comment your code where possible.

An example of a well documented Component from `IconSmoothComponent.cs`
```c#
/// <summary>
///     Makes sprites of other grid-aligned entities like us connect.
/// </summary>
/// <remarks>
///     The system is based on Baystation12's smoothwalling, and thus will work with those.
///     To use, set <c>base</c> equal to the prefix of the corner states in the sprite base RSI.
///     Any objects with the same <c>key</c> will connect.
/// </remarks>
[RegisterComponent]
public sealed partial class IconSmoothComponent : Component
{
    [ViewVariables(VVAccess.ReadWrite), DataField("enabled")]
    public bool Enabled = true;

    public (EntityUid?, Vector2i)? LastPosition;

    /// <summary>
    ///     We will smooth with other objects with the same key.
    /// </summary>
    [ViewVariables(VVAccess.ReadWrite), DataField("key")]
    public string? SmoothKey { get; private set; }

    /// <summary>
    ///     Additional keys to smooth with.
    /// </summary>
    [DataField]
    public List<string> AdditionalKeys = new();

    /// <summary>
    ///     Prepended to the RSI state.
    /// </summary>
    [ViewVariables(VVAccess.ReadWrite), DataField("base")]
    public string StateBase { get; set; } = string.Empty;

    [DataField("shader", customTypeSerializer:typeof(PrototypeIdSerializer<ShaderPrototype>))]
    public string? Shader;

    /// <summary>
    ///     Mode that controls how the icon should be selected.
    /// </summary>
    [ViewVariables(VVAccess.ReadWrite), DataField("mode")]
    public IconSmoothingMode Mode = IconSmoothingMode.Corners;

    /// <summary>
    ///     Used by <see cref="IconSmoothSystem"/> to reduce redundant updates.
    /// </summary>
    internal int UpdateGeneration { get; set; }
}
```

An example of a well documented function from `AnimalHusbandrySystemImp.cs`
```c#
    /// <summary>
    /// Handles growing an infant by deleting the current mob and making a new one
    /// This also transfers the previous components to the new mob
    /// </summary>
    /// <param name="_infant">The infant that will be aging</param>
    /// <returns>Whether the infant was successfully grown or not. If this returns false then likely there is something wrong</returns>
    private bool AdvanceStage(Entity<ImpInfantComponent> infant)
    {
        bool isAdult = false;

        var newStage = SpawnNewMob(infant, infant.Comp.NextStage);

        if (newStage == null)
            return false;

        if (!_prototype.Resolve(infant.Comp.OffspringSettings, out var settings))
            return false;

        // If someone is in this thing, move them over as well
        if (_mind.TryGetMind(infant, out var mind, out var mindComp))
            _mind.TransferTo(mind, newStage);

        isAdult = !_entManager.TryGetComponent<InfantComponent>(newStage, out var comp);

        // Make sure the relevant Data like damage carries over
        _cloning.CloneComponents(infant, (EntityUid)newStage, settings);

        // If there is a ghost role attached to this mob, keep it
        if (_entManager.TryGetComponent<GhostRoleComponent>(infant, out var ghostComp))
        {
            AddComp<GhostRoleComponent>((EntityUid)newStage);
            CopyComp(infant, (EntityUid)newStage, ghostComp);
        }

        QueueDel(infant);

        // So they don't immediately try to breed the second they grow up
        if(isAdult && _entManager.TryGetComponent<ImpReproductiveComponent>(newStage, out var reproComp))
            reproComp.NextSearch = _time.CurTime + _random.Next(reproComp.MinSearchAttemptInterval, reproComp.MaxSearchAttemptInterval);

        return isAdult;
    }
```

### TODOs
TODO can be tempting things to put in your code as they're very good on keeping notes on things that need to be done.

HOWEVER

Avoid placing in TODOs and leaving them there wherever possible. While these are good for letting people know what needs to be worked on as well as the issues with code it also leads to the insurmountable tech debt that SS14 is currently build upon. Glancing within Robust and certain other core files of the game it's very easy to find plenty of TODOs that amount to just "Redo this entire thing."

If you find yourself in a position where you NEED to leave a TODO in a project due to issues you are having, *ASK ABOUT IT IN DISCORD.* It is better to squash a TODO *BEFORE* it can be merged into the codebase rather than some unknown time after. The same applies to adding in code with the express purpose of reworking it in a future project. Any code you are attempting to PR should be code that you are satisfied with calling "Finished" and should not be code you are hoping someone else will fix one day.

### General Coding

#### Small Catches
* No Magic Numbers (All Numbers _must_ be done through a variable)
* Use `Entity<Component>` when passing around Components in functions
* Any player facing text should use localization
* Use `LocId` instead of `string` for localization so they are validated

#### Guard Clauses

Guard Clauses are the act of avoiding wrapping code within an if statement and instead using an if statement to cut off code _where possible._

This example is _with_ a guard clause, the if statement exist as two lines that run before the code does and call a return if the condition is met, resulting in the proceeding code not running.

```
if (!condition)
  return;

var foo = ent.Comp;
DoSomeShit(foo.Bar);
// ... etc
```

This is an example _without_ a guard clause, involving wrapping the code within the if statement. while largely this can function the same, stopping the inner code running, when these if statements start to get nested within each other it risks it becoming unreadable and more difficult to work with.

```
if (condition)
{
  var foo = ent.Comp;
  DoSomeShit(foo.Bar);
  // ... etc
}
```

***
For questions, assistance, debugging etc. feel free to ping any of the development help roles in Discord.