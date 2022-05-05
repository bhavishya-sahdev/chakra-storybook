import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { colors, semanticTokens} from 'chakra/foundations/colors'

/**
 * Theme properties override
 */
const properties = {
  colors,
  semanticTokens,
} as const;

/**
 * Control the color mode (light/dark)
 */ 
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};


/**
 * Extend the theme with the new properties and export it to be used in the app
 */
export default extendTheme(properties, config);
