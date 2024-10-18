import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title , description} = this.props
        return (
            <div>
                <div class="card" style={{width: "18rem"}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrytE-p8E8udHcmAhyL3TkXdx6uirlcn1tQ&s" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title"> {title}</h5>
                            <p class="card-text">{description}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}
