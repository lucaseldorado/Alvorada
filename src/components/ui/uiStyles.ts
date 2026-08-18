import cssStyles from './ui.module.css';
import sassStyles from './ui.module.scss';

const styleEngine = import.meta.env.VITE_UI_STYLES?.toLowerCase() === 'css' ? 'css' : 'sass';

export const uiStyles = styleEngine === 'css' ? cssStyles : sassStyles;
