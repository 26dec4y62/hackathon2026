import { useState, useEffect, useRef, useMemo } from "react";
import {
 LONDON_POSTCODE_DATA,
 POSTCODE_COORDS_MAP,
} from "./data/fetchPostcodes";
import londonOutcodesGeoJsonRaw from "./data/london_outcodes_merged.geojson?raw";


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
 .explore-layout {
   display: grid;
   grid-template-columns: 380px 1fr;
   gap: 0;
   min-height: calc(100vh - var(--nav-h));
   height: calc(100vh - var(--nav-h));
   overflow: hidden;
 }
 .explore-sidebar {
   border-right: 1px solid var(--stone);
   display: flex; flex-direction: column;
   background: var(--warm-white);
   overflow-y: auto;
   -webkit-overflow-scrolling: touch;
 }
 .explore-main { display: flex; flex-direction: column; gap: 16px; height: 100%; overflow: hidden; }
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


 .results-section { padding: 20px 28px; flex: 1; }
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
   flex: 1;
   overflow: hidden;
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


const ALL_POSTCODE_DATA = LONDON_POSTCODE_DATA;


const FACTORS = [
 { id:"rent", label:"Rent affordability", color:"#8A9E8C", bg:"#EEF3EE" },
 { id:"nightlife", label:"Nightlife & dining", color:"#C4795A", bg:"#F5EAE4" },
 { id:"transport", label:"Transport links", color:"#C9A96E", bg:"#F5EDD8" },
 { id:"greenery", label:"Parks & green space", color:"#6B9E6B", bg:"#E8F2E8" },
 { id:"cafes", label:"Cafes & study spots", color:"#7B8EC4", bg:"#ECEEF8" },
 { id:"culture", label:"Culture & arts", color:"#B47EB3", bg:"#F4EBF4" },
];


const DEFAULT_WEIGHTS = {
 rent: 7,
 nightlife: 6,
 transport: 5,
 greenery: 4,
 cafes: 6,
 culture: 5,
};


const VERDICTS = [
 { min:85, text:"Outstanding — a graduate's dream area" },
 { min:75, text:"Excellent — highly recommended" },
 { min:65, text:"Very good — solid choice" },
 { min:55, text:"Good — worth considering" },
 { min:0,  text:"Decent — has its trade-offs" },
];


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


// Interpolate blue -> vivid chartreuse from normalized value (0..1)
function normalizedToColor(value, alpha = 1) {
 const t = Math.max(0, Math.min(1, value));
 // Start: blue (#1E5BFF), End: vivid chartreuse (#7FFF00)
 const r = Math.round(30 + (127 - 30) * t);
 const g = Math.round(91 + (255 - 91) * t);
 const b = Math.round(255 + (0 - 255) * t);
 return `rgba(${r},${g},${b},${alpha})`;
}


function formatCurrency(value) {
 if (typeof value !== "number" || Number.isNaN(value)) return "N/A";
 return new Intl.NumberFormat("en-GB", {
   style: "currency",
   currency: "GBP",
   maximumFractionDigits: 0,
 }).format(value);
}


function formatCount(value) {
 if (typeof value !== "number" || Number.isNaN(value)) return "N/A";
 return Math.round(value).toLocaleString("en-GB");
}


function getPreviewItems() {
 return [...ALL_POSTCODE_DATA]
   .map((item) => ({ ...item, score: computeScore(item, DEFAULT_WEIGHTS) }))
   .sort((a, b) => b.score - a.score)
   .slice(0, 3);
}


function normalizeCode(code) {
 return String(code || "").toUpperCase().replace(/\s+/g, "");
}


function toAreaOutcode(code) {
 const m = normalizeCode(code).match(/^([A-Z]{1,2}\d{1,2})/);
 return m ? m[1] : "";
}


// ── PAGES ─────────────────────────────────────────────────────────────────────


function HomePage({ onNavigate }) {
 const previewItems = getPreviewItems();
 return (
   <div className="page">
     <div className="hero">
       <div className="hero-left">
         <div className="hero-eyebrow">London Graduate Index</div>
         <h1 className="hero-title">
           Where you<br/><em>should</em><br/>live
         </h1>
         <p className="hero-body">
           We synthesize your priorities to pinpoint the best postcode for you.
         </p>
         <div>
           <button className="btn-primary" onClick={() => onNavigate("explore")}>
             Start exploring →
           </button>
           <button className="btn-secondary" onClick={() => onNavigate("about")}>
             How it works
           </button>
         </div>
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
         <div className="stat-num">119</div>
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
               {f.id==="rent"?"£":f.id==="nightlife"?"◈":f.id==="transport"?"⟳":f.id==="greenery"?"◉":f.id==="cafes"?"◆":"▲"}
             </div>
             <div className="factor-name">{f.label}</div>
             <div className="factor-desc">
               {f.id==="rent" && "ONS median one-bedroom rents, converted into an affordability score."}
               {f.id==="nightlife" && "Nearby bars, pubs, restaurants and late-night venues from OpenStreetMap."}
               {f.id==="transport" && "Nearby rail, Tube, tram and bus access points from OpenStreetMap."}
               {f.id==="greenery" && "Access to nearby parks, gardens and recreation grounds."}
               {f.id==="cafes" && "Cafes, libraries and coworking spots nearby for daytime living."}
               {f.id==="culture" && "Museums, galleries, theatres, cinemas and arts venues nearby."}
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
 const [weights, setWeights] = useState(DEFAULT_WEIGHTS);
 const [selected, setSelected] = useState(null);
 const apiPostcodes = ALL_POSTCODE_DATA;
 const [scriptsLoaded, setScriptsLoaded] = useState(!!window.google?.maps);
 const [mapError, setMapError] = useState("");
 const mapRef = useRef(null);
 const markersRef = useRef({});
 const mapInstanceRef = useRef(null);
 const infoWindowRef = useRef(null);
 const boundaryClickListenerRef = useRef(null);


 const boundariesGeoJson = useMemo(() => {
   try {
     return JSON.parse(londonOutcodesGeoJsonRaw);
   } catch {
     return null;
   }
 }, []);


 const handleSelectPostcode = (postcode) => {
   setSelected(postcode);
 };


 // Clear selection when weights change
 useEffect(() => {
   setSelected(null);
 }, [weights]);


 // Load Google Maps script
 useEffect(() => {
   if (window.google?.maps) {
     setScriptsLoaded(true);
     return;
   }


   const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
   if (!apiKey) {
     setMapError("Missing VITE_GOOGLE_MAPS_KEY in .env");
     return;
   }


   window.gm_authFailure = () => {
     setMapError("Google Maps auth failed. Check API key restrictions, enabled APIs, and billing.");
   };


   const existingScript = document.querySelector("script[data-google-maps='true']");
   if (existingScript) {
     if (window.google?.maps) {
       setScriptsLoaded(true);
     } else {
       existingScript.addEventListener("load", () => setScriptsLoaded(true), { once: true });
     }
     return;
   }


   const script = document.createElement('script');
   script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly`;
   script.async = true;
   script.dataset.googleMaps = "true";
   script.onload = () => {
     setMapError("");
     setScriptsLoaded(true);
   };
   script.onerror = () => {
     setMapError("Failed to load Google Maps script.");
     console.error('Failed to load Google Maps');
   };
   document.head.appendChild(script);
 }, []);


 // Initialize Google Map
 useEffect(() => {
   if (!scriptsLoaded || !mapRef.current || mapInstanceRef.current) return;


   try {
     const map = new window.google.maps.Map(mapRef.current, {
       zoom: 12,
       center: { lat: 51.4995, lng: -0.1248 },
       styles: [
         { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
       ],
     });
     infoWindowRef.current = new window.google.maps.InfoWindow();
     mapInstanceRef.current = map;
     setMapError("");
   } catch (err) {
     setMapError("Google Maps failed to initialize.");
     console.error("Google Maps init error", err);
   }
 }, [scriptsLoaded]);


 // Update markers when weights or postcodes change
 useEffect(() => {
   if (!mapInstanceRef.current || !window.google) return;


   const ranked = [...apiPostcodes]
     .map(p => ({ ...p, score: computeScore(p, weights) }))
     .sort((a,b) => b.score - a.score);


   // Clear old markers
   Object.values(markersRef.current).forEach(marker => marker.setMap(null));
   markersRef.current = {};


   // Add new markers
   const denom = Math.max(ranked.length - 1, 1);


   ranked.forEach((postcode, i) => {
     if (!POSTCODE_COORDS_MAP[postcode.code]) return;


     const [lat, lng] = POSTCODE_COORDS_MAP[postcode.code];
     const score = postcode.score;
     const normalizedRank = ranked.length === 1 ? 1 : 1 - (i / denom);
     const color = normalizedToColor(normalizedRank, 1);


     // Create SVG icon
     const svgIcon = `
       <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
         <defs>
           <filter id="shadow">
             <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
           </filter>
         </defs>
         <circle cx="16" cy="16" r="12" fill="${color}" filter="url(#shadow)" opacity="0.9"/>
         <circle cx="16" cy="16" r="10" fill="${color}" opacity="1"/>
         <text x="16" y="18" font-family="Arial" font-size="10" font-weight="bold" fill="white" text-anchor="middle">${postcode.code}</text>
       </svg>
     `;


     const marker = new window.google.maps.Marker({
       position: { lat, lng },
       map: mapInstanceRef.current,
       icon: {
         url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgIcon)}`,
         scaledSize: new window.google.maps.Size(32, 32),
       },
       title: `${postcode.code} - ${postcode.area} (Score: ${score})`,
     });


     marker.addListener('click', () => handleSelectPostcode(postcode));
     markersRef.current[postcode.code] = marker;
   });
 }, [weights, apiPostcodes]);


 const ranked = useMemo(() =>
   [...apiPostcodes]
     .map(p => ({ ...p, score: computeScore(p, weights) }))
     .sort((a,b) => b.score - a.score),
   [apiPostcodes, weights]
 );


 useEffect(() => {
   const map = mapInstanceRef.current;
   if (!map || !window.google || !boundariesGeoJson) return;


   const rankedByCode = new Map(ranked.map((p, i) => [p.code, { ...p, rank: i }]));
   const rankedCodes = ranked.map(p => p.code);


   const resolveTrackedCode = (rawCode) => {
     const district = normalizeCode(rawCode);
     if (!district) return null;
     if (rankedByCode.has(district)) return district;


     const outcode = toAreaOutcode(district);
     if (outcode && rankedByCode.has(outcode)) return outcode;


     const areaPrefix = district.match(/^([A-Z]{1,2})/)?.[1] ?? "";
     if (!areaPrefix) return null;


     const candidates = rankedCodes.filter(c => c.startsWith(areaPrefix));
     return candidates.length ? candidates[0] : null;
   };


   map.data.forEach((feature) => map.data.remove(feature));
   map.data.addGeoJson(boundariesGeoJson);


   map.data.setStyle((feature) => {
     const districtName = normalizeCode(feature.getProperty("name"));
     const trackedCode = resolveTrackedCode(districtName);
     const item = trackedCode ? rankedByCode.get(trackedCode) : null;
     const normalizedRank = item
       ? (ranked.length <= 1 ? 1 : 1 - (item.rank / (ranked.length - 1)))
       : 0;


     return {
       fillColor: item ? normalizedToColor(normalizedRank, 0.22) : "rgba(140, 140, 140, 0.08)",
       fillOpacity: 0.7,
       strokeColor: item ? normalizedToColor(normalizedRank, 0.75) : "rgba(140, 140, 140, 0.35)",
       strokeWeight: 2,
       clickable: true,
     };
   });


   if (boundaryClickListenerRef.current) {
     window.google.maps.event.removeListener(boundaryClickListenerRef.current);
   }


   boundaryClickListenerRef.current = map.data.addListener("click", (event) => {
     const districtName = normalizeCode(event.feature.getProperty("name"));
     const trackedCode = resolveTrackedCode(districtName);
     if (!trackedCode) return;
     const postcode = ranked.find(p => p.code === trackedCode);
     if (postcode) {
       handleSelectPostcode(postcode);
     }
   });
 }, [boundariesGeoJson, ranked]);


 const selectedData = selected ? ranked.find(r => r.code === selected.code) : null;


 useEffect(() => {
   if (!selectedData || !mapInstanceRef.current || !window.google) return;


   const marker = markersRef.current[selectedData.code];
   if (!marker) return;


   const map = mapInstanceRef.current;
   const pos = marker.getPosition();
   if (pos) {
     map.panTo(pos);
     map.setZoom(14);
   }


   const vibe = selectedData.score >= 80
     ? "Very lively"
     : selectedData.score >= 70
       ? "Buzzing"
       : selectedData.score >= 60
         ? "Relaxed"
         : "Quiet";


   const factorRows = FACTORS.map(f => `
     <div style="display:flex; justify-content:space-between; gap:10px; margin-top:4px; font-size:11px; color:#2C2924;">
       <span style="color:#6B6560;">${f.label}</span>
       <strong>${selectedData[f.id]}</strong>
     </div>
   `).join("");


   const infoContent = `
     <div style="font-family: DM Sans, Arial, sans-serif; min-width: 250px; max-width: 290px; line-height: 1.35; color:#2C2924;">
       <div style="font-weight:700; font-size:14px;">${selectedData.code}</div>
       <div style="font-size:12px; color:#6B6560; margin-top:2px;">${selectedData.area}</div>


       <div style="margin-top:8px; padding-top:8px; border-top:1px solid #E8E3DA;">
         <div style="font-size:12px; margin-top:2px;">Overall score: <strong>${selectedData.score}/100</strong></div>
         <div style="font-size:12px; margin-top:2px;">Median 1-bed rent: <strong>${formatCurrency(selectedData.raw?.medianRent)}</strong></div>
         <div style="font-size:12px; margin-top:2px;">Nearby venues: <strong>${formatCount(selectedData.raw?.nightlifeCount)}</strong></div>
         <div style="font-size:12px; margin-top:2px;">Transport access points: <strong>${formatCount(selectedData.raw?.transportCount)}</strong></div>
         <div style="font-size:12px; margin-top:2px;">Vibe: <strong>${vibe}</strong></div>
       </div>


       <div style="margin-top:8px; padding-top:8px; border-top:1px solid #E8E3DA;">
         <div style="font-size:11px; letter-spacing:0.4px; text-transform:uppercase; color:#6B6560;">Factor breakdown</div>
         ${factorRows}
       </div>
     </div>
   `;


   if (!infoWindowRef.current) {
     infoWindowRef.current = new window.google.maps.InfoWindow();
   }
   infoWindowRef.current.setContent(infoContent);
   infoWindowRef.current.open({ map, anchor: marker });
 }, [selectedData]);


 return (
   <div className="page">
     <div className="explore-layout">
       <div className="explore-sidebar">
         <div className="sidebar-top">
           <div className="sidebar-title">Personalise</div>
           <div className="sidebar-sub">Adjust weights to see heatmap update in real-time on the map</div>
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
               onClick={() => handleSelectPostcode(p)}
             >
               <div className={`result-rank${i < 3 ? " top" : ""}`}>{i+1}</div>
               <div className="result-info">
                 <div className="result-code">{p.code}</div>
                 <div className="result-area">{p.area}</div>
               </div>
               <div className="result-score-wrap">
                 <div className="result-score">{p.score}</div>
                 <div className="score-bar-bg">
                   <div className="score-bar-fill" style={{width:`${p.score}%`, background: normalizedToColor(ranked.length <= 1 ? 1 : 1 - (i / (ranked.length - 1)), 0.95)}}></div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>


       <div className="explore-main">
         <div style={{position:'relative'}}>
           <div ref={mapRef} style={{height: '93vh', minHeight: '420px', borderRadius: '8px', border: '1px solid var(--stone)', overflow: 'hidden'}} />
           {mapError && (
             <div style={{position:'absolute', top:'12px', left:'12px', right:'12px', background:'rgba(44,41,36,0.9)', color:'#fff', padding:'8px 10px', borderRadius:'8px', fontSize:'12px'}}>
               {mapError}
             </div>
           )}
         </div>
        
         <div className="detail-panel">
           {!selectedData ? (
             <div className="empty-state">
               <div className="empty-icon">🗺️</div>
               <div className="empty-text">
                 Click a marker on the map<br/>to see postcode details
               </div>
             </div>
           ) : (
             <div style={{animation:'fadeUp 0.35s ease both'}}>
               <div className="detail-hero">
                 <div className="detail-tag">
                   Ranked #{ranked.indexOf(selectedData)+1} of {ranked.length}
                 </div>
                 <div className="detail-postcode">{selectedData.code}</div>
                 <div className="detail-area-name">{selectedData.area}</div>
                 <div className="detail-score-row">
                   <div className="detail-score-big">{selectedData.score}</div>
                   <div className="detail-score-label">/ 100<br/>overall score</div>
                 </div>
                 <div className="detail-verdict">{getVerdict(selectedData.score)}</div>


                 <div className="highlights-grid" style={{marginTop:28}}>
                   <div className="highlight-card">
                     <div className="highlight-label">Median 1-bed rent</div>
                     <div className="highlight-val">{formatCurrency(selectedData.raw?.medianRent)}</div>
                     <div className="highlight-sub">ONS London rental market data</div>
                   </div>
                   <div className="highlight-card">
                     <div className="highlight-label">Nearby venues</div>
                     <div className="highlight-val">{formatCount(selectedData.raw?.nightlifeCount)}</div>
                     <div className="highlight-sub">bars, pubs and restaurants nearby</div>
                   </div>
                   <div className="highlight-card">
                     <div className="highlight-label">Transport access</div>
                     <div className="highlight-val">{formatCount(selectedData.raw?.transportCount)}</div>
                     <div className="highlight-sub">rail, Tube, tram and bus points</div>
                   </div>
                   <div className="highlight-card">
                     <div className="highlight-label">Vibe</div>
                     <div className="highlight-val" style={{fontSize:16,paddingTop:4}}>
                       {selectedData.score >= 80 ? "🔥 Very lively" : selectedData.score >= 70 ? "✨ Buzzing" : selectedData.score >= 60 ? "😌 Relaxed" : "🌿 Quiet"}
                     </div>
                     <div className="highlight-sub">based on your weights</div>
                   </div>
                 </div>
               </div>


               <div className="detail-body">
                 <div className="factor-breakdown-title">Factor breakdown</div>
                 {FACTORS.map(f => (
                   <div className="factor-row" key={f.id}>
                     <div className="factor-row-top">
                       <span className="factor-row-name">{f.label}</span>
                       <span className="factor-row-score">{selectedData[f.id]}</span>
                     </div>
                     <div className="factor-track">
                       <div className="factor-fill" style={{
                         width:`${selectedData[f.id]}%`,
                         background: f.color
                       }}></div>
                     </div>
                   </div>
                 ))}


                 <div style={{marginTop:32}}>
                   <div className="factor-breakdown-title">Standout traits</div>
                   <div className="tag-row">
                     {FACTORS
                       .filter(f => selectedData[f.id] >= 80)
                       .map(f => <span key={f.id} className="tag good">Strong {f.label.toLowerCase()}</span>)}
                     {FACTORS
                       .filter(f => selectedData[f.id] >= 60 && selectedData[f.id] < 80)
                       .map(f => <span key={f.id} className="tag warn">Decent {f.label.toLowerCase()}</span>)}
                     {FACTORS
                       .filter(f => selectedData[f.id] < 45)
                       .map(f => <span key={f.id} className="tag bad">Limited {f.label.toLowerCase()}</span>)}
                   </div>
                 </div>
               </div>
             </div>
           )}
         </div>
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
           Each postcode receives a raw score (0–100) for six sourced lifestyle factors. You then assign a personal weight (0–10) to each factor. The final score is a weighted average, so the ranking shifts depending on whether you care more about affordability, nightlife, greenery, or daytime amenities.
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
           The map now uses a generated dataset built from ONS private rental market statistics, Postcodes.io postcode metadata, OpenStreetMap amenity data via Overpass, and London postcode boundary GeoJSON. Rent scores come from ONS one-bedroom medians, while nightlife, transport, greenery, cafe and culture scores are normalised from nearby real-world venue counts.
         </p>
       </div>


       <div className="about-section">
         <h3>What's next</h3>
         <p>
           Next up is making the refresh pipeline easier to rerun and expanding the same approach to more UK cities with equally transparent source notes.
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
         {[ ["home","Home"],["explore","Explore"],["about","About"] ].map(([id,label]) => (
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
       {page==="about"   && <AboutPage   />}
     </div>
   </>
 );
}