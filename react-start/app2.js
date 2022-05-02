function App(){
    return React.createElement(
        'div',
        {},
        "Konténer",
        React.createElement(Box,{szin:"green",szoveg:"Box1"}),
        React.createElement(Box,{szin:"blue",szoveg:"Box2"}),
        React.createElement(Box,{szin:"yellow",szoveg:"Box3"})
    );
}

function Box(props){
    return React.createElement(
        'div',
        {
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:props.szin
            }
        },
        React.createElement('h1',{},props.szoveg)

    );
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('react-button-container')
    );