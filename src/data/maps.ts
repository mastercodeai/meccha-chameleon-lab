     1|export interface MapData {
     2|  slug: string;
     3|  name: string;
     4|  description: string;
     5|  spots: number;
     6|  difficulty: number; // 1-5
     7|  color: string;
     8|  image: string;
     9|}
    10|
    11|export const maps: MapData[] = [
    12|  {
    13|    slug: "backrooms",
    14|    name: "Backrooms",
    15|    description: "A homage to the Backrooms games with off-yellow wallpaper, office spaces, random objects, and plenty of trash. Features birthday party hallways, broken highways with police cars, and vending machines.",
    16|    spots: 5,
    17|    difficulty: 4,
    18|    color: "#DAA520",
    19|    image: "/api/r2/maps/backrooms-chairs.jpg",
    20|  },
    21|  {
    22|    slug: "hide-and-seek-mansion",
    23|    name: "Hide-and-Seek Mansion",
    24|    description: "A hectic location with a fancy party ballroom, study library, storage closet, and plenty of small rooms. Features vases, bookcases, and chairs for hiding.",
    25|    spots: 5,
    26|    difficulty: 3,
    27|    color: "#8B4513",
    28|    image: "/api/r2/maps/mansion-ballroom.jpg",
    29|  },
    30|  {
    31|    slug: "indoor-country",
    32|    name: "Indoor Country",
    33|    description: "An indoor countryside scene with farm equipment and furniture. Features cow corners, horse stables, pumpkin patches, hay bales, and balloon centers.",
    34|    spots: 5,
    35|    difficulty: 2,
    36|    color: "#228B22",
    37|    image: "/api/r2/maps/country-cow.jpg",
    38|  },
    39|  {
    40|    slug: "osaka",
    41|    name: "Osaka",
    42|    description: "A Japanese-themed map with traditional and modern elements. Features open areas, elevated positions, shops, trash piles, and narrow alleyways.",
    43|    spots: 5,
    44|    difficulty: 3,
    45|    color: "#FF69B4",
    46|    image: "/api/r2/maps/osaka-open.jpg",
    47|  },
    48|  {
    49|    slug: "penguin-hotel",
    50|    name: "Penguin Hotel",
    51|    description: "A hotel-themed map with penguin decorations, ballroom, second floor, play room, bedroom, and hallways. Multiple floors offer diverse hiding strategies.",
    52|    spots: 5,
    53|    difficulty: 3,
    54|    color: "#4169E1",
    55|    image: "/api/r2/maps/penguin-ballroom.jpg",
    56|  },
    57|  {
    58|    slug: "sewer",
    59|    name: "Sewer",
    60|    description: "Underground tunnels with pipes, party areas, lockers, flooded sections, and gas zones. Low visibility makes it challenging for both hunters and chameleons.",
    61|    spots: 5,
    62|    difficulty: 4,
    63|    color: "#556B2F",
    64|    image: "/api/r2/maps/sewer-center.jpg",
    65|  },
    66|  {
    67|    slug: "sugar-land",
    68|    name: "Sugar Land",
    69|    description: "A candy and dessert-themed map with colorful houses, gumdrop gardens, lockers, cake areas, and gingerbread houses. Sweet and vibrant environment.",
    70|    spots: 5,
    71|    difficulty: 2,
    72|    color: "#FF1493",
    73|    image: "/api/r2/maps/candy-houses.jpg",
    74|  },
    75|];
    76|
    77|export function getMapBySlug(slug: string): MapData | undefined {
    78|  return maps.find((m) => m.slug === slug);
    79|}
    80|