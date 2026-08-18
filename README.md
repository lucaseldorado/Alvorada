# Alvorada Design System

O Alvorada Design System é a nossa abordagem exclusiva para a criação de experiências e produtos digitais completos. Baseado em princípios de design sólidos, o Alvorada não é apenas um sistema, mas um ecossistema que reúne código funcional, ferramentas práticas de design, recursos detalhados e diretrizes claras de interface.

No coração do Alvorada está o compromisso com a colaboração e a inovação. Acreditamos que as melhores ideias surgem da diversidade de talentos e perspectivas, e incentivamos ativamente uma comunidade onde contribuições, feedbacks e novos designs não apenas são bem-vindos, mas fundamentais. Seja você designer, pessoa desenvolvedora ou alguém com ideias inovadoras, sua participação é essencial para aprimorar a experiência de usuário que entregamos.

## Base técnica

- React 18
- TypeScript
- Vite

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estilos (isolados por componente)

Os componentes usam CSS Modules para evitar contaminação global de estilos.

- `src/components/ui/ui.module.css` (CSS simples)
- `src/components/ui/ui.module.scss` (Sass)
- `src/pages/design-system/page.module.css` (CSS simples)
- `src/pages/design-system/page.module.scss` (Sass)

O dev escolhe qual engine usar via variável de ambiente:

```bash
VITE_UI_STYLES=css   # usa .module.css
VITE_UI_STYLES=sass  # usa .module.scss (padrão)
```

## Estrutura

- `src/components/ui/` — componentes do design system
- `src/icons/` — ícones em SVG como componentes React
- `src/pages/design-system/sections/` — seções da página demo (inclui seção de ícones)
- `src/styles.css` — reset global mínimo + import de tokens
- `src/App.tsx` — entrada da aplicação
