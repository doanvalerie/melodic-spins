import { Assistant, Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

const assistant = Assistant({
  subsets: ['latin'],
  variable: '--font-assistant',
});

const fonts = [rubik, assistant];
const font_variables = fonts.map((font) => font.variable);
const font_string = font_variables.join(' ');

export default font_string;
