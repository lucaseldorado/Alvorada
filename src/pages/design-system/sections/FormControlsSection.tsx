import { Checkbox, Dropdown, Radio, TextInput, Toggle, UploadInput } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function FormControlsSection() {
  return (
    <div className={styles['demo-grid']}>
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
      <div className={styles['control-group']}>
        <Checkbox label="Accept terms" defaultChecked />
        <Radio name="theme" label="Light" defaultChecked />
        <Toggle label="Enable notifications" defaultChecked />
      </div>
    </div>
  );
}
