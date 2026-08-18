import { Table } from '../../../components/ui';

const rows = [
  { name: 'Button', status: 'Ready', usage: 'Primary actions' },
  { name: 'TextInput', status: 'Ready', usage: 'Form fields' },
  { name: 'Table', status: 'Ready', usage: 'Data display' }
];

export function DataSection() {
  return (
    <Table
      columns={[
        { header: 'Component', key: 'name' },
        { header: 'Status', key: 'status' },
        { header: 'Usage', key: 'usage' }
      ]}
      rows={rows}
    />
  );
}
