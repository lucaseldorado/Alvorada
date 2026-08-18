import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type TabMenuProps = {
  tabs: string[];
  activeIndex: number;
};

export function TabMenu({ tabs, activeIndex }: TabMenuProps) {
  return (
    <div className={styles['tab-menu']} role="tablist" aria-label="Tabs">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          className={cn(styles['tab-menu__item'], index === activeIndex && styles['tab-menu__item--active'])}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
