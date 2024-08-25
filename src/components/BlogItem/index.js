import React,{Component} from 'react'

import Header from '../Header'
import './index.css'

class BlogItem extends Component {
    state = {id:'', title:'', description:'', postedOn:''}

    componentDidMount() {
        this.getBlogItemDetails();
    }

    getBlogItemDetails = async () => {
        const {id} = this.props
        const apiUrl = `http://localhost:3001/blogs/${id}`

        const options = {
            method: 'GET'
        };
        const response = await fetch(apiUrl, options)
        if(response.ok) {
            const data = await response.json()
            console.log(data)
            const date = new Date(data.posted)
            const year = date.getFullYear();
            const month =  date.getMonth() + 1;
            const day = date.getDate();
            this.setState({id:data.id,
                title:data.title,
                description:data.description,
                postedOn: `${day}-${month}-${year}`
            })
          
        }
    }


    render() {
        const {id, title, description, postedOn} = this.state

        return (
            <div>
                <Header/>
                <div className='main-container'>
                    <div className='blog-card'>
                        <div className='blog-details-container'>
                            <p className='blog-no'>Blog No: {id}</p>
                            <p className='blog-date'>Posted on: {postedOn}</p>
                        </div>
                        <h1 className='blog-title'>{title}</h1>
                        <p className='blog-description'>{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogItem