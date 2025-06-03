import React from 'react';
import { Container, InnerCircle, Label, OuterCircle, RadioButton } from './styles';

interface Option {
  label: string;
  value: 'sent' | 'received' | 'all';
}

interface RadioGroupProps {
  options: Option[];
  selectedValue: string;
  onSelect: (value: 'sent' | 'received' | 'all') => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, selectedValue, onSelect }) => {
  return (
    <Container>
      {options.map((option) => (
        <RadioButton key={option.value} onPress={() => onSelect(option.value)} activeOpacity={0.8}>
          <OuterCircle selected={selectedValue === option.value}>
            {selectedValue === option.value && <InnerCircle />}
          </OuterCircle>
          <Label>{option.label}</Label>
        </RadioButton>
      ))}
    </Container>
  );
};

export default RadioGroup;
