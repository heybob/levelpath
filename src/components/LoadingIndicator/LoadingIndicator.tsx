import './LoadingIndicator.css'
import {Text} from '../../shared/constants';

export function LoadingIndicator() {
    return (
        <div className='loading-bkg'>
            <div className='loading-content'>{Text.loadingData}</div>
        </div>
        );
}