# MECCHA CHAMELEON Lab — SEO 优化执行计划

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** 通过主题聚焦、标题优化、内链强化、内容合并四个维度，让 mecchachameleonlab.com 在搜索引擎排名上超越 mecchachameleon.help。

**架构:** Next.js 16 App Router (src/app/)，内容为 server component，metadata 在 layout.tsx 中定义，已有 RelatedPages 组件和 Schema 组件。

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Cloudflare Workers

---

## 一、强化主题聚焦（3 个任务）

当前问题：首页定位是 "Best Hiding Spots & Maps Guide"，太窄，且 "Lab" 品牌名不传达帮助意图。竞品用 "Guide & Help Hub" 覆盖了更多搜索意图。

### Task 1.1: 修改首页 Hero 定位语

**Objective:** 把首页 H1 从 "Best Hiding Spots & Maps Guide" 改为更广义的 "Guide & Help Hub" 定位，覆盖更多搜索意图。

**Files:**
- Modify: `src/app/page.tsx` (~line 372-378)

**Step 1:** 找到 Hero H1 区域，将：
```tsx
MECCHA CHAMELEON: Best Hiding Spots & Maps Guide (2026)
```
改为：
```tsx
MECCHA CHAMELEON: Complete Guide & Help Hub (2026)
```

**Step 2:** 将 Hero 段落从：
```tsx
MECCHA CHAMELEON sold 15 million copies. Top YouTube videos have 93M+ views. But search for hiding spot guides and all you get is irrelevant results. Our map tier list and per-map spot guides fix that.
```
改为：
```tsx
MECCHA CHAMELEON sold 15 million copies. Top YouTube videos have 93M+ views. This is the complete player guide — hiding spots, seeker tactics, paint techniques, map breakdowns, and everything you need to win.
```

**Step 3:** 验证页面正常渲染，Hero 文字正确显示。

---

### Task 1.2: 修改 Root Layout 元数据

**Objective:** 把默认 title 和 description 从 "Lab" 导向改为 "Guide/Help" 导向。

**Files:**
- Modify: `src/app/layout.tsx` (lines 33-38)

**Step 1:** 将默认 title 从：
```
MECCHA CHAMELEON Lab — Best Hiding Spots, Maps & Guides
```
改为：
```
MECCHA CHAMELEON Guide & Help Hub — Maps, Tips & Strategies (2026)
```

**Step 2:** 将 title template 从：
```
%s | MECCHA CHAMELEON Lab
```
改为：
```
%s | MECCHA CHAMELEON Guide
```

**Step 3:** 将 meta description 从：
```
Free MECCHA CHAMELEON guides: best hiding spots for every map with screenshots, paint tips, hider & seeker strategies. 7 official maps + 600+ Workshop maps covered. Updated for 2026.
```
改为：
```
The complete MECCHA CHAMELEON player guide: hiding spots, seeker tactics, paint techniques, map breakdowns, combo guides, and beginner tips. 7 official maps + 600+ Workshop maps. Updated for 2026.
```

**Step 4:** 验证 `<title>` 标签输出正确。

---

### Task 1.3: 创建 Guides 索引页

**Objective:** 创建 `/guides` 索引页作为攻略中心，解决 Breadcrumb 链接到 `/guides/beginner` 的问题，并提供 topical authority 聚合点。

**Files:**
- Create: `src/app/guides/page.tsx`
- Create: `src/app/guides/layout.tsx`

**Step 1:** 创建 `src/app/guides/layout.tsx`：
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MECCHA CHAMELEON Guides — All Tips, Strategies & Walkthroughs",
  description:
    "Browse all MECCHA CHAMELEON guides: beginner tips, hider strategies, seeker tactics, paint techniques, map breakdowns, and more.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides",
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

**Step 2:** 创建 `src/app/guides/page.tsx` — 一个包含所有 12 个攻略卡片的网格页，每个卡片有 icon、title、description、href。复用现有 RelatedPages 的卡片样式，但改为 3 列布局。

**Step 3:** 更新所有 guide layout.tsx 中的 BreadcrumbSchema，将 "Guides" 链接从 `/guides/beginner` 改为 `/guides`。

**Step 4:** 将 `/guides` 添加到 sitemap.ts，priority 0.8。

**Step 5:** 在 Footer 中添加 "Guides" 链接指向 `/guides`。

---

## 二、优化页面标题（1 个任务）

当前问题：标题格式不统一，有的有年份后缀有的没有，有的是搜索意图导向有的是品牌导向。

### Task 2.1: 统一所有 Guide 页面标题为搜索意图导向

**Objective:** 让每个标题精确匹配用户的搜索查询，格式统一为 `MECCHA CHAMELEON [主题] — [搜索意图] (2026)`。

**Files:**
- Modify: 所有 11 个 `src/app/guides/*/layout.tsx`

**标题修改清单：**

| 页面 | 当前标题 | 新标题 |
|------|---------|--------|
| beginner | MECCHA CHAMELEON Beginner Guide — How to Play & Win (2026) | ✅ 已经很好，保留 |
| hider | MECCHA CHAMELEON Hider Guide — Best Spots & Strategies (2026) | ✅ 已经很好，保留 |
| seeker | MECCHA CHAMELEON Seeker Guide — How to Find Every Hider (2026) | ✅ 已经很好，保留 |
| tips | MECCHA CHAMELEON Tips — Pro Tips & Advanced Strategies (2026) | MECCHA CHAMELEON Tips & Tricks — 50 Pro Strategies for 2026 |
| paint | MECCHA CHAMELEON Paint Guide — Best Colors for Every Map | MECCHA CHAMELEON Paint Guide — Best Colors for Every Map (2026) |
| controls | MECCHA CHAMELEON Controls — Keyboard, Mouse & Controller Guide | MECCHA CHAMELEON Controls Guide — Keyboard & Controller Setup (2026) |
| combos | MECCHA CHAMELEON Object Combos — Best Hiding Combinations | MECCHA CHAMELEON Object Combos — Best Hiding Combinations (2026) |
| object-tiers | MECCHA CHAMELEON Object Tiers — Best & Worst Objects Ranked | MECCHA CHAMELEON Object Tier List — Best & Worst Objects Ranked (2026) |
| seeker-counters | MECCHA CHAMELEON Seeker Counters — How to Outplay the Seeker | MECCHA CHAMELEON Seeker Counters — How to Outplay the Hunter (2026) |
| beginner-mistakes | MECCHA CHAMELEON Beginner Mistakes — 10 Errors New Players Make | MECCHA CHAMELEON Common Mistakes — 10 Errors New Players Make (2026) |
| easter-eggs | MECCHA CHAMELEON Easter Eggs — All Hidden Secrets & References | MECCHA CHAMELEON Easter Eggs & Secrets — All Hidden References (2026) |

**注意：** 修改标题时同步更新 `openGraph.title`（如果有的话），保持一致。

---

## 三、加强内链（3 个任务）

当前问题：竞品每篇文章有 50+ 内链，你的 RelatedPages 只有 3-4 个链接。需要大幅强化内链密度。

### Task 3.1: 创建共享的 Related Guides 数据源

**Objective:** 集中管理所有攻略之间的关联关系，避免每个页面手动硬编码。

**Files:**
- Create: `src/data/relatedGuides.ts`

**Step 1:** 创建数据文件，定义每个 guide 的推荐关联页面：
```typescript
export interface RelatedGuide {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const relatedGuides: Record<string, RelatedGuide[]> = {
  beginner: [
    { title: "Hider Guide", description: "Master hiding techniques and camouflage", href: "/guides/hider", icon: "🎨" },
    { title: "Seeker Guide", description: "Learn how to find every hider", href: "/guides/seeker", icon: "🔍" },
    { title: "Tips & Tricks", description: "50 pro strategies to win more rounds", href: "/guides/tips", icon: "💡" },
    { title: "Common Mistakes", description: "Avoid the 10 most common beginner errors", href: "/guides/beginner-mistakes", icon: "⚠️" },
  ],
  hider: [
    { title: "Seeker Guide", description: "Know your enemy — understand seeker tactics", href: "/guides/seeker", icon: "🔍" },
    { title: "Paint Guide", description: "Best colors for every surface and map", href: "/guides/paint", icon: "🎨" },
    { title: "Object Combos", description: "Best hiding combinations by map", href: "/guides/combos", icon: "🧩" },
    { title: "Map Guides", description: "Hiding spots for every official map", href: "/maps", icon: "🗺️" },
  ],
  seeker: [
    { title: "Hider Guide", description: "Think like a hider to catch them faster", href: "/guides/hider", icon: "🎨" },
    { title: "Seeker Counters", description: "Advanced tactics to outplay any hider", href: "/guides/seeker-counters", icon: "🎯" },
    { title: "Tips & Tricks", description: "50 pro strategies for both roles", href: "/guides/tips", icon: "💡" },
    { title: "Map Guides", description: "Learn every map's hiding hotspots", href: "/maps", icon: "🗺️" },
  ],
  tips: [
    { title: "Beginner Guide", description: "New? Start here first", href: "/guides/beginner", icon: "📖" },
    { title: "Hider Guide", description: "Deep dive into hiding strategies", href: "/guides/hider", icon: "🎨" },
    { title: "Seeker Guide", description: "Deep dive into seeker strategies", href: "/guides/seeker", icon: "🔍" },
    { title: "Controls Guide", description: "Optimize your keyboard & controller setup", href: "/guides/controls", icon: "🎮" },
  ],
  paint: [
    { title: "Hider Guide", description: "Full hiding strategy including painting", href: "/guides/hider", icon: "🎨" },
    { title: "Object Tiers", description: "Best and worst objects to imitate", href: "/guides/object-tiers", icon: "📊" },
    { title: "Object Combos", description: "Best hiding combinations by map", href: "/guides/combos", icon: "🧩" },
    { title: "Map Guides", description: "Color references for every map", href: "/maps", icon: "🗺️" },
  ],
  controls: [
    { title: "Beginner Guide", description: "Learn the basics before optimizing controls", href: "/guides/beginner", icon: "📖" },
    { title: "Tips & Tricks", description: "Pro strategies that require good controls", href: "/guides/tips", icon: "💡" },
    { title: "Object Combos", description: "Advanced combos need precise controls", href: "/guides/combos", icon: "🧩" },
    { title: "Settings Guide", description: "Optimize your game settings", href: "/settings", icon: "⚙️" },
  ],
  combos: [
    { title: "Controls Guide", description: "Optimize controls for combo execution", href: "/guides/controls", icon: "🎮" },
    { title: "Hider Guide", description: "Full hiding strategy beyond combos", href: "/guides/hider", icon: "🎨" },
    { title: "Object Tiers", description: "Which objects work best in combos", href: "/guides/object-tiers", icon: "📊" },
    { title: "Map Guides", description: "Map-specific combo opportunities", href: "/maps", icon: "🗺️" },
  ],
  "object-tiers": [
    { title: "Object Combos", description: "Combine top-tier objects for best results", href: "/guides/combos", icon: "🧩" },
    { title: "Hider Guide", description: "How to use object selection strategically", href: "/guides/hider", icon: "🎨" },
    { title: "Paint Guide", description: "Match colors to your chosen object", href: "/guides/paint", icon: "🎨" },
    { title: "Map Guides", description: "Best objects per map", href: "/maps", icon: "🗺️" },
  ],
  "seeker-counters": [
    { title: "Seeker Guide", description: "Core seeker strategies and patterns", href: "/guides/seeker", icon: "🔍" },
    { title: "Hider Guide", description: "Understand what you're countering", href: "/guides/hider", icon: "🎨" },
    { title: "Map Guides", description: "Map-specific counter strategies", href: "/maps", icon: "🗺️" },
    { title: "Tips & Tricks", description: "More advanced strategies", href: "/guides/tips", icon: "💡" },
  ],
  "beginner-mistakes": [
    { title: "Beginner Guide", description: "The correct way to play from the start", href: "/guides/beginner", icon: "📖" },
    { title: "Tips & Tricks", description: "Pro strategies to replace bad habits", href: "/guides/tips", icon: "💡" },
    { title: "Hider Guide", description: "Stop making hiding mistakes", href: "/guides/hider", icon: "🎨" },
    { title: "Seeker Guide", description: "Stop making seeker mistakes", href: "/guides/seeker", icon: "🔍" },
  ],
  "easter-eggs": [
    { title: "Map Guides", description: "Explore every map in detail", href: "/maps", icon: "🗺️" },
    { title: "Beginner Guide", description: "Start playing before exploring secrets", href: "/guides/beginner", icon: "📖" },
    { title: "Gallery", description: "Screenshots and media from the game", href: "/gallery", icon: "📸" },
    { title: "Workshop Maps", description: "Discover 600+ community maps", href: "/workshop", icon: "🔧" },
  ],
};
```

---

### Task 3.2: 在每个 Guide 页面添加「下一步阅读」区块

**Objective:** 在每个攻略页面的 RelatedPages 下方，添加一个 "WHERE TO GO NEXT" 引导区块，包含 3 条学习路径（Hider Path / Seeker Path / Social Play Path），模仿竞品的做法。

**Files:**
- Modify: `src/components/RelatedPages.tsx` — 扩展组件，新增可选的 `nextSteps` prop
- Modify: 所有 12 个 `src/app/guides/*/page.tsx` — 添加 nextSteps 数据

**Step 1:** 扩展 RelatedPages.tsx，新增 `NextStep` 类型和渲染：
```tsx
interface NextStep {
  label: string;        // e.g. "HIDER PATH"
  title: string;        // e.g. "Master Hiding"
  description: string;  // e.g. "Learn camouflage, painting, and positioning"
  href: string;
  icon?: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
  nextSteps?: NextStep[];
}
```

在现有 `pages` grid 下方渲染 nextSteps 为一个 3 列的引导区块，标题用 "Where to Go Next"。

**Step 2:** 在每个 guide 的 page.tsx 中，导入 `relatedGuides` 数据，并传入 nextSteps：
```tsx
import { relatedGuides } from "@/data/relatedGuides";

// 在 <RelatedPages> 中添加:
<RelatedPages
  pages={relatedGuides["hider"]}
  nextSteps={[
    { label: "HIDER PATH", title: "Master Hiding", description: "Deep dive into camouflage and positioning", href: "/guides/hider", icon: "🎨" },
    { label: "SEEKER PATH", title: "Hunt Better", description: "Learn to read the environment and catch hiders", href: "/guides/seeker", icon: "🔍" },
    { label: "SOCIAL PLAY", title: "Play With Friends", description: "Set up the perfect lobby for your group", href: "/guides/tips", icon: "🎮" },
  ]}
/>
```

---

### Task 3.3: 在攻略正文中添加上下文内链

**Objective:** 在攻略正文的关键位置添加指向其他攻略的内链，提升内链密度（目标：每篇至少 8-10 个内链）。

**Files:**
- Modify: 所有 12 个 `src/app/guides/*/page.tsx`

**规则：**
1. 在每个攻略的开头段落中，自然引用 1-2 个相关攻略的链接
2. 在 "Common Mistakes" 相关内容中，链接到 `beginner-mistakes` 页面
3. 在提到具体地图时，链接到对应的 `/maps/[slug]` 页面
4. 在提到 Paint/Color 时，链接到 `/guides/paint`
5. 在提到 Controls 时，链接到 `/guides/controls`

**示例（hider/page.tsx）：**
在开头段落：
```tsx
<p>
  Before diving in, make sure you understand the{" "}
  <Link href="/guides/beginner" className="text-primary hover:underline">
    beginner basics
  </Link>{" "}
  and have reviewed the{" "}
  <Link href="/guides/paint" className="text-primary hover:underline">
    paint guide
  </Link>{" "}
  for color matching fundamentals.
</p>
```

**注意：** 内链必须自然融入内容，不能生硬堆砌。每处链接必须对读者有实际价值。

---

## 四、内容合并（3 个任务）

当前问题：12 个攻略中有多个主题重叠，导致内容稀薄。竞品用 6 篇深度长文覆盖全部内容。

### Task 4.1: 合并 Hider 相关页面

**Objective:** 将 `hider` + `paint` + `combos` + `object-tiers` 合并为一篇终极 Hider 攻略，URL 保持 `/guides/hider`。

**Files:**
- Modify: `src/app/guides/hider/page.tsx` — 合并内容
- Modify: `src/app/guides/hider/layout.tsx` — 更新 metadata
- Redirect: `paint`, `combos`, `object-tiers` → `/guides/hider` (301)

**Step 1:** 在 `src/app/guides/hider/page.tsx` 中，将现有 6 个 section 扩展为：
1. Overview (已有)
2. Core Strategies (已有)
3. **Painting Techniques** (从 paint guide 合并核心内容)
4. **Object Selection & Tiers** (从 object-tiers 合并)
5. **Object Combos** (从 combos 合并)
6. Map Tips (已有)
7. Advanced Hiding (已有)
8. Common Mistakes (已有)

**Step 2:** 更新 hider layout.tsx 的 metadata：
```tsx
title: "MECCHA CHAMELEON Hider Guide — Paint, Objects & Strategies (2026)",
description: "The ultimate MECCHA CHAMELEON hider guide: painting techniques, best objects, combo strategies, and advanced hiding tips for every map. Updated for 2026.",
```

**Step 3:** 在 `next.config.ts` 或 middleware 中添加 301 重定向：
```
/guides/paint → /guides/hider#painting-techniques
/guides/combos → /guides/hider#object-combos
/guides/object-tiers → /guides/hider#object-selection
```

**Step 4:** 从 sitemap.ts 中移除 `paint`, `combos`, `object-tiers` 的独立条目。

---

### Task 4.2: 合并 Seeker 相关页面

**Objective:** 将 `seeker` + `seeker-counters` 合并为一篇终极 Seeker 攻略，URL 保持 `/guides/seeker`。

**Files:**
- Modify: `src/app/guides/seeker/page.tsx` — 合并内容
- Modify: `src/app/guides/seeker/layout.tsx` — 更新 metadata
- Redirect: `seeker-counters` → `/guides/seeker`

**Step 1:** 在 seeker/page.tsx 中，将现有 6 个 section 扩展为：
1. Overview (已有)
2. Search Strategies (已有)
3. **Counter Tactics** (从 seeker-counters 合并)
4. Reading Environment (已有)
5. **Advanced Detection** (从 seeker-counters 的 paint-detection, common-spots 合并)
6. Team Coordination (已有)
7. Time Management (已有)
8. Common Mistakes (已有)

**Step 2:** 更新 seeker layout.tsx：
```tsx
title: "MECCHA CHAMELEON Seeker Guide — Hunt, Counter & Win (2026)",
description: "Complete MECCHA CHAMELEON seeker guide: search patterns, counter tactics, paint detection, and advanced hunting strategies. Updated for 2026.",
```

**Step 3:** 添加重定向 `/guides/seeker-counters` → `/guides/seeker#counter-tactics`。

---

### Task 4.3: 合并 Beginner 相关页面

**Objective:** 将 `beginner` + `beginner-mistakes` + `tips` 合并为一篇终极 Beginner 攻略，URL 保持 `/guides/beginner`。

**Files:**
- Modify: `src/app/guides/beginner/page.tsx` — 合并内容
- Modify: `src/app/guides/beginner/layout.tsx` — 更新 metadata
- Redirect: `beginner-mistakes`, `tips` → `/guides/beginner`

**Step 1:** 在 beginner/page.tsx 中，将现有 7 个 section 扩展为：
1. What Is MECCHA CHAMELEON (已有)
2. Rules & Game Flow (已有)
3. Painting Basics (已有)
4. Hider Tips (已有)
5. Seeker Tips (已有)
6. Controls (已有)
7. **Common Mistakes** (从 beginner-mistakes 合并)
8. **Pro Tips & Advanced Strategies** (从 tips 合并，按角色分组)

**Step 2:** 更新 beginner layout.tsx：
```tsx
title: "MECCHA CHAMELEON Beginner Guide — How to Play, Tips & Mistakes (2026)",
description: "Complete MECCHA CHAMELEON beginner guide: how to play, pro tips, common mistakes to avoid, and strategies for both hider and seeker roles. Updated for 2026.",
```

**Step 3:** 添加重定向：
```
/guides/beginner-mistakes → /guides/beginner#common-mistakes
/guides/tips → /guides/beginner#pro-tips
```

---

## 合并后的最终页面结构

合并完成后，攻略页面从 12 个精简为 7 个（去掉 videos）：

| URL | 主题 | 预估字数 |
|-----|------|---------|
| `/guides` | 攻略索引页 (新建) | ~300 |
| `/guides/beginner` | 入门 + 技巧 + 常见错误 | ~3,500+ |
| `/guides/hider` | 隐藏 + 画漆 + 物体 + 组合 | ~4,500+ |
| `/guides/seeker` | 搜寻 + 反制 | ~3,000+ |
| `/guides/controls` | 操控设置 | ~1,200 |
| `/guides/easter-eggs` | 彩蛋秘密 | ~1,500 |
| `/maps` | 地图详情 (7张) | 已有 |

每个攻略 8-10 个内链 + RelatedPages 4 个 + Where to Go Next 3 个路径 = 每页 15+ 内链。

---

## 执行顺序

1. **Task 1.1 + 1.2** — 改首页定位和 metadata（立即见效）
2. **Task 2.1** — 统一标题格式（立即见效）
3. **Task 1.3** — 创建 Guides 索引页
4. **Task 3.1 + 3.2** — 内链数据源 + RelatedPages 扩展
5. **Task 3.3** — 正文内链（逐页处理）
6. **Task 4.1 + 4.2 + 4.3** — 内容合并（最后做，工作量最大）

---

## 预期效果

- **4 周内：** 标题和定位优化开始被搜索引擎索引
- **6-8 周：** 内链密度提升带来页面权重重新分配
- **8-12 周：** 合并后的深度长文开始在长尾关键词上排名提升
- **核心目标关键词：** "meccha chameleon guide", "meccha chameleon tips", "meccha chameleon hiding spots", "meccha chameleon how to play"
