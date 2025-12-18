1: # Tailwind CSS Notes

## 1. Color Logic
Format: `[property]-[color]-[intensity]`

- **Properties**: `bg-` (background), `text-` (text color), `border-` (border color)
- **Intensity**: `50` to `950` (lighter to darker)
- **Colors**: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`
- **Exceptions**: `white`, `black`, `transparent`, `current` (No intensity)

### Examples
```html
<div class="bg-blue-500 text-white">Blue background with white text</div>
<div class="text-red-600 border border-red-300">Red text with red border</div>
```

## 2. Spacing (Padding/Margin)
Format: `[type][side]-[size]`

- **Types**: `p` (padding), `m` (margin)
- **Sides**: `t` (top), `b` (bottom), `l` (left), `r` (right), `x` (horizontal), `y` (vertical)
- **Size**: `0` to `96` (`1` = 0.25rem/4px)

### Examples
```html
<div class="p-4 m-2">Padding all sides, margin all sides</div>
<div class="px-8 py-4">Horizontal padding, vertical padding</div>
```

## 3. Sizing
Format: `[dim]-[size]`

- **Dimensions**: `w` (width), `h` (height)
- **Values**: `full` (100%), `screen` (100vw/vh), fractions (`1/2`, `3/4`)

### Examples
```html
<div class="w-full h-32 bg-green-200">Full width, fixed height</div>
<div class="w-1/2 h-screen bg-blue-100">Half width, full screen height</div>
```

## 4. Typography
- **Size**: `text-[xs|sm|base|lg|xl|2xl...9xl]`
- **Weight**: `font-[thin|light|normal|medium|semibold|bold]`
- **Alignment**: `text-[left|center|right|justify]`

### Examples
```html
<p class="text-lg font-bold text-center">Centered bold large text</p>
<p class="text-sm font-light text-justify">Justified light small text</p>
```

## 5. Layout
- **Flex**: `flex`, `flex-row`, `flex-col`, `justify-center`, `items-center`
- **Grid**: `grid`, `grid-cols-[1-12]`, `gap-[size]`

### Examples
```html
<div class="flex justify-center items-center h-32 bg-gray-100">
  <div class="bg-red-300 p-4">Centered item</div>
</div>
<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-200 p-4">Item 1</div>
  <div class="bg-blue-200 p-4">Item 2</div>
  <div class="bg-blue-200 p-4">Item 3</div>
</div>
```

## 6. Responsive
Format: `[breakpoint]:[utility]`

- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

### Examples
```html
<div class="bg-red-500 md:bg-blue-500 lg:bg-green-500">Changes color based on screen size</div>
<div class="text-sm md:text-lg">Small text on mobile, large on medium+</div>
```

## 7. Borders
Format: `border-[width]` or `border-[color]-[intensity]`

- **Width**: `border` (1px), `border-0`, `border-2`, `border-4`, `border-8`
- **Radius (Corners)**: `rounded-[size]`
  - `none`, `sm`, `md`, `lg`, `xl`, `full` (circle)
- **Style**: `border-[solid|dashed|dotted|double]`

### Examples
```html
<div class="border border-blue-500 rounded-lg p-4">Rounded border</div>
<div class="border-2 border-dashed border-red-400 rounded-full w-16 h-16">Dashed circular border</div>
```

## 8. Effects & Filters
- **Shadows**: `shadow-[sm|md|lg|xl|2xl|inner|none]`
- **Opacity**: `opacity-[0|25|50|75|100]`
- **Blur**: `blur-[sm|md|lg|xl]`

### Examples
```html
<div class="shadow-lg p-4 bg-white">Box with large shadow</div>
<div class="opacity-50 bg-red-500 p-4">Semi-transparent red box</div>
```

## 9. Interactivity
- **States**: `hover:[class]`, `focus:[class]`, `active:[class]`
- **Cursors**: `cursor-[auto|default|pointer|wait|text|move|not-allowed]`
- **Transitions**: `transition`, `duration-[75-1000]`, `ease-[in|out|in-out|linear]`

### Examples
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded transition duration-300">Hover me</button>
<input class="border focus:border-blue-500 p-2" placeholder="Focus on me">
<div class="bg-gray-200 hover:bg-blue-500 hover:text-white hover:shadow-lg p-4 rounded transition duration-300">Multiple hover effects: color, text, and shadow</div>
```

## 10. Font Size Reference

| Class | Size (rem) | Size (px) |
|-------|------------|-----------|
| text-xs | 0.75rem | 12px |
| text-sm | 0.875rem | 14px |
| text-base | 1rem | 16px (default) |
| text-lg | 1.125rem | 18px |
| text-xl | 1.25rem | 20px |
| text-2xl | 1.5rem | 24px |
| text-3xl | 1.875rem | 30px |
| text-4xl | 2.25rem | 36px |
| text-5xl | 3rem | 48px |
| text-base | 1rem | 16px |
