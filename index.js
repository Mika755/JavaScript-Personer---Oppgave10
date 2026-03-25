var Pokemon = [ 
   {
       pkmName: "Pikachu",
       pkmType: "Type: Electric",
       pkmDescp: "Whenever pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it’s evidence that this pokemon mistook the intensity of its charge.",
       pkmRoute: "Location: Viridian Forest",
       bildet: "https://www.nicepng.com/png/full/338-3386575_pikachu-pokemon-pikachu-pixel-sticker-freetoedit-female-pikachu.png"
    }, 
    {
       pkmName: "Eevee",
       pkmType: "Type: Normal",
       pkmDescp: "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various STONES causes this POKéMON to evolve.",
       pkmRoute: "Location: Celadon City",
       bildet: "https://www.pngkey.com/png/full/22-224880_eevee-pokemon-eevee-sprite.png"
    }, 
    {
       pkmName: "Zigzagoon",
       pkmType: "Type: Normal",
       pkmDescp: "Zigzagoon restlessly wanders everywhere at all times. This pokemon does so because it is very curious. It becomes interested in anything that it happens to see.",
       pkmRoute: "Location: Petalburg Woods",
       bildet: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/b/b6/Pokemans_263.gif"
    }, 
    {
       pkmName: "Gengar",
       pkmType: "Type: Ghost",
       pkmDescp: "To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.",
       pkmRoute: "Location: Pokemon Tower",
       bildet: "https://art.pixilart.com/sr2ef200d1d77aws3.png"
    },
    { 
       pkmName: "Sabelye",
       pkmType: "Type: Dark/Ghost",
       pkmDescp: "Sableye lead quiet lives deep inside caverns. They are feared, however, because these Pokémon are thought to steal the spirits of people when their eyes burn with a sinister glow in the darkness.",
       pkmRoute: "Location: Cave of Origin",
       bildet: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/f/fb/Pokemans_302.gif"
    }
 
];


document.getElementById("Search").addEventListener("click", function () {
   var minData = document.getElementById("myInput").value.toLowerCase();
   let found = false;

   for (let element of Pokemon) {
      var check = element.pkmName.toLowerCase();

      if (minData === check) {
         document.getElementById("pkmName").innerText = element.pkmName;
         document.getElementById("pkmType").innerText = element.pkmType;
         document.getElementById("pkmDescp").innerText = element.pkmDescp;
         document.getElementById("pkmRouter").innerText = element.pkmRoute;
         document.getElementById("bildet").src = element.bildet;

         found = true;
         break;
      }
   }

   if (!found) {
      document.getElementById("pkmName").innerText = "Missing information on this Pokemon. Please try again.";
      document.getElementById("pkmType").innerText = "Type: Unknown";
      document.getElementById("pkmDescp").innerText = " ";
      document.getElementById("pkmRouter").innerText = "Location: Unknown";
      document.getElementById("bildet").src = "";
   }
});


document.getElementById("myInput").addEventListener("keydown", function(e) {
   if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("Search").click();
   }
});