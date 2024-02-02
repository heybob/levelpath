import { useEffect, useContext, useCallback } from 'react';
import './App.css';
import { loadWikiInProgress, loadWikiFailure, loadWikiSuccess, pageChange, setTodaysDate } from './actions';
import { getWikiData } from '../../shared/api';
import { WikiContext } from '../../contexts/WikiContext';
import {WikiResponse } from '../../shared/types';
import { processWikiBirthsData } from '../../shared/utilities';
import { Header } from '../Header/Header';
import { Paginator } from '../Paginator/Paginator';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator';
import { ErrorModal } from '../ErrorModal/ErrorModal';
import { ProfileList } from '../ProfileList/ProfileList';
import {Text} from '../../shared/constants';
import { Button } from '../Button/Button';


export function App() {
  const {state, dispatch}  = useContext(WikiContext);
  const {data, paginatedData, isLoading, apiError, pageNum, totalPages, today, pageSize} = state;

  useEffect(()=> {
    dispatch(setTodaysDate(new Date()));
  },[dispatch]);
  
  const getWikiBirthsData = async () => {
    try {
      dispatch(loadWikiInProgress());
      const month = String(today.getMonth() + 1).padStart(2,'0');
      const day = String(today.getDate()).padStart(2,'0');
      const response = await getWikiData(month, day);
      const wikiData: WikiResponse = await response.json();
      const wikiDataTotalPages = Math.ceil(wikiData.births.length / pageSize);
      const profileData = processWikiBirthsData(wikiData, wikiDataTotalPages, pageSize);
      dispatch(loadWikiSuccess({data: profileData, pageNum: pageNum, totalPages: wikiDataTotalPages}));
    } catch(e){
        dispatch(loadWikiFailure(e));
    }
  }

  async function handleClick() {
    getWikiBirthsData();
  }
  
  const handlePageChange = useCallback((pNum: number) => {
    if(pNum !== pageNum){
      dispatch(pageChange(pNum));
    }
  }, [pageNum, dispatch]);

  return (
    <div className="App">
      <div className='header-container'>
      <Header />
      {totalPages ? <Paginator handlePageChange={handlePageChange} /> : null}
      </div>
      {!data[0].length ? <Button name={Text.getDataButton} clickHandler={handleClick} disabled={isLoading} /> : null}
      {isLoading ? <LoadingIndicator /> :  null}
      {apiError ? <ErrorModal /> : null}
      {paginatedData.length ? <ProfileList /> : null}
    </div>
  );
}

export default App;
