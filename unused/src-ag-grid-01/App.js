import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AgGridReact } from 'ag-grid-react';
export default function App() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([
    { make: 'Ford', model: 'Focus', price: '40000' },
    { make: 'Toyota', model: 'Celica', price: '45000' },
    { make: 'BMV', model: '4 Series', price: '50000' },
  ]);
  const [columnDefs, setColumnDefs] = useState([
    { field: 'make' },
    { field: 'price' },
    { field: 'model' },
  ]);

  const defaultColDef = useMemo(() => ({ sortable: true, filter: true }), []);
  const cellClickedListener = useCallback((e) => {
    console.log('cell clicked', e);
  }, []);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const pushMeClicked = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);
  return (
    <div
      className='ag-theme-alpine'
      style={{ height: '500px', width: '100vw' }}
    >
      <button onClick={pushMeClicked}>click me</button>
      <AgGridReact
        ref={gridRef}
        onCellClicked={cellClickedListener}
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection='multiple' 
        animateRows={true}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
