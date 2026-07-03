export interface SpotData {
  id: number;
  name: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  bestFor: "Hider" | "Seeker" | "Both";
  image: string;
}

// Backrooms Spots (7 spots - from IGN, DualShockers, TheGamer, GameRant)
export const backroomsSpots: SpotData[] = [
  {
    id: 1,
    name: "Under Chair Clutter",
    description: "Hide under the clutter of chairs. Your shape won't look out of place since the area is already messy.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/backrooms-gr-01.png",
  },
  {
    id: 2,
    name: "Bunched-Up Rug Under Table",
    description: "Match the pattern of the bunched-up rug under the table. Your shape won't look super out of place since it's already messed up.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/backrooms-gr-02.png",
  },
  {
    id: 3,
    name: "Bottle Cap Wall Top",
    description: "On top of the bottle caps on the bottle wall. Paint yourself to match the colorful caps.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/backrooms-gr-03.png",
  },
  {
    id: 4,
    name: "Furniture Stack Side",
    description: "Along the side of any piece of furniture in the stack of furniture. Match the wood or fabric colors.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/backrooms-gr-01.png",
  },
  {
    id: 5,
    name: "Exit Sign Top",
    description: "At the top of the exit sign. Paint yourself to resemble the exit sign - bright green with text.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/backrooms-gr-05.png",
  },
  {
    id: 6,
    name: "Wall Bikes",
    description: "Paint yourself to resemble the bikes on the wall. Match the frame shape and colors.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/backrooms-gr-01.png",
  },
  {
    id: 7,
    name: "Ceiling Light",
    description: "Attached to the bright ceiling light. Paint yourself bright yellow/white to match the light glow.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/backrooms-gr-03.png",
  },
];

// Hide-and-Seek Mansion Spots (10 spots - from DualShockers detailed guide)
export const mansionSpots: SpotData[] = [
  {
    id: 1,
    name: "Main Hall Columns",
    description: "Climb one of the large columns in the main hall. Hunters rarely look up at the posts. The best one is next to the staircase in the corner. Lay down flat so you don't stick out.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-01-post.jpg",
  },
  {
    id: 2,
    name: "Globe Room - Behind Luggage",
    description: "In the room with a globe, there is a suitcase under two stacked tables. Lay on your side and tuck behind the suitcase. Paint yourself the color of the floor.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-02-luggage.jpg",
  },
  {
    id: 3,
    name: "Laundry Room - Bird Statue Shelf",
    description: "On the shelf in the laundry room, curl up next to the bird statue. The curl-up pose lets you get partially behind the statue. Paint yourself the wall color.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-03-laundry.jpg",
  },
  {
    id: 4,
    name: "Laundry Baskets",
    description: "Hop into a laundry basket, lay on your side against one wall. Paint yourself blue to blend in perfectly with the shadows.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-04-basket.jpg",
  },
  {
    id: 5,
    name: "Red Chair in Side Room",
    description: "In the room with a serving cart, there is a red chair on a raised floor. Tuck yourself in the back of the chair in lying sideways position.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-05-chair.jpg",
  },
  {
    id: 6,
    name: "Library Corner Chair",
    description: "Hide under the chair in the library corner. It's out of the way and hunters take a while to reach the library.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-02-luggage.jpg",
  },
  {
    id: 7,
    name: "Upper Wall Corners",
    description: "The upper corners of the mansion are easy to overlook. Paint yourself the wall color, climb up, and use side-lying pose.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-01-post.jpg",
  },
  {
    id: 8,
    name: "Storage Room Brick Wall",
    description: "In the back storage room with boxes and barrels. Hide among the concrete columns next to the entrance. Paint yourself red with a few lines.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-04-basket.jpg",
  },
  {
    id: 9,
    name: "Green Hallway Painting",
    description: "Walk down the green hallway from main hall - there's a painting of a staircase. Copy the painting (mostly wide lines of different colors).",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-01-post.jpg",
  },
  {
    id: 10,
    name: "Kitchen Entrance Meat Pile",
    description: "At the kitchen entrance, there is a pile of meat. Curl up in the back left corner. Paint yourself red with white edge.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/mansion-spot-03-laundry.jpg",
  },
];

// Indoor Country Spots (8 spots)
export const indoorCountrySpots: SpotData[] = [
  {
    id: 1,
    name: "Barn Side - Behind Objects",
    description: "Along the side of the barns, in a spot that is out in the open but blocked from walking by hay bales, cow signs, or pumpkins.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/country-gr-01.png",
  },
  {
    id: 2,
    name: "Balloon Center Middle",
    description: "Among the balloons around the ground, hidden in the middle so you don't stand out as much. Match the balloon colors.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/country-gr-02.jpg",
  },
  {
    id: 3,
    name: "Mud Spot",
    description: "Hiding in the mud on the ground. Get your paint well patterned and hide in a mud spot with a lot of things to walk around it.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/country-gr-03.png",
  },
  {
    id: 4,
    name: "Cow Standee",
    description: "Perched on one of the cow standees, painted to resemble a cow. Match the black and white pattern.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/country-gr-01.png",
  },
  {
    id: 5,
    name: "Teal Wall Transition",
    description: "Painted to match the teal wall where it transitions into the ceiling. Blend with both colors.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/country-gr-02.jpg",
  },
  {
    id: 6,
    name: "Behind Green Crates",
    description: "Tucked behind one of the large green crates. Paint yourself green to match.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/country-gr-03.png",
  },
  {
    id: 7,
    name: "Fallen Standee",
    description: "Crouched on one of the fallen standees. Paint yourself to match the standee pattern.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/country-gr-03.png",
  },
  {
    id: 8,
    name: "Ceiling Near Clouds",
    description: "On the ceiling near the clouds. Paint yourself white/light blue to match the sky theme.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/country-gr-02.jpg",
  },
];

// Osaka Spots (5 spots)
export const osakaSpots: SpotData[] = [
  {
    id: 1,
    name: "Blocky Figure on Sign",
    description: "As a blocky figure on one of the signs. Paint yourself to match the sign colors and shapes.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/maps/osaka-shops.jpg",
  },
  {
    id: 2,
    name: "Brick Wall",
    description: "On the brick wall. Paint yourself red/brown to match the brick pattern with mortar lines.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/maps/osaka-alley.jpg",
  },
  {
    id: 3,
    name: "Open Area Objects",
    description: "Blend with the scattered objects in the open area. Match colors and textures of nearby items.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/maps/osaka-open.jpg",
  },
  {
    id: 4,
    name: "Shop Display",
    description: "Blend in with shop displays and market stalls. Match the colorful merchandise colors.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/maps/osaka-shops.jpg",
  },
  {
    id: 5,
    name: "Trash Piles",
    description: "Among the trash piles. Dark colors work best to match the garbage and debris.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/maps/osaka-trash.jpg",
  },
];

// Penguin Hotel Spots (5 spots)
export const penguinHotelSpots: SpotData[] = [
  {
    id: 1,
    name: "Robot Plushies on Couch",
    description: "Using the sitting position to sit backwards and paint the back of your head to blend among the robot plushies on the couch.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/penguin-gr-01.png",
  },
  {
    id: 2,
    name: "White Banner",
    description: "The white banner is an easy place to hide and get points because it's out of the direct line of sight, and you don't even need to paint.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/penguin-gr-02.png",
  },
  {
    id: 3,
    name: "Among Penguin Plushies",
    description: "Hidden within the penguin plushies on the couch. Paint yourself black and white to match the penguins.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/penguin-gr-01.png",
  },
  {
    id: 4,
    name: "Behind Vase",
    description: "Behind the vase in one of the rooms. Paint yourself to match the vase color and pattern.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/penguin-gr-02.png",
  },
  {
    id: 5,
    name: "Balloon Garland",
    description: "On the balloon garland. Paint yourself to match the colorful balloons.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/penguin-gr-02.png",
  },
];

// Sewer Spots (5 spots)
export const sewerSpots: SpotData[] = [
  {
    id: 1,
    name: "Under Board in Muck",
    description: "In the muck of the sewer, specifically under the board, without getting into the shadow. Paint yourself dark brown/green.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/sewer-gr-01.png",
  },
  {
    id: 2,
    name: "Graffiti Wall",
    description: "Among the graffiti on the wall. If you can even kind of match it, you'll really blend in with all the noise.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/sewer-gr-02.png",
  },
  {
    id: 3,
    name: "Chair Sides in Muck",
    description: "Along the sides of the chairs in the muck that are away from the main pathways. Paint yourself dark.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/sewer-gr-03.png",
  },
  {
    id: 4,
    name: "Ceiling Behind Pipe",
    description: "On the ceiling, hidden behind a pipe in the darkest section of the map. Paint yourself dark gray.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/sewer-gr-01.png",
  },
  {
    id: 5,
    name: "Oil Barrel Top",
    description: "Lying on top of one of the oil barrels. Paint yourself to match the barrel color and texture.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/sewer-gr-02.png",
  },
];

// Sugar Land Spots (6 spots)
export const sugarLandSpots: SpotData[] = [
  {
    id: 1,
    name: "Chocolate Fountain",
    description: "Get the texture of the chocolate right with a few shades of brown. Hide next to something to minimize being seen from the side.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "/api/r2/spots/sugar-gr-01.png",
  },
  {
    id: 2,
    name: "Gingerbread Man Circle",
    description: "The ground is easy to paint, and the circle of gingerbread men provides shelter from being seen without shelter from getting points.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/sugar-gr-01.png",
  },
  {
    id: 3,
    name: "High Cakes",
    description: "The cakes go up high enough that you can stay out of direct line of sight but be close enough to still rack up the points.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/sugar-gr-01.png",
  },
  {
    id: 4,
    name: "Disguised as Gingerbread Man",
    description: "Hidden as a gingerbread man. Paint yourself brown with white icing details to match the gingerbread men.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/sugar-gr-01.png",
  },
  {
    id: 5,
    name: "Pretzel Fence",
    description: "Hidden within the pretzel fence. Paint yourself brown to match the pretzel texture.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "/api/r2/spots/sugar-gr-01.png",
  },
  {
    id: 6,
    name: "Pink Floor Icing",
    description: "Painted as icing on the pink floor. Match the pink and white frosting patterns.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "/api/r2/spots/sugar-gr-01.png",
  },
];

// Helper function to get spots by map slug
export function getSpotsByMapSlug(slug: string): SpotData[] {
  const spotsMap: Record<string, SpotData[]> = {
    "backrooms": backroomsSpots,
    "hide-and-seek-mansion": mansionSpots,
    "indoor-country": indoorCountrySpots,
    "osaka": osakaSpots,
    "penguin-hotel": penguinHotelSpots,
    "sewer": sewerSpots,
    "sugar-land": sugarLandSpots,
  };
  return spotsMap[slug] || [];
}
