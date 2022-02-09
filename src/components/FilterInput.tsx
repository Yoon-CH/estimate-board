import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  onCheck: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  data: [];
  type: string;
  clear: boolean;
  setClear: Dispatch<SetStateAction<boolean>>;
}

export const FilterInput = ({
  onCheck,
  data,
  clear,
  setClear,
  type,
}: Props) => {
  useEffect(() => {
    if (clear === true) {
      checkedRef.current = false;
    }
  }, [clear]);
  const checkedRef = useRef(false);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setClear(false);
    checkedRef.current = !checkedRef.current;
  };
  return (
    <List>
      <input
        onChange={e => onCheck(e, type)}
        type="checkbox"
        id={`${data}`}
        checked={checkedRef.current}
        onClick={handleClick}
      />
      <label htmlFor={`${data}`}>{data}</label>
    </List>
  );
};

const List = styled.li`
  display: flex;
  margin: 5px 0;
  label {
    flex: 1;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.2;
  }
`;
