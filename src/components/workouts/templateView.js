import TemplateItem from './templateItem';
import '../../styles/TemplateView.css';


function TemplateView(){
    return (
        <div id='template-section'>
            <p><strong>My Templates</strong></p>
            <ul className='template-grid'>
                <li><TemplateItem/></li>
                <li><TemplateItem/></li>
                <li><TemplateItem/></li>
                <li><TemplateItem/></li>
            </ul>
            <p><strong>Example Templates</strong></p>
            <ul className='template-grid'>
                <li><TemplateItem/></li>
                <li><TemplateItem/></li>
                <li><TemplateItem/></li>
                <li><TemplateItem/></li>
            </ul>
        </div>
    )
}

export default TemplateView;