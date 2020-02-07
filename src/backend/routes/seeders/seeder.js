/**
 * @Date:   2020-02-06T15:23:48+00:00
 * @Last modified time: 2020-02-07T18:37:20+00:00
 */


const router = require('express').Router();
const body_parser = require("body-parser");

let Genre = require('../../models/Genre');
let Game = require('../../models/Game');
let Library = require('../../models/Library');
let Company = require('../../models/Company');

router.get('/seed', async (req, res) => {
  //seeding genres
  let params = {
    genres: ["Action", "Adventure", "Open-Sandbox", "Role Playing Game", "Puzzle", "Free To Play", "Real-Time Strategy", "First Person Shooter", "Third Person Shooter"],
    companies: [
      {name: "Electronic Arts", company_id: "SC4"},
      {name: "Microsoft", company_id: "HCE"},
      {name: "Wube Software", company_id: "FAC"},
      {name: "Valve Software", company_id: "HL3"},
    ],
    games: [
      {
        name: "Sim City 4",
        description: "SimCity 4 is a city-building simulation computer game developed by Maxis, a subsidiary of Electronic Arts. It was released on January 14, 2003. It is the fourth major installment in the SimCity series. SimCity 4 has a single expansion pack called Rush Hour which adds features to the game. SimCity 4: Deluxe Edition contained the original game and Rush Hour combined as a single product.",
        price: "15.95",
        c: "SC4"
      },
      {
        name: "Sims 2",
        description: "The Sims 2 is a 2004 strategic life simulation video game developed at the Redwood Shores studio of Maxis and published by Electronic Arts. It is the sequel to The Sims.",
        price: "10.95",
        c: "SC4"
      },
      {
        name: "Call of Duty",
        description: "Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space",
        price: "60.00",
        c: "SC4"
      },

      {
        name: "Age OF Empires II",
        description: "Age of Empires II: The Age of Kings is a real-time strategy video game developed by Ensemble Studios and published by Microsoft. Released in 1999 for Microsoft Windows and Macintosh, it is the second game in the Age of Empires series. An expansion, The Conquerors, was released in 2000",
        price: "15.95",
        c: "HCE"
      },
      {
        name: "Halo Combat Evolved",
        description: "Halo: Combat Evolved is a first-person shooter video game developed by Bungie and published by Microsoft Game Studios. It was released as a launch title for Microsoft's Xbox video game console on November 15, 2001",
        price: "45.95",
        c: "HCE"
      },
      {
        name: "Minecraft",
        description: "Minecraft is a sandbox video game created by Swedish developer Markus Persson, released by Mojang in 2011 and purchased by Microsoft in 2014. It is the single best-selling video game of all time, selling over 180 million copies across all platforms by late 2019, with over 112 million monthly active players.",
        price: "26.95",
        c: "HCE"
      },
      {
        name: "Factorio",
        description: "Factorio is a construction and management simulation game. Factorio began development in 2012 by the Prague-based Wube Software. It was released in early access in 2016, it will be officially released on September 25, 2020.",
        price: "25.00",
        c: "FAC"
      },

      {
        name: "Half-Life",
        description: "Half-Life is a first-person shooter game developed by Valve and published by Sierra Studios for Windows in 1998. It was Valve's debut product and the first game in the Half-Life series. Players assume the role of Gordon Freeman, a scientist who must find his way out of the Black Mesa Research Facility after an experiment with an alien material goes wrong.",
        price: "9.99",
        c: "HL3"
      },
      {
        name: "Half-Life 2",
        description: "Half-Life 2 is a 2004 first-person shooter (FPS) game developed and published by Valve. Like the original Half-Life (1998), it combines shooting, puzzles, and storytelling, and adds features such as vehicles and physics-based gameplay. Players control Gordon Freeman, who fights against the alien Combine with allies including resistance fighter Alyx Vance, using weapons such as the object-manipulating gravity gun.",
        price: "15.95",
        c: "HL3"
      },
      {
        name: "Team Fortress 2",
        description: "Team Fortress 2 is a multiplayer first-person shooter game developed and published by Valve. It is the sequel to the 1996 mod Team Fortress for Quake and its 1999 remake, Team Fortress Classic. It was released as part of the video game bundle The Orange Box in October 2007 for Microsoft Windows and the Xbox 360.",
        price: "Free",
        c: "HL3"
      }
    ]
  };

  await Library.remove({}, () => {
    console.log("\x1b[34m", "\nClearing All Libraries.");
  });

  //seeding the dependant collections first
  await Game.remove({}, () => {
    console.log("\x1b[32m", "Deleting and Reseeding games_c");

    params.games.forEach((e, i) => {
      let g = new Game();

      g.name = e.name;
      g.description = e.description;
      g.price = e.price;

      g.save((err, game, num) => {
        console.log("\x1b[32m", "Inserted Game: " + game.name + ". #: " + i);
      });
    });
  });

  //seeding companies along with their respective game ids
  await Company.remove({}, async () => {
    console.log("\x1b[33m", "Deleting and Reseeding copmanies_c");

    //get all games
    let games = [];
    await Game.find({}, (err, gs) => {
      games = gs;
    });

    params.companies.forEach(async (e, i) => {
      let c = new Company();
      // console.log(e.name);

      c.name = e.name;
      c.company_id = e.company_id;
      let temp = [];
      await games.forEach((e, i) => {
        if(params.games[i].c == c.company_id){
          temp.push(e._id);
        }
      });
      c.games = temp;
      c.save((err, com) => {
        console.log("\x1b[33m", "Inserted Compnay: " + com.name + ". Add Game Amount: " + com.games.length);
      });

    });
  });


  await Genre.remove({}, () => {
    console.log("\x1b[36m", "Deleting and Reseeding genres_c");
    params.genres.forEach((e, i) => {
      let gr = new Genre();

      gr.name = e;

      gr.save((err, gr) => {
        console.log("\x1b[36m", "Inserted Genre: "+ gr.name);
      });
    });

  });


  console.log("\x1b[0m", "\n");
  res.json({message: "reseeding completed"});
});

module.exports = router;
