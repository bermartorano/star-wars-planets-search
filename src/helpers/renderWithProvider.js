import { render } from '@testing-library/react';
import React from 'react';
import FormProvider from '../context/FormProvider';
import PlanetsProvider from '../context/PlanetsProvider';

function renderWithProvider(comp) {
  return { ...render(
    <FormProvider>
      <PlanetsProvider>
        {comp}
      </PlanetsProvider>
    </FormProvider>,
  ) };
}

export default renderWithProvider;
