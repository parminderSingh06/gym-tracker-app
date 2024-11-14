import TemplateItem from './templateItem';
import '../../styles/TemplateView.css';


function TemplateView(){
    return (
        <div id='template-section'>
            <ul id='template-grid'>
                <li><TemplateItem/></li>
                <li><TemplateItem/></li>
                <li><TemplateItem/></li>
                <li><TemplateItem/></li>
            </ul>
        </div>
    )
}

export default TemplateView;