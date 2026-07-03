     1|export interface SpotData {
     2|  id: number;
     3|  name: string;
     4|  description: string;
     5|  difficulty: "EASY" | "MEDIUM" | "HARD";
     6|  bestFor: "Hider" | "Seeker" | "Both";
     7|  image: string;
     8|}
     9|
    10|// Backrooms Spots (7 spots - from IGN, DualShockers, TheGamer, GameRant)
    11|export const backroomsSpots: SpotData[] = [
    12|  {
    13|    id: 1,
    14|    name: "Under Chair Clutter",
    15|    description: "Hide under the clutter of chairs. Your shape won't look out of place since the area is already messy.",
    16|    difficulty: "EASY",
    17|    bestFor: "Hider",
    18|    image: "/api/r2/maps/backrooms-chairs.jpg",
    19|  },
    20|  {
    21|    id: 2,
    22|    name: "Bunched-Up Rug Under Table",
    23|    description: "Match the pattern of the bunched-up rug under the table. Your shape won't look super out of place since it's already messed up.",
    24|    difficulty: "MEDIUM",
    25|    bestFor: "Hider",
    26|    image: "/api/r2/maps/backrooms-trash.jpg",
    27|  },
    28|  {
    29|    id: 3,
    30|    name: "Bottle Cap Wall Top",
    31|    description: "On top of the bottle caps on the bottle wall. Paint yourself to match the colorful caps.",
    32|    difficulty: "HARD",
    33|    bestFor: "Hider",
    34|    image: "/api/r2/maps/backrooms-office.jpg",
    35|  },
    36|  {
    37|    id: 4,
    38|    name: "Furniture Stack Side",
    39|    description: "Along the side of any piece of furniture in the stack of furniture. Match the wood or fabric colors.",
    40|    difficulty: "EASY",
    41|    bestFor: "Hider",
    42|    image: "/api/r2/maps/backrooms-chairs.jpg",
    43|  },
    44|  {
    45|    id: 5,
    46|    name: "Exit Sign Top",
    47|    description: "At the top of the exit sign. Paint yourself to resemble the exit sign - bright green with text.",
    48|    difficulty: "HARD",
    49|    bestFor: "Hider",
    50|    image: "/api/r2/maps/backrooms-police.jpg",
    51|  },
    52|  {
    53|    id: 6,
    54|    name: "Wall Bikes",
    55|    description: "Paint yourself to resemble the bikes on the wall. Match the frame shape and colors.",
    56|    difficulty: "HARD",
    57|    bestFor: "Hider",
    58|    image: "/api/r2/maps/backrooms-birthday.jpg",
    59|  },
    60|  {
    61|    id: 7,
    62|    name: "Ceiling Light",
    63|    description: "Attached to the bright ceiling light. Paint yourself bright yellow/white to match the light glow.",
    64|    difficulty: "HARD",
    65|    bestFor: "Hider",
    66|    image: "/api/r2/maps/backrooms-office.jpg",
    67|  },
    68|];
    69|
    70|// Hide-and-Seek Mansion Spots (10 spots - from DualShockers detailed guide)
    71|export const mansionSpots: SpotData[] = [
    72|  {
    73|    id: 1,
    74|    name: "Main Hall Columns",
    75|    description: "Climb one of the large columns in the main hall. Hunters rarely look up at the posts. The best one is next to the staircase in the corner. Lay down flat so you don't stick out.",
    76|    difficulty: "EASY",
    77|    bestFor: "Hider",
    78|    image: "/api/r2/maps/mansion-ballroom.jpg",
    79|  },
    80|  {
    81|    id: 2,
    82|    name: "Globe Room - Behind Luggage",
    83|    description: "In the room with a globe, there is a suitcase under two stacked tables. Lay on your side and tuck behind the suitcase. Paint yourself the color of the floor.",
    84|    difficulty: "MEDIUM",
    85|    bestFor: "Hider",
    86|    image: "/api/r2/maps/mansion-study.jpg",
    87|  },
    88|  {
    89|    id: 3,
    90|    name: "Laundry Room - Bird Statue Shelf",
    91|    description: "On the shelf in the laundry room, curl up next to the bird statue. The curl-up pose lets you get partially behind the statue. Paint yourself the wall color.",
    92|    difficulty: "MEDIUM",
    93|    bestFor: "Hider",
    94|    image: "/api/r2/maps/mansion-room.jpg",
    95|  },
    96|  {
    97|    id: 4,
    98|    name: "Laundry Baskets",
    99|    description: "Hop into a laundry basket, lay on your side against one wall. Paint yourself blue to blend in perfectly with the shadows.",
   100|    difficulty: "EASY",
   101|    bestFor: "Hider",
   102|    image: "/api/r2/maps/mansion-storage.jpg",
   103|  },
   104|  {
   105|    id: 5,
   106|    name: "Red Chair in Side Room",
   107|    description: "In the room with a serving cart, there is a red chair on a raised floor. Tuck yourself in the back of the chair in lying sideways position.",
   108|    difficulty: "HARD",
   109|    bestFor: "Hider",
   110|    image: "/api/r2/maps/mansion-corner.jpg",
   111|  },
   112|  {
   113|    id: 6,
   114|    name: "Library Corner Chair",
   115|    description: "Hide under the chair in the library corner. It's out of the way and hunters take a while to reach the library.",
   116|    difficulty: "EASY",
   117|    bestFor: "Hider",
   118|    image: "/api/r2/maps/mansion-study.jpg",
   119|  },
   120|  {
   121|    id: 7,
   122|    name: "Upper Wall Corners",
   123|    description: "The upper corners of the mansion are easy to overlook. Paint yourself the wall color, climb up, and use side-lying pose.",
   124|    difficulty: "MEDIUM",
   125|    bestFor: "Hider",
   126|    image: "/api/r2/maps/mansion-ballroom.jpg",
   127|  },
   128|  {
   129|    id: 8,
   130|    name: "Storage Room Brick Wall",
   131|    description: "In the back storage room with boxes and barrels. Hide among the concrete columns next to the entrance. Paint yourself red with a few lines.",
   132|    difficulty: "HARD",
   133|    bestFor: "Hider",
   134|    image: "/api/r2/maps/mansion-storage.jpg",
   135|  },
   136|  {
   137|    id: 9,
   138|    name: "Green Hallway Painting",
   139|    description: "Walk down the green hallway from main hall - there's a painting of a staircase. Copy the painting (mostly wide lines of different colors).",
   140|    difficulty: "HARD",
   141|    bestFor: "Hider",
   142|    image: "/api/r2/maps/mansion-ballroom.jpg",
   143|  },
   144|  {
   145|    id: 10,
   146|    name: "Kitchen Entrance Meat Pile",
   147|    description: "At the kitchen entrance, there is a pile of meat. Curl up in the back left corner. Paint yourself red with white edge.",
   148|    difficulty: "MEDIUM",
   149|    bestFor: "Hider",
   150|    image: "/api/r2/maps/mansion-room.jpg",
   151|  },
   152|];
   153|
   154|// Indoor Country Spots (8 spots)
   155|export const indoorCountrySpots: SpotData[] = [
   156|  {
   157|    id: 1,
   158|    name: "Barn Side - Behind Objects",
   159|    description: "Along the side of the barns, in a spot that is out in the open but blocked from walking by hay bales, cow signs, or pumpkins.",
   160|    difficulty: "EASY",
   161|    bestFor: "Hider",
   162|    image: "/api/r2/maps/country-cow.jpg",
   163|  },
   164|  {
   165|    id: 2,
   166|    name: "Balloon Center Middle",
   167|    description: "Among the balloons around the ground, hidden in the middle so you don't stand out as much. Match the balloon colors.",
   168|    difficulty: "MEDIUM",
   169|    bestFor: "Hider",
   170|    image: "/api/r2/maps/country-balloons.jpg",
   171|  },
   172|  {
   173|    id: 3,
   174|    name: "Mud Spot",
   175|    description: "Hiding in the mud on the ground. Get your paint well patterned and hide in a mud spot with a lot of things to walk around it.",
   176|    difficulty: "EASY",
   177|    bestFor: "Hider",
   178|    image: "/api/r2/maps/country-hay.jpg",
   179|  },
   180|  {
   181|    id: 4,
   182|    name: "Cow Standee",
   183|    description: "Perched on one of the cow standees, painted to resemble a cow. Match the black and white pattern.",
   184|    difficulty: "HARD",
   185|    bestFor: "Hider",
   186|    image: "/api/r2/maps/country-cow.jpg",
   187|  },
   188|  {
   189|    id: 5,
   190|    name: "Teal Wall Transition",
   191|    description: "Painted to match the teal wall where it transitions into the ceiling. Blend with both colors.",
   192|    difficulty: "MEDIUM",
   193|    bestFor: "Hider",
   194|    image: "/api/r2/maps/country-horses.jpg",
   195|  },
   196|  {
   197|    id: 6,
   198|    name: "Behind Green Crates",
   199|    description: "Tucked behind one of the large green crates. Paint yourself green to match.",
   200|    difficulty: "EASY",
   201|    bestFor: "Hider",
   202|    image: "/api/r2/maps/country-pumpkin.jpg",
   203|  },
   204|  {
   205|    id: 7,
   206|    name: "Fallen Standee",
   207|    description: "Crouched on one of the fallen standees. Paint yourself to match the standee pattern.",
   208|    difficulty: "MEDIUM",
   209|    bestFor: "Hider",
   210|    image: "/api/r2/maps/country-hay.jpg",
   211|  },
   212|  {
   213|    id: 8,
   214|    name: "Ceiling Near Clouds",
   215|    description: "On the ceiling near the clouds. Paint yourself white/light blue to match the sky theme.",
   216|    difficulty: "HARD",
   217|    bestFor: "Hider",
   218|    image: "/api/r2/maps/country-balloons.jpg",
   219|  },
   220|];
   221|
   222|// Osaka Spots (5 spots)
   223|export const osakaSpots: SpotData[] = [
   224|  {
   225|    id: 1,
   226|    name: "Blocky Figure on Sign",
   227|    description: "As a blocky figure on one of the signs. Paint yourself to match the sign colors and shapes.",
   228|    difficulty: "HARD",
   229|    bestFor: "Hider",
   230|    image: "/api/r2/maps/osaka-shops.jpg",
   231|  },
   232|  {
   233|    id: 2,
   234|    name: "Brick Wall",
   235|    description: "On the brick wall. Paint yourself red/brown to match the brick pattern with mortar lines.",
   236|    difficulty: "MEDIUM",
   237|    bestFor: "Hider",
   238|    image: "/api/r2/maps/osaka-alley.jpg",
   239|  },
   240|  {
   241|    id: 3,
   242|    name: "Open Area Objects",
   243|    description: "Blend with the scattered objects in the open area. Match colors and textures of nearby items.",
   244|    difficulty: "EASY",
   245|    bestFor: "Hider",
   246|    image: "/api/r2/maps/osaka-open.jpg",
   247|  },
   248|  {
   249|    id: 4,
   250|    name: "Shop Display",
   251|    description: "Blend in with shop displays and market stalls. Match the colorful merchandise colors.",
   252|    difficulty: "MEDIUM",
   253|    bestFor: "Hider",
   254|    image: "/api/r2/maps/osaka-shops.jpg",
   255|  },
   256|  {
   257|    id: 5,
   258|    name: "Trash Piles",
   259|    description: "Among the trash piles. Dark colors work best to match the garbage and debris.",
   260|    difficulty: "EASY",
   261|    bestFor: "Hider",
   262|    image: "/api/r2/maps/osaka-trash.jpg",
   263|  },
   264|];
   265|
   266|// Penguin Hotel Spots (5 spots)
   267|export const penguinHotelSpots: SpotData[] = [
   268|  {
   269|    id: 1,
   270|    name: "Robot Plushies on Couch",
   271|    description: "Using the sitting position to sit backwards and paint the back of your head to blend among the robot plushies on the couch.",
   272|    difficulty: "MEDIUM",
   273|    bestFor: "Hider",
   274|    image: "/api/r2/maps/penguin-play.jpg",
   275|  },
   276|  {
   277|    id: 2,
   278|    name: "White Banner",
   279|    description: "The white banner is an easy place to hide and get points because it's out of the direct line of sight, and you don't even need to paint.",
   280|    difficulty: "EASY",
   281|    bestFor: "Hider",
   282|    image: "/api/r2/maps/penguin-ballroom.jpg",
   283|  },
   284|  {
   285|    id: 3,
   286|    name: "Among Penguin Plushies",
   287|    description: "Hidden within the penguin plushies on the couch. Paint yourself black and white to match the penguins.",
   288|    difficulty: "MEDIUM",
   289|    bestFor: "Hider",
   290|    image: "/api/r2/maps/penguin-bedroom.jpg",
   291|  },
   292|  {
   293|    id: 4,
   294|    name: "Behind Vase",
   295|    description: "Behind the vase in one of the rooms. Paint yourself to match the vase color and pattern.",
   296|    difficulty: "EASY",
   297|    bestFor: "Hider",
   298|    image: "/api/r2/maps/penguin-hallway.jpg",
   299|  },
   300|  {
   301|    id: 5,
   302|    name: "Balloon Garland",
   303|    description: "On the balloon garland. Paint yourself to match the colorful balloons.",
   304|    difficulty: "HARD",
   305|    bestFor: "Hider",
   306|    image: "/api/r2/maps/penguin-ballroom.jpg",
   307|  },
   308|];
   309|
   310|// Sewer Spots (5 spots)
   311|export const sewerSpots: SpotData[] = [
   312|  {
   313|    id: 1,
   314|    name: "Under Board in Muck",
   315|    description: "In the muck of the sewer, specifically under the board, without getting into the shadow. Paint yourself dark brown/green.",
   316|    difficulty: "MEDIUM",
   317|    bestFor: "Hider",
   318|    image: "/api/r2/maps/sewer-flood.jpg",
   319|  },
   320|  {
   321|    id: 2,
   322|    name: "Graffiti Wall",
   323|    description: "Among the graffiti on the wall. If you can even kind of match it, you'll really blend in with all the noise.",
   324|    difficulty: "HARD",
   325|    bestFor: "Hider",
   326|    image: "/api/r2/maps/sewer-gas.jpg",
   327|  },
   328|  {
   329|    id: 3,
   330|    name: "Chair Sides in Muck",
   331|    description: "Along the sides of the chairs in the muck that are away from the main pathways. Paint yourself dark.",
   332|    difficulty: "EASY",
   333|    bestFor: "Hider",
   334|    image: "/api/r2/maps/sewer-party.jpg",
   335|  },
   336|  {
   337|    id: 4,
   338|    name: "Ceiling Behind Pipe",
   339|    description: "On the ceiling, hidden behind a pipe in the darkest section of the map. Paint yourself dark gray.",
   340|    difficulty: "HARD",
   341|    bestFor: "Hider",
   342|    image: "/api/r2/maps/sewer-center.jpg",
   343|  },
   344|  {
   345|    id: 5,
   346|    name: "Oil Barrel Top",
   347|    description: "Lying on top of one of the oil barrels. Paint yourself to match the barrel color and texture.",
   348|    difficulty: "MEDIUM",
   349|    bestFor: "Hider",
   350|    image: "/api/r2/maps/sewer-locker.jpg",
   351|  },
   352|];
   353|
   354|// Sugar Land Spots (6 spots)
   355|export const sugarLandSpots: SpotData[] = [
   356|  {
   357|    id: 1,
   358|    name: "Chocolate Fountain",
   359|    description: "Get the texture of the chocolate right with a few shades of brown. Hide next to something to minimize being seen from the side.",
   360|    difficulty: "HARD",
   361|    bestFor: "Hider",
   362|    image: "/api/r2/maps/candy-cake.jpg",
   363|  },
   364|  {
   365|    id: 2,
   366|    name: "Gingerbread Man Circle",
   367|    description: "The ground is easy to paint, and the circle of gingerbread men provides shelter from being seen without shelter from getting points.",
   368|    difficulty: "EASY",
   369|    bestFor: "Hider",
   370|    image: "/api/r2/maps/candy-gingerbread.jpg",
   371|  },
   372|  {
   373|    id: 3,
   374|    name: "High Cakes",
   375|    description: "The cakes go up high enough that you can stay out of direct line of sight but be close enough to still rack up the points.",
   376|    difficulty: "MEDIUM",
   377|    bestFor: "Hider",
   378|    image: "/api/r2/maps/candy-cake.jpg",
   379|  },
   380|  {
   381|    id: 4,
   382|    name: "Disguised as Gingerbread Man",
   383|    description: "Hidden as a gingerbread man. Paint yourself brown with white icing details to match the gingerbread men.",
   384|    difficulty: "MEDIUM",
   385|    bestFor: "Hider",
   386|    image: "/api/r2/maps/candy-gingerbread.jpg",
   387|  },
   388|  {
   389|    id: 5,
   390|    name: "Pretzel Fence",
   391|    description: "Hidden within the pretzel fence. Paint yourself brown to match the pretzel texture.",
   392|    difficulty: "EASY",
   393|    bestFor: "Hider",
   394|    image: "/api/r2/maps/candy-houses.jpg",
   395|  },
   396|  {
   397|    id: 6,
   398|    name: "Pink Floor Icing",
   399|    description: "Painted as icing on the pink floor. Match the pink and white frosting patterns.",
   400|    difficulty: "MEDIUM",
   401|    bestFor: "Hider",
   402|    image: "/api/r2/maps/candy-gumdrops.jpg",
   403|  },
   404|];
   405|
   406|// Helper function to get spots by map slug
   407|export function getSpotsByMapSlug(slug: string): SpotData[] {
   408|  const spotsMap: Record<string, SpotData[]> = {
   409|    "backrooms": backroomsSpots,
   410|    "hide-and-seek-mansion": mansionSpots,
   411|    "indoor-country": indoorCountrySpots,
   412|    "osaka": osakaSpots,
   413|    "penguin-hotel": penguinHotelSpots,
   414|    "sewer": sewerSpots,
   415|    "sugar-land": sugarLandSpots,
   416|  };
   417|  return spotsMap[slug] || [];
   418|}
   419|