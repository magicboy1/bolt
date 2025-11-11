export const COLORS = {
  // Primary Colors
  navy: '#1B1F2B',      // Dark background
  green: '#FF8B5D',     // Main coral accent
  coral: '#FF8B5D',     // Coral/salmon
  forest: '#3D2820',    // Dark brown
  blue: '#FF8B5D',      // Coral accent
  brown: '#3D2820',     // Dark brown
  mint: '#FFFFFF',      // White

  // UI Semantic Colors
  primary: '#FF8B5D',   // Coral for primary actions
  secondary: '#3D2820', // Brown for secondary
  accent: '#FF8B5D',    // Coral for accents

  // Background Colors
  background: '#FF8B5D',
  surface: '#3D2820',
  card: '#FFFFFF',

  // Text Colors
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    muted: 'rgba(255, 255, 255, 0.8)',
  },

  // Border Colors
  border: {
    light: 'rgba(255, 139, 93, 0.2)',
    medium: 'rgba(255, 139, 93, 0.4)',
    strong: 'rgba(255, 139, 93, 0.6)',
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