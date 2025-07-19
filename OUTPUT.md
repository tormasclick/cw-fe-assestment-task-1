## Changes Made
App

### Page Background
Fix: Set <main> to !bg-[#121417] for consistent dark background across the page.


### Hero Centering
Issue: Hero section was not centered in the viewport, affecting layout alignment.
Fix: Wrapped HeroSection in <section className="flex items-center justify-center w-full"> with w-[928px] h-[480px] mx-auto for proper centering.


### Vertical Spacing
Issue: Insufficient spacing between header and hero section, impacting design fidelity.
Fix: Added <div className="mt-8" /> before and after HeroSection for consistent vertical spacing.



## Header

### Avatar Image Display
Issue: Avatar image was not available at src/avatar.jpg not displaying due to incorrect path and missing avatar.
Fix: Downloaded the avatar from figma design and Added import avatarImage from "./avatar.jpg" also updated <AvatarImage src={avatarImage} className="!w-8 !h-8 !block !object-cover" loading="eager" />. Retained <AvatarFallback className="text-white">U</AvatarFallback> for fallback.


### Header Layout
Set <header> to w-full flex items-center justify-between px-12 sm:px-16 py-2 mx-12 sm:mx-16 dark:bg-background border-b border-[--search-border]. Configured logo to w-4 h-4 and title to text-[18px] font-bold font-inter text-white.



### SearchBar

JSX Syntax Error
Issue: Invalid JSX syntax (iconSize=20) in HeroSection’s SearchBar caused compilation failure, preventing rendering.
Fix: Updated to iconSize={20} in HeroSection’s SearchBar and ensured iconSize={16} in Header for consistency.


### Component Reusability
Utilized bgColor prop with !bg-[#9EABB8] for header (160x40px) and !bg-[#3D4754] for hero (480x64px), enhancing flexibility.


### Design Alignment
Issue: Search boxes did not match design specifications for colors, sizes, and borders.
Fix: Configured header search to !bg-[#9EABB8], no border, rounded-[12px], iconSize={16}, no button. Set hero search to !bg-[#3D4754], border-[--search-border], rounded-[12px], iconSize={20}, with #1A80E5 button. Applied border-none focus:ring-0 focus:outline-none to input and text-[16px] font-work-sans text-[--search-border] to placeholder.



### HeroSection

UI Design Fidelity
Issue: Hero section did not match design for dimensions, text styling, or search box appearance.
Fix: Set container to w-[928px] h-[480px] mx-auto rounded-[--radius-lg], heading to text-[48px] font-bold font-inter text-white, and search box to !bg-[#3D4754] border-[--search-border] rounded-[12px].


### Image Performance
Issue: Hero background image lacked optimization, potentially slowing page load.
Fix: Applied loading="lazy" to hero-bg.png for deferred loading.



### TagList

Badge Styling
Issue: Badges did not align with design for color, size, font, or alignment with hero section.
Fix: Set container to w-[928px] mx-auto. Configured titles to text-[18px] font-bold font-inter text-white bg-[--search-bg] px-2 py-1 rounded. Updated badges to inline-flex items-center justify-center rounded-md w-fit whitespace-nowrap shrink-0 h-[28px] px-4 py-[4px] text-[14px] font-medium font-inter text-white !bg-[#293038] border-none.


### TypeScript Typing
Issue: Missing prop types for TagList component reduced type safety.
Fix: Defined interface TagListProps { title: string; tags: string[]; } for robust typing.



## General

### React Hooks Optimization
Issue: Unmemoized onSearch functions in Header and HeroSection could cause unnecessary re-renders.
Fix: Wrapped onSearch in useCallback to stabilize function references.


### Theme Consistency
Issue: Inconsistent use of theme variables and hardcoded colors reduced maintainability.
Fix: Used bg-[--search-bg], bg-[--search-btn], border-[--search-border] where possible, with specific overrides (!bg-[#121417], !bg-[#9EABB8], !bg-[#3D4754], !bg-[#293038], !bg-[#1A80E5]) for design accuracy.




