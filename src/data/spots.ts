export interface SpotData {
  id: number;
  name: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  bestFor: "Hider" | "Seeker" | "Both";
  image: string;
}

export const livingRoomSpots: SpotData[] = [
  {
    id: 1,
    name: "Behind the Couch Cushions",
    description: "Push yourself into the gap between the back cushions and the seat. Works best with brown or beige paint matching the couch fabric.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Bookshelf Blend",
    description: "Stand still among books on the shelf. Paint yourself to match the book spines — dark reds and browns work best.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "TV Stand Shadow",
    description: "Crouch below the TV stand in the shadow zone. Dark paint is essential. Most seekers check the screen, not below it.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Window Curtain Merge",
    description: "Flatten against the wall behind curtains. Match the curtain color exactly. The folds create natural camouflage patterns.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Rug Pattern Disguise",
    description: "Lie flat on the patterned rug and match its design. Works surprisingly well — seekers often walk right over you.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Lamp Base Pose",
    description: "Stand perfectly still next to the floor lamp. Paint yourself the same color as the lamp base. Your silhouette becomes part of the room structure.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=400&fit=crop",
  },
];

export const kitchenSpots: SpotData[] = [
  {
    id: 1,
    name: "Under the Kitchen Counter",
    description: "Crouch beneath the counter overhang. Paint yourself the same color as the cabinet doors — white or off-white works best in most kitchens.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Fridge Magnet Blend",
    description: "Stand flat against the fridge door. Match the stainless steel or white surface. The magnets and handles break up your silhouette.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Inside the Pantry",
    description: "Squeeze between shelves in the pantry. Paint yourself to match the canned goods and boxes. The dim interior helps conceal your shape.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Oven Silhouette",
    description: "Stand in front of the oven and match the dark glass surface. Works best when the oven light is off and the kitchen is dimly lit.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Dish Rack Disguise",
    description: "Crouch near the dish drying rack on the counter. Paint yourself to match the stack of plates and cups. The clutter masks your outline.",
    difficulty: "MEDIUM",
    bestFor: "Both",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Stovetop Shadow",
    description: "Stand beside the stovetop range. Match the dark burner grates and cast iron surface. Seekers rarely look directly at the cooking area.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=400&fit=crop",
  },
];

export const bathroomSpots: SpotData[] = [
  {
    id: 1,
    name: "Bathtub Merge",
    description: "Lie flat in the empty bathtub and paint yourself white to match the porcelain surface. The curved edges help hide your profile.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Tile Wall Blend",
    description: "Stand against the tiled wall and match the tile color. The grout lines create a grid pattern that breaks up your outline effectively.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Shower Curtain Hide",
    description: "Press yourself behind the shower curtain. Match the curtain pattern — floral or plain white works best. Stay perfectly still.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Vanity Cabinet Squeeze",
    description: "Hide inside the space beneath the bathroom vanity. The darkness inside makes you nearly invisible when the cabinet is slightly open.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Toilet Tank Perch",
    description: "Crouch behind the toilet tank against the wall. Paint yourself the same white as the porcelain. The tight space makes you hard to spot from the doorway.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Bath Mat Flat",
    description: "Lie flat on the bath mat and match its texture and color. The soft surface makes it comfortable to hold position for a long time.",
    difficulty: "MEDIUM",
    bestFor: "Both",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=400&fit=crop",
  },
];

export const bedroomSpots: SpotData[] = [
  {
    id: 1,
    name: "Under the Bed",
    description: "Slide under the bed frame. Paint yourself dark to match the shadow beneath. One of the oldest hiding spots — but it still works.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Wardrobe Camouflage",
    description: "Stand inside the open wardrobe among hanging clothes. Match the color of the shirts and jackets around you. Close the door slightly.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Pillow Mountain",
    description: "Bury yourself among the decorative pillows on the bed. Match the pillowcase colors. The layers of fabric create excellent visual noise.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Nightstand Shadow",
    description: "Crouch beside the nightstand in the gap between furniture and wall. The lamp above casts a shadow that helps conceal you.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Dresser Mirror Reflection",
    description: "Stand at an angle to the dresser mirror so your reflection blends with the room. Paint yourself to match the wall behind you.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Curtain Drape",
    description: "Stand behind the bedroom curtains and match the fabric color. The long drapes cover you completely from ceiling to floor.",
    difficulty: "EASY",
    bestFor: "Both",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=400&fit=crop",
  },
];

export const garageSpots: SpotData[] = [
  {
    id: 1,
    name: "Workbench Tool Wall",
    description: "Stand against the pegboard tool wall. Paint yourself to match the hanging wrenches and screwdrivers. The metallic grays provide good cover.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Car Hood Blend",
    description: "Lie across the car hood and match the vehicle's paint color. Works best with neutral-colored cars — white, gray, or black.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Cardboard Box Stack",
    description: "Hide among stacked moving boxes. Paint yourself brown to match the cardboard. The irregular shapes make it hard to spot a person.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Lawnmower Shadow",
    description: "Crouch behind the lawnmower or garden equipment. The dark machinery creates strong shadows that hide your silhouette.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Tire Rack Disguise",
    description: "Stand among stacked tires on the rack. The round shapes and black rubber provide natural camouflage for your outline.",
    difficulty: "MEDIUM",
    bestFor: "Both",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Shelf Lurker",
    description: "Stand between metal shelving units laden with paint cans and supplies. Match the shelf color and stay perfectly still in the clutter.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=400&fit=crop",
  },
];

export const sewerSpots: SpotData[] = [
  {
    id: 1,
    name: "Pipe Alcove",
    description: "Duck into the gap between large drainage pipes. Paint yourself rusty brown to match the oxidized metal surfaces around you.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Tunnel Bend",
    description: "Stand at the curve of the tunnel where the light doesn't reach. Match the damp concrete walls — dark gray with greenish algae tones.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Drain Grate Crouch",
    description: "Crouch beneath a drain grate overhead. The shaft of light above makes the surrounding darkness even deeper — perfect for hiding.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Valve Wheel Stand",
    description: "Stand beside a large valve wheel on the pipe. Match the dark iron color of the machinery. Your vertical shape blends with the pipe junction.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Water Flow Blend",
    description: "Wade into the shallow water channel and match the murky color. The rippling surface distorts your outline from seekers above.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Manhole Shadow",
    description: "Stand directly below a closed manhole. The narrow shaft of light creates a bright circle around you — stay just outside it in the dark ring.",
    difficulty: "MEDIUM",
    bestFor: "Both",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=400&fit=crop",
  },
];

export const backroomsSpots: SpotData[] = [
  {
    id: 1,
    name: "Yellow Wall Seam",
    description: "Press yourself into the corner where two damp yellow walls meet. Paint yourself the same sickly yellow-beige. The mono-color makes you vanish.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Fluorescent Light Buzz",
    description: "Stand directly beneath a flickering fluorescent light. The strobe effect disorients seekers and makes your shape hard to focus on.",
    difficulty: "MEDIUM",
    bestFor: "Both",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Damp Carpet Drop",
    description: "Lie flat on the soggy beige carpet. Match the stained, waterlogged texture. The low ceiling means seekers look eye-level, not down.",
    difficulty: "EASY",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Infinite Hallway Edge",
    description: "Stand at the very edge of a long hallway where perspective makes you tiny. The repeating pattern of walls and lights makes distance deceptive.",
    difficulty: "HARD",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Missing Ceiling Tile",
    description: "Climb into the gap where a drop ceiling tile is missing. Paint yourself white to match the exposed pipes and insulation above.",
    difficulty: "MEDIUM",
    bestFor: "Hider",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Pillar Column Stand",
    description: "Stand behind one of the square support pillars scattered throughout. Match the yellowed paint. The pillar breaks your silhouette perfectly.",
    difficulty: "MEDIUM",
    bestFor: "Seeker",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=400&fit=crop",
  },
];

export function getSpotsByMapSlug(slug: string): SpotData[] {
  const map: Record<string, SpotData[]> = {
    "living-room": livingRoomSpots,
    kitchen: kitchenSpots,
    bathroom: bathroomSpots,
    bedroom: bedroomSpots,
    garage: garageSpots,
    sewer: sewerSpots,
    "the-backrooms": backroomsSpots,
  };
  return map[slug] || [];
}
