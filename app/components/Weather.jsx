var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var OpenWeatherMap = require('../api/OpenWeatherMap');

var Weather = React.createClass({

    getInitialState:function () {

        return({
           // location:'Delhi',
           //  temp:23
            isLoading: false
        });
    },

    handleSearch:function (location) {

        var that = this;
        this.setState({isLoading:true});
        OpenWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location:location,
                temp:temp,
                isLoading:false
            });
        },function (errMessage) {
            that.setState({isLoading:false});
            alert('City Not Found');
        });

        // this.setState({
        //     location:location,
        //     temp:23
        // });
    },
   render:function () {

        var {isLoading,location,temp} = this.state;
        
        function renderMessage() {
             if(isLoading){
                 return <h3>Fetching Weather...</h3>
             }else if(temp && location){
               return  <WeatherMessage temp = {temp} location = {location}/>;

             }
        }

    return(
        <div>
            <h2>Weather Component</h2>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
        </div>
    );
   }
});

module.exports = Weather;