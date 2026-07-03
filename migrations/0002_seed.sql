-- Seed data: maps and spots
-- Migration 0002: initial content

INSERT OR IGNORE INTO maps (slug, name, description, spots_count, difficulty, color, image_key, sort_order) VALUES
  ('living-room', 'Living Room', 'A cozy living space with plenty of furniture to blend into. Couches, shelves, and decorations offer diverse hiding opportunities.', 15, 2, '#8B7355', 'maps/living-room.jpg', 1),
  ('kitchen', 'Kitchen', 'A busy kitchen with counters, appliances, and cookware. White surfaces make painting easier but standing out is risky.', 12, 3, '#E8E8E8', 'maps/kitchen.jpg', 2),
  ('bathroom', 'Bathroom', 'Tight spaces with tiles and fixtures. Limited hiding spots but creative painting can make you nearly invisible.', 10, 4, '#87CEEB', 'maps/bathroom.jpg', 3),
  ('bedroom', 'Bedroom', 'A bedroom with bed, wardrobe, and decorations. Soft surfaces and varied colors create unique camouflage challenges.', 14, 2, '#DEB887', 'maps/bedroom.jpg', 4),
  ('garage', 'Garage', 'A cluttered garage with tools, boxes, and vehicles. Industrial surfaces and dark corners favor skilled hiders.', 11, 3, '#696969', 'maps/garage.jpg', 5),
  ('sewer', 'Sewer', 'Dark underground tunnels with pipes and grates. Low visibility makes both hiding and seeking challenging.', 13, 5, '#556B2F', 'maps/sewer.jpg', 6),
  ('the-backrooms', 'The Backrooms', 'An endless maze of yellow rooms and buzzing lights. The surreal environment creates unpredictable hiding dynamics.', 16, 4, '#DAA520', 'maps/the-backrooms.jpg', 7);

-- Living Room spots
INSERT OR IGNORE INTO spots (map_slug, name, description, difficulty, best_for, image_key, sort_order) VALUES
  ('living-room', 'Behind the Couch Cushions', 'Push yourself into the gap between the back cushions and the seat. Works best with brown or beige paint matching the couch fabric.', 'EASY', 'Hider', 'spots/living-room-1.jpg', 1),
  ('living-room', 'Bookshelf Blend', 'Stand still among books on the shelf. Paint yourself to match the book spines — dark reds and browns work best.', 'MEDIUM', 'Hider', 'spots/living-room-2.jpg', 2),
  ('living-room', 'TV Stand Shadow', 'Crouch below the TV stand in the shadow zone. Dark paint is essential. Most seekers check the screen, not below it.', 'EASY', 'Hider', 'spots/living-room-3.jpg', 3),
  ('living-room', 'Window Curtain Merge', 'Flatten against the wall behind curtains. Match the curtain color exactly. The folds create natural camouflage patterns.', 'MEDIUM', 'Hider', 'spots/living-room-4.jpg', 4),
  ('living-room', 'Rug Pattern Disguise', 'Lie flat on the patterned rug and match its design. Works surprisingly well — seekers often walk right over you.', 'HARD', 'Hider', 'spots/living-room-5.jpg', 5),
  ('living-room', 'Lamp Base Pose', 'Stand perfectly still next to the floor lamp. Paint yourself the same color as the lamp base. Your silhouette becomes part of the room structure.', 'MEDIUM', 'Hider', 'spots/living-room-6.jpg', 6);

-- Kitchen spots
INSERT OR IGNORE INTO spots (map_slug, name, description, difficulty, best_for, image_key, sort_order) VALUES
  ('kitchen', 'Under the Kitchen Counter', 'Crouch beneath the counter overhang. Paint yourself the same color as the cabinet doors — white or off-white works best in most kitchens.', 'EASY', 'Hider', 'spots/kitchen-1.jpg', 1),
  ('kitchen', 'Fridge Magnet Blend', 'Stand flat against the fridge door. Match the stainless steel or white surface. The magnets and handles break up your silhouette.', 'MEDIUM', 'Hider', 'spots/kitchen-2.jpg', 2),
  ('kitchen', 'Inside the Pantry', 'Squeeze between shelves in the pantry. Paint yourself to match the canned goods and boxes. The dim interior helps conceal your shape.', 'EASY', 'Hider', 'spots/kitchen-3.jpg', 3),
  ('kitchen', 'Oven Silhouette', 'Stand in front of the oven and match the dark glass surface. Works best when the oven light is off and the kitchen is dimly lit.', 'HARD', 'Hider', 'spots/kitchen-4.jpg', 4),
  ('kitchen', 'Dish Rack Disguise', 'Crouch near the dish drying rack on the counter. Paint yourself to match the stack of plates and cups. The clutter masks your outline.', 'MEDIUM', 'Both', 'spots/kitchen-5.jpg', 5),
  ('kitchen', 'Stovetop Shadow', 'Stand beside the stovetop range. Match the dark burner grates and cast iron surface. Seekers rarely look directly at the cooking area.', 'MEDIUM', 'Hider', 'spots/kitchen-6.jpg', 6);

-- Bathroom spots
INSERT OR IGNORE INTO spots (map_slug, name, description, difficulty, best_for, image_key, sort_order) VALUES
  ('bathroom', 'Bathtub Merge', 'Lie flat in the empty bathtub and paint yourself white to match the porcelain surface. The curved edges help hide your profile.', 'EASY', 'Hider', 'spots/bathroom-1.jpg', 1),
  ('bathroom', 'Tile Wall Blend', 'Stand against the tiled wall and match the tile color. The grout lines create a grid pattern that breaks up your outline effectively.', 'MEDIUM', 'Hider', 'spots/bathroom-2.jpg', 2),
  ('bathroom', 'Shower Curtain Hide', 'Press yourself behind the shower curtain. Match the curtain pattern — floral or plain white works best. Stay perfectly still.', 'EASY', 'Hider', 'spots/bathroom-3.jpg', 3),
  ('bathroom', 'Vanity Cabinet Squeeze', 'Hide inside the space beneath the bathroom vanity. The darkness inside makes you nearly invisible when the cabinet is slightly open.', 'HARD', 'Hider', 'spots/bathroom-4.jpg', 4),
  ('bathroom', 'Toilet Tank Perch', 'Crouch behind the toilet tank against the wall. Paint yourself the same white as the porcelain. The tight space makes you hard to spot from the doorway.', 'MEDIUM', 'Hider', 'spots/bathroom-5.jpg', 5),
  ('bathroom', 'Bath Mat Flat', 'Lie flat on the bath mat and match its texture and color. The soft surface makes it comfortable to hold position for a long time.', 'MEDIUM', 'Both', 'spots/bathroom-6.jpg', 6);

-- Bedroom spots
INSERT OR IGNORE INTO spots (map_slug, name, description, difficulty, best_for, image_key, sort_order) VALUES
  ('bedroom', 'Under the Bed', 'Slide under the bed frame. Paint yourself dark to match the shadow beneath. One of the oldest hiding spots — but it still works.', 'EASY', 'Hider', 'spots/bedroom-1.jpg', 1),
  ('bedroom', 'Wardrobe Camouflage', 'Stand inside the open wardrobe among hanging clothes. Match the color of the shirts and jackets around you. Close the door slightly.', 'MEDIUM', 'Hider', 'spots/bedroom-2.jpg', 2),
  ('bedroom', 'Pillow Mountain', 'Bury yourself among the decorative pillows on the bed. Match the pillowcase colors. The layers of fabric create excellent visual noise.', 'EASY', 'Hider', 'spots/bedroom-3.jpg', 3),
  ('bedroom', 'Nightstand Shadow', 'Crouch beside the nightstand in the gap between furniture and wall. The lamp above casts a shadow that helps conceal you.', 'MEDIUM', 'Hider', 'spots/bedroom-4.jpg', 4),
  ('bedroom', 'Dresser Mirror Reflection', 'Stand at an angle to the dresser mirror so your reflection blends with the room. Paint yourself to match the wall behind you.', 'HARD', 'Hider', 'spots/bedroom-5.jpg', 5),
  ('bedroom', 'Curtain Drape', 'Stand behind the bedroom curtains and match the fabric color. The long drapes cover you completely from ceiling to floor.', 'EASY', 'Both', 'spots/bedroom-6.jpg', 6);

-- Garage spots
INSERT OR IGNORE INTO spots (map_slug, name, description, difficulty, best_for, image_key, sort_order) VALUES
  ('garage', 'Workbench Tool Wall', 'Stand against the pegboard tool wall. Paint yourself to match the hanging wrenches and screwdrivers. The metallic grays provide good cover.', 'MEDIUM', 'Hider', 'spots/garage-1.jpg', 1),
  ('garage', 'Car Hood Blend', 'Lie across the car hood and match the vehicle paint color. Works best with neutral-colored cars — white, gray, or black.', 'HARD', 'Hider', 'spots/garage-2.jpg', 2),
  ('garage', 'Cardboard Box Stack', 'Hide among stacked moving boxes. Paint yourself brown to match the cardboard. The irregular shapes make it hard to spot a person.', 'EASY', 'Hider', 'spots/garage-3.jpg', 3),
  ('garage', 'Lawnmower Shadow', 'Crouch behind the lawnmower or garden equipment. The dark machinery creates strong shadows that hide your silhouette.', 'EASY', 'Hider', 'spots/garage-4.jpg', 4),
  ('garage', 'Tire Rack Disguise', 'Stand among stacked tires on the rack. The round shapes and black rubber provide natural camouflage for your outline.', 'MEDIUM', 'Both', 'spots/garage-5.jpg', 5),
  ('garage', 'Shelf Lurker', 'Stand between metal shelving units laden with paint cans and supplies. Match the shelf color and stay perfectly still in the clutter.', 'MEDIUM', 'Hider', 'spots/garage-6.jpg', 6);

-- Sewer spots
INSERT OR IGNORE INTO spots (map_slug, name, description, difficulty, best_for, image_key, sort_order) VALUES
  ('sewer', 'Pipe Alcove', 'Duck into the gap between large drainage pipes. Paint yourself rusty brown to match the oxidized metal surfaces around you.', 'EASY', 'Hider', 'spots/sewer-1.jpg', 1),
  ('sewer', 'Tunnel Bend', 'Stand at the curve of the tunnel where the light does not reach. Match the damp concrete walls — dark gray with greenish algae tones.', 'MEDIUM', 'Hider', 'spots/sewer-2.jpg', 2),
  ('sewer', 'Drain Grate Crouch', 'Crouch beneath a drain grate overhead. The shaft of light above makes the surrounding darkness even deeper — perfect for hiding.', 'EASY', 'Hider', 'spots/sewer-3.jpg', 3),
  ('sewer', 'Valve Wheel Stand', 'Stand beside a large valve wheel on the pipe. Match the dark iron color of the machinery. Your vertical shape blends with the pipe junction.', 'MEDIUM', 'Hider', 'spots/sewer-4.jpg', 4),
  ('sewer', 'Water Flow Blend', 'Wade into the shallow water channel and match the murky color. The rippling surface distorts your outline from seekers above.', 'HARD', 'Hider', 'spots/sewer-5.jpg', 5),
  ('sewer', 'Manhole Shadow', 'Stand directly below a closed manhole. The narrow shaft of light creates a bright circle around you — stay just outside it in the dark ring.', 'MEDIUM', 'Both', 'spots/sewer-6.jpg', 6);

-- The Backrooms spots
INSERT OR IGNORE INTO spots (map_slug, name, description, difficulty, best_for, image_key, sort_order) VALUES
  ('the-backrooms', 'Yellow Wall Seam', 'Press yourself into the corner where two damp yellow walls meet. Paint yourself the same sickly yellow-beige. The mono-color makes you vanish.', 'EASY', 'Hider', 'spots/the-backrooms-1.jpg', 1),
  ('the-backrooms', 'Fluorescent Light Buzz', 'Stand directly beneath a flickering fluorescent light. The strobe effect disorients seekers and makes your shape hard to focus on.', 'MEDIUM', 'Both', 'spots/the-backrooms-2.jpg', 2),
  ('the-backrooms', 'Damp Carpet Drop', 'Lie flat on the soggy beige carpet. Match the stained, waterlogged texture. The low ceiling means seekers look eye-level, not down.', 'EASY', 'Hider', 'spots/the-backrooms-3.jpg', 3),
  ('the-backrooms', 'Infinite Hallway Edge', 'Stand at the very edge of a long hallway where perspective makes you tiny. The repeating pattern of walls and lights makes distance deceptive.', 'HARD', 'Hider', 'spots/the-backrooms-4.jpg', 4),
  ('the-backrooms', 'Missing Ceiling Tile', 'Climb into the gap where a drop ceiling tile is missing. Paint yourself white to match the exposed pipes and insulation above.', 'MEDIUM', 'Hider', 'spots/the-backrooms-5.jpg', 5),
  ('the-backrooms', 'Pillar Column Stand', 'Stand behind one of the square support pillars scattered throughout. Match the yellowed paint. The pillar breaks your silhouette perfectly.', 'MEDIUM', 'Seeker', 'spots/the-backrooms-6.jpg', 6);
