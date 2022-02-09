import React, { useEffect, useState } from 'react';
import { EstimateList } from 'components/EstimateList';
import { Estimate } from 'types/card';
import { Toggle } from 'components/Toggle';
import { COLOR, DEVICE } from 'constants/';
import styled from 'styled-components';
import { Filter } from 'components/Filter';
import { Category } from 'types/category';

export const MainPage = () => {
  const [apiData, setApiData] = useState<Estimate[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [categories, setCategories] = useState<Category>({
    method: [],
    material: [],
  });

  useEffect(() => {
    (async function fetchData() {
      const data = await (await fetch('/requests')).json();
      setApiData(data);
    })();
  }, []);

  return (
    <PageContainer>
      <MainHeader>
        <h2>들어온 요청</h2>
        <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      </MainHeader>
      <OptionContainer>
        <Filter apiData={apiData} setCategories={setCategories} />
        <Toggle isChecked={isChecked} setIsChecked={setIsChecked} />
      </OptionContainer>
      <EstimateList
        apiData={apiData}
        isChecked={isChecked}
        categories={categories}
      />
    </PageContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  @media ${DEVICE.SMALL} {
    flex-direction: column;
    align-items: flex-start;
    & > ul:first-child {
      margin-bottom: 20px;
    }
  }
`;

const PageContainer = styled.main`
  max-width: 1130px;
  margin: 0 auto;
  padding: 40px 15px;
`;

const MainHeader = styled.div`
  padding-left: 2px;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    color: ${COLOR.GRAY};
  }
`;
