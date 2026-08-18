type TabMenuProps = {
  tabs: string[];
  activeIndex: number;
};

export function TabMenu({ tabs, activeIndex }: TabMenuProps) {
  return (
    <div className="tab-menu" role="tablist" aria-label="Tabs">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          className={`tab-menu__tab ${index === activeIndex ? 'is-active' : ''}`.trim()}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

