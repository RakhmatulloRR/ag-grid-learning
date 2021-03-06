import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-enterprise"

export default function App() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([
    { make: 'Ford', model: 'Focus', price: '40000' },
    { make: 'Toyota', model: 'Celica', price: '45000' },
    { make: 'BMV', model: '4 Series', price: '50000' },
  ]);
  // console.log(rowData)
  const [columnDefs, setColumnDefs] = useState([
    { field: 'athlete' },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ]);

  const defaultColDef = useMemo(() => ({ sortable: true, filter: true }), []);
  const cellClickedListener = useCallback((e) => {
    console.log('cell clicked', e);
  }, []);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((result) => result.json())
      .then((rowData) => { console.log(rowData);setRowData(rowData)});
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
