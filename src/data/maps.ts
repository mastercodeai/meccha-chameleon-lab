export interface MapStrategy {
  hiderTips: string[];
  seekerTips: string[];
  dominantColors: string[];
  keyAreas: string[];
}

export interface MapData {
  slug: string;
  name: string;
  description: string;
  spots: number;
  difficulty: number; // 1-5
  color: string;
  image: string;
  strategy: MapStrategy;
}

export const maps: MapData[] = [
  {
    slug: "backrooms",
    name: "Backrooms",
    description:
      "A homage to the Backrooms games with off-yellow wallpaper, office spaces, random objects, and plenty of trash. Features birthday party hallways, broken highways with police cars, and vending machines.",
    spots: 7,
    difficulty: 4,
    color: "#DAA520",
    image: "/api/r2/maps/backrooms-chairs.jpg",
    strategy: {
      hiderTips: [
        "The sickly yellow-beige wallpaper is your best friend — pre-mix off-yellow and muted brown before the round starts.",
        "Fluorescent lighting washes out colors. Desaturate your paint slightly to match the flat, institutional look.",
        "Chair clutter and trash piles are underrated — their messy shapes hide silhouettes well.",
        "The birthday party hallway has multicolor decorations. If you can match a specific balloon or streamer color, you disappear.",
        "Avoid hiding near the exit signs — the bright green draws seeker eyes.",
      ],
      seekerTips: [
        "The yellow wallpaper makes color mismatches obvious. Look for objects that are too saturated or too dark.",
        "Check under tables and inside chair piles — hiders love these spots but their shapes often give them away.",
        "The broken highway section has police cars — scan the vehicle outlines for human shapes.",
        "Vending machines have distinct colors. If something near them doesn't match, it's probably a hider.",
        "Use the fluorescent lighting to your advantage — hiders who didn't desaturate will glow against the walls.",
      ],
      dominantColors: ["#DAA520", "#C4A265", "#8B7355", "#F5DEB3", "#A0522D"],
      keyAreas: [
        "Birthday Party Hallway",
        "Chair Clutter Room",
        "Broken Highway",
        "Vending Machine Area",
        "Office Spaces",
      ],
    },
  },
  {
    slug: "hide-and-seek-mansion",
    name: "Hide-and-Seek Mansion",
    description:
      "A hectic location with a fancy party ballroom, study library, storage closet, and plenty of small rooms. Features vases, bookcases, and chairs for hiding.",
    spots: 10,
    difficulty: 3,
    color: "#8B4513",
    image: "/api/r2/maps/mansion-ballroom.jpg",
    strategy: {
      hiderTips: [
        "Dark walnut brown is the dominant color — pre-mix warm dark browns and burgundy before the round.",
        "The ballroom has gold trim and velvet curtains. Match the burgundy fabric or the dark wood floor.",
        "Laundry baskets are S-tier hiding spots — lay on your side and paint yourself blue to match the shadows.",
        "The library bookcases have varied spine colors. Pick one book color and match it precisely.",
        "Furniture randomization was added in v2.2.0 — the layout changes each round, so don't memorize positions.",
      ],
      seekerTips: [
        "The Mansion has 10 known spots — systematically check each room instead of wandering randomly.",
        "Look for objects that are the wrong size or shape. A human curled up next to a vase still has a different silhouette.",
        "The laundry room is a common hiding spot — check the baskets and shelves carefully.",
        "Gold trim and velvet curtains are hard to match perfectly. Look for slight color differences near fabric surfaces.",
        "The globe room has a suitcase under stacked tables — a very popular spot for experienced hiders.",
      ],
      dominantColors: ["#8B4513", "#722F37", "#DAA520", "#2F1B14", "#CD853F"],
      keyAreas: [
        "Main Ballroom",
        "Library",
        "Laundry Room",
        "Globe Room",
        "Storage Closet",
        "Staircase",
      ],
    },
  },
  {
    slug: "indoor-country",
    name: "Indoor Country",
    description:
      "An indoor countryside scene with farm equipment and furniture. Features cow corners, horse stables, pumpkin patches, hay bales, and balloon centers.",
    spots: 8,
    difficulty: 2,
    color: "#228B22",
    image: "/api/r2/maps/country-cow.jpg",
    strategy: {
      hiderTips: [
        "Green foliage and hay yellows dominate — use darker greens near the ground, lighter greens near windows.",
        "Hay bales are forgiving hiding spots. Their natural texture means slight color variations won't stand out.",
        "The cow corner has black and white patterns — matching cow spots is surprisingly effective.",
        "Wooden farm equipment offers warm brown tones that are easy to mix and match.",
        "Pumpkin patches have orange tones — if you can match the pumpkin color, you blend in with the cluster.",
      ],
      seekerTips: [
        "This is the easiest map for seekers (difficulty 2/5). The natural environments have fewer hiding spots.",
        "Check behind hay bales and inside farm equipment — hiders often tuck into tight spaces.",
        "The balloon center has bright colors that are hard to match. Look for miscolored objects near balloons.",
        "Cow corners are popular but the black/white pattern is hard to replicate. Look for solid-color imposters.",
        "Use the open sightlines to your advantage — this map has fewer corners to hide in than others.",
      ],
      dominantColors: ["#228B22", "#DAA520", "#8B4513", "#F5F5DC", "#FF8C00"],
      keyAreas: [
        "Cow Corner",
        "Horse Stables",
        "Pumpkin Patch",
        "Hay Bale Area",
        "Balloon Center",
        "Farm Equipment Zone",
      ],
    },
  },
  {
    slug: "osaka",
    name: "Osaka",
    description:
      "A Japanese-themed map with traditional and modern elements. Features open areas, elevated positions, shops, trash piles, and narrow alleyways.",
    spots: 5,
    difficulty: 3,
    color: "#FF69B4",
    image: "/api/r2/maps/osaka-open.jpg",
    strategy: {
      hiderTips: [
        "Osaka was reworked in v2.5.0 — the layout has changed significantly from the original version.",
        "Traditional red accents and modern gray buildings create two distinct color zones. Pick one and commit.",
        "Neon signs cast colored light on nearby surfaces. Sample colors from the exact spot where you'll hide, not from across the street.",
        "Trash piles are underrated — dark muted colors on garbage bags disappear in the dim alley lighting.",
        "Elevated positions (rooftops, signs) are high-risk but seekers rarely look up. Paint yourself sky-gray.",
      ],
      seekerTips: [
        "The Osaka rework changed many hiding spots — old knowledge may be outdated. Explore thoroughly.",
        "Narrow alleyways force hiders into predictable positions. Sweep both sides systematically.",
        "Neon signs create color distortion. If something near a sign looks off, it might be a hider who sampled wrong.",
        "Check elevated positions — many hiders climb to rooftops and signs thinking seekers won't look up.",
        "Open areas seem safe for seekers but hiders can flatten against walls. Check wall edges carefully.",
      ],
      dominantColors: ["#FF69B4", "#FF4500", "#808080", "#2F2F2F", "#DC143C"],
      keyAreas: [
        "Traditional Temple Area",
        "Neon Shopping Street",
        "Narrow Alleyways",
        "Rooftop Positions",
        "Trash Pile Zone",
      ],
    },
  },
  {
    slug: "penguin-hotel",
    name: "Penguin Hotel",
    description:
      "A hotel-themed map with penguin decorations, ballroom, second floor, play room, bedroom, and hallways. Multiple floors offer diverse hiding strategies.",
    spots: 5,
    difficulty: 3,
    color: "#4169E1",
    image: "/api/r2/maps/penguin-ballroom.jpg",
    strategy: {
      hiderTips: [
        "White marble and light blue dominate the lobby. White and light blue paint blend into almost everything here.",
        "Gold accent areas need warm metallic paint — don't forget to adjust the metallic slider for fixtures.",
        "The second floor has different lighting than the ground floor. Re-sample colors when you change floors.",
        "Penguin decorations have distinct black/white patterns. Matching them is hard but very effective if done right.",
        "Bedrooms have fabric-heavy surfaces — use high roughness and deep rich colors for curtains and bedding.",
      ],
      seekerTips: [
        "White marble floors make dark-colored hiders stand out. Scan for anything that isn't white or light blue.",
        "The ballroom is large and open — use the sightlines to spot hiders who thought they were hidden.",
        "Check behind penguin decorations — their irregular shapes create natural hiding pockets.",
        "Hallways are choke points. If you're patient, hiders will eventually move and reveal themselves.",
        "The play room has colorful toys that are hard to match. Look for slightly-off colors in that area.",
      ],
      dominantColors: ["#FFFFFF", "#ADD8E6", "#DAA520", "#000000", "#87CEEB"],
      keyAreas: [
        "Grand Lobby",
        "Ballroom",
        "Second Floor Hallways",
        "Play Room",
        "Bedroom",
        "Penguin Statue Area",
      ],
    },
  },
  {
    slug: "sewer",
    name: "Sewer",
    description:
      "Underground tunnels with pipes, party areas, lockers, flooded sections, and gas zones. Low visibility makes it challenging for both hunters and chameleons.",
    spots: 5,
    difficulty: 4,
    color: "#556B2F",
    image: "/api/r2/maps/sewer-center.jpg",
    strategy: {
      hiderTips: [
        "Low visibility is your biggest ally. Muted grays, dark greens, and rusty metal tones disappear in the dim lighting.",
        "Gray-green paint on pipes and metal grates is the safest color choice for most spots in this map.",
        "Rusted sections need orange-brown with metallic turned up. Don't forget the metallic slider.",
        "The party area has brighter lighting — re-sample colors if you move there from the tunnels.",
        "Lockers are tight but effective. Match the locker color exactly and stay perfectly still.",
      ],
      seekerTips: [
        "The Sewer's low visibility works against you too. Move slowly and scan methodically.",
        "v2.2.1 added random elements to the Sewer — the layout has slight variations each round.",
        "Flooded sections reflect light differently. If a surface's color doesn't match the reflection pattern, investigate.",
        "Gas zones have a green tint that affects color perception. Hiders who sampled from gas areas will look slightly off.",
        "Check inside lockers — it's a popular spot but the tight space means hiders can't adjust their pose well.",
      ],
      dominantColors: ["#556B2F", "#808080", "#A0522D", "#2F4F2F", "#696969"],
      keyAreas: [
        "Main Tunnel",
        "Party Area",
        "Locker Room",
        "Flooded Section",
        "Gas Zone",
        "Pipe Junction",
      ],
    },
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    description:
      "A candy and dessert-themed map with colorful houses, gumdrop gardens, lockers, cake areas, and gingerbread houses. Sweet and vibrant environment.",
    spots: 6,
    difficulty: 2,
    color: "#FF1493",
    image: "/api/r2/maps/candy-houses.jpg",
    strategy: {
      hiderTips: [
        "Pink and pastel paint match nearly everything on this map. Pre-mix a warm pink before the round.",
        "Gingerbread and cake areas offer rich warm brown accents — useful if you want variety.",
        "The gumdrop garden has large colorful spheres. Matching a specific gumdrop color lets you hide in plain sight.",
        "Candy houses have striped patterns. Even a rough approximation of the stripe pattern is more convincing than flat color.",
        "This is the easiest map for hiders (difficulty 2/5). The colorful environment forgives slight color mismatches.",
      ],
      seekerTips: [
        "This map's bright colors make it easy to spot hiders who used generic paint. Look for flat, untextured surfaces.",
        "Gumdrop gardens are popular hiding spots. Check each gumdrop cluster for human-shaped irregularities.",
        "Candy house interiors are often overlooked. Sweep inside each house systematically.",
        "The locker area near the cake zone is a common spot — check every locker.",
        "Gingerbread houses have door openings. Hiders often hide inside and paint themselves brown.",
      ],
      dominantColors: ["#FF1493", "#FFB6C1", "#8B4513", "#FF69B4", "#FFD700"],
      keyAreas: [
        "Candy House Row",
        "Gumdrop Garden",
        "Cake Area",
        "Gingerbread Houses",
        "Locker Zone",
        "Lollipop Forest",
      ],
    },
  },
];

export function getMapBySlug(slug: string): MapData | undefined {
  return maps.find((m) => m.slug === slug);
}
