import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsDaily - HeadLines</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <NewsItem title="title" description=" desp"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="title" description=" desp"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="title" description=" desp" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="title" description=" desp"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="title" description=" desp"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="title" description=" desp"/>
                    </div>
                    
                </div>

            </div>
        )
    }
}
