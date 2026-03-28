import { useState, useEffect, useRef } from "react";
import { fetchPostcodeData, LONDON_POSTCODES } from "./data/fetchPostcodes";

const POSTCODES = LONDON_POSTCODES;

const style = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #F7F4EF;
    --warm-white: #FDFCFA;
    --stone: #E8E3DA;
    --stone-mid: #D4CEC4;
    --stone-dark: #B8B0A4;
    --ink: #2C2924;
    --ink-light: #6B6560;
    --ink-faint: #A09890;
    --sage: #8A9E8C;
    --sage-light: #C8D8C9;
    --sage-pale: #EEF3EE;
    --terracotta: #C4795A;
    --terracotta-pale: #F5EAE4;
    --gold: #C9A96E;
    --gold-pale: #F5EDD8;
    --nav-h: 64px;
    --radius: 16px;
    --radius-sm: 8px;
    --transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--ink);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    height: var(--nav-h);
    background: rgba(247,244,239,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--stone);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 40px;
    transition: background var(--transition);
  }
  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    color: var(--ink);
    letter-spacing: -0.3px;
  }
  .nav-logo span { color: var(--sage); }
  .nav-links { display: flex; gap: 4px; }
  .nav-link {
    font-size: 13px; font-weight: 400;
    color: var(--ink-light);
    padding: 6px 14px; border-radius: 20px;
    cursor: pointer; border: none; background: none;
    transition: all 0.2s ease;
    letter-spacing: 0.1px;
  }
  .nav-link:hover { color: var(--ink); background: var(--stone); }
  .nav-link.active { color: var(--ink); background: var(--stone); font-weight: 500; }

  /* PAGE TRANSITIONS */
  .page {
    min-height: 100vh;
    padding-top: var(--nav-h);
    opacity: 0;
    transform: translateY(12px);
    animation: fadeUp 0.5s var(--transition) forwards;
  }
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  /* HERO */
  .hero {
    display: grid; grid-template-columns: 1fr 1fr;
    min-height: calc(100vh - var(--nav-h));
    gap: 0;
  }
  .hero-left {
    display: flex; flex-direction: column; justify-content: center;
    padding: 80px 60px 80px 80px;
  }
  .hero-eyebrow {
    font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;
    color: var(--sage); margin-bottom: 24px;
    display: flex; align-items: center; gap: 8px;
  }
  .hero-eyebrow::before {
    content: ''; display: block; width: 24px; height: 1px; background: var(--sage);
  }
  .hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(40px, 5vw, 64px);
    line-height: 1.08;
    letter-spacing: -1.5px;
    color: var(--ink);
    margin-bottom: 24px;
  }
  .hero-title em { font-style: italic; color: var(--sage); }
  .hero-body {
    font-size: 16px; line-height: 1.7; color: var(--ink-light);
    max-width: 420px; margin-bottom: 40px; font-weight: 300;
  }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--ink); color: var(--cream);
    padding: 14px 28px; border-radius: 40px;
    font-size: 14px; font-weight: 500; font-family: 'DM Sans', sans-serif;
    border: none; cursor: pointer;
    transition: all 0.25s ease;
    letter-spacing: 0.1px;
  }
  .btn-primary:hover { background: var(--ink-light); transform: translateY(-1px); }
  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--ink);
    padding: 14px 28px; border-radius: 40px;
    font-size: 14px; font-weight: 400; font-family: 'DM Sans', sans-serif;
    border: 1.5px solid var(--stone-dark); cursor: pointer;
    transition: all 0.25s ease;
    margin-left: 12px;
  }
  .btn-secondary:hover { border-color: var(--ink); background: var(--stone); }

  .hero-right {
    background: var(--sage-pale);
    display: flex; align-items: center; justify-content: center;
    padding: 60px 40px;
    position: relative; overflow: hidden;
  }
  .hero-right::before {
    content: '';
    position: absolute; top: -60px; right: -60px;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: var(--sage-light);
    opacity: 0.4;
  }
  .hero-map-card {
    background: var(--warm-white);
    border-radius: 20px;
    border: 1px solid var(--stone);
    padding: 28px;
    width: 100%; max-width: 380px;
    position: relative; z-index: 1;
    box-shadow: 0 4px 40px rgba(44,41,36,0.06);
  }
  .mini-postcode-list { display: flex; flex-direction: column; gap: 10px; }
  .mini-postcode-item {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 16px; border-radius: 12px;
    background: var(--cream); border: 1px solid var(--stone);
    animation: slideIn 0.4s ease both;
  }
  .mini-postcode-item:nth-child(1) { animation-delay: 0.2s; }
  .mini-postcode-item:nth-child(2) { animation-delay: 0.35s; }
  .mini-postcode-item:nth-child(3) { animation-delay: 0.5s; }
  @keyframes slideIn { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
  .mini-rank {
    font-family: 'DM Serif Display', serif;
    font-size: 18px; color: var(--stone-dark); min-width: 28px;
  }
  .mini-code { font-size: 14px; font-weight: 500; color: var(--ink); }
  .mini-area { font-size: 12px; color: var(--ink-faint); font-weight: 300; }
  .mini-score {
    margin-left: auto;
    font-size: 13px; font-weight: 500;
    color: var(--sage); background: var(--sage-pale);
    padding: 4px 10px; border-radius: 20px;
  }
  .card-label {
    font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;
    color: var(--ink-faint); margin-bottom: 16px; font-weight: 500;
  }

  /* STATS ROW */
  .stats-row {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: var(--stone);
    border-top: 1px solid var(--stone); border-bottom: 1px solid var(--stone);
  }
  .stat-cell {
    background: var(--warm-white);
    padding: 40px 48px; text-align: center;
  }
  .stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: 48px; color: var(--ink); line-height: 1;
    margin-bottom: 8px;
  }
  .stat-label { font-size: 13px; color: var(--ink-faint); font-weight: 300; }

  /* SECTION */
  .section { padding: 80px; }
  .section-header { margin-bottom: 48px; }
  .section-eyebrow {
    font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;
    color: var(--terracotta); margin-bottom: 12px;
  }
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: 36px; letter-spacing: -0.8px; color: var(--ink);
    line-height: 1.2;
  }

  /* FACTOR CARDS */
  .factors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .factor-card {
    background: var(--warm-white); border: 1px solid var(--stone);
    border-radius: var(--radius); padding: 24px;
    transition: all 0.25s ease; cursor: default;
  }
  .factor-card:hover { border-color: var(--stone-dark); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(44,41,36,0.07); }
  .factor-icon {
    width: 40px; height: 40px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; margin-bottom: 16px;
  }
  .factor-name { font-size: 14px; font-weight: 500; color: var(--ink); margin-bottom: 6px; }
  .factor-desc { font-size: 13px; color: var(--ink-faint); line-height: 1.5; font-weight: 300; }

  /* ───────── EXPLORE PAGE ───────── */
  .explore-layout { display: grid; grid-template-columns: 380px 1fr; gap: 0; min-height: calc(100vh - var(--nav-h)); }
  .explore-sidebar {
    border-right: 1px solid var(--stone);
    display: flex; flex-direction: column;
    background: var(--warm-white);
  }
  .sidebar-top { padding: 32px 28px 20px; border-bottom: 1px solid var(--stone); }
  .sidebar-title { font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
  .sidebar-sub { font-size: 13px; color: var(--ink-faint); font-weight: 300; }

  .weights-section { padding: 24px 28px; border-bottom: 1px solid var(--stone); }
  .weights-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 16px; font-weight: 500; }
  .weight-row { margin-bottom: 16px; }
  .weight-row-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .weight-name { font-size: 13px; color: var(--ink); font-weight: 400; }
  .weight-val { font-size: 12px; color: var(--sage); font-weight: 500; }
  input[type=range] {
    width: 100%; accent-color: var(--sage);
    height: 4px; cursor: pointer;
  }

  .results-section { padding: 20px 28px; flex: 1; overflow-y: auto; }
  .results-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 14px; font-weight: 500; }
  .result-card {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 16px; border-radius: 12px;
    background: var(--cream); border: 1.5px solid transparent;
    margin-bottom: 8px; cursor: pointer;
    transition: all 0.2s ease;
  }
  .result-card:hover { border-color: var(--stone-dark); background: var(--warm-white); }
  .result-card.selected { border-color: var(--sage); background: var(--sage-pale); }
  .result-rank {
    font-family: 'DM Serif Display', serif; font-size: 20px;
    color: var(--stone-dark); min-width: 32px; text-align: center;
  }
  .result-rank.top { color: var(--gold); }
  .result-info { flex: 1; }
  .result-code { font-size: 15px; font-weight: 500; color: var(--ink); }
  .result-area { font-size: 12px; color: var(--ink-faint); font-weight: 300; margin-top: 2px; }
  .result-score-wrap { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
  .result-score { font-size: 18px; font-weight: 500; color: var(--ink); font-family: 'DM Serif Display', serif; }
  .score-bar-bg { width: 60px; height: 3px; background: var(--stone); border-radius: 2px; }
  .score-bar-fill { height: 3px; border-radius: 2px; background: var(--sage); transition: width 0.6s ease; }

  /* DETAIL PANEL */
  .detail-panel {
    background: var(--cream);
    display: flex; flex-direction: column;
    overflow-y: auto;
  }
  .detail-hero {
    padding: 48px 56px 40px;
    border-bottom: 1px solid var(--stone);
    background: var(--warm-white);
  }
  .detail-tag {
    display: inline-block; font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
    text-transform: uppercase; color: var(--sage); background: var(--sage-pale);
    padding: 5px 12px; border-radius: 20px; margin-bottom: 20px;
  }
  .detail-postcode { font-family: 'DM Serif Display', serif; font-size: 52px; color: var(--ink); letter-spacing: -2px; line-height: 1; margin-bottom: 8px; }
  .detail-area-name { font-size: 16px; color: var(--ink-light); font-weight: 300; margin-bottom: 32px; }
  .detail-score-row { display: flex; align-items: baseline; gap: 12px; }
  .detail-score-big { font-family: 'DM Serif Display', serif; font-size: 80px; color: var(--ink); line-height: 1; letter-spacing: -3px; }
  .detail-score-label { font-size: 14px; color: var(--ink-faint); font-weight: 300; }
  .detail-verdict {
    display: inline-block; margin-top: 16px;
    font-size: 13px; color: var(--terracotta); font-weight: 400;
    background: var(--terracotta-pale); padding: 6px 14px; border-radius: 20px;
  }

  .detail-body { padding: 40px 56px; }
  .factor-breakdown-title { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 24px; font-weight: 500; }
  .factor-row { margin-bottom: 20px; }
  .factor-row-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .factor-row-name { font-size: 14px; color: var(--ink); font-weight: 400; }
  .factor-row-score { font-size: 14px; font-weight: 500; color: var(--ink); }
  .factor-track { height: 6px; background: var(--stone); border-radius: 3px; overflow: hidden; }
  .factor-fill { height: 6px; border-radius: 3px; transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }

  .highlights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 32px; }
  .highlight-card {
    background: var(--warm-white); border: 1px solid var(--stone);
    border-radius: 12px; padding: 18px 20px;
  }
  .highlight-label { font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: var(--ink-faint); font-weight: 500; margin-bottom: 8px; }
  .highlight-val { font-family: 'DM Serif Display', serif; font-size: 24px; color: var(--ink); }
  .highlight-sub { font-size: 12px; color: var(--ink-faint); font-weight: 300; margin-top: 2px; }

  /* EMPTY STATE */
  .empty-state {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    height: 100%; padding: 80px 40px; text-align: center; color: var(--ink-faint);
  }
  .empty-icon { font-size: 48px; margin-bottom: 20px; opacity: 0.3; }
  .empty-text { font-size: 15px; font-weight: 300; line-height: 1.6; }

  /* ABOUT PAGE */
  .about-layout { max-width: 760px; margin: 0 auto; padding: 80px 40px; }
  .about-hero-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); font-weight: 500; margin-bottom: 16px; }
  .about-title { font-family: 'DM Serif Display', serif; font-size: 52px; letter-spacing: -1.5px; color: var(--ink); line-height: 1.1; margin-bottom: 32px; }
  .about-lead { font-size: 18px; color: var(--ink-light); line-height: 1.7; font-weight: 300; margin-bottom: 48px; border-bottom: 1px solid var(--stone); padding-bottom: 48px; }
  .about-section { margin-bottom: 48px; }
  .about-section h3 { font-family: 'DM Serif Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 14px; }
  .about-section p { font-size: 15px; color: var(--ink-light); line-height: 1.8; font-weight: 300; }
  .factor-pill-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
  .factor-pill {
    display: flex; align-items: center; gap: 6px;
    padding: 6px 14px; border-radius: 20px;
    font-size: 13px; font-weight: 400;
    border: 1px solid var(--stone);
    color: var(--ink-light); background: var(--warm-white);
  }
  .pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sage); }

  /* FOOTER */
  .footer { border-top: 1px solid var(--stone); padding: 32px 80px; display: flex; justify-content: space-between; align-items: center; background: var(--warm-white); }
  .footer-note { font-size: 12px; color: var(--ink-faint); font-weight: 300; }
  .footer-logo { font-family: 'DM Serif Display', serif; font-size: 14px; color: var(--stone-dark); }

  /* AI badge */
  .ai-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 11px; color: var(--ink-faint); font-weight: 400;
    background: var(--stone); padding: 4px 10px; border-radius: 20px; margin-top: 24px;
  }
  .ai-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--sage); animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

  /* Loading shimmer */
  .shimmer {
    background: linear-gradient(90deg, var(--stone) 25%, var(--stone-mid) 50%, var(--stone) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
    border-radius: 6px;
  }
  @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

  .tag-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
  .tag {
    font-size: 11px; padding: 4px 10px; border-radius: 20px;
    background: var(--stone); color: var(--ink-light); font-weight: 400;
  }
  .tag.good { background: var(--sage-pale); color: var(--sage); }
  .tag.warn { background: var(--gold-pale); color: #9A7340; }
  .tag.bad { background: var(--terracotta-pale); color: var(--terracotta); }

  /* ───────── HEATMAP PAGE ───────── */
  .heatmap-layout { display: grid; grid-template-columns: 300px 1fr; gap: 0; min-height: calc(100vh - var(--nav-h)); }

  .heatmap-sidebar {
    border-right: 1px solid var(--stone);
    display: flex; flex-direction: column;
    background: var(--warm-white);
    overflow-y: auto;
  }

  .heatmap-factor-btn {
    display: flex; align-items: center; gap: 12px;
    padding: 14px 20px;
    background: none; border: none; border-bottom: 1px solid var(--stone);
    cursor: pointer; text-align: left; width: 100%;
    transition: background 0.15s ease;
  }
  .heatmap-factor-btn:hover { background: var(--cream); }
  .heatmap-factor-btn.active { background: var(--sage-pale); }
  .heatmap-factor-icon {
    width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center; font-size: 14px;
  }
  .heatmap-factor-label { font-size: 13px; font-weight: 400; color: var(--ink); }
  .heatmap-factor-sub { font-size: 11px; color: var(--ink-faint); font-weight: 300; margin-top: 1px; }
  .heatmap-factor-btn.active .heatmap-factor-label { font-weight: 500; color: var(--ink); }

  .heatmap-legend { padding: 24px 20px; border-bottom: 1px solid var(--stone); }
  .heatmap-legend-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 12px; font-weight: 500; }
  .heatmap-scale {
    height: 8px; border-radius: 4px; margin-bottom: 6px;
  }
  .heatmap-scale-ends { display: flex; justify-content: space-between; font-size: 11px; color: var(--ink-faint); font-weight: 300; }

  .heatmap-tooltip-section { padding: 20px; flex: 1; }
  .heatmap-tooltip-empty { font-size: 13px; color: var(--ink-faint); font-weight: 300; line-height: 1.6; }
  .heatmap-tooltip-code { font-family: 'DM Serif Display', serif; font-size: 28px; color: var(--ink); letter-spacing: -1px; margin-bottom: 2px; }
  .heatmap-tooltip-area { font-size: 12px; color: var(--ink-faint); font-weight: 300; margin-bottom: 14px; }
  .heatmap-tooltip-score-row { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; }
  .heatmap-tooltip-score { font-family: 'DM Serif Display', serif; font-size: 48px; color: var(--ink); line-height: 1; letter-spacing: -2px; }
  .heatmap-tooltip-score-label { font-size: 13px; color: var(--ink-faint); font-weight: 300; }
  .heatmap-tooltip-verdict { font-size: 12px; color: var(--terracotta); background: var(--terracotta-pale); padding: 4px 10px; border-radius: 20px; display: inline-block; margin-bottom: 16px; }
  .heatmap-mini-factors { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
  .heatmap-mini-row { display: flex; align-items: center; gap: 8px; }
  .heatmap-mini-name { font-size: 12px; color: var(--ink-faint); font-weight: 300; width: 100px; flex-shrink: 0; }
  .heatmap-mini-track { flex: 1; height: 4px; background: var(--stone); border-radius: 2px; overflow: hidden; }
  .heatmap-mini-fill { height: 4px; border-radius: 2px; transition: width 0.6s ease; }
  .heatmap-mini-val { font-size: 11px; font-weight: 500; color: var(--ink); min-width: 24px; text-align: right; }

  .heatmap-canvas-wrap {
    background: var(--cream);
    display: flex; align-items: flex-start; justify-content: center;
    padding: 40px;
    overflow: auto;
  }

  .heatmap-canvas-wrap canvas {
    border-radius: var(--radius);
    border: 1px solid var(--stone);
    display: block;
    cursor: crosshair;
  }
`;

// ── DATA ──────────────────────────────────────────────────────────────────────

const BASE_POSTCODE_DATA = [
  { code:"E1",  area:"Whitechapel / Shoreditch", rent:72, nightlife:88, transport:82, greenery:38, age:85, culture:90 },
  { code:"E2",  area:"Bethnal Green",             rent:68, nightlife:80, transport:76, greenery:52, age:82, culture:78 },
  { code:"E3",  area:"Bow / Mile End",            rent:74, nightlife:60, transport:70, greenery:62, age:75, culture:58 },
  { code:"E8",  area:"Hackney",                   rent:65, nightlife:84, transport:72, greenery:65, age:88, culture:82 },
  { code:"E9",  area:"Homerton",                  rent:70, nightlife:66, transport:68, greenery:58, age:80, culture:62 },
  { code:"EC1", area:"Clerkenwell / Farringdon",  rent:44, nightlife:78, transport:92, greenery:28, age:65, culture:88 },
  { code:"N1",  area:"Islington",                 rent:52, nightlife:76, transport:84, greenery:54, age:74, culture:84 },
  { code:"N4",  area:"Finsbury Park",             rent:72, nightlife:62, transport:74, greenery:68, age:76, culture:64 },
  { code:"N5",  area:"Highbury",                  rent:62, nightlife:56, transport:70, greenery:72, age:70, culture:62 },
  { code:"N6",  area:"Highgate",                  rent:38, nightlife:44, transport:58, greenery:88, age:48, culture:64 },
  { code:"N16", area:"Stoke Newington",           rent:70, nightlife:72, transport:66, greenery:70, age:82, culture:74 },
  { code:"NW1", area:"Camden Town",               rent:50, nightlife:86, transport:86, greenery:55, age:72, culture:88 },
  { code:"NW3", area:"Hampstead",                 rent:28, nightlife:40, transport:62, greenery:92, age:44, culture:68 },
  { code:"NW5", area:"Kentish Town",              rent:62, nightlife:66, transport:72, greenery:60, age:72, culture:68 },
  { code:"NW6", area:"West Hampstead",            rent:58, nightlife:60, transport:76, greenery:64, age:74, culture:66 },
  { code:"SE1", area:"Borough / Bermondsey",      rent:48, nightlife:80, transport:88, greenery:42, age:70, culture:86 },
  { code:"SE4", area:"Brockley",                  rent:74, nightlife:58, transport:68, greenery:66, age:78, culture:60 },
  { code:"SE5", area:"Camberwell",                rent:72, nightlife:64, transport:66, greenery:58, age:76, culture:68 },
  { code:"SE8", area:"Deptford",                  rent:76, nightlife:70, transport:68, greenery:54, age:80, culture:66 },
  { code:"SE11",area:"Kennington / Vauxhall",     rent:60, nightlife:68, transport:82, greenery:52, age:70, culture:72 },
  { code:"SE15",area:"Peckham",                   rent:74, nightlife:82, transport:70, greenery:56, age:83, culture:80 },
  { code:"SW4", area:"Clapham",                   rent:56, nightlife:78, transport:78, greenery:66, age:76, culture:72 },
  { code:"SW9", area:"Brixton",                   rent:66, nightlife:88, transport:80, greenery:50, age:80, culture:86 },
  { code:"SW11",area:"Battersea",                 rent:50, nightlife:70, transport:74, greenery:68, age:68, culture:68 },
  { code:"W1",  area:"Soho / Marylebone",         rent:30, nightlife:94, transport:94, greenery:38, age:60, culture:96 },
  { code:"W11", area:"Notting Hill",              rent:28, nightlife:72, transport:76, greenery:68, age:55, culture:84 },
  { code:"W12", area:"Shepherd's Bush",           rent:56, nightlife:68, transport:80, greenery:52, age:68, culture:70 },
  { code:"WC1", area:"Bloomsbury / Holborn",      rent:38, nightlife:68, transport:92, greenery:48, age:62, culture:84 },
];

const POSTCODE_DATA_MAP = Object.fromEntries(BASE_POSTCODE_DATA.map(d => [d.code, d]));

function placeholderStats(code) {
  const seed = code.split('').reduce((a,c)=>a+c.charCodeAt(0), 0);
  const r = (min,max,offset=0) => min + ((seed + offset) % (max - min));
  return {
    rent: r(40,80,1), nightlife: r(30,85,2), transport: r(45,90,3), greenery: r(30,80,4), age: r(40,85,5), culture: r(30,85,6)
  };
}

function getPostcodeRecord(code) {
  return POSTCODE_DATA_MAP[code] || { code, area: code, ...placeholderStats(code) };
}

const ALL_POSTCODE_DATA = POSTCODES.map(getPostcodeRecord);

function getPostcodeCoords(code) {
  if (POSTCODE_COORDS[code]) return POSTCODE_COORDS[code];
  const idx = POSTCODES.indexOf(code);
  const angle = ((idx === -1 ? Math.random() : idx / POSTCODES.length) * Math.PI * 2);
  const radius = 70 + ((idx % 8) * 12);
  return [300 + Math.cos(angle) * radius, 350 + Math.sin(angle) * radius];
}

const FACTORS = [
  { id:"rent",      label:"Rent affordability",   color:"#8A9E8C", bg:"#EEF3EE" },
  { id:"nightlife", label:"Nightlife & bars",      color:"#C4795A", bg:"#F5EAE4" },
  { id:"transport", label:"Transport links",       color:"#C9A96E", bg:"#F5EDD8" },
  { id:"greenery",  label:"Parks & trees",         color:"#6B9E6B", bg:"#E8F2E8" },
  { id:"age",       label:"Young population",      color:"#7B8EC4", bg:"#ECEEF8" },
  { id:"culture",   label:"Culture & food",        color:"#B47EB3", bg:"#F4EBF4" },
];

const VERDICTS = [
  { min:85, text:"Outstanding — a graduate's dream area" },
  { min:75, text:"Excellent — highly recommended" },
  { min:65, text:"Very good — solid choice" },
  { min:55, text:"Good — worth considering" },
  { min:0,  text:"Decent — has its trade-offs" },
];

const HIGHLIGHTS = [
  { code:"E1",  avgRent:"£1,650",  commute:"14 min",  bars:48  },
  { code:"E2",  avgRent:"£1,720",  commute:"20 min",  bars:32  },
  { code:"E3",  avgRent:"£1,580",  commute:"28 min",  bars:18  },
  { code:"E8",  avgRent:"£1,800",  commute:"24 min",  bars:38  },
  { code:"E9",  avgRent:"£1,650",  commute:"28 min",  bars:22  },
  { code:"EC1", avgRent:"£2,400",  commute:"8 min",   bars:56  },
  { code:"N1",  avgRent:"£2,100",  commute:"18 min",  bars:42  },
  { code:"N4",  avgRent:"£1,700",  commute:"22 min",  bars:24  },
  { code:"N5",  avgRent:"£1,850",  commute:"26 min",  bars:20  },
  { code:"N6",  avgRent:"£2,600",  commute:"35 min",  bars:14  },
  { code:"N16", avgRent:"£1,750",  commute:"30 min",  bars:34  },
  { code:"NW1", avgRent:"£2,050",  commute:"14 min",  bars:62  },
  { code:"NW3", avgRent:"£2,900",  commute:"30 min",  bars:12  },
  { code:"NW5", avgRent:"£1,820",  commute:"22 min",  bars:26  },
  { code:"NW6", avgRent:"£1,780",  commute:"20 min",  bars:22  },
  { code:"SE1", avgRent:"£2,200",  commute:"10 min",  bars:54  },
  { code:"SE4", avgRent:"£1,620",  commute:"30 min",  bars:18  },
  { code:"SE5", avgRent:"£1,640",  commute:"26 min",  bars:26  },
  { code:"SE8", avgRent:"£1,580",  commute:"28 min",  bars:28  },
  { code:"SE11",avgRent:"£1,900",  commute:"16 min",  bars:30  },
  { code:"SE15",avgRent:"£1,650",  commute:"28 min",  bars:44  },
  { code:"SW4", avgRent:"£2,000",  commute:"22 min",  bars:36  },
  { code:"SW9", avgRent:"£1,750",  commute:"18 min",  bars:52  },
  { code:"SW11",avgRent:"£2,100",  commute:"24 min",  bars:28  },
  { code:"W1",  avgRent:"£3,200",  commute:"5 min",   bars:120 },
  { code:"W11", avgRent:"£3,100",  commute:"20 min",  bars:38  },
  { code:"W12", avgRent:"£1,900",  commute:"22 min",  bars:30  },
  { code:"WC1", avgRent:"£2,500",  commute:"8 min",   bars:44  },
];

// Approximate canvas (x,y) positions for each postcode on a 600×700 London grid.
// Origin top-left; West is left, North is up. Centre ≈ (300, 350).
const POSTCODE_COORDS = {
  "E1":  [348, 338], "E2":  [355, 320], "E3":  [375, 315],
  "E8":  [355, 300], "E9":  [370, 305], "EC1": [320, 328],
  "N1":  [315, 295], "N4":  [305, 265], "N5":  [295, 272],
  "N6":  [285, 245], "N16": [322, 278], "NW1": [285, 295],
  "NW3": [268, 268], "NW5": [278, 280], "NW6": [262, 290],
  "SE1": [325, 358], "SE4": [345, 385], "SE5": [332, 375],
  "SE8": [355, 370], "SE11":[318, 368], "SE15":[338, 390],
  "SW4": [295, 385], "SW9": [308, 378], "SW11":[288, 375],
  "W1":  [295, 328], "W11": [272, 320], "W12": [262, 330],
  "WC1": [308, 325],
};

function computeScore(postcode, weights) {
  let total = 0, wSum = 0;
  FACTORS.forEach(f => {
    const w = weights[f.id] ?? 5;
    total += (postcode[f.id] / 100) * w;
    wSum += w;
  });
  return wSum === 0 ? 0 : Math.round((total / wSum) * 100);
}

function getVerdict(score) {
  return VERDICTS.find(v => score >= v.min)?.text ?? "";
}

// Interpolate between terracotta → gold → sage based on score 0–100
function scoreToColor(score, alpha = 1) {
  const t = Math.max(0, Math.min(100, score)) / 100;
  let r, g, b;
  if (t < 0.5) {
    const f = t / 0.5;
    // terracotta #C4795A → gold #C9A96E
    r = Math.round(196 + f * (201 - 196));
    g = Math.round(121 + f * (169 - 121));
    b = Math.round(90  + f * (110 - 90));
  } else {
    const f = (t - 0.5) / 0.5;
    // gold #C9A96E → sage #8A9E8C
    r = Math.round(201 + f * (138 - 201));
    g = Math.round(169 + f * (158 - 169));
    b = Math.round(110 + f * (140 - 110));
  }
  return `rgba(${r},${g},${b},${alpha})`;
}

// ── PAGES ─────────────────────────────────────────────────────────────────────

function HomePage({ onNavigate }) {
  const previewItems = [
    { code:"SW9", area:"Brixton", score:82 },
    { code:"E8",  area:"Hackney", score:78 },
    { code:"SE15",area:"Peckham", score:75 },
  ];
  return (
    <div className="page">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">London Graduate Index</div>
          <h1 className="hero-title">
            Find your<br/><em>perfect</em><br/>London postcode
          </h1>
          <p className="hero-body">
            We weigh rent, nightlife, transport, green space, and more — tuned to what matters to you — to rank every London postcode for life after graduation.
          </p>
          <div>
            <button className="btn-primary" onClick={() => onNavigate("explore")}>
              Start exploring →
            </button>
            <button className="btn-secondary" onClick={() => onNavigate("about")}>
              How it works
            </button>
          </div>
          <div className="ai-dot" style={{width:5,height:5,borderRadius:'50%',background:'var(--sage)',display:'inline-block',marginTop:32,marginRight:6,animation:'pulse 2s infinite'}}></div>
          <span style={{fontSize:12,color:'var(--ink-faint)',fontWeight:300}}>Powered by AI analysis across 111 London postcodes</span>
        </div>
        <div className="hero-right">
          <div className="hero-map-card">
            <div className="card-label">Top rated right now</div>
            <div className="mini-postcode-list">
              {previewItems.map((item,i) => (
                <div className="mini-postcode-item" key={item.code}>
                  <div className="mini-rank">{i+1}</div>
                  <div>
                    <div className="mini-code">{item.code}</div>
                    <div className="mini-area">{item.area}</div>
                  </div>
                  <div className="mini-score">{item.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-cell">
          <div className="stat-num">111</div>
          <div className="stat-label">London postcodes ranked</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">6</div>
          <div className="stat-label">Weighted lifestyle factors</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">∞</div>
          <div className="stat-label">Personalisation combinations</div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-eyebrow">What we measure</div>
          <h2 className="section-title">Six factors, your weights</h2>
        </div>
        <div className="factors-grid">
          {FACTORS.map(f => (
            <div className="factor-card" key={f.id}>
              <div className="factor-icon" style={{background:f.bg, color:f.color}}>
                {f.id==="rent"?"£":f.id==="nightlife"?"◈":f.id==="transport"?"⟳":f.id==="greenery"?"◉":f.id==="age"?"◆":"▲"}
              </div>
              <div className="factor-name">{f.label}</div>
              <div className="factor-desc">
                {f.id==="rent" && "How affordable average rent is relative to a starting graduate salary."}
                {f.id==="nightlife" && "Density of bars, clubs, restaurants and late-night venues."}
                {f.id==="transport" && "Tube, Overground, bus and rail connections to central London."}
                {f.id==="greenery" && "Parks, trees, canals and green space per capita in the area."}
                {f.id==="age" && "Proportion of 20–34 year olds — who your neighbours will be."}
                {f.id==="culture" && "Galleries, markets, independent food, live music and arts."}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <div className="footer-note">Data is indicative. Always do your own research before moving.</div>
        <div className="footer-logo">GLI London</div>
      </div>
    </div>
  );
}

function ExplorePage() {
  const [weights, setWeights] = useState({ rent:7, nightlife:6, transport:5, greenery:4, age:6, culture:5 });
  const [selected, setSelected] = useState(null);
  const [selectedMapPin, setSelectedMapPin] = useState(null);
  const [apiPostcodes, setApiPostcodes] = useState(ALL_POSTCODE_DATA);
  const [mapZoom, setMapZoom] = useState(1);
  const [mapFactor, setMapFactor] = useState("rent");
  const [hovered, setHovered] = useState(null);
  const mapCanvasRef = useRef(null);

  useEffect(() => {
    async function load() {
      const results = await Promise.all(POSTCODES.map(c => fetchPostcodeData(c)));
      const valid = results.filter(Boolean);
      if (valid.length > 0) {
        const fullSet = POSTCODES.map(code => valid.find(p => p.code === code) || getPostcodeRecord(code));
        setApiPostcodes(fullSet);
      }
    }
    load();
  }, []);

  const ranked = [...apiPostcodes]
    .map(p => ({ ...p, score: computeScore(p, weights) }))
    .sort((a,b) => b.score - a.score);

  const selectedData = selected ? ranked.find(r => r.code === selected.code) : null;
  const selectedMapData = selectedMapPin ? ranked.find(r => r.code === selectedMapPin.code) : null;
  const detailData = selectedMapData || selectedData;

  const W = 660, H = 720;

  function getPostcodePoint(code) {
    const latlng = POSTCODE_COORDS[code];
    if (!latlng) return [0,0];
    return projectLatLngToPoint(latlng, W, H);
  }

  useEffect(() => {
    const canvas = mapCanvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    ALL_POSTCODE_DATA.forEach(p => {
      const [cx, cy] = getPostcodePoint(p.code);
      const score = p[mapFactor] ?? 0;
      const radius = 50;

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      grad.addColorStop(0, scoreToColor(score, 0.72));
      grad.addColorStop(0.4, scoreToColor(score, 0.38));
      grad.addColorStop(1, scoreToColor(score, 0));

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    });

    ALL_POSTCODE_DATA.forEach(p => {
      const [cx, cy] = getPostcodePoint(p.code);
      const score = computeScore(p, weights);
      const isHovered = hovered?.code === p.code;
      const isSelected = detailData?.code === p.code;
      const dotR = (isHovered || isSelected) ? 9 : 6;

      ctx.beginPath();
      ctx.arc(cx, cy, dotR, 0, Math.PI * 2);
      ctx.fillStyle = scoreToColor(score, 1);
      ctx.fill();

      if (isHovered || isSelected) {
        ctx.beginPath();
        ctx.arc(cx, cy, dotR + 3, 0, Math.PI * 2);
        ctx.strokeStyle = scoreToColor(score, 0.45);
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.font = "500 12px 'DM Sans', sans-serif";
      ctx.fillStyle = "#2C2924";
      ctx.textAlign = "center";
      ctx.fillText(p.code, cx, cy + dotR + 14);
    });
  }, [weights, mapFactor, hovered, detailData]);

  const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=51.5074,-0.1278&zoom=${Math.round(11 + (mapZoom - 1) * 4)}&size=660x720&maptype=roadmap&style=feature:poi.business|visibility:off&key=YOUR_GOOGLE_MAPS_KEY`;

  function adjustPoint(clientX, clientY) {
    const canvas = mapCanvasRef.current;
    if (!canvas) return [0,0];
    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) / mapZoom;
    const y = (clientY - rect.top) / mapZoom;
    return [x, y];
  }

  function handleMapMouseMove(e) {
    const [mx, my] = adjustPoint(e.clientX, e.clientY);
    let closest = null, closestD = Infinity;
    ALL_POSTCODE_DATA.forEach(p => {
      const [cx, cy] = getPostcodePoint(p.code);
      const d = Math.hypot(cx - mx, cy - my);
      if (d < 22 && d < closestD) { closest = p; closestD = d; }
    });
    setHovered(closest);
  }

  function handleMapMouseLeave() {
    setHovered(null);
  }

  function handleMapClick(e) {
    const [mx, my] = adjustPoint(e.clientX, e.clientY);
    let closest = null, closestD = Infinity;
    ALL_POSTCODE_DATA.forEach(p => {
      const [cx, cy] = getPostcodePoint(p.code);
      const d = Math.hypot(cx - mx, cy - my);
      if (d < 18 && d < closestD) { closest = p; closestD = d; }
    });
    if (closest) {
      setSelectedMapPin(closest);
      setSelected(closest);
    }
  }

  const mappedPostcode = detailData;

  return (
    <div className="page">
      <div className="explore-layout">
        <div className="explore-sidebar">
          <div className="sidebar-top">
            <div className="sidebar-title">Personalise</div>
            <div className="sidebar-sub">Drag sliders to weight what matters to you</div>
          </div>

          <div className="weights-section">
            <div className="weights-label">Your priorities</div>
            {FACTORS.map(f => (
              <div className="weight-row" key={f.id}>
                <div className="weight-row-top">
                  <span className="weight-name">{f.label}</span>
                  <span className="weight-val">{weights[f.id]}/10</span>
                </div>
                <input
                  type="range" min={0} max={10} step={1}
                  value={weights[f.id]}
                  onChange={e => setWeights(w => ({...w, [f.id]: +e.target.value}))}
                  style={{accentColor: f.color}}
                />
              </div>
            ))}
          </div>

          <div className="results-section">
            <div className="results-label">Ranked postcodes</div>
            {ranked.map((p, i) => (
              <div
                key={p.code}
                className={`result-card${selected?.code === p.code ? " selected" : ""}`}
                onClick={() => { setSelected(p); setSelectedMapPin(p); }}
              >
                <div className={`result-rank${i < 3 ? " top" : ""}`}>{i+1}</div>
                <div className="result-info">
                  <div className="result-code">{p.code}</div>
                  <div className="result-area">{p.area}</div>
                </div>
                <div className="result-score-wrap">
                  <div className="result-score">{p.score}</div>
                  <div className="score-bar-bg">
                    <div className="score-bar-fill" style={{width:`${p.score}%`, background: scoreToColor(p.score, 0.95)}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="map-pane">
          <div className="map-card">
            <div className="map-header">
              <div className="map-title">Interactive London heatmap overlay</div>
              <div className="map-hint">Mouse wheel zoom + click a postcode</div>
            </div>
            <div className="map-controls">
              <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                <span style={{fontSize:12, color:'#5f6368'}}>Factor:</span>
                <select value={mapFactor} onChange={e => setMapFactor(e.target.value)} style={{border:'1px solid var(--stone)', borderRadius:8, padding:'4px 8px'}}>
                  {FACTORS.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
                </select>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                <button onClick={() => setMapZoom(z => Math.min(1.8, z + 0.1))}>Zoom in</button>
                <button onClick={() => setMapZoom(z => Math.max(0.8, z - 0.1))}>Zoom out</button>
                <span style={{fontSize:12, color:'#5f6368'}}>Zoom: {(mapZoom * 100).toFixed(0)}%</span>
              </div>
            </div>
            <div className="map-body">
              <div className="map-wrapper" onWheel={(e) => { e.preventDefault(); setMapZoom(z => Math.max(0.8, Math.min(1.8, z + (e.deltaY < 0 ? 0.06 : -0.06)))); }} style={{transform:`scale(${mapZoom})`, transformOrigin:'center'}}>
                <img className="map-snapshot" src={mapImageUrl} alt="London map" onError={(e) => { e.currentTarget.style.filter = 'blur(1px)'; }} />
                <canvas
                  ref={mapCanvasRef}
                  className="map-canvas"
                  width={W}
                  height={H}
                  onMouseMove={handleMapMouseMove}
                  onMouseLeave={handleMapMouseLeave}
                  onClick={handleMapClick}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="detail-panel">
          {!mappedPostcode ? (
            <div className="empty-state">
              <div className="empty-icon">📍</div>
              <div className="empty-text">Click a postcode dot on the map or select from the list to view details.</div>
            </div>
          ) : (
            <>
              <div className="detail-hero">
                <div className="detail-tag">Heatmap detail</div>
                <div className="detail-postcode">{mappedPostcode.code}</div>
                <div className="detail-area-name">{mappedPostcode.area}</div>
                <div className="detail-score-row">
                  <div className="detail-score-big">{mappedPostcode.score}</div>
                  <div className="detail-score-label">/ 100 overall score</div>
                </div>
                <div className="detail-verdict">{getVerdict(mappedPostcode.score)}</div>
                <button className="back-button" onClick={() => setSelectedMapPin(null)}>Back to heatmap</button>
              </div>
              <div className="detail-body">
                <div className="factor-breakdown-title">Factor breakdown</div>
                {FACTORS.map(f => (
                  <div className="factor-row" key={f.id}>
                    <div className="factor-row-top"><span className="factor-row-name">{f.label}</span><span className="factor-row-score">{mappedPostcode[f.id]}</span></div>
                    <div className="factor-track"><div className="factor-fill" style={{width:`${mappedPostcode[f.id]}%`, background:f.color}} /></div>
                  </div>
                ))}
                <div style={{marginTop:22}}>
                  <div className="factor-breakdown-title">Standout traits</div>
                  <div className="tag-row">
                    {FACTORS.filter(f => mappedPostcode[f.id] >= 80).map(f => <span key={`${f.id}-good`} className="tag good">Strong {f.label.toLowerCase()}</span>)}
                    {FACTORS.filter(f => mappedPostcode[f.id] >= 60 && mappedPostcode[f.id] < 80).map(f => <span key={`${f.id}-warn`} className="tag warn">Decent {f.label.toLowerCase()}</span>)}
                    {FACTORS.filter(f => mappedPostcode[f.id] < 45).map(f => <span key={`${f.id}-bad`} className="tag bad">Limited {f.label.toLowerCase()}</span>)}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
    ALL_POSTCODE_DATA.forEach(p => {
      const [cx, cy] = getPostcodeCoords(p.code);
      const score = p[activeFactor];
      const isHovered = hovered?.code === p.code;
      const dotR = isHovered ? 9 : 6;

      ctx.beginPath();
      ctx.arc(cx, cy, dotR, 0, Math.PI * 2);
      ctx.fillStyle = scoreToColor(score, 1);
      ctx.fill();

      if (isHovered) {
        ctx.beginPath();
        ctx.arc(cx, cy, dotR + 3, 0, Math.PI * 2);
        ctx.strokeStyle = scoreToColor(score, 0.4);
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.font = isHovered ? "500 12px 'DM Sans', sans-serif" : "300 11px 'DM Sans', sans-serif";
      ctx.fillStyle = isHovered ? "#2C2924" : "#A09890";
      ctx.textAlign = "center";
      ctx.fillText(p.code, cx, cy + dotR + 13);
    });

    // Thames suggestion — a faint arc across the bottom third
    ctx.beginPath();
    ctx.moveTo(220, 355);
    ctx.bezierCurveTo(280, 370, 360, 375, 420, 360);
    ctx.strokeStyle = "rgba(138,158,140,0.15)";
    ctx.lineWidth = 18;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.lineWidth = 1;

  }, [activeFactor, hovered]);

  function handleMouseMove(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = W / rect.width;
    const scaleY = H / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top)  * scaleY;

    let closest = null, closestD = Infinity;
    ALL_POSTCODE_DATA.forEach(p => {
      const [cx, cy] = getPostcodeCoords(p.code);
      const d = Math.hypot(cx - mx, cy - my);
      if (d < 30 && d < closestD) { closest = p; closestD = d; }
    });
    setHovered(closest);
  }

  function handleMouseLeave() { setHovered(null); }

  const factorIcon = { rent:"£", nightlife:"◈", transport:"⟳", greenery:"◉", age:"◆", culture:"▲" };
  const scaleGradient = `linear-gradient(to right, ${scoreToColor(0)}, ${scoreToColor(50)}, ${scoreToColor(100)})`;

  return (
    <div className="page" style={{paddingTop:"var(--nav-h)"}}>
      <div className="heatmap-layout">

        {/* ── Sidebar ── */}
        <div className="heatmap-sidebar">
          <div className="sidebar-top">
            <div className="sidebar-title">Heatmap</div>
            <div className="sidebar-sub">Select a factor to visualise across London</div>
          </div>

          {FACTORS.map(f => (
            <button
              key={f.id}
              className={`heatmap-factor-btn${activeFactor === f.id ? " active" : ""}`}
              onClick={() => setActiveFactor(f.id)}
            >
              <div className="heatmap-factor-icon" style={{background: f.bg, color: f.color}}>
                {factorIcon[f.id]}
              </div>
              <div>
                <div className="heatmap-factor-label">{f.label}</div>
                <div className="heatmap-factor-sub">
                  {f.id==="rent"      && "Affordability vs salary"}
                  {f.id==="nightlife" && "Bars, clubs & restaurants"}
                  {f.id==="transport" && "Tube, rail & bus links"}
                  {f.id==="greenery"  && "Parks & green space"}
                  {f.id==="age"       && "20–34 year old residents"}
                  {f.id==="culture"   && "Arts, markets & food"}
                </div>
              </div>
            </button>
          ))}

          <div className="heatmap-legend">
            <div className="heatmap-legend-label">Score scale</div>
            <div className="heatmap-scale" style={{background: scaleGradient}}></div>
            <div className="heatmap-scale-ends">
              <span>Lower</span>
              <span>Higher</span>
            </div>
          </div>

          <div className="heatmap-tooltip-section">
            {!hovered ? (
              <div className="heatmap-tooltip-empty">
                Hover over a postcode on the map to see its score
              </div>
            ) : (
              <div style={{animation:"fadeUp 0.2s ease both"}}>
                <div className="heatmap-tooltip-code">{hovered.code}</div>
                <div className="heatmap-tooltip-area">{hovered.area}</div>
                <div className="heatmap-tooltip-score-row">
                  <div className="heatmap-tooltip-score" style={{color: scoreToColor(hovered[activeFactor], 1)}}>
                    {hovered[activeFactor]}
                  </div>
                  <div className="heatmap-tooltip-score-label">/ 100<br/>{factor.label.toLowerCase()}</div>
                </div>
                <div className="heatmap-tooltip-verdict">{getVerdict(hovered[activeFactor])}</div>
                <div style={{marginTop:12}}>
                  <div className="factor-breakdown-title" style={{marginBottom:10}}>All factors</div>
                  <div className="heatmap-mini-factors">
                    {FACTORS.map(f => (
                      <div className="heatmap-mini-row" key={f.id}>
                        <div className="heatmap-mini-name">{f.label}</div>
                        <div className="heatmap-mini-track">
                          <div className="heatmap-mini-fill" style={{width:`${hovered[f.id]}%`, background: f.color}}></div>
                        </div>
                        <div className="heatmap-mini-val">{hovered[f.id]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Canvas ── */}
        <div className="heatmap-canvas-wrap">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            style={{width: Math.min(W, "100%"), maxWidth: W}}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>

      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page">
      <div className="about-layout">
        <div className="about-hero-label">About the index</div>
        <h1 className="about-title">Built for the newly graduated</h1>
        <p className="about-lead">
          Moving to London after university is exciting — and overwhelming. The Graduate Living Index cuts through the noise by scoring every major London postcode on the things that actually matter to young professionals in their early years.
        </p>

        <div className="about-section">
          <h3>How scoring works</h3>
          <p>
            Each postcode receives a raw score (0–100) for six lifestyle factors. You then assign a personal weight (0–10) to each factor. The final score is a weighted average — meaning a night owl who cranks up Nightlife will see a completely different ranking than someone who prioritises green space and quiet.
          </p>
        </div>

        <div className="about-section">
          <h3>The six factors</h3>
          <p>We chose factors that reflect the real priorities of graduate life — not just price, but culture, community, and connection.</p>
          <div className="factor-pill-grid">
            {FACTORS.map(f => (
              <div className="factor-pill" key={f.id}>
                <div className="pill-dot" style={{background: f.color}}></div>
                {f.label}
              </div>
            ))}
          </div>
        </div>

        <div className="about-section">
          <h3>Data sources</h3>
          <p>
            Scores are compiled from ONS census data, OpenStreetMap venue density, TfL journey planner data, and average rental listings from major property platforms. Data is refreshed quarterly. All figures are indicative — always visit an area in person before committing.
          </p>
        </div>

        <div className="about-section">
          <h3>What's next</h3>
          <p>
            We're building AI-powered postcode summaries that describe the actual feel of each area in plain language — written by Claude, grounded in real data. We're also expanding to Manchester, Edinburgh, and Bristol.
          </p>
        </div>

        <div style={{borderTop:'1px solid var(--stone)', paddingTop:40, marginTop:16}}>
          <div style={{fontSize:12, color:'var(--ink-faint)', lineHeight:1.8, fontWeight:300}}>
            Graduate Living Index is an independent tool. Not affiliated with any estate agent or letting platform.<br/>
            © 2025 Graduate Living Index. London edition.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const [pageKey, setPageKey] = useState(0);

  function navigate(to) {
    setPage(to);
    setPageKey(k => k+1);
    window.scrollTo({top:0, behavior:'smooth'});
  }

  return (
    <>
      <style>{style}</style>
      <nav className="nav">
        <div className="nav-logo" onClick={() => navigate("home")} style={{cursor:'pointer'}}>
          Grad<span>Living</span>
        </div>
        <div className="nav-links">
          {[["home","Home"],["explore","Explore"],["heatmap","Heatmap"],["about","About"]].map(([id,label]) => (
            <button
              key={id}
              className={`nav-link${page===id?" active":""}`}
              onClick={() => navigate(id)}
            >{label}</button>
          ))}
        </div>
      </nav>

      <div key={pageKey}>
        {page==="home"    && <HomePage    onNavigate={navigate} />}
        {page==="explore" && <ExplorePage />}
        {page==="heatmap" && <HeatmapPage />}
        {page==="about"   && <AboutPage   />}
      </div>
    </>
  );
}