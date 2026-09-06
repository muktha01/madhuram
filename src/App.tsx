import { themes, ThemeId } from './theme/config';
import ClassicLayout from './themes/ClassicLayout';
import EmeraldLayout from './themes/EmeraldLayout';

const urlParams = new URLSearchParams(window.location.search);
const themeId = (urlParams.get('theme') as ThemeId) || 'kalyana-mandapam';

export default function App() {
  if (themeId === 'emerald-temple') {
    return <EmeraldLayout />;
  }
  return <ClassicLayout />;
}
