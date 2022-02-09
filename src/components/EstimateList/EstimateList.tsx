import styled from 'styled-components';
import { Estimate } from 'types/card';
import { EstimateItem } from './';
import { COLOR, DEVICE } from 'constants/';
import { Category } from 'types/category';
import { useMemo } from 'react';
import { getFilter } from 'utils/getFilter';

interface EstimateProps {
  apiData: Estimate[];
  isChecked: boolean;
  categories: Category;
}

export const EstimateList = ({
  apiData,
  isChecked,
  categories,
}: EstimateProps) => {
  const newApiData = useMemo(() => {
    return getFilter(apiData, categories);
  }, [apiData, categories]);

  return (
    <EstimateListContainer>
      {!newApiData.length && (
        <NoEstimate>조건에 맞는 견적 요청이 없습니다.</NoEstimate>
      )}
      {newApiData.map(item => (
        <EstimateItem item={item} key={item.id} isChecked={isChecked} />
      ))}
    </EstimateListContainer>
  );
};

const EstimateListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  position: relative;
  @media ${DEVICE.MEDIUM} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${DEVICE.SMALL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoEstimate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #c2c2c2;
  color: ${COLOR.GRAY};
`;
