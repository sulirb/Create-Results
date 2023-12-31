async function fetchResult() {
  const response = await fetch("/assets/ligue-1-22-23.json");
  const data = await response.json();
  return data;
}

async function main() {
  const data = await fetchResult();
  const ligue = document.querySelector(".ligue");
  ligue.textContent = data.name;

  const scores = document.querySelector(".scores");
  let currentJournée;

  for (const match of data.matches) {
    const score1 = match.score1;
    const score2 = match.score2;

    if (match.Journée === currentJournée) {
    } else {
      currentJournée = match.Journée;
      const heading = document.createElement("h2");
      heading.textContent = currentJournée;
      scores.appendChild(heading);
    }

    const worksElmt = scores.appendChild(document.createElement("div"));
    worksElmt.classList.add("score");

    const date = document.createElement("p");
    date.textContent = `${match.date}`;
    const hour = document.createElement("p");
    hour.textContent = `${match.hour}`;
    const team1 = document.createElement("p");
    team1.textContent = `${match.team1}`;
    const score = document.createElement("p");
    score.textContent = `${score1} - ${score2}`;
    const team2 = document.createElement("p");
    team2.textContent = `${match.team2}`;
    worksElmt.appendChild(date);
    worksElmt.appendChild(hour);
    worksElmt.appendChild(team1);
    worksElmt.appendChild(score);
    worksElmt.appendChild(team2);

    if (score1 > score2) {
      team1.style.fontWeight = "700";
    } else if (score2 > score1) {
      team2.style.fontWeight = "700";
    }

    if (score1 === null || score2 === null) {
      score.textContent = ` - `;
    }

    score.classList.add("finalScore");
    team1.classList.add("team1");
    team2.classList.add("team2");
  }
}

main();
