import { uiStyles as styles } from './uiStyles';

type TableColumn<T extends Record<string, unknown>> = {
  header: string;
  key: keyof T;
};

type TableProps<T extends Record<string, unknown>> = {
  columns: Array<TableColumn<T>>;
  rows: T[];
};

export function Table<T extends Record<string, unknown>>({ columns, rows }: TableProps<T>) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)} className={styles.table__header}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.table__row}>
            {columns.map((column) => (
              <td key={String(column.key)} className={styles.table__cell}>
                {String(row[column.key] ?? '')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
