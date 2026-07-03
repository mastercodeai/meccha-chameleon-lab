export interface MapData {
  slug: string;
  name: string;
  description: string;
  spots: number;
  difficulty: number; // 1-5
  color: string;
  image: string;
}

export const maps: MapData[] = [
  {
    slug: "backrooms",
    name: "Backrooms",
    description: "A homage to the Backrooms games with off-yellow wallpaper, office spaces, random objects, and plenty of trash. Features birthday party hallways, broken highways with police cars, and vending machines.",
    spots: 7,
    difficulty: 4,
    color: "#DAA520",
    image: "/api/r2/maps/backrooms-chairs.jpg",
  },
  {
    slug: "hide-and-seek-mansion",
    name: "Hide-and-Seek Mansion",
    description: "A hectic location with a fancy party ballroom, study library, storage closet, and plenty of small rooms. Features vases, bookcases, and chairs for hiding.",
    spots: 10,
    difficulty: 3,
    color: "#8B4513",
    image: "/api/r2/maps/mansion-ballroom.jpg",
  },
  {
    slug: "indoor-country",
    name: "Indoor Country",
    description: "An indoor countryside scene with farm equipment and furniture. Features cow corners, horse stables, pumpkin patches, hay bales, and balloon centers.",
    spots: 8,
    difficulty: 2,
    color: "#228B22",
    image: "/api/r2/maps/country-cow.jpg",
  },
  {
    slug: "osaka",
    name: "Osaka",
    description: "A Japanese-themed map with traditional and modern elements. Features open areas, elevated positions, shops, trash piles, and narrow alleyways.",
    spots: 5,
    difficulty: 3,
    color: "#FF69B4",
    image: "/api/r2/maps/osaka-open.jpg",
  },
  {
    slug: "penguin-hotel",
    name: "Penguin Hotel",
    description: "A hotel-themed map with penguin decorations, ballroom, second floor, play room, bedroom, and hallways. Multiple floors offer diverse hiding strategies.",
    spots: 5,
    difficulty: 3,
    color: "#4169E1",
    image: "/api/r2/maps/penguin-ballroom.jpg",
  },
  {
    slug: "sewer",
    name: "Sewer",
    description: "Underground tunnels with pipes, party areas, lockers, flooded sections, and gas zones. Low visibility makes it challenging for both hunters and chameleons.",
    spots: 5,
    difficulty: 4,
    color: "#556B2F",
    image: "/api/r2/maps/sewer-center.jpg",
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    description: "A candy and dessert-themed map with colorful houses, gumdrop gardens, lockers, cake areas, and gingerbread houses. Sweet and vibrant environment.",
    spots: 6,
    difficulty: 2,
    color: "#FF1493",
    image: "/api/r2/maps/candy-houses.jpg",
  },
];

export function getMapBySlug(slug: string): MapData | undefined {
  return maps.find((m) => m.slug === slug);
}
