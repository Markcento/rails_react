import React from 'react';
import ReactDOM from 'react-dom';
import SimpleSchema from 'simpl-schema';



export default new SimpleSchema({
    city: {
        type: String,
        max: 50
    },

    state: String,

    street: {
        type: String,
        max: 100
    },

    zip: {
        type: String,
        regEx: /^[0-9]{5}$/
    }
})
