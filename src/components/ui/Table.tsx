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
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={String(column.key)}>{String(row[column.key] ?? '')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

