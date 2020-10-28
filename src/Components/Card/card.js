import React from 'react';


class Card extends React.Component {
    render() {
        return (
            <div className="DivSquare">

                <div className="heading">
                    <h4>
                        Based on your last search
                    </h4>

                    <button type="button" data-aut-id className="viewBtn">

                        <span>

                            View more

                        </span>

                    </button>

                </div>


                <div>

                </div>

            </div>
        )
    }
}

export default Card;


