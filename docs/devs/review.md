---
sidebar_position: 3
---
# Tips for Reviewing PRs

## Important Considerations

This guide is not a be-all end-all. Just because a PR passes the checks covered within this guide does not mean it's a perfect PR. This is primarily to help narrow down what people need to look out for. If you see things not covered that need changing within a PR, you should request those changes.

## Steps of a Review

### In-Game Testing

All PR's must be tested in game with all of their features inspected to see that they function correctly without breaking anything within the game. _You should never approve a PR without first testing it thoroughly_ as this game lead to unintended in-game consequences. 

Bugs will slip through the cracks at time, the expectation primarily is that the features within a PR all at the very least function as they should, this includes features they may affect.

Using Advanced Node Scanner as an example, a PR which added a new tool for providing more information from scanning an Artifact when an Advanced Node Scanner is connected, in this PR it would be required that you test;
* The Advanced Node Scanner
* The Original Node Scanner
* Node Scanner Linking
* Point Extraction

As the Advanced Node Scanner touches systems which branch into these features closely, meaning there may risk being bugs that slip through into those features.

### Code Reviewing

All code should be thoroughly inspected and assessed for flaws.

## Things to look for

### General

#### Simple checks

Make sure all code within a PR follows the [Impstation Coding Standards](https://github.com/impstation/imp-station-14/wiki/Coding-Standards) as closely as possible.

#### File Organisation

Files should be organized correctly and as matching to other file structures as possible

For instance in the Case of Code file organization may look like:
```
- Feature Folder
   - Systems
      - ThingSystem.cs
   - Components
      - ThingComponent.cs
   - Prototypes
      - ThingPrototype.cs
```

Keeping things consistently organized makes readability within the file structure fire easier on future contributors

In the case of Sprites most features already have a sprite destination. For instance if making a new Mob your file destination may look like `Textures/_Impstation/Mobs/MyMob` as this is where all Impstation mob sprites are located.

### YAML

#### Simple Checks
* All prototype names must use lowercase (Note this is _NOT_ IDs, those can use uppercase)

### C#

#### Simple Checks
* No Magic Numbers (All Numbers _must_ be done through a variable)
* Use `Entity<Component>` when passing around Components in functions
* Any player facing text should use localization
* Use `LocId` instead of `string` for localization so they are validated


#### Guard Clauses

Guard Clauses are the act of avoiding wrapping code within an if statement and instead using an if statement to cut off code _where possible._

This example is _with_ a guard clause, the if statement exist as two lines that run before the code does and call a return if the condition is met, resulting in the proceeding code not running.

```cs
if (!condition)
  return;

var foo = ent.Comp;
DoSomeShit(foo.Bar);
// ... etc
```

This is an example _without_ a guard clause, involving wrapping the code within the if statement. while largely this can function the same, stopping the inner code running, when these if statements start to get nested within each other it risks it becoming unreadable and more difficult to work with.

```cs
if (condition)
{
  var foo = ent.Comp;
  DoSomeShit(foo.Bar);
  // ... etc
}
```

#### Code Readability

Given the projects open source nature, code readability is highly important. Things that should be done to aid this are;

* Split larger systems into separated files

### Mapping

<WipHeader/>