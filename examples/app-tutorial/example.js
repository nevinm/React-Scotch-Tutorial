/**
 * @jsx React.DOM
 */
var ExampleApplication = React.createClass({
    render: function() {
        var elapsed = Math.round(this.props.elapsed / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
        var message =
            'React has been successfully running for ' + seconds + ' seconds.';

        return <p > { message } < /p>;
    }
});

var start = new Date().getTime();

setInterval(function() {
    React.renderComponent( < ExampleApplication elapsed = { new Date().getTime() - start }/>,
        document.getElementById('container')
    );
}, 50);

//HTML Component
var myDivElement = < div className = "foo" > TEST < /div>;
React.renderComponent(myDivElement, document.getElementById('example'));

//React Component
var MyComponent = React.createClass({
    render: function() {
        var PresidentialCandidates = < div > {this.props.name}
        <a href="#" onClick = {this.showNotification}>Click me </a>
        < /div>;
        return PresidentialCandidates;
    },
    showNotification: function(){
        var Notification = this.props.children;
        var Name = this.props.name;
        alert(Name + " " + Notification)
    }
});

React.renderComponent( <div>
    <MyComponent name = "Trump"> is bad </MyComponent>
    <MyComponent name = "Hilary">is worse </MyComponent>
    </div>,
    document.getElementById('example'));
