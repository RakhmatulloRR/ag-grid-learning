# 1. importing AgGridReact component

```js
import { AgGridReact } from 'ag-grid-react';
<div className='ag-theme-alpine' style={{ height: '500px', width: '100vw' }}>
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
</div>;
```

# 2. importing scc files

```css
@import 'ag-grid-community/dist/styles/ag-grid.css';
@import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
```

// 2. rowData
// 3. columnDefs -> field
// 4. url = `https://www.ag-grid.com/example-assets/row-data.json`;
// 5.
