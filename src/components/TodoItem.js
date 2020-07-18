import React,{Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/tick.svg';
import checkCompleteImg from '../img/tick-complete.svg';

class TodoItem extends Component {
    render(){

        const {item, onClick}= this.props;
        let url = checkImg;
        if(item.isComplete){
            url= checkCompleteImg;
        }

        return(
            <div  className = { classNames('TodoItem',{'TodoItem-complete': item.isComplete

            })} >
                <img onClick={onClick} src={url} width={30}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
export default TodoItem;