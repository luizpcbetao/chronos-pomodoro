type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {/* Aqui eu deixo um IF apenas, sem o else */}

      {/* {labelText ? <label htmlFor={id}>{labelText}</label> : ''}  
      Aqui eu deixo o inspecionar com ou sem dados, a partir dos : é if, else */}

      {/* <label htmlFor={id}>{labelText}</label>  
      Essa seria a função inicial*/}

      <input id={id} type={type} {...rest} />
    </>
  );
}
