function createDreamTeam(members) {
  if (!members || !(typeof members[Symbol.iterator] === "function")) {
    return false;
  }
  let firstLetters = [];
  for (e of members) {
    if (!(!e || !(typeof e === "string"))) {
      firstLetters.push(e.toString().replace(/\s*/g, "")[0].toUpperCase());
    }
  }

  return firstLetters.sort().join("");
}

//console.log(createDreamTeam(["Matt", null, 111, "Ann", "Dmitry", "Max"]));
console.log(
  createDreamTeam([
    ["David Abram"],
    ["Robin Attfield"],
    "Thomas Berry",
    ["Paul R.Ehrlich"],
    "donna Haraway",
    " BrIaN_gOodWiN  ",
    {
      0: "Serenella Iovino",
    },
    "Erazim Kohak",
    "  val_plumwood",
  ])
);

//t d b e v
// b d e
