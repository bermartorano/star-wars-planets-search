import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FormProvider from './context/FormProvider';
import PlanetsProvider from './context/PlanetsProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PlanetsProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </PlanetsProvider>,
  );
