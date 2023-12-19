import {fileURLToPath} from 'url';
import {dirname} from 'path';
import handlebars from 'handlebars';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const svgIconHelper = async (filePath) => {
    try {
      // Lee el contenido del archivo SVG de manera asíncrona
      const svgContent = await fs.readFile(filePath, 'utf-8');
      const safeSvgContent = new handlebars.SafeString(svgContent);
      return safeSvgContent;
    } catch (error) {
      console.error(`Error al leer el archivo SVG: ${error.message}`);
      return '';
    }
  }

export default __dirname