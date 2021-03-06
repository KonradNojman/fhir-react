import React from 'react';
import { render } from '@testing-library/react';
import Condition from './Condition';

import exampleCondition from '../../../fixtures/dstu2/resources/condition/example.json';
import exampleConditionSeverity from '../../../fixtures/dstu2/resources/condition/example-severity.json';

import exampleConditionSTU3 from '../../../fixtures/stu3/resources/condition/example.json';
import exampleConditionSeveritySTU3 from '../../../fixtures/stu3/resources/condition/example-severity.json';

describe('should render component correctly', () => {
  it('DSTU2 - without severity field', () => {
    const defaultProps = {
      fhirResource: exampleCondition,
    };
    const { getByTestId } = render(<Condition {...defaultProps} />);

    expect(getByTestId('clinicalStatus').textContent).toEqual('active');
    expect(getByTestId('severity').textContent).toEqual('');
  });

  test('DSTU2 - with severity field', () => {
    const defaultProps = {
      fhirResource: exampleConditionSeverity,
    };
    const { getByTestId } = render(<Condition {...defaultProps} />);

    expect(getByTestId('clinicalStatus').textContent).toEqual('active');
    expect(getByTestId('severity').textContent).toEqual(', Medium severity');
    expect(getByTestId('onsetDate').textContent).toEqual(
      'Onset Date: 2015-08-24',
    );
    expect(getByTestId('asserter').textContent).toEqual(
      'Asserted by: MOORE, NICK Practitioner/f8fedcd9e6e565a21f457909',
    );
  });

  it('STU3 - without severity field', () => {
    const defaultProps = {
      fhirResource: exampleConditionSTU3,
    };
    const { getByTestId } = render(<Condition {...defaultProps} />);

    expect(getByTestId('clinicalStatus').textContent).toEqual('active');
    expect(getByTestId('severity').textContent).toEqual('');
  });

  it('STU3 - with severity field', () => {
    const defaultProps = {
      fhirResource: exampleConditionSeveritySTU3,
    };
    const { getByTestId } = render(<Condition {...defaultProps} />);

    expect(getByTestId('clinicalStatus').textContent).toEqual('active');
    expect(getByTestId('severity').textContent).toEqual(
      ', Moderate to severe severity',
    );
    expect(getByTestId('onsetDate').textContent).toEqual(
      'Onset Date: 2013-03-08',
    );
    expect(getByTestId('asserter').textContent).toEqual(
      'Asserted by: Practitioner/f201',
    );
  });
});
