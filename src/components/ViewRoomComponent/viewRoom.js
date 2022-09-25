import React, { Component } from 'react';
import axios from 'axios';

class GetallCategories extends Component {
    constructor(props) {
        super(props);

        this.state = {

            options: [],
            Code: '',
            Model: '',
            Type: '',
            Name: '',
            categories: []

        };
    }


    componentDidMount() {
        console.log("test")
        axios.get('https://backendserveretcoin.herokuapp.com/rooms/getBEts')
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
                console.log("test1122")
            })
    }

    DeleteReservation(e, ID) {
        const User = {
            id: ID
        }
        axios.post('https://backendserveretcoin.herokuapp.com/rooms/deleteBEt', User)
            .then(response => {
                
                console.log(response.data.data)
                console.log("test11")
            })
        window.location = `/viewRooms`
    }


    UpdateRoom(e, ID) {
        window.location = `/ViewROomByID/${ID}`
    }



    render() {
        return (
            <div className="container">
                <h1>Active Bets</h1>
                {this.state.options.length > 0 && this.state.options.map((item, index) => (

                    <div key={index} className="card mb-3">
                        <div className="p-3" >

                            <h4> Bet Name : {item.BetName}</h4>
                            <h4> Bet Image : {item.ImageURL}</h4>
                            <h4> Event Image : {item.Team1Logo}</h4>

                        </div>
                        <div className="form-group">
                            <input type="submit" onClick={e => this.UpdateRoom(e, item.BetID)} value="Update Bet" className="btn btn-primary" />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <input type="submit" onClick={e => this.DeleteReservation(e, item._id)} value="Delete Bet" className="btn btn-danger" />
                        </div>
                    </div>

                ))}
            </div>
        )
    }
}


export default GetallCategories;