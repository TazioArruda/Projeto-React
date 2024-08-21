import {
    DetailedHTMLProps,
    InputHTMLAttributes,
    LegacyRef,
    ReactElement
  } from 'react';
  import { StyledDiv, StyledIcon, StyledInput, StyledLabel } from './InputStyles';
  
  interface PropsComp extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
    label: string;
    id: string;
    hasError?: boolean;
    icon?: ReactElement;
    onIcon?: () => void;
    ref?: LegacyRef<HTMLInputElement> | undefined | any;
  }
  
  export default function Input({
    label,
    id,
    hasError,
    icon,
    onIcon,
    ...props
  }: PropsComp) {
    const classis = [
      props.value ? 'active' : '',
      hasError && props.value ? 'error' : ''
    ];
  
    return (
      <StyledDiv className={classis.join(' ')}>
        <StyledInput id={id} placeholder="Digite aqui" {...props} />
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
  
        {icon && <StyledIcon onClick={onIcon}>{icon}</StyledIcon>}
      </StyledDiv>
    );
  }
  