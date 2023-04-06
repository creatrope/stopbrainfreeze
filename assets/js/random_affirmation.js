const affirmations = {% assign affirmations = site.data.affirmations | join: ',' %};
const affirmationsArray = affirmations.split(',');
const randomIndex = Math.floor(Math.random() * affirmationsArray.length);
document.getElementById("affirmation").innerHTML = affirmationsArray[randomIndex];
