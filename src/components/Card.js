import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={this.props.data.Poster} alt="Placeholder"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{this.props.data.Title}</p>
                            <p className="subtitle is-6">{this.props.data.Year}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default Card;