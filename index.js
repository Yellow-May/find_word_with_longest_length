const vowels = ["a", "e", "i", "o", "u"];

function action(str) {
  return str
    .split(" ")
    .map((e) =>
      e
        .replaceAll(",", "")
        .replaceAll(".", "")
        .replaceAll("'", "")
        .replaceAll("-", "")
        .replaceAll("_", "")
    )
    .reduce((a, b) => {
      if (b.length > a.length) {
        return b;
      } else if (a.length > b.length) {
        return a;
      } else {
        const a_arr = a.split("").filter((e) => vowels.includes(e));
        const b_arr = b.split("").filter((e) => vowels.includes(e));
        if (a_arr.length > b_arr.length) {
          return a;
        } else {
          return b;
        }
      }
    }, "");
}

// console.log(
//   action(
//     "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
//   )
// );

// console.log(
//   action(
//     "You will be evaluated for both correctness, proper requirement understanding and presentation abilities"
//   )
// );

// console.log(action("abilities abilities."));

console.log(action("abilities abilities."));
