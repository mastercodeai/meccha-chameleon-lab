export interface UpdateData {
  version: string;
  date: string;
  type: "update" | "fix" | "release";
  title: string;
  changes: string[];
  teaser?: string;
  category: "new-content" | "balance" | "bugfix" | "qol" | "performance";
}

export const updates: UpdateData[] = [
  {
    version: "2.5.0",
    date: "2026-07-04",
    type: "update",
    title: "Osaka Rework & Paint Brush Improvement",
    changes: [
      "Reworked the official map \"Osaka\"",
      "Improved the resolution of the paint brush",
      "Added an experimental color palette for upcoming controller support",
      "Improved the stability of the 3D color picker",
      "Fixed collision detection still applied to invisible players in Reverse Chicken Race",
      "Fixed displayed paint in Reverse Chicken Race occasionally not synchronized",
    ],
    teaser: "A collaboration map will be released mid-next week!",
    category: "new-content",
  },
  {
    version: "2.4.1",
    date: "2026-07-03",
    type: "fix",
    title: "Reverse Chicken Race Balance",
    changes: [
      "Reduced points for discovering countdown in Reverse Chicken Race from 1000 to 500",
      "Fixed turn not changing when a dropped-out player was discovered in Reverse Chicken Race",
      "Changed UI buttons so they can no longer be selected using spacebar",
    ],
    category: "balance",
  },
  {
    version: "2.4.0",
    date: "2026-07-02",
    type: "update",
    title: "New Mode: Reverse Chicken Race",
    changes: [
      "Added new mode: Reverse Chicken Race — deduce the hidden player\'s identity from their body paint, find them first to earn points. Hiders earn points by staying unnoticed. Most points wins!",
      "Allowed Hunters to use the free camera during the answer reveal",
      "Fixed forcing a Mod map to start causing the game to launch mid-match",
    ],
    category: "new-content",
  },
  {
    version: "2.3.2",
    date: "2026-07-01",
    type: "fix",
    title: "Rotation & Performance Fixes",
    changes: [
      "Added \"In-place Rotation\" — can be used in conjunction with \"Rotation Lock\"",
      "Spectator target now auto-switches when the target disappears",
      "Fixed nameplate display status resetting",
      "Fixed Korean server creation screen translation error",
      "Reduced lag caused when many players paint at the same time",
      "Fixed climbing ring remaining visible when transitioning to spectating",
    ],
    teaser: "A new mode, \"Reverse-Calculation Chicken Race,\" will be added later today.",
    category: "bugfix",
  },
  {
    version: "2.3.1",
    date: "2026-07-01",
    type: "fix",
    title: "Rotate in Place & Lag Reduction",
    changes: [
      "Added \"Rotate in Place\" (replaced \"Rotation Lock\")",
      "Spectator target auto-switches if they vanish",
      "Fixed nameplate display state reset issue",
      "Fixed Korean server creation screen mistranslation",
      "Reduced lag when many players paint simultaneously",
      "Fixed climbing ring visible during spectating transition",
    ],
    teaser: "A new mode, \"Reverse Countdown Chicken Race,\" is scheduled to be added later today.",
    category: "performance",
  },
  {
    version: "2.3.0",
    date: "2026-06-29",
    type: "update",
    title: "Hunter Ammo System",
    changes: [
      "Added ammo limits for Hunters (toggleable in options) — 1 ammo consumed on miss, 1 restored on hit, none consumed on fleeing players. Hiders win if all Hunters run out of ammo.",
      "Increased maximum number of server tags to 5",
      "Fixed duplicate server tags being set",
      "Fixed Body Type UI not closing when becoming a Hunter",
      "Fixed \"Hunter Victory\" displayed under all conditions",
      "Fixed clones not disappearing instantly in modes other than Double Mode",
    ],
    category: "balance",
  },
  {
    version: "2.2.1",
    date: "2026-06-28",
    type: "fix",
    title: "AMD GPU Fix & Sewer Update",
    changes: [
      "Fixed decoys appearing solid black on AMD GPUs",
      "Added minor random elements to the official map \"Sewer\"",
    ],
    category: "bugfix",
  },
  {
    version: "2.2.0",
    date: "2026-06-28",
    type: "update",
    title: "Mansion Randomization & Cube Sizes",
    changes: [
      "Randomization introduced for furniture and other elements in \"Hide-and-Seek Mansion\" — planned for all maps in the future",
      "Added 1.4x and 1.7x size options for the character \"Cube\"",
      "Fixed game becoming unresponsive if body type selection opened during paint mode",
      "Fixed game not ending if it started after a hunter disconnected",
      "Fixed characters with 1.4x scale or larger getting stuck on stairs",
      "Changed system to save data locally if cloud saving fails",
      "Fixed loading trigger when attempting to join an inaccessible server",
    ],
    category: "new-content",
  },
  {
    version: "2.1.0",
    date: "2026-06-27",
    type: "update",
    title: "Backrooms Rework & QoL Improvements",
    changes: [
      "Total number of discoveries is now displayed",
      "Reworked the official map \"The Backrooms\"",
      "Added a \"No Mods\" tag to the server browser",
      "Player count can now be checked in the lobby",
      "Added a quit button to the Mod download request screen",
      "Adjusted the 3D eyedropper to make picking up colors easier",
      "Improved the usability of the metallic and roughness sliders",
      "Fixed servers at max capacity appearing in public searches",
      "Pressing an emote during paint mode now automatically exits paint mode",
      "Fixed dying while selecting emote preventing the selection screen from closing",
      "Fixed appearance of clones being delayed",
    ],
    category: "new-content",
  },
];

export function getUpdateByVersion(version: string): UpdateData | undefined {
  return updates.find((u) => u.version === version);
}

export function getLatestUpdate(): UpdateData | undefined {
  return updates[0];
}
