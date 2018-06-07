import React from 'react';
import ReactDOM from 'react-dom';

const green = React.createElement('li', {}, 'Green');
const blue = React.createElement('li', {}, 'Blue');
const gray = React.createElement('li', {}, 'Gray');

const bethel = React.createElement('li', {}, 'Bethel Music');
const upper = React.createElement('li', {}, 'UpperRoom Music');
const jg = React.createElement('li', {}, 'Josh Garrels');

const tacos = React.createElement('li', {}, 'Tacos');
const burger = React.createElement('li', {}, 'Burger'); 
const pasta = React.createElement('li', {}, 'Pasta');

const google = React.createElement('li', {}, React.createElement('a', {href: "https://www.google.com"}, 'Google'));
const yahoo = React.createElement('li', {}, React.createElement('a', {href: "https://www.yahoo.com"}, 'Yahoo'));
const bible = React.createElement('li', {}, React.createElement('a', {href: "https://www.biblegateway.com"}, 'Bible Gateway'));




ReactDOM.render(
    React.createElement(
        'h1',
        {},
        'My Favorite Things',
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li', 
                {className: "favoriteColors"},
                'Favorite Colors',
                React.createElement(
                  'ol',
                  {},
                  green,
                  blue,
                  gray, 
                )
            
        
        ),
            React.createElement(
                   'li',
                   {className: "favoriteMusic"},
                  'Favorite Music',
                   React.createElement(
                    'ol',
                    {},
                    bethel,
                    upper,
                    jg,
                   )
                ),
            React.createElement(
                'li',
                {className: "favoriteFood"},
                'Favorite Food',
                React.createElement(
                    'ol',
                    {},
                    tacos,
                    burger,
                    pasta,
                ) 
            ),
            React.createElement(
                'li',
                {className: "favoriteWebsites"},
                'Favorite Websites',
                React.createElement(
                    'ol',
                    {},
                    google,
                    yahoo,
                    bible,

                )
            )
        ) 
        ),
        document.getElementById('root'),
    );  
 

    