export const COLORS = {
  // Primary Colors
  navy: '#1B1F2B',      // CMYK: 100/71/9/56
  green: '#4A9B63',     // CMYK: 56/0/58/0
  coral: '#E27B63',     // CMYK: 0/51/55/0
  forest: '#1E4534',    // CMYK: 84/20/58/54
  blue: '#4B5C9B',      // CMYK: 83/54/0/0
  brown: '#582B23',     // CMYK: 18/100/45/67
  mint: '#D8E6E1',      // CMYK: 22/6/0/0
  
  // UI Semantic Colors
  primary: '#4A9B63',   // Green for primary actions
  secondary: '#E27B63', // Coral for secondary actions
  accent: '#4B5C9B',    // Blue for accents
  
  // Background Colors
  background: '#1B1F2B',
  surface: '#2A2F3B',
  card: '#D8E6E1',
  
  // Text Colors
  text: {
    primary: '#FFFFFF',
    secondary: '#D8E6E1',
    muted: 'rgba(216, 230, 225, 0.6)',
  },
  
  // Border Colors
  border: {
    light: 'rgba(74, 155, 99, 0.2)',
    medium: 'rgba(74, 155, 99, 0.4)',
    strong: 'rgba(74, 155, 99, 0.6)',
  }
};

export const VIRUS_COLORS = [
  COLORS.coral,    // Primary threat
  COLORS.blue,     // Special threat
  COLORS.green,    // Tech threat
  COLORS.mint,     // Warning threat
];

export const GRADIENTS = {
  primary: `from-${COLORS.green} via-${COLORS.blue} to-${COLORS.green}`,
  secondary: `from-${COLORS.coral} to-${COLORS.blue}`,
  background: `from-${COLORS.navy} via-${COLORS.surface} to-${COLORS.navy}`,
  accent: `from-${COLORS.mint} via-${COLORS.green} to-${COLORS.coral}`,
};