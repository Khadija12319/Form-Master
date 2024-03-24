import '../../App.css'
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import Dad from '../Dad/Dad';

const GrandPa = () => {
    return (
        <div className="text-center text-4xl font-bold space-y-3 flex box justify-center">
            <h2 className='text-center'>Grandpa</h2>
            <div className='flex'>
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </div>
        </div>
    );
};

export default GrandPa;