import * as reducer from './reducer'
import * as actions from './actions'
import { initialState } from '../../contexts/initalState';

describe('Test Reducers', () => {
    it('Testing Load In Progress', () => {
        let unknownAction = () => ({type: 'UNKNOWN'});
        let expectedToday = new Date();
        expect(reducer.wikiReducer(initialState, actions.loadWikiInProgress())).toEqual({...initialState, isLoading: true});
        expect(reducer.wikiReducer(initialState, actions.loadWikiFailure('error'))).toEqual({...initialState, isLoading: false, apiError:true});
        expect(reducer.wikiReducer(initialState, actions.closeErrorModal())).toEqual({...initialState, isLoading: false, apiError:false});
        expect(reducer.wikiReducer(initialState, actions.pageChange(1))).toEqual(initialState);
        expect(reducer.wikiReducer(initialState, actions.loadWikiSuccess({...initialState, isLoading: true}))).toEqual({...initialState, isLoading: false});
        expect(reducer.wikiReducer(initialState, actions.setTodaysDate(expectedToday))).toEqual({...initialState, today: expectedToday});
        expect(reducer.wikiReducer(initialState, unknownAction())).toEqual(initialState);
    });
});