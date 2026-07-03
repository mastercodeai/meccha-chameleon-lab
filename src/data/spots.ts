     1|export interface SpotData {
     2|  id: number;
     3|  name: string;
     4|  description: string;
     5|  difficulty: "EASY" | "MEDIUM" | "HARD";
     6|  bestFor: "Hider" | "Seeker" | "Both";
     7|  image: string;
     8|}
     9|
    10|// Backrooms Spots (from IGN guide)
    11|export const backroomsSpots: SpotData[] = [
    12|  {
    13|    id: 1,
    14|    name: "Chair Cluster",
    15|    description: "A cluster of living chairs, ladders, and drawers. Use shadows to your advantage for better camouflage.",
    16|    difficulty: "HARD",
    17|    bestFor: "Hider",
    18|    image: "/api/r2/maps/backrooms-chairs.jpg",
    19|  },
    20|  {
    21|    id: 2,
    22|    name: "Trash Corners",
    23|    description: "Several corners with trash thrown against the wall. Wiggle your way into these spots and blend in with the trash.",
    24|    difficulty: "MEDIUM",
    25|    bestFor: "Hider",
    26|    image: "/api/r2/maps/backrooms-trash.jpg",
    27|  },
    28|  {
    29|    id: 3,
    30|    name: "Office Space",
    31|    description: "Multiple office space corners can be tricky to fit in, but a Chameleon can hide here. Tough for Hunters to pick them out.",
    32|    difficulty: "HARD",
    33|    bestFor: "Hider",
    34|    image: "/api/r2/maps/backrooms-office.jpg",
    35|  },
    36|  {
    37|    id: 4,
    38|    name: "Birthday Party Hallway",
    39|    description: "A hallway with several cakes and balloons. Hide as a balloon or use the chairs to your advantage.",
    40|    difficulty: "MEDIUM",
    41|    bestFor: "Hider",
    42|    image: "/api/r2/maps/backrooms-birthday.jpg",
    43|  },
    44|  {
    45|    id: 5,
    46|    name: "Broken Highway",
    47|    description: "Hide under police car lights or alongside vehicles. There's also a small space behind the broken road.",
    48|    difficulty: "HARD",
    49|    bestFor: "Hider",
    50|    image: "/api/r2/maps/backrooms-police.jpg",
    51|  },
    52|];
    53|
    54|// Hide-and-Seek Mansion Spots (from IGN guide)
    55|export const mansionSpots: SpotData[] = [
    56|  {
    57|    id: 1,
    58|    name: "Main Ballroom",
    59|    description: "Look like a balloon, hide in the corners, on the ceiling, or underneath any of the chairs. A hectic location for Hunters to search through.",
    60|    difficulty: "EASY",
    61|    bestFor: "Hider",
    62|    image: "/api/r2/maps/mansion-ballroom.jpg",
    63|  },
    64|  {
    65|    id: 2,
    66|    name: "Study Library",
    67|    description: "Full study library with plenty of chairs, bookcases, and objects. Rely on shadows to provide protection and play with colors!",
    68|    difficulty: "MEDIUM",
    69|    bestFor: "Hider",
    70|    image: "/api/r2/maps/mansion-study.jpg",
    71|  },
    72|  {
    73|    id: 3,
    74|    name: "Study Corner",
    75|    description: "A small corner in the study with a chair. Try hiding underneath the chair or against the side of the bookshelves.",
    76|    difficulty: "HARD",
    77|    bestFor: "Hider",
    78|    image: "/api/r2/maps/mansion-corner.jpg",
    79|  },
    80|  {
    81|    id: 4,
    82|    name: "Storage Room",
    83|    description: "Next to a trash area, offering plenty of loose objects for you to hide behind.",
    84|    difficulty: "EASY",
    85|    bestFor: "Hider",
    86|    image: "/api/r2/maps/mansion-storage.jpg",
    87|  },
    88|  {
    89|    id: 5,
    90|    name: "Vase Room",
    91|    description: "Try hiding between the vases and the dark wall on the left. You can completely avoid being found here!",
    92|    difficulty: "MEDIUM",
    93|    bestFor: "Hider",
    94|    image: "/api/r2/maps/mansion-room.jpg",
    95|  },
    96|];
    97|
    98|// Indoor Country Spots
    99|export const indoorCountrySpots: SpotData[] = [
   100|  {
   101|    id: 1,
   102|    name: "Cow Corner",
   103|    description: "Corner with cow decorations and farm equipment. Match the brown and white colors.",
   104|    difficulty: "EASY",
   105|    bestFor: "Hider",
   106|    image: "/api/r2/maps/country-cow.jpg",
   107|  },
   108|  {
   109|    id: 2,
   110|    name: "Horse Stables",
   111|    description: "Area with horse figures and hay. Blend in with the wooden structures.",
   112|    difficulty: "MEDIUM",
   113|    bestFor: "Hider",
   114|    image: "/api/r2/maps/country-horses.jpg",
   115|  },
   116|  {
   117|    id: 3,
   118|    name: "Pumpkin Patch",
   119|    description: "Pumpkin decoration area with good cover. Orange and green colors work well here.",
   120|    difficulty: "EASY",
   121|    bestFor: "Hider",
   122|    image: "/api/r2/maps/country-pumpkin.jpg",
   123|  },
   124|  {
   125|    id: 4,
   126|    name: "Hay Bales",
   127|    description: "Stacks of hay bales providing natural camouflage. Perfect for yellow and brown chameleons.",
   128|    difficulty: "EASY",
   129|    bestFor: "Hider",
   130|    image: "/api/r2/maps/country-hay.jpg",
   131|  },
   132|  {
   133|    id: 5,
   134|    name: "Balloon Center",
   135|    description: "Center area with colorful balloons. Match the balloon colors for perfect hiding.",
   136|    difficulty: "MEDIUM",
   137|    bestFor: "Hider",
   138|    image: "/api/r2/maps/country-balloons.jpg",
   139|  },
   140|];
   141|
   142|// Osaka Spots
   143|export const osakaSpots: SpotData[] = [
   144|  {
   145|    id: 1,
   146|    name: "Open Area",
   147|    description: "Main open area with various objects to blend into. Use the scattered items for cover.",
   148|    difficulty: "EASY",
   149|    bestFor: "Hider",
   150|    image: "/api/r2/maps/osaka-open.jpg",
   151|  },
   152|  {
   153|    id: 2,
   154|    name: "Elevated Position",
   155|    description: "Above ground level - harder to reach but provides good view for seekers.",
   156|    difficulty: "HARD",
   157|    bestFor: "Seeker",
   158|    image: "/api/r2/maps/osaka-above.jpg",
   159|  },
   160|  {
   161|    id: 3,
   162|    name: "Shop District",
   163|    description: "Area with multiple shops and market stalls. Blend in with the colorful displays.",
   164|    difficulty: "MEDIUM",
   165|    bestFor: "Hider",
   166|    image: "/api/r2/maps/osaka-shops.jpg",
   167|  },
   168|  {
   169|    id: 4,
   170|    name: "Trash Area",
   171|    description: "Trash piles providing natural cover. Perfect for darker colored chameleons.",
   172|    difficulty: "EASY",
   173|    bestFor: "Hider",
   174|    image: "/api/r2/maps/osaka-trash.jpg",
   175|  },
   176|  {
   177|    id: 5,
   178|    name: "Alleyway",
   179|    description: "Narrow alleyways between buildings. Shadows provide excellent hiding spots.",
   180|    difficulty: "MEDIUM",
   181|    bestFor: "Hider",
   182|    image: "/api/r2/maps/osaka-alley.jpg",
   183|  },
   184|];
   185|
   186|// Penguin Hotel Spots
   187|export const penguinHotelSpots: SpotData[] = [
   188|  {
   189|    id: 1,
   190|    name: "Hotel Ballroom",
   191|    description: "Grand ballroom with penguin decorations. Match the blue and white color scheme.",
   192|    difficulty: "EASY",
   193|    bestFor: "Hider",
   194|    image: "/api/r2/maps/penguin-ballroom.jpg",
   195|  },
   196|  {
   197|    id: 2,
   198|    name: "Second Floor",
   199|    description: "Upper floor with balcony overlooking lobby. Great vantage point for seekers.",
   200|    difficulty: "MEDIUM",
   201|    bestFor: "Seeker",
   202|    image: "/api/r2/maps/penguin-floor.jpg",
   203|  },
   204|  {
   205|    id: 3,
   206|    name: "Play Room",
   207|    description: "Children play room with toys and games. Colorful environment for hiding.",
   208|    difficulty: "EASY",
   209|    bestFor: "Hider",
   210|    image: "/api/r2/maps/penguin-play.jpg",
   211|  },
   212|  {
   213|    id: 4,
   214|    name: "Bedroom",
   215|    description: "Hotel bedroom with furniture. Match the bedding and curtain colors.",
   216|    difficulty: "MEDIUM",
   217|    bestFor: "Hider",
   218|    image: "/api/r2/maps/penguin-bedroom.jpg",
   219|  },
   220|  {
   221|    id: 5,
   222|    name: "Hallway",
   223|    description: "Hotel corridors connecting rooms. Use the wall patterns and shadows.",
   224|    difficulty: "EASY",
   225|    bestFor: "Hider",
   226|    image: "/api/r2/maps/penguin-hallway.jpg",
   227|  },
   228|];
   229|
   230|// Sewer Spots
   231|export const sewerSpots: SpotData[] = [
   232|  {
   233|    id: 1,
   234|    name: "Central Hub",
   235|    description: "Main sewer junction with pipes. Match the metal and concrete surfaces.",
   236|    difficulty: "MEDIUM",
   237|    bestFor: "Hider",
   238|    image: "/api/r2/maps/sewer-center.jpg",
   239|  },
   240|  {
   241|    id: 2,
   242|    name: "Party Area",
   243|    description: "Unexpected party setup in the sewers. Colorful decorations provide cover.",
   244|    difficulty: "EASY",
   245|    bestFor: "Hider",
   246|    image: "/api/r2/maps/sewer-party.jpg",
   247|  },
   248|  {
   249|    id: 3,
   250|    name: "Locker Room",
   251|    description: "Area with maintenance lockers. Match the metal locker surfaces.",
   252|    difficulty: "MEDIUM",
   253|    bestFor: "Hider",
   254|    image: "/api/r2/maps/sewer-locker.jpg",
   255|  },
   256|  {
   257|    id: 4,
   258|    name: "Flooded Section",
   259|    description: "Partially flooded area - careful positioning needed. Water reflections can help.",
   260|    difficulty: "HARD",
   261|    bestFor: "Hider",
   262|    image: "/api/r2/maps/sewer-flood.jpg",
   263|  },
   264|  {
   265|    id: 5,
   266|    name: "Gas Zone",
   267|    description: "Area with gas pipes and valves. Match the industrial colors and textures.",
   268|    difficulty: "HARD",
   269|    bestFor: "Seeker",
   270|    image: "/api/r2/maps/sewer-gas.jpg",
   271|  },
   272|];
   273|
   274|// Sugar Land Spots
   275|export const sugarLandSpots: SpotData[] = [
   276|  {
   277|    id: 1,
   278|    name: "Candy Houses",
   279|    description: "Houses made of candy - colorful hiding spots. Match the frosting colors.",
   280|    difficulty: "EASY",
   281|    bestFor: "Hider",
   282|    image: "/api/r2/maps/candy-houses.jpg",
   283|  },
   284|  {
   285|    id: 2,
   286|    name: "Gumdrop Garden",
   287|    description: "Garden with large gumdrops to hide behind. Bright colors work best.",
   288|    difficulty: "EASY",
   289|    bestFor: "Hider",
   290|    image: "/api/r2/maps/candy-gumdrops.jpg",
   291|  },
   292|  {
   293|    id: 3,
   294|    name: "Candy Locker",
   295|    description: "Candy themed lockers. Match the sweet-themed surfaces.",
   296|    difficulty: "MEDIUM",
   297|    bestFor: "Hider",
   298|    image: "/api/r2/maps/candy-locker.jpg",
   299|  },
   300|  {
   301|    id: 4,
   302|    name: "Cake Area",
   303|    description: "Area with large cakes - hide behind frosting and decorations.",
   304|    difficulty: "MEDIUM",
   305|    bestFor: "Hider",
   306|    image: "/api/r2/maps/candy-cake.jpg",
   307|  },
   308|  {
   309|    id: 5,
   310|    name: "Gingerbread Houses",
   311|    description: "Gingerbread houses providing structural cover. Brown and white colors work well.",
   312|    difficulty: "EASY",
   313|    bestFor: "Hider",
   314|    image: "/api/r2/maps/candy-gingerbread.jpg",
   315|  },
   316|];
   317|
   318|// Helper function to get spots by map slug
   319|export function getSpotsByMapSlug(slug: string): SpotData[] {
   320|  const spotsMap: Record<string, SpotData[]> = {
   321|    "backrooms": backroomsSpots,
   322|    "hide-and-seek-mansion": mansionSpots,
   323|    "indoor-country": indoorCountrySpots,
   324|    "osaka": osakaSpots,
   325|    "penguin-hotel": penguinHotelSpots,
   326|    "sewer": sewerSpots,
   327|    "sugar-land": sugarLandSpots,
   328|  };
   329|  return spotsMap[slug] || [];
   330|}
   331|