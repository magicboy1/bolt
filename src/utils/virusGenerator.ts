import { Virus } from '../types/game';
import { VIRUS_COLORS } from './colors';

// Define HUD safe zone dimensions
const HUD_WIDTH = 300; // Width of HUD area to avoid
const HUD_HEIGHT = 400; // Height of HUD area to avoid
const HUD_MARGIN = 20; // Extra margin around HUD

export const generateVirus = (): Virus => {
  const size = 40 + Math.random() * 20;
  const margin = size / 2;
  
  // Calculate available spawn area
  const maxWidth = window.innerWidth - margin * 2;
  const maxHeight = window.innerHeight - margin * 2;
  
  // Generate initial random position
  let x = margin + Math.random() * maxWidth;
  let y = margin + Math.random() * maxHeight;
  
  // Check if position is in HUD area (top-right corner)
  const isInHUDArea = x > (window.innerWidth - HUD_WIDTH - HUD_MARGIN) && 
                      y < (HUD_HEIGHT + HUD_MARGIN);
  
  // If in HUD area, adjust position to valid area
  if (isInHUDArea) {
    // Randomly choose to move left or down
    if (Math.random() > 0.5) {
      // Move left of HUD
      x = Math.max(margin, window.innerWidth - HUD_WIDTH - HUD_MARGIN - size);
    } else {
      // Move below HUD
      y = Math.max(HUD_HEIGHT + HUD_MARGIN + size, y);
    }
  }
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    x,
    y,
    size,
    points: 10,
    color: VIRUS_COLORS[Math.floor(Math.random() * VIRUS_COLORS.length)],
    speed: 1 + Math.random() * 0.5,
  };
};