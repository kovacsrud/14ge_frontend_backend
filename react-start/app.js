const btn=document.createElement('button');
btn.onclick=function(){
    alert('Natív JS Gomb');
}

btn.textContent="JS Gomb";

document.getElementById('js-button-container').appendChild(btn);

//React gomb

const reactgomb=React.createElement(
    'button',
    {
        onClick:function(){
            alert('React gomb');
        }   
    },
    "React button"
); 

const gombok=React.createElement(
    'div',
    {},
    reactgomb,
    reactgomb,
    reactgomb,
    reactgomb
);

ReactDOM.render(gombok,document.getElementById('react-button-container'));