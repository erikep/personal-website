---
title: Pomodoro Timer
summary: Vanilla JavaScript focus timer with accurate clock sync, persisted settings, and Web Audio / Notification alerts.
tags:
  - javascript
  - productivity
featured: true
publishedAt: 2026-01-27
links:
  github: https://github.com/erikep/pomodoro-timer
  live: https://pomodoro.epsystems.workers.dev/
image:
  src: /images/projects/pomodoro-timer.jpg
  alt: Pomodoro Timer app showing a 25-minute focus session, mode controls, and weekly focus chart
---

## Problem

I found myself struggling to stay focused during my work time blocks but wasn't satisfied with the focus timers available, due to missing features that I desired or settings locked behind accounts, so I built my own instead.

## Approach

Because I built it myself, I've be able to implement my desired features quickly and seamlessy. The timer was initially deployed on GitHub Pages, but in anticipation of multi-device sessions, I migrated to Cloudflare Workers for SQLite support

Features include:

- 3 focus/break modes
- Mode-aware theming (colors are purpose-driven)
- System clock-based timer (ensure accuracy when running in the background)
- Locally-persisted settings and dialog-driven prefererence flow
- Rolling 30-day focus session history
- Browser notifications and alarms upon session completion
- Link to feedback form to receive user requests

## Outcome

Now I have a personalized study tool that I can access on any machine while learning about developing in vanilla Javascript.
