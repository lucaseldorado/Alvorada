import cssStyles from './page.module.css';
import sassStyles from './page.module.scss';

const styleEngine = import.meta.env.VITE_UI_STYLES?.toLowerCase() === 'css' ? 'css' : 'sass';

export const pageStyles = styleEngine === 'css' ? cssStyles : sassStyles;
