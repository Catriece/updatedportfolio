import ttt from "../../assets/project-images/ttt.png";
import mfc from "../../assets/project-images/mfc.png";
import pokedex from "../../assets/project-images/pokedex.png";
import memorygame from "../../assets/project-images/memorygame.png";

export const projects = [
  {
    id: 5,
    name: "SimplyDo: Task Application",
    img: ttt,
    date: "April 2024",
    link: "https://github.com/Catriece/family-task-app",
    techstack: [
      "TypeScript",
      "React",
      "React Router",
      "ChakraUI",
      "Nodejs",
      "NestJS",
      "PostgreSQL w/TypeORM",
    ],
    clicktext:
      "Click here to view the Repo. The Trello board is included in the Read.Me file.",
    description:
      "This React application was built over a ten week period during a Coding With Callie workshop. I participated in code reviews and built the ToDo application from the planning phase all the way through testing with Jest.",
  },
  {
    id: 4,
    name: "Tic-Tac-Toe: Animal Edition",
    img: ttt,
    date: "September 8th, 2023",
    link: "https://tictactoe-ten-ruby.vercel.app/",
    techstack: ["JavaScript", "CSS", "HTML"],
    clicktext: "Click here to go to play the game",
    description:
      "Unleash a purr-fectly exciting battle in Cats vs. Dogs Tic Tac Toe! With Player Dog and Player Cat, compete for victory in the classic game. Choose your favorite pet, strategically make your moves, and enjoy this adorable twist on the timeless tic-tac-toe. Let the furry rivalry begin!",
  },
  {
    id: 3,
    name: "Social Media Application",
    img: mfc,
    date: "July 2023-August 2023",
    link: "https://drive.google.com/drive/u/0/folders/1ZdT18WWIukUsOo6lQ0QpgqQiV4MYt7B5",
    techstack: ["React", "Expressjs", "Nodejs", "MySQL"],
    clicktext: "Click here to view project documents",
    description:
      "Experience the joy of connection with our vibrant social media app! Craft your own circle, bringing family together to share and celebrate life's moments. Stay in the loop, support one another, and make memories that last a lifetime. Your social world, your way!",
  },
  {
    id: 2,
    name: "Pokémon Pokédex",
    img: pokedex,
    date: "May 2023-June 2023",
    link: "https://main.d3cysl72cukyoo.amplifyapp.com/",
    techstack: ["React"],
    clicktext: "Click here to go to play the game",
    description:
      "Introducing the ultimate Pokémon Pokédex app! Search and explore with ease, whether it's by a Pokémon's name, types, or weaknesses. Uncover the details of your favorite creatures and enhance your journey as a Pokémon Trainer. A user-friendly tool for every aspiring Pokémon Master!",
  },
  {
    id: 1,
    name: "Memory Game",
    img: memorygame,
    date: "April 2023",
    link: "https://main.d1chtrlwi4wa6x.amplifyapp.com/",
    techstack: ["React"],
    clicktext: "Click here to go to play the game",
    description:
      "Dive into a challenging world of shapes with our memory game! Sharpen your recall skills as you identify whether you've encountered each shape before. Track your progress with a saved best score and challenge yourself to beat it. Exercise your mind with this engaging and addictive memory challenge!",
  },
];
