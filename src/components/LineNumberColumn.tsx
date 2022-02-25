import { useSelector } from 'react-redux'
import '../style/css/line-number-column.css'

export default function LineNumberColumn() {
    const numberOfLines = useSelector((state: any) => state.numberOfLines)
    
    const lines = () => {
        const arr = [];

        for(let i = 0; i <= numberOfLines; i++)
            arr.push(<p key={i} className='line-number-column--line-number'>{i + 1}</p>);

        return arr;
    }

    return (
    <div className='line-number-column'>
        {
            lines()
        }
    </div>
    )
}
