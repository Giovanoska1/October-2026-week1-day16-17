const activityName = "Clothes inventory";
const bought = 15;
const donated = 5;
const totalClothing = bought + donated;

console.log(activityName);
console.log("Bought:", bought);
console.log("Donated:", donated);
console.log("Total clothing:", totalClothing);

const isAcceptingMoreClothing = false;

function decideClothingRequest(requestedClothing, isAcceptingClothing) {
  const hasClothingRequest = requestedClothing > 0;
  const shouldAccept = isAcceptingClothing && hasClothingRequest;

  console.log(
    `Request: ${requestedClothing}; accepting more: ${isAcceptingClothing}`
  );
  console.log(
    `Trace: ${isAcceptingClothing} && (${requestedClothing} > 0) is ${shouldAccept}`
  );

  if (shouldAccept) {
    console.log("Accept the clothing request.");
  } else {
    console.log("Do not accept the clothing request.");
  }
}

console.log("\nCase 1: Positive request under the charity's policy");
decideClothingRequest(3, isAcceptingMoreClothing);

console.log("\nCase 2: Zero clothing requested under the charity's policy");
decideClothingRequest(0, isAcceptingMoreClothing);

console.log("\nCase 3: Positive request in a hypothetical open-policy scenario");
decideClothingRequest(2, true);
