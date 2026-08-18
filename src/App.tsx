import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Divider,
  Dropdown,
  ListItem,
  Pagination,
  ProgressBar,
  Radio,
  Rating,
  StatusBadge,
  StepBar,
  TabMenu,
  Table,
  Tag,
  TextInput,
  Toggle,
  Tooltip,
  UploadInput
} from './components/ui';

const rows = [
  { name: 'Button', status: 'Ready', usage: 'Primary actions' },
  { name: 'TextInput', status: 'Ready', usage: 'Form fields' },
  { name: 'Table', status: 'Ready', usage: 'Data display' }
];

export default function App() {
  return (
    <main className="app">
      <section className="container">
        <Badge tone="info">Alvorada Design System</Badge>
        <h1>CSS dos Componentes</h1>
        <p className="lead">
          Base de componentes em React + TypeScript inspirada no frame do Figma para acelerar a exportação do design
          system.
        </p>

        <div className="hero-actions">
          <Button>Primary action</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="error">Error</Button>
        </div>

        <Divider label="Form controls" />
        <div className="demo-grid">
          <TextInput label="Name" placeholder="Enter name" supportText="Supports helper text" />
          <Dropdown
            label="Plan"
            defaultValue="pro"
            options={[
              { label: 'Starter', value: 'starter' },
              { label: 'Pro', value: 'pro' },
              { label: 'Enterprise', value: 'enterprise' }
            ]}
          />
          <UploadInput label="Upload file" />
          <div className="control-group">
            <Checkbox label="Accept terms" defaultChecked />
            <Radio name="theme" label="Light" defaultChecked />
            <Toggle label="Enable notifications" defaultChecked />
          </div>
        </div>

        <Divider label="Feedback" />
        <div className="demo-grid demo-grid--feedback">
          <Alert variant="info" title="Info">
            Informational alert for system messages.
          </Alert>
          <Alert variant="success" title="Success">
            Action completed successfully.
          </Alert>
          <Alert variant="warning" title="Warning">
            Double-check before continuing.
          </Alert>
          <Alert variant="error" title="Error">
            Something went wrong.
          </Alert>
        </div>

        <Divider label="Identity and labels" />
        <div className="chip-row">
          <Avatar name="Lucas" />
          <Tag>Default tag</Tag>
          <StatusBadge label="Published" tone="success" />
          <Tooltip content="Reusable tooltip">Hover me</Tooltip>
          <Rating value={4} />
        </div>

        <Divider label="Navigation and state" />
        <div className="demo-grid">
          <Card title="Progress" description="Progress bar and steps for flows." footer={<Pagination current={2} total={5} />}>
            <ProgressBar value={68} />
            <div className="spacer" />
            <StepBar steps={['Start', 'Build', 'Review', 'Done']} currentStep={2} />
          </Card>
          <Card title="Navigation" description="Tabbed navigation pattern.">
            <TabMenu tabs={['Overview', 'Details', 'History']} activeIndex={0} />
          </Card>
          <Card title="List item" description="Composable row pattern for menus and collections.">
            <ListItem title="Design system item" description="Secondary text" trailing={<StatusBadge label="Ready" />} />
          </Card>
        </div>

        <Divider label="Data" />
        <Table
          columns={[
            { header: 'Component', key: 'name' },
            { header: 'Status', key: 'status' },
            { header: 'Usage', key: 'usage' }
          ]}
          rows={rows}
        />
      </section>
    </main>
  );
}
