import React,{Component} from 'react';
import "./page-wrapper.scss";
import Header from "../Header/Header.js";
class PageWrapper extends Component{
    render(){
        return(
            <div className="page-wrapper">
                <Header />
                <div className={`page-body`}>                    
                    <div className="page-view">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default PageWrapper; 