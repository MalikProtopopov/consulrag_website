# F0 Editorial Light — Спецификация Grid System

> Документ для передачи требований к редизайну макета под формат F0

---

## 1. Базовая система

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 16px;   /* Mobile */
  padding-right: 16px;
}

/* Tablet (640px+) */
@media (min-width: 640px) {
  .container { padding: 0 24px; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container { padding: 0 32px; }
}
```

| Параметр | Значение |
|----------|----------|
| Max-width | `1280px` |
| Padding Mobile | `16px` |
| Padding Tablet | `24px` |
| Padding Desktop | `32px` |

### Grid Foundation

```
12-колоночная сетка (desktop)
├── Используется для всех секций
├── На tablet: 2-8 колонок
├── На mobile: 1-2 колонки
```

---

## 2. Паттерны сеток по секциям

### 2.1 Hero Section — Split Layout 8 + 4

**Структура:**
```
┌─────────────────────────────────────────────────────────────┐
│                        HERO SECTION                          │
├──────────────────────────────────────┬──────────────────────┤
│           MAIN CONTENT               │      SIDEBAR          │
│              8 колонок               │      4 колонки        │
│                                      │                       │
│  [Label: 01 — MVP Studio]            │  [Track Record]       │
│                                      │  ─────────────────    │
│  Design.                             │  12+                  │
│  Build.                              │  MVPs Shipped         │
│  Ship.                               │                       │
│                                      │  30 days              │
│  Subheadline...                      │  Avg. Delivery        │
│                                      │                       │
│  [Button] [Link →]                   │  4.9/5                │
│                                      │  Client Rating        │
│                                      │  ─────────────────    │
│                                      │  [Trusted By logos]   │
├──────────────────────────────────────┴──────────────────────┤
│  GAP между колонками: 64px (mobile) / 96px (desktop)         │
└─────────────────────────────────────────────────────────────┘
```

**Код:**
```tsx
<div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
  {/* Main content - 8 columns */}
  <div className="lg:col-span-8">
    {/* Content */}
  </div>
  
  {/* Sidebar - 4 columns */}
  <div className="lg:col-span-4">
    <div className="lg:border-l lg:pl-12">
      {/* Sidebar content */}
    </div>
  </div>
</div>
```

**Ключевые значения:**
| Параметр | Mobile | Desktop |
|----------|--------|---------|
| Grid | 1 column | 12 columns |
| Main Content | 100% | 8 cols (66.67%) |
| Sidebar | 100% | 4 cols (33.33%) |
| Gap | `64px` (gap-16) | `96px` (gap-24) |
| Sidebar border-left | None | `1px solid border` |
| Sidebar padding-left | 0 | `48px` (pl-12) |

**Особенности:**
- Sidebar отделяется вертикальной линией слева (`border-l`)
- Линия добавляется только на desktop (`lg:border-l`)
- Padding слева от линии: `48px` (`lg:pl-12`)
- Центрирование по вертикали: `items-center`

---

### 2.2 Services Section — Numbered List 1 + 3 + 5 + 3

**Структура одной строки:**
```
┌─────────────────────────────────────────────────────────────┐
│                      SERVICE ROW                             │
├────┬─────────────┬──────────────────────────┬───────────────┤
│ 01 │ Title       │ Description + Tags       │    Price      │
│    │             │                          │               │
│1col│   3 cols    │        5 cols            │    3 cols     │
└────┴─────────────┴──────────────────────────┴───────────────┘
 ═══════════════════════════════════════════════════════════════
│1col│   3 cols    │        5 cols            │    3 cols     │
 ═══════════════════════════════════════════════════════════════
      ↑ gap-8 (mobile) / gap-12 (desktop) между колонками
```

**Полная секция:**
```
┌─────────────────────────────────────────────────────────────┐
│ [Section Header: 03 — Services]                             │
│ What We Do (H2)                                             │
│ Description text...                                          │
│                                                              │
│ ─────────────────────────────────────────────────────────── │  ← border-top
│ 01 │ MVP Development │ Full-stack dev... │ Tags │ $8,000   │
│ ─────────────────────────────────────────────────────────── │  ← border-bottom
│ 02 │ Product Design  │ UX research...    │ Tags │ $3,000   │
│ ─────────────────────────────────────────────────────────── │
│ 03 │ Technical...    │ Architecture...   │ Tags │ $2,000   │
│ ─────────────────────────────────────────────────────────── │
│ 04 │ Growth Partner. │ Ongoing dev...    │ Tags │ $15k/mo  │
│ ─────────────────────────────────────────────────────────── │
│                                                              │
│ [CTA: Need custom? → Get in touch]                          │
└─────────────────────────────────────────────────────────────┘
```

**Код:**
```tsx
<div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
  {/* Number */}
  <div className="lg:col-span-1">01</div>
  
  {/* Title */}
  <div className="lg:col-span-3">
    <h3>MVP Development</h3>
  </div>
  
  {/* Description + Deliverables */}
  <div className="lg:col-span-5">
    <p>Description...</p>
    <div className="flex flex-wrap gap-2">
      {/* Tags */}
    </div>
  </div>
  
  {/* Price */}
  <div className="lg:col-span-3 lg:text-right">
    <span>Starting at</span>
    <span>$8,000</span>
  </div>
</div>
```

**Ключевые значения:**
| Колонка | Cols | Width % | Alignment |
|---------|------|---------|-----------|
| Number | 1 | 8.33% | Left |
| Title | 3 | 25% | Left |
| Description | 5 | 41.67% | Left |
| Price | 3 | 25% | Right (`lg:text-right`) |
| **Total** | **12** | **100%** | - |

| Параметр | Mobile | Desktop |
|----------|--------|---------|
| Grid | Stack (1 col) | 12 columns |
| Gap | `32px` (gap-8) | `48px` (gap-12) |
| Row padding | `48px 0` (py-12) | `64px 0` (py-16) |
| Dividers | `border-t`, `border-b` | Same |

---

### 2.3 Process Section — Timeline Grid 4 equal columns

**Структура:**
```
┌─────────────────────────────────────────────────────────────┐
│ [Section Header: 04 — Process]                              │
│                                                              │
│ ┌──────────────┬──────────────┐  (Title | Description)      │
│ │ 30 Days to   │ A proven     │   Split 50/50 на desktop   │
│ │ Launch       │ methodology..│   (grid lg:grid-cols-2)     │
│ └──────────────┴──────────────┘                             │
│                                                              │
│    ●───────────●───────────●───────────●  ← Progress line   │
│    │           │           │           │                     │
│ ┌──┴──┐     ┌──┴──┐     ┌──┴──┐     ┌──┴──┐                 │
│ │ 01  │     │ 02  │     │ 03  │     │ 04  │                 │
│ │     │     │     │     │     │     │     │                 │
│ │Disc.│     │Des. │     │Build│     │Laun.│                 │
│ │     │     │     │     │     │     │     │                 │
│ │3days│     │5days│     │18day│     │4days│                 │
│ └─────┘     └─────┘     └─────┘     └─────┘                 │
│   25%         25%         25%         25%                   │
│                                                              │
│ ────────────────────────────────────────────────────────    │
│ Total Timeline: 30 Days        [Note about timeline]        │
└─────────────────────────────────────────────────────────────┘
```

**Код:**
```tsx
{/* Header with 2-column layout */}
<div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
  <h2>30 Days to Launch</h2>
  <p>A proven methodology...</p>
</div>

{/* Steps in 4 equal columns */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
  {steps.map((step) => (
    <div className="lg:pt-20">
      {/* Step content */}
    </div>
  ))}
</div>
```

**Ключевые значения:**
| Breakpoint | Columns | Gap |
|------------|---------|-----|
| Mobile | 1 | `32px` (gap-8) |
| Tablet (md) | 2 | `32px` (gap-8) |
| Desktop (lg) | 4 | `24px` (gap-6) |

**Header sub-grid:**
| Параметр | Mobile | Desktop |
|----------|--------|---------|
| Grid | 1 column | 2 columns |
| Gap | `32px` | `64px` (gap-16) |
| Title | 100% | 50% |
| Description | 100% | 50% |

---

### 2.4 Case Studies — Alternating 7 + 5 Layout

**Структура:**
```
┌─────────────────────────────────────────────────────────────┐
│ [Section Header: 02 — Selected Work]                        │
│ Case Studies (H2)                                           │
│                                                              │
│ ┌─────────────────────────────────────┬─────────────────────┐
│ │                                     │                     │
│ │         COVER IMAGE                 │      CONTENT        │
│ │           7 cols                    │       5 cols        │
│ │                                     │                     │
│ │    [Gradient + Initial Letter]      │  [Year Badge]       │
│ │                                     │  Title              │
│ │                                     │  Subtitle           │
│ │                                     │  Description        │
│ │                                     │  [Tags]             │
│ │                                     │  ─────────────      │
│ │                                     │  Metrics            │
│ └─────────────────────────────────────┴─────────────────────┘
│                                                              │
│ ┌─────────────────────┬─────────────────────────────────────┐
│ │                     │                                     │
│ │      CONTENT        │         COVER IMAGE                 │
│ │       5 cols        │           7 cols                    │
│ │     (order: 1)      │         (order: 2)                  │  ← Reversed!
│ │                     │                                     │
│ └─────────────────────┴─────────────────────────────────────┘
│                                                              │
│ (и так далее, чередуя...)                                   │
└─────────────────────────────────────────────────────────────┘
```

**Код:**
```tsx
<div className="space-y-16 lg:space-y-24">
  {caseStudies.map((study, index) => (
    <article>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Cover - 7 columns */}
        <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
          {/* Image content */}
        </div>
        
        {/* Content - 5 columns */}
        <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
          {/* Text content */}
        </div>
      </div>
    </article>
  ))}
</div>
```

**Ключевые значения:**
| Элемент | Cols | Width % |
|---------|------|---------|
| Cover Image | 7 | 58.33% |
| Content | 5 | 41.67% |
| **Total** | **12** | **100%** |

| Параметр | Mobile | Desktop |
|----------|--------|---------|
| Grid | Stack (1 col) | 12 columns |
| Gap | `32px` (gap-8) | `48px` (gap-12) |
| Space between cards | `64px` | `96px` (space-y-24) |
| Alignment | Default | `items-center` |

**Чередование:**
```tsx
// Чётные индексы (0, 2, 4...): Image LEFT, Content RIGHT
// Нечётные (1, 3, 5...): Image RIGHT, Content LEFT (через order)
index % 2 === 1 ? "lg:order-2" : ""  // для Image
index % 2 === 1 ? "lg:order-1" : ""  // для Content
```

---

## 3. Section Header — Унифицированный паттерн

**Структура:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  ── 01 — Section Name ─────────                             │
│                         ↑ line max-width: 80px              │
│                                                              │
│  Section Title                                               │
│  (H2, 4xl → 7xl responsive)                                 │
│                                                              │
│  Optional description text up to max-w-2xl                  │
│                                                              │
│  ─────────────────────────────────────────────  margin-bottom│
│                                           ↑ mb-20 lg:mb-28   │
└─────────────────────────────────────────────────────────────┘
```

**Код:**
```tsx
<div className="mb-20 lg:mb-28">
  {/* Label with line */}
  <div className="flex items-center gap-4 mb-8">
    <span className="font-mono text-xs uppercase tracking-[0.2em]">
      01 — Section Name
    </span>
    <div className="h-px flex-1 max-w-[80px] bg-border" />
  </div>
  
  {/* Title */}
  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
    Section Title
  </h2>
  
  {/* Optional description */}
  <p className="text-lg lg:text-xl max-w-2xl leading-relaxed mt-6">
    Description...
  </p>
</div>
```

**Ключевые значения:**
| Элемент | Значение |
|---------|----------|
| Label font | `font-mono` |
| Label size | `12px` (text-xs) |
| Label transform | `uppercase` |
| Label tracking | `0.2em` |
| Line height | `1px` |
| Line max-width | `80px` |
| Gap label↔line | `16px` (gap-4) |
| Gap label→title | `32px` (mb-8) |
| Title tracking | `tight` |
| Description max-width | `672px` (max-w-2xl) |
| Gap title→description | `24px` (mt-6) |
| Section header margin-bottom | `80px / 112px` |

---

## 4. Section Spacing

### Vertical Rhythm

```
┌──────────────────────────────────────────┐
│              SECTION                     │
│                                          │
│  py-32 (128px)  ←──→  lg:py-40 (160px)  │
│                                          │
├──────────────────────────────────────────┤
│  mb-20 (80px)  ←──→  lg:mb-28 (112px)   │  ← Header → Content gap
├──────────────────────────────────────────┤
│              SECTION                     │
│                                          │
└──────────────────────────────────────────┘
```

**Значения:**
| Параметр | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section padding | `py-24` (96px) | `py-32` (128px) | `py-40` (160px) |
| Header → Content | `mb-16` (64px) | `mb-20` (80px) | `mb-28` (112px) |
| Between items | `space-y-6` | `space-y-8` | `space-y-12` |
| Gap in grid | `gap-6` | `gap-8` | `gap-12` |

---

## 5. Responsive Breakpoints

```
┌─────────────────────────────────────────────────────────────┐
│                      BREAKPOINTS                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ←───── Mobile ─────→│←─ Tablet ─→│←───── Desktop ─────→    │
│                      │            │                          │
│    0px         640px │   768px    │ 1024px          1280px  │
│         sm           │     md     │    lg              xl    │
│                      │            │                          │
└─────────────────────────────────────────────────────────────┘
```

| Prefix | Min-width | Описание |
|--------|-----------|----------|
| (default) | 0px | Mobile-first base |
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |
| `2xl:` | 1536px | Extra large |

---

## 6. Сводная таблица Grid-паттернов

| Секция | Desktop Grid | Mobile | Gap (M/D) |
|--------|-------------|--------|-----------|
| **Hero** | 8 + 4 cols | Stack | 64px / 96px |
| **Services Row** | 1 + 3 + 5 + 3 cols | Stack | 32px / 48px |
| **Process Header** | 6 + 6 cols (50/50) | Stack | 32px / 64px |
| **Process Steps** | 4 equal cols | 2 cols → 1 col | 32px / 24px |
| **Case Study** | 7 + 5 cols (alternating) | Stack | 32px / 48px |
| **Section Header** | Full-width | Full-width | - |

---

## 7. Требования для редизайна макета

### Checklist для дизайнера

1. **Container:**
   - [ ] Max-width: 1280px
   - [ ] Padding: 16px (M) → 24px (T) → 32px (D)

2. **Grid System:**
   - [ ] 12-колоночная сетка на desktop
   - [ ] Базовый gap: 32px (M) → 48px (D)

3. **Hero:**
   - [ ] Split 8+4 на desktop
   - [ ] Sidebar с border-left и pl-48px
   - [ ] Вертикальное центрирование

4. **Services:**
   - [ ] Список с разделителями (border-top/bottom)
   - [ ] Grid 1+3+5+3 внутри каждой строки
   - [ ] Price справа (text-right)

5. **Process:**
   - [ ] Header 50/50 split
   - [ ] 4 равные колонки для шагов
   - [ ] Горизонтальная линия прогресса

6. **Case Studies:**
   - [ ] Alternating 7+5 layout
   - [ ] order меняется для нечётных
   - [ ] Cover с aspect-ratio 4:3

7. **Section Headers:**
   - [ ] Label: mono, 12px, uppercase, tracking 0.2em
   - [ ] Line: 1px height, max-width 80px
   - [ ] Title: serif, responsive 36→72px
   - [ ] mb-80px (M) → mb-112px (D) под header

---

## 8. Пример CSS Grid Utility Classes

```css
/* Container */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}
@media (min-width: 640px) { .container { padding: 0 24px; } }
@media (min-width: 1024px) { .container { padding: 0 32px; } }

/* 12-Column Grid */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

/* Column Spans */
.col-1 { grid-column: span 1; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-5 { grid-column: span 5; }
.col-6 { grid-column: span 6; }
.col-7 { grid-column: span 7; }
.col-8 { grid-column: span 8; }

/* Gaps */
.gap-sm { gap: 24px; }
.gap-md { gap: 32px; }
.gap-lg { gap: 48px; }
.gap-xl { gap: 64px; }
.gap-2xl { gap: 96px; }

/* Section Padding */
.section { padding: 128px 0; }
@media (min-width: 1024px) { .section { padding: 160px 0; } }

/* Section Header Gap */
.section-header { margin-bottom: 80px; }
@media (min-width: 1024px) { .section-header { margin-bottom: 112px; } }
```

---

## Итого

Сетка F0 построена на принципах:

1. **12-column grid** для максимальной гибкости
2. **Асимметричные split layouts** (8+4, 7+5, 1+3+5+3) для визуального интереса
3. **Generous gaps** — много воздуха между элементами
4. **Responsive degradation** — от 12 cols → 2 cols → 1 col
5. **Consistent section spacing** — py-32/py-40, mb-20/mb-28 паттерны
6. **Alternating layouts** для ритма (Case Studies)

Эти паттерны создают «редакционный» характер макета — как в премиальных журналах.

