var React = require('react');
//
// var WeatherMessage = React.createClass({
//
//     render:function () {
//         var {location,temp} = this.props;
//             return(
//             <h2>it is {temp} in {location}</h2>
//         );
//     }
// });

//Stateless Functional Component

var WeatherMessage = (props)=>{
    var {location,temp} = props;
    return(
        <h2>it is {temp} in {location}</h2>
    );
};
module.exports = WeatherMessage;